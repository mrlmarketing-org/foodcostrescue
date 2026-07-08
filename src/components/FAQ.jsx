import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faq } from "../data/content.js";
import { useIsMobile } from "../hooks/useIsMobile.js";
import { reveal } from "../lib/motionPresets.js";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const isMobile = useIsMobile();

  return (
    <section id="faq" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div className="section-head centered" {...reveal(isMobile, { distance: 20 })}>
          <span className="eyebrow">FAQ</span>
          <h2>Questions restaurant owners ask us.</h2>
        </motion.div>

        <div className={styles.list}>
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.q}
                className={styles.item}
                {...reveal(isMobile, { distance: 16, amount: 0.3, duration: 0.4, delay: Math.min(i, 6) * 0.04 })}
              >
                <button
                  className={styles.question}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className={styles.chevron}>
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={isOpen ? "minus" : "plus"}
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.18 }}
                      >
                        {isOpen ? "−" : "+"}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className={styles.answerWrap}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className={styles.answer}>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
