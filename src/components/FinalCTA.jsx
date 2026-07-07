import { motion } from "framer-motion";
import { finalCta } from "../data/content.js";
import BookCallButton from "./BookCallButton.jsx";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section id="book-a-call" className={`section ${styles.section}`}>
      <div className={`${styles.blob} ${styles.blobA}`} />
      <div className={`${styles.blob} ${styles.blobB}`} />
      <div className={`container ${styles.inner}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className={styles.headline}>{finalCta.headline}</h2>
          <p className={styles.body}>{finalCta.body}</p>
          <div className={styles.actions}>
            <BookCallButton className={`btn btn-primary ${styles.ctaOnDark}`}>
              {finalCta.primaryCta} <span aria-hidden>→</span>
            </BookCallButton>
            <a href="mailto:hello@foodcostrescue.com" className={styles.secondary}>
              {finalCta.secondaryCta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
