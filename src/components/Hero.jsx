import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hero } from "../data/content.js";
import { images } from "../assets/images/index.js";
import BookCallButton from "./BookCallButton.jsx";
import styles from "./Hero.module.css";

const SLIDE_MS = 2800;

const slides = [
  { src: images.heroFood, alt: "A plated, ready-to-serve dish" },
  { src: images.heroIngredients, alt: "Raw ingredients ready for prep" },
  { src: images.invoice, alt: "Reviewing a supplier invoice with a calculator" },
  { src: images.surcharges, alt: "A delivery truck en route" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className={styles.hero}>
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={slides[index].src}
          alt={slides[index].alt}
          className={styles.bgPhoto}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className={styles.scrim} />

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className={styles.eyebrow}>{hero.eyebrow}</span>
          <h1 className={styles.headline}>{hero.headline}</h1>
          <p className={styles.subhead}>{hero.subhead}</p>

          <div className={styles.actions}>
            <BookCallButton className="btn btn-primary">
              {hero.primaryCta} <span aria-hidden>→</span>
            </BookCallButton>
            <a href="#how-it-works" className={styles.secondary}>
              {hero.secondaryCta} <span aria-hidden>↓</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
