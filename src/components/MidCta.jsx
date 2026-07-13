import { motion } from "framer-motion";
import { midCta } from "../data/content.js";
import GetStartedButton from "./GetStartedButton.jsx";
import { useIsMobile } from "../hooks/useIsMobile.js";
import { reveal } from "../lib/motionPresets.js";
import styles from "./MidCta.module.css";

export default function MidCta() {
  const isMobile = useIsMobile();

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <motion.div {...reveal(isMobile, { distance: 18 })}>
          <span className="eyebrow">{midCta.kicker}</span>
          <h2 className={styles.headline}>{midCta.headline}</h2>
          <div className={styles.actions}>
            <GetStartedButton className="btn btn-primary">
              {midCta.cta} <span aria-hidden>→</span>
            </GetStartedButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
