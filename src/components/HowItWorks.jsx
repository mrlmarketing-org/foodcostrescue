import { motion } from "framer-motion";
import { howItWorks } from "../data/content.js";
import { IconSend, IconSearch, IconChart, IconPhone, IconShield } from "./Icons.jsx";
import styles from "./HowItWorks.module.css";

const iconMap = {
  send: IconSend,
  search: IconSearch,
  chart: IconChart,
  phone: IconPhone,
  shield: IconShield,
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          className="section-head centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="eyebrow">{howItWorks.kicker}</span>
          <h2>{howItWorks.headline}</h2>
        </motion.div>

        <div className={styles.timeline}>
          {howItWorks.steps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.title}
                className={styles.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={styles.node}>
                  <Icon size={24} className={styles.icon} />
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
