import { Resend } from "resend";
import { buildContactEmailHtml } from "./_lib/contactEmailTemplate.js";

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Backs the /contact page form — replaces the old mailto: link, which
// depended on the visitor having a configured email client.
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, email, message } = req.body || {};
  const trimmedName = String(name || "").trim();
  const trimmedEmail = String(email || "").trim();
  const trimmedMessage = String(message || "").trim();

  if (!trimmedName) {
    res.status(400).json({ error: "Name is required" });
    return;
  }
  if (!EMAIL_RE.test(trimmedEmail)) {
    res.status(400).json({ error: "A valid email is required" });
    return;
  }
  if (!trimmedMessage) {
    res.status(400).json({ error: "Message is required" });
    return;
  }

  try {
    // onboarding@resend.dev works without a verified sending domain — swap
    // for a real @supplynegotiator.com address once one is verified in Resend.
    await resend.emails.send({
      from: "supplynegotiator <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL,
      replyTo: trimmedEmail,
      subject: `New contact message from ${trimmedName}`,
      html: buildContactEmailHtml({ name: trimmedName, email: trimmedEmail, message: trimmedMessage }),
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
