import { motion } from "framer-motion";
import { finalCta } from "../data/content.js";
import GetStartedButton from "./GetStartedButton.jsx";
import { useIsMobile } from "../hooks/useIsMobile.js";
import { reveal } from "../lib/motionPresets.js";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  const isMobile = useIsMobile();

  return (
    <section id="book-a-call" className={`section ${styles.section}`}>
      <div className={`${styles.blob} ${styles.blobA}`} />
      <div className={`${styles.blob} ${styles.blobB}`} />
      <div className={`container ${styles.inner}`}>
        <motion.div {...reveal(isMobile, { distance: 24 })}>
          <h2 className={styles.headline}>{finalCta.headline}</h2>
          <p className={styles.body}>{finalCta.body}</p>
          <div className={styles.actions}>
            <GetStartedButton className={`btn btn-primary ${styles.ctaOnDark}`}>
              {finalCta.primaryCta} <span aria-hidden>→</span>
            </GetStartedButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
