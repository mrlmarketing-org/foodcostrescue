import { motion } from "framer-motion";
import { howItWorks } from "../data/content.js";
import { images } from "../assets/images/index.js";
import { useIsMobile } from "../hooks/useIsMobile.js";
import { reveal } from "../lib/motionPresets.js";
import styles from "./HowItWorks.module.css";

const accents = ["coral", "mint", "sky", "mint", "coral"];

export default function HowItWorks() {
  const isMobile = useIsMobile();

  return (
    <section id="how-it-works" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div className="section-head centered" {...reveal(isMobile, { distance: 20 })}>
          <span className="eyebrow">{howItWorks.kicker}</span>
          <h2>{howItWorks.headline}</h2>
        </motion.div>

        <div className={styles.timeline}>
          {howItWorks.steps.map((step, i) => {
            const accent = accents[i % accents.length];
            return (
              <motion.div
                key={step.title}
                className={styles.step}
                {...reveal(isMobile, { distance: 30, duration: 0.5, delay: i * 0.1 })}
              >
                <div className={`${styles.node} ${styles[accent]}`}>
                  <img src={images[step.image]} alt="" className={styles.photo} loading="lazy" />
                  <span className={styles.step_num}>{i + 1}</span>
                </div>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.body}>{step.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
