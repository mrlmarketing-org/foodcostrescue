import { useEffect, useRef, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import styles from "./GetStartedResultPage.module.css";

// Lands here when the user cancels out of Stripe Checkout. Cleans up any
// invoice files uploaded for that attempt via /api/cancel-checkout, since
// the payment never completed.
export default function GetStartedCancelledPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState(sessionId ? "cleaning" : "done");
  const calledRef = useRef(false);

  useEffect(() => {
    if (!sessionId || calledRef.current) return;
    calledRef.current = true;

    fetch(`/api/cancel-checkout?session_id=${encodeURIComponent(sessionId)}`)
      .catch(() => {})
      .finally(() => setStatus("done"));
  }, [sessionId]);

  return (
    <>
      <Seo
        title="Payment cancelled"
        description="Your payment was cancelled — no charge was made."
        path="/get-started/cancelled"
      />

      <article className={`section ${styles.section}`}>
        <div className={`container ${styles.container}`}>
          <h1 className={styles.title}>Payment cancelled</h1>
          <p className={styles.body}>
            {status === "cleaning"
              ? "Cleaning up your uploaded files…"
              : "No charge was made, and any files you uploaded have been removed. You can start again whenever you're ready."}
          </p>
          <Link to="/get-started" className="btn btn-primary">
            Start again <span aria-hidden>→</span>
          </Link>
        </div>
      </article>
    </>
  );
}
