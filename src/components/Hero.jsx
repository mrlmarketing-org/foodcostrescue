import { motion } from "framer-motion";
import { hero } from "../data/content.js";
import { images } from "../assets/images/index.js";
import BookCallButton from "./BookCallButton.jsx";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <img src={images.heroFood} alt="Fresh ingredients laid out for a restaurant kitchen" className={styles.bgPhoto} />
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
