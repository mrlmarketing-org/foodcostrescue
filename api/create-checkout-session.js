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
    const session = await stripe.checkout.sessions.create({
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
      success_url: `${siteOrigin}/get-started/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteOrigin}/get-started/cancelled?session_id={CHECKOUT_SESSION_ID}`,
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

    res.status(200).json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
