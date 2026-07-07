import { motion } from "framer-motion";
import { whyUs } from "../data/content.js";
import { IconTarget, IconTrendingUp, IconPartners } from "./Icons.jsx";
import styles from "./WhyUs.module.css";

const iconMap = {
  target: IconTarget,
  trendingUp: IconTrendingUp,
  partners: IconPartners,
};

const accents = ["coral", "mint", "sky"];

export default function WhyUs() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          className={styles.panel}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.head}>
            <span className="eyebrow">{whyUs.kicker}</span>
          </div>

          <div className={styles.grid}>
            {whyUs.pillars.map((pillar, i) => {
              const Icon = iconMap[pillar.icon];
              const accent = accents[i % accents.length];
              return (
                <motion.div
                  key={pillar.title}
                  className={styles.pillar}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <span className={`${styles.icon} ${styles[accent]}`}>
                    <Icon size={26} />
                  </span>
                  <h3 className={styles.title}>{pillar.title}</h3>
                  <p className={styles.body}>{pillar.body}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
