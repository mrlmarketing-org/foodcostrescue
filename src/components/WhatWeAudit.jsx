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

        <div className={styles.grid}>
          {whatWeAudit.items.map((item, i) => (
            <motion.div
              key={item.title}
              className={styles.card}
              {...reveal(isMobile, { distance: 18, duration: 0.5, delay: i * 0.07 })}
            >
              <div className={styles.art}>
                <img src={images[item.image]} alt="" loading="lazy" />
                <span className={styles.number}>0{i + 1}</span>
              </div>
              <div className={styles.copy}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.body}>{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p className={styles.footnote} {...reveal(isMobile, { distance: 0, amount: 0.6, duration: 0.5 })}>
          {whatWeAudit.footnote}
        </motion.p>
      </div>
    </section>
  );
}
