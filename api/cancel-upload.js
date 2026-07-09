import { del } from "@vercel/blob";

// Fast-path cleanup for the "explicitly gave up" case — called directly
// with the file URLs already sitting in the browser's memory (no Stripe
// session lookup needed, since one may not even exist yet if the user
// leaves before reaching the payment step). This is a nice-to-have for
// immediate cleanup; api/cron/cleanup-orphaned-uploads.js is the safety net
// that guarantees nothing is ever permanently orphaned regardless of how a
// visitor leaves (closed tab, crash, etc.).
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { fileUrls } = req.body || {};
  if (!Array.isArray(fileUrls) || !fileUrls.length) {
    res.status(200).json({ ok: true, deleted: 0 });
    return;
  }

  try {
    await del(fileUrls);
    res.status(200).json({ ok: true, deleted: fileUrls.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
