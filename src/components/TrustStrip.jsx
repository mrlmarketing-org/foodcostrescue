import { motion } from "framer-motion";
import { trustStrip } from "../data/content.js";
import { IconCoin, IconPartners, IconTrendingUp, IconCheck } from "./Icons.jsx";
import styles from "./TrustStrip.module.css";

const icons = [IconCoin, IconPartners, IconTrendingUp, IconCheck];

export default function TrustStrip() {
  return (
    <div className={styles.wrap}>
      <div className={`container ${styles.row}`}>
        {trustStrip.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={item}
              className={styles.item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className={styles.icon}>
                <Icon size={17} />
              </span>
              <span>{item}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
