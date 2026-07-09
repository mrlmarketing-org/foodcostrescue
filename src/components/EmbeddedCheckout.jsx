import { useEffect, useId, useState } from "react";
import { getStripe } from "../lib/stripeClient.js";
import styles from "./EmbeddedCheckout.module.css";

// Thin hand-written wrapper around Stripe.js's vanilla embedded-checkout API
// (createEmbeddedCheckoutPage/.mount()/.destroy()) rather than the official
// @stripe/react-stripe-js package — that package's peer deps only go up to
// React 18 as of this writing, and this app is on React 19.

// Module-level: Stripe.js only allows one Embedded Checkout object on the
// page at a time ("You cannot have multiple Embedded Checkout objects").
// Routing every create/destroy through this single chain serializes them so
// React StrictMode's dev-only double-invoke (mount -> cleanup -> mount, all
// async) can't race two create calls against each other — each step waits
// for the previous one to fully settle before the next can start.
let checkoutQueue = Promise.resolve();
function serialize(task) {
  const result = checkoutQueue.then(task, task);
  checkoutQueue = result.catch(() => {});
  return result;
}

export default function EmbeddedCheckout({ fetchClientSecret }) {
  const mountId = `embedded-checkout-${useId().replace(/[:]/g, "")}`;
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    let instance = null;

    serialize(async () => {
      if (cancelled) return;
      try {
        const stripe = await getStripe();
        if (cancelled) return;
        const checkout = await stripe.createEmbeddedCheckoutPage({ fetchClientSecret });
        if (cancelled) {
          checkout.destroy();
          return;
        }
        instance = checkout;
        checkout.mount(`#${mountId}`);
        setStatus("ready");
      } catch (err) {
        if (!cancelled) {
          setStatus("error");
          setError(err.message || "Couldn't load the payment form. Please try again.");
        }
      }
    });

    return () => {
      cancelled = true;
      serialize(async () => {
        if (instance) {
          instance.destroy();
          instance = null;
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchClientSecret, mountId]);

  return (
    <div className={styles.wrap}>
      {status === "loading" && <p className={styles.loading}>Loading payment form…</p>}
      {status === "error" && <p className={styles.error}>{error}</p>}
      <div id={mountId} className={styles.mount} />
    </div>
  );
}
