import { motion } from "framer-motion";
import { pricing } from "../data/content.js";
import styles from "./Pricing.module.css";

const accents = ["gold", "mint", "coral"];

export default function Pricing() {
  return (
    <section id="pricing" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          className="section-head centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="eyebrow">{pricing.kicker}</span>
          <h2>{pricing.headline}</h2>
          <p className={styles.intro}>{pricing.intro}</p>
        </motion.div>

        <div className={styles.cards}>
          {pricing.rows.map((row, i) => (
            <motion.div
              key={row.label}
              className={`${styles.card} ${styles[accents[i % accents.length]]}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className={styles.cardLabel}>{row.label}</p>
              <p className={styles.cardSub}>{row.sub}</p>
              <p className={styles.cardValue}>{row.value}</p>
              <p className={styles.cardValueSub}>{row.valueSub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
