import { stripe } from "./_lib/stripe.js";

// Lightweight, side-effect-free status check — called first by the return
// page ("Processing payment…") before finalize-checkout.js does the actual
// work ("Finalizing…"). Kept separate from finalize-checkout so the two-step
// status UI reflects two real backend steps, not a fake delay.
export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const sessionId = req.query.session_id;
  if (!sessionId) {
    res.status(400).json({ error: "Missing session_id" });
    return;
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    res.status(200).json({
      ok: true,
      status: session.status, // "open" | "complete" | "expired"
      paid: session.payment_status === "paid",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
