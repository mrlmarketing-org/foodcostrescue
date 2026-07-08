import styles from "./Toast.module.css";

export default function Toast({ message, tone = "success" }) {
  return (
    <div className={`${styles.toast} ${styles[tone] || ""}`} role="status" aria-live="polite">
      {message}
    </div>
  );
}
