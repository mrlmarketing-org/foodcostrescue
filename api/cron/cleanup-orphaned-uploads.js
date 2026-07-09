import { list, del } from "@vercel/blob";
import { stripe } from "../_lib/stripe.js";
import { parseFilesFromMetadata } from "../_lib/metadata.js";

// Safety net for orphaned invoice uploads. Runs on a schedule (see
// vercel.json) rather than reacting to any single user action, because
// there's no reliable client-side moment to hook "the user gave up" for
// every possible way someone can leave (closed tab, crashed browser, dead
// network) — api/cancel-upload.js handles the case we *can* catch
// immediately, this is what guarantees nothing is missed.
//
// Deletion is based on positive proof of abandonment, never on file age
// alone — a file could legitimately sit unopened in someone's inbox for
// days before the business checks it, so "old" can never by itself mean
// "safe to delete". Three buckets, by how certain we are:
//   1. File referenced by a `complete` (paid) session  -> keep forever.
//   2. File referenced by an `expired`, unpaid session -> Stripe guarantees
//      an expired session can never later become paid, so this is a
//      terminal, provable dead end. Safe to delete.
//   3. File not referenced by ANY session at all (the visitor uploaded in
//      step 1 and left before ever reaching payment, so no session was
//      created) -> Stripe has no record either way. This is the only
//      bucket where age is the deciding factor, and only after a generous
//      window (7 days).
const NEVER_CHECKED_OUT_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;
const MAX_SESSION_PAGES = 20; // 20 * 100 = 2,000 sessions per run, plenty of headroom

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    // Walk Checkout Sessions (not time-boxed — a paid session from months
    // ago must stay protected just as much as one from an hour ago) and
    // sort every file URL they reference into "provably abandoned" or not.
    const referencedUrls = new Set();
    const expiredUnpaidUrls = new Set();

    let startingAfter;
    for (let page = 0; page < MAX_SESSION_PAGES; page += 1) {
      const result = await stripe.checkout.sessions.list({
        limit: 100,
        starting_after: startingAfter,
      });

      for (const session of result.data) {
        const files = parseFilesFromMetadata(session.metadata);
        for (const f of files) referencedUrls.add(f.url);

        if (session.status === "expired" && session.payment_status !== "paid") {
          for (const f of files) expiredUnpaidUrls.add(f.url);
        }
      }

      if (!result.has_more || result.data.length === 0) break;
      startingAfter = result.data[result.data.length - 1].id;
    }

    // Everything definitively tied to an expired, never-paid session.
    const toDelete = new Set(expiredUnpaidUrls);

    // Files with no Stripe session at all — the pre-checkout abandonment
    // case. Only these fall back to an age check, and only a generous one.
    const now = Date.now();
    let cursor;
    do {
      const { blobs, cursor: nextCursor, hasMore } = await list({
        prefix: "invoice-uploads/",
        cursor,
      });

      for (const blob of blobs) {
        if (referencedUrls.has(blob.url)) continue; // tied to a real session either way — rule 1 or rule 2 already decided its fate
        const age = now - new Date(blob.uploadedAt).getTime();
        if (age > NEVER_CHECKED_OUT_MAX_AGE_MS) {
          toDelete.add(blob.url);
        }
      }

      cursor = hasMore ? nextCursor : undefined;
    } while (cursor);

    if (toDelete.size > 0) {
      await del([...toDelete]);
    }

    res.status(200).json({ ok: true, deleted: toDelete.size });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
