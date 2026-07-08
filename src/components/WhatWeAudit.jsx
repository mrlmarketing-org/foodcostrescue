import { motion } from "framer-motion";
import { whatWeAudit } from "../data/content.js";
import { images } from "../assets/images/index.js";
import { useIsMobile } from "../hooks/useIsMobile.js";
import { reveal } from "../lib/motionPresets.js";
import styles from "./WhatWeAudit.module.css";

export default function WhatWeAudit() {
  const isMobile = useIsMobile();

  return (
    <section id="what-we-audit" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div className="section-head centered" {...reveal(isMobile, { distance: 20 })}>
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
                  {...reveal(isMobile, {
                    axis: "x",
                    distance: fromLeft ? -80 : 80,
                    amount: 0.35,
                    duration: 0.7,
                  })}
                >
                  <img src={images[item.image]} alt={item.title} loading="lazy" />
                  <span className={styles.number}>0{i + 1}</span>
                </motion.div>

                <motion.div
                  className={styles.copy}
                  {...reveal(isMobile, {
                    axis: "x",
                    distance: fromLeft ? 80 : -80,
                    amount: 0.35,
                    duration: 0.7,
                    delay: 0.05,
                  })}
                >
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.body}>{item.body}</p>
                </motion.div>
              </div>
            );
          })}
        </div>

        <motion.p className={styles.footnote} {...reveal(isMobile, { distance: 0, amount: 0.6, duration: 0.5 })}>
          {whatWeAudit.footnote}
        </motion.p>
      </div>
    </section>
  );
}
