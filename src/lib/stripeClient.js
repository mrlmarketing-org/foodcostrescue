import { loadStripe } from "@stripe/stripe-js";

// Singleton so we only ever load Stripe.js once per page load, regardless of
// how many times a component mounts it.
let stripePromise;

export function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
}
