import { del } from "@vercel/blob";
import { stripe } from "./_lib/stripe.js";
import { parseFilesFromMetadata } from "./_lib/metadata.js";

// Called by the cancelled page when Stripe redirects back without a
// completed payment. Deletes whatever invoice files were uploaded for that
// attempt so nothing orphaned sits in Blob storage — the user starts fresh.
export default async function handler(req, res) {
  if (req.method !== "GET" && req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const sessionId = req.method === "GET" ? req.query.session_id : req.body?.sessionId;
  if (!sessionId) {
    res.status(400).json({ error: "Missing session_id" });
    return;
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const files = parseFilesFromMetadata(session.metadata);

    if (files.length) {
      await del(files.map((f) => f.url));
    }

    res.status(200).json({ ok: true, deleted: files.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
