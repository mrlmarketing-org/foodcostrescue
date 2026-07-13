import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aboutUs } from "../data/content.js";
import { images } from "../assets/images/index.js";
import { IconCheck, IconTrendUp, IconContractMismatch, IconPercentFlag, IconReceipt } from "./Icons.jsx";
import { useIsMobile } from "../hooks/useIsMobile.js";
import { reveal } from "../lib/motionPresets.js";
import styles from "./AboutUs.module.css";

const flagIcons = {
  trendUp: IconTrendUp,
  contractMismatch: IconContractMismatch,
  percentFlag: IconPercentFlag,
  receipt: IconReceipt,
};

const flagAccents = ["coral", "mint", "sky", "coral"];

export default function AboutUs() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.art}
          {...reveal(isMobile, { axis: "x", distance: -50, amount: 0.3, duration: 0.7 })}
        >
          <img src={images.about1} alt="Workers unloading crates of fresh produce from a delivery truck" className={styles.img1} />
          <img src={images.about2} alt="Our team reviewing invoice data together" className={styles.img2} />
        </motion.div>

        <motion.div
          className={styles.copy}
          {...reveal(isMobile, { axis: "x", distance: 50, amount: 0.3, duration: 0.7, delay: 0.05 })}
        >
          <span className="eyebrow">{aboutUs.kicker}</span>
          <h2 className={styles.headline}>{aboutUs.headline}</h2>
          <p className={styles.intro}>{aboutUs.intro}</p>
          <p className={styles.p}>{aboutUs.bodyPreview}</p>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={styles.more}
              >
                {aboutUs.bodyMore.map((block) =>
                  typeof block === "string" ? (
                    <p key={block.slice(0, 24)} className={styles.p}>
                      {block}
                    </p>
                  ) : (
                    <p key={block.bold} className={styles.transition}>
                      {block.bold}
                    </p>
                  )
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <button type="button" className={styles.readMore} onClick={() => setOpen((v) => !v)}>
            {open ? "Show less" : "Read more"}
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} aria-hidden>
              ↓
            </motion.span>
          </button>

          <ul className={styles.checklist}>
            {aboutUs.checklist.map((item) => (
              <li key={item}>
                <span className={styles.checkBadge}>
                  <IconCheck size={13} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a href="#how-it-works" className={styles.cta}>
            {aboutUs.cta} <span aria-hidden>→</span>
          </a>
        </motion.div>
      </div>

      <motion.div className={`container ${styles.flagsWrap}`} {...reveal(isMobile, { distance: 20, amount: 0.3 })}>
        <p className={styles.flagsLabel}>What we flag on every invoice</p>
        <div className={styles.flagsGrid}>
          {aboutUs.flags.map((flag, i) => {
            const Icon = flagIcons[flag.icon];
            const accent = flagAccents[i % flagAccents.length];
            return (
              <motion.div
                key={flag.label}
                className={styles.flagCard}
                {...reveal(isMobile, { distance: 16, duration: 0.5, delay: i * 0.07 })}
              >
                <span className={`${styles.flagIcon} ${styles[accent]}`}>
                  <Icon size={20} />
                </span>
                <h3 className={styles.flagTitle}>{flag.label}</h3>
                <p className={styles.flagBody}>{flag.body}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        className={`container ${styles.calloutRow}`}
        {...reveal(isMobile, { axis: "x", distance: -80, amount: 0.4, duration: 0.7 })}
      >
        <div className={styles.callout}>
          <p className={styles.calloutBody}>{aboutUs.callout.body}</p>
        </div>
      </motion.div>
    </section>
  );
}
