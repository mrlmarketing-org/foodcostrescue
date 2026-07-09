import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Toast from "../components/Toast.jsx";
import { contact } from "../data/content.js";
import styles from "./GetStartedResultPage.module.css";

// Embedded Checkout's one unavoidable redirect — Stripe sends the browser
// here once payment either completes or needs a step (like 3D Secure) that
// can't happen inside the iframe. Two-phase status matches two real network
// calls: verify-payment.js just checks status (no side effects), then
// finalize-checkout.js is what actually sends the notification email — so
// "Processing payment…" and "Finalizing…" both mean something real.
export default function GetStartedReturnPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get("session_id");

  const [status, setStatus] = useState(sessionId ? "processing" : "error");
  const [error, setError] = useState(sessionId ? null : "Missing payment confirmation.");
  const [showToast, setShowToast] = useState(false);
  const calledRef = useRef(false);

  useEffect(() => {
    if (!sessionId || calledRef.current) return;
    calledRef.current = true;

    (async () => {
      try {
        const verifyRes = await fetch(`/api/verify-payment?session_id=${encodeURIComponent(sessionId)}`);
        const verifyData = await verifyRes.json().catch(() => ({}));
        if (!verifyRes.ok) throw new Error(verifyData.error || "We couldn't confirm your payment.");

        if (verifyData.status !== "complete") {
          // Per Stripe's own guidance for embedded checkout: a non-complete
          // status here means payment didn't go through (declined, 3D
          // Secure abandoned, etc.) — no charge was made. Send them back to
          // try again rather than treating it as a hard error.
          setStatus("incomplete");
          return;
        }

        setStatus("finalizing");
        const finalizeRes = await fetch(`/api/finalize-checkout?session_id=${encodeURIComponent(sessionId)}`);
        const finalizeData = await finalizeRes.json().catch(() => ({}));
        if (!finalizeRes.ok) {
          throw new Error(
            finalizeData.error || "Payment succeeded, but we hit a snag finalizing your request."
          );
        }

        setStatus("success");
        setShowToast(true);
      } catch (err) {
        setStatus("error");
        setError(err.message);
      }
    })();
  }, [sessionId]);

  useEffect(() => {
    if (status !== "success") return undefined;
    const timer = setTimeout(() => navigate("/"), 4000);
    return () => clearTimeout(timer);
  }, [status, navigate]);

  return (
    <>
      <Seo
        title="Payment confirmed"
        description="Your audit request has been submitted."
        path="/get-started/return"
      />

      <article className={`section ${styles.section}`}>
        <div className={`container ${styles.container}`}>
          {status === "processing" && (
            <>
              <h1 className={styles.title}>Processing payment…</h1>
              <p className={styles.body}>Hang tight, this only takes a moment.</p>
            </>
          )}

          {status === "finalizing" && (
            <>
              <h1 className={styles.title}>Finalizing…</h1>
              <p className={styles.body}>
                Payment confirmed — we&apos;re sending your request to our team now.
              </p>
            </>
          )}

          {status === "success" && (
            <>
              <h1 className={styles.title}>You&apos;re all set.</h1>
              <p className={styles.body}>
                Thanks — your payment went through and your audit request is on its way to our
                team. We&apos;ll be in touch shortly. Redirecting you back to the homepage…
              </p>
              <Link to="/" className="btn btn-primary">
                Return to homepage <span aria-hidden>→</span>
              </Link>
            </>
          )}

          {status === "incomplete" && (
            <>
              <h1 className={styles.title}>Payment wasn&apos;t completed</h1>
              <p className={styles.body}>
                We didn&apos;t receive a completed payment for that session, so no charge was
                made. You can pick up right where you left off.
              </p>
              <Link to="/get-started" className="btn btn-primary">
                Try again <span aria-hidden>→</span>
              </Link>
            </>
          )}

          {status === "error" && (
            <>
              <h1 className={styles.title}>We couldn&apos;t confirm your payment</h1>
              <p className={styles.body}>
                {error} If you were charged, contact us at{" "}
                <a href={`mailto:${contact.email}`} className={styles.inlineLink}>
                  {contact.email}
                </a>{" "}
                and we&apos;ll sort it out.
              </p>
              <Link to="/get-started" className="btn btn-primary">
                Start again <span aria-hidden>→</span>
              </Link>
            </>
          )}
        </div>
      </article>

      {showToast && <Toast message="Payment confirmed — thank you!" tone="success" />}
    </>
  );
}
