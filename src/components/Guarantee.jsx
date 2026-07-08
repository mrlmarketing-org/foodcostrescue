import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { guarantee } from "../data/content.js";
import { images } from "../assets/images/index.js";
import GetStartedButton from "./GetStartedButton.jsx";
import { useIsMobile } from "../hooks/useIsMobile.js";
import { reveal } from "../lib/motionPresets.js";
import styles from "./Guarantee.module.css";

export default function Guarantee() {
  const isMobile = useIsMobile();

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <motion.div className="section-head centered" {...reveal(isMobile, { distance: 20 })}>
          <span className="eyebrow">{guarantee.kicker}</span>
          <h2>{guarantee.headline}</h2>
        </motion.div>

        <div className={styles.rows}>
          {guarantee.items.map((item, i) => (
            <motion.div
              key={item.slug}
              className={styles.row}
              {...reveal(isMobile, { distance: 30, amount: 0.35, delay: i * 0.08 })}
            >
              <div className={styles.art}>
                <img src={images[item.image]} alt={item.title} loading="lazy" />
              </div>
              <div className={styles.copy}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.summary}>{item.summary}</p>
                <Link to={`/guarantee/${item.slug}`} className={styles.link}>
                  {item.linkLabel} <span aria-hidden>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p className={styles.valueFraming} {...reveal(isMobile, { distance: 20, amount: 0.5 })}>
          {guarantee.valueFraming}
        </motion.p>

        <div className={styles.ctaRow}>
          <GetStartedButton className="btn btn-primary">
            {guarantee.cta} <span aria-hidden>→</span>
          </GetStartedButton>
        </div>
      </div>
    </section>
  );
}
