import { stripe, AUDIT_FEE_CENTS } from "./_lib/stripe.js";
import { buildFileMetadata } from "./_lib/metadata.js";

const REQUIRED_FIELDS = [
  "firstName",
  "lastName",
  "businessName",
  "email",
  "phone",
  "distributor",
  "monthlySpend",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { form, files, origin } = req.body || {};

  if (!form || REQUIRED_FIELDS.some((field) => !form[field])) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }
  if (!EMAIL_RE.test(form.email)) {
    res.status(400).json({ error: "Invalid email address" });
    return;
  }

  const siteOrigin = origin || req.headers.origin;
  if (!siteOrigin) {
    res.status(400).json({ error: "Missing origin" });
    return;
  }

  try {
    // Embedded mode: the payment form itself renders inline on our own page
    // (see src/components/EmbeddedCheckout.jsx) instead of redirecting the
    // whole browser to a Stripe-hosted page. Stripe still requires one
    // redirect once the payment actually completes (or needs an extra step
    // like 3D Secure) — that's what return_url is for. There's no separate
    // cancel_url in this mode: backing out before submitting payment never
    // leaves this page at all, so it's just normal in-app navigation.
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded_page",
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Invoice audit fee — supplynegotiator" },
            unit_amount: AUDIT_FEE_CENTS,
          },
          quantity: 1,
        },
      ],
      customer_email: form.email,
      return_url: `${siteOrigin}/get-started/return?session_id={CHECKOUT_SESSION_ID}`,
      metadata: {
        firstName: form.firstName,
        lastName: form.lastName,
        businessName: form.businessName,
        email: form.email,
        phone: form.phone,
        distributor: form.distributor,
        monthlySpend: form.monthlySpend,
        locations: form.locations || "",
        ...buildFileMetadata(files || []),
      },
    });

    res.status(200).json({ clientSecret: session.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
