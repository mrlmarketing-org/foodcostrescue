import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { pricing } from "../data/content.js";
import { useIsMobile } from "../hooks/useIsMobile.js";
import { reveal } from "../lib/motionPresets.js";
import styles from "./Pricing.module.css";

const accents = ["coral", "mint", "sky"];

export default function Pricing() {
  const isMobile = useIsMobile();

  return (
    <section id="pricing" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div className="section-head centered" {...reveal(isMobile, { distance: 20 })}>
          <span className="eyebrow">{pricing.kicker}</span>
          <h2>{pricing.headline}</h2>
          <p className={styles.intro}>
            {pricing.intro.map((part, i) =>
              typeof part === "string" ? (
                <span key={i}>{part}</span>
              ) : (
                <strong key={i}>{part.text}</strong>
              )
            )}
          </p>
        </motion.div>

        <div className={styles.cards}>
          {pricing.rows.map((row, i) => (
            <motion.div
              key={row.label}
              className={`${styles.card} ${styles[accents[i % accents.length]]}`}
              {...reveal(isMobile, { distance: 30, duration: 0.5, delay: i * 0.1 })}
            >
              <span className={styles.badge}>{row.badge}</span>
              <p className={styles.cardLabel}>{row.label}</p>
              <p className={styles.cardSub}>{row.sub}</p>
              <p className={styles.cardValue}>{row.value}</p>
              <p className={styles.cardValueSub}>{row.valueSub}</p>
            </motion.div>
          ))}
        </div>

        <p className={styles.footnote}>{pricing.footnote}</p>

        <div className={styles.detailLinkRow}>
          <Link to="/pricing/how-it-works" className={styles.detailLink}>
            {pricing.detailLinkLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
