import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aboutUs } from "../data/content.js";
import { images } from "../assets/images/index.js";
import { IconCheck } from "./Icons.jsx";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.art}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img src={images.about1} alt="Workers unloading crates of fresh produce from a delivery truck" className={styles.img1} />
          <img src={images.about2} alt="Our team reviewing invoice data together" className={styles.img2} />
        </motion.div>

        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
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

      <motion.div
        className={`container ${styles.calloutRow}`}
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className={styles.callout}>
          <p className={styles.calloutBody}>{aboutUs.callout.body}</p>
        </div>
      </motion.div>
    </section>
  );
}
