import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { guarantee } from "../data/content.js";
import { images } from "../assets/images/index.js";
import BookCallButton from "./BookCallButton.jsx";
import styles from "./Guarantee.module.css";

export default function Guarantee() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          className="section-head centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="eyebrow">{guarantee.kicker}</span>
          <h2>{guarantee.headline}</h2>
        </motion.div>

        <div className={styles.rows}>
          {guarantee.items.map((item, i) => (
            <motion.div
              key={item.slug}
              className={styles.row}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
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

        <motion.p
          className={styles.valueFraming}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {guarantee.valueFraming}
        </motion.p>

        <div className={styles.ctaRow}>
          <BookCallButton className="btn btn-primary">
            {guarantee.cta} <span aria-hidden>→</span>
          </BookCallButton>
        </div>
      </div>
    </section>
  );
}
