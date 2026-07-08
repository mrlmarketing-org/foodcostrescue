import { motion } from "framer-motion";
import { trustStrip } from "../data/content.js";
import { images } from "../assets/images/index.js";
import { useIsMobile } from "../hooks/useIsMobile.js";
import { reveal } from "../lib/motionPresets.js";
import styles from "./TrustStrip.module.css";

export default function TrustStrip() {
  const isMobile = useIsMobile();

  return (
    <div className={styles.wrap}>
      <div className={`container ${styles.row}`}>
        {trustStrip.map((item, i) => (
          <motion.div
            key={item.text}
            className={styles.item}
            {...reveal(isMobile, { distance: 16, duration: 0.5, delay: i * 0.08 })}
          >
            <img src={images[item.image]} alt="" className={styles.photo} loading="lazy" />
            <span>{item.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
