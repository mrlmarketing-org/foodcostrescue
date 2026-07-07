import { motion } from "framer-motion";
import { whatWeAudit } from "../data/content.js";
import { images } from "../assets/images/index.js";
import styles from "./WhatWeAudit.module.css";

export default function WhatWeAudit() {
  return (
    <section id="what-we-audit" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          className="section-head centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="eyebrow">{whatWeAudit.kicker}</span>
          <h2>{whatWeAudit.headline}</h2>
        </motion.div>

        <div className={styles.rows}>
          {whatWeAudit.items.map((item, i) => {
            const fromLeft = i % 2 === 0;
            return (
              <div key={item.title} className={`${styles.row} ${fromLeft ? "" : styles.reverse}`}>
                <motion.div
                  className={styles.art}
                  initial={{ opacity: 0, x: fromLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <img src={images[item.image]} alt={item.title} loading="lazy" />
                  <span className={styles.number}>0{i + 1}</span>
                </motion.div>

                <motion.div
                  className={styles.copy}
                  initial={{ opacity: 0, x: fromLeft ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                >
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.body}>{item.body}</p>
                </motion.div>
              </div>
            );
          })}
        </div>

        <motion.p
          className={styles.footnote}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          {whatWeAudit.footnote}
        </motion.p>
      </div>
    </section>
  );
}
