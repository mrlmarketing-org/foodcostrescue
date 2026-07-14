import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { howItWorks } from "../data/content.js";
import { images } from "../assets/images/index.js";
import { useIsMobile } from "../hooks/useIsMobile.js";
import { reveal } from "../lib/motionPresets.js";
import styles from "./HowItWorks.module.css";

const accents = ["coral", "mint", "sky", "mint", "coral"];

export default function HowItWorks() {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const stepperRef = useRef(null);
  // Single shared trigger (not once) so the line draw + node pop-in sequence
  // replays every time the section scrolls into view, instead of looping
  // forever in the background.
  const inView = useInView(stepperRef, { once: false, amount: 0.5 });
  const played = prefersReducedMotion || inView;

  return (
    <section id="how-it-works" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div className="section-head centered" {...reveal(isMobile, { distance: 20 })}>
          <span className="eyebrow">{howItWorks.kicker}</span>
          <h2>{howItWorks.headline}</h2>
        </motion.div>

        <div className={styles.stepper} ref={stepperRef}>
          <div className={styles.lineTrack} />
          <motion.div
            className={styles.lineFill}
            initial={false}
            animate={{ scaleX: played ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          <div className={styles.grid}>
            {howItWorks.steps.map((step, i) => {
              const accent = accents[i % accents.length];
              return (
                <div key={step.title} className={styles.step}>
                  <div className={styles.nodeWrap}>
                    <motion.div
                      className={`${styles.node} ${styles[accent]}`}
                      initial={false}
                      animate={played ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 20,
                        delay: played ? 0.25 + i * 0.16 : 0,
                      }}
                    >
                      <img src={images[step.image]} alt="" className={styles.photo} loading="lazy" />
                    </motion.div>
                    <span className={styles.stepNum}>{i + 1}</span>
                  </div>
                  <p className={styles.title}>{step.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
