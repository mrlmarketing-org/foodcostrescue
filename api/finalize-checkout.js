import { Resend } from "resend";
import { stripe } from "./_lib/stripe.js";
import { parseFilesFromMetadata } from "./_lib/metadata.js";
import { buildAuditEmailHtml } from "./_lib/emailTemplate.js";

const resend = new Resend(process.env.RESEND_API_KEY);

// Called by the success page once Stripe redirects back. Re-fetches the
// session from Stripe (source of truth for payment_status) rather than
// trusting anything the client claims, then sends the notification email —
// this is the only point in the flow where the email actually goes out.
//
// Known limitation: there's no database to record "already processed", so a
// page refresh on /get-started/success will re-send the email. Acceptable
// for now; a persistence layer would be the fix if that becomes a problem.
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

    if (session.payment_status !== "paid") {
      res.status(402).json({ error: "Payment not completed" });
      return;
    }

    const m = session.metadata || {};
    const form = {
      firstName: m.firstName,
      lastName: m.lastName,
      businessName: m.businessName,
      email: m.email,
      phone: m.phone,
      distributor: m.distributor,
      monthlySpend: m.monthlySpend,
      locations: m.locations,
    };
    const files = parseFilesFromMetadata(m);

    // onboarding@resend.dev works without a verified sending domain — swap
    // for a real @supplynegotiator.com address once one is verified in Resend.
    await resend.emails.send({
      from: "supplynegotiator <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL,
      replyTo: form.email,
      subject: `New paid audit request — ${form.businessName}`,
      html: buildAuditEmailHtml({ form, files }),
    });

    res.status(200).json({ ok: true, businessName: form.businessName });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
