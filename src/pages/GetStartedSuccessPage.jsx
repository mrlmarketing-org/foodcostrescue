import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Toast from "../components/Toast.jsx";
import { contact } from "../data/content.js";
import styles from "./GetStartedResultPage.module.css";

// Lands here after Stripe redirects back from a successful checkout.
// Payment isn't trusted until /api/finalize-checkout re-confirms it against
// Stripe directly — that same call is what triggers the notification email.
export default function GetStartedSuccessPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get("session_id");

  const [status, setStatus] = useState(sessionId ? "confirming" : "error");
  const [error, setError] = useState(sessionId ? null : "Missing payment confirmation.");
  const [showToast, setShowToast] = useState(false);
  const calledRef = useRef(false);

  useEffect(() => {
    if (!sessionId || calledRef.current) return;
    calledRef.current = true;

    fetch(`/api/finalize-checkout?session_id=${encodeURIComponent(sessionId)}`)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "We couldn't confirm your payment.");
        setStatus("success");
        setShowToast(true);
      })
      .catch((err) => {
        setStatus("error");
        setError(err.message);
      });
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
        path="/get-started/success"
      />

      <article className={`section ${styles.section}`}>
        <div className={`container ${styles.container}`}>
          {status === "confirming" && (
            <>
              <h1 className={styles.title}>Confirming your payment…</h1>
              <p className={styles.body}>Hang tight, this only takes a moment.</p>
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
