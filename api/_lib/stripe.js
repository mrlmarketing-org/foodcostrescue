import Stripe from "stripe";

// Dummy key in .env until the real Stripe secret key is wired in — see .env.example.
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Flat one-time audit fee — must match the "$150" row in src/data/content.js pricing.rows.
export const AUDIT_FEE_CENTS = 15000;
