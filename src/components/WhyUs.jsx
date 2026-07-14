import { motion } from "framer-motion";
import { whyUs } from "../data/content.js";
import { IconPricingExpertise, IconBenchmarkBars, IconToughCall } from "./Icons.jsx";
import { useIsMobile } from "../hooks/useIsMobile.js";
import { reveal } from "../lib/motionPresets.js";
import styles from "./WhyUs.module.css";

const iconMap = {
  pricingExpertise: IconPricingExpertise,
  benchmarkBars: IconBenchmarkBars,
  toughCall: IconToughCall,
};

const accents = ["coral", "mint", "sky"];

export default function WhyUs() {
  const isMobile = useIsMobile();

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <motion.div className={styles.panel} {...reveal(isMobile, { distance: 30, amount: 0.3 })}>
          <div className={styles.head}>
            <span className="eyebrow">{whyUs.kicker}</span>
            <h2 className={styles.headline}>{whyUs.headline}</h2>
          </div>

          <div className={styles.grid}>
            {whyUs.pillars.map((pillar, i) => {
              const Icon = iconMap[pillar.icon];
              const accent = accents[i % accents.length];
              return (
                <motion.div
                  key={pillar.title}
                  className={styles.pillar}
                  {...reveal(isMobile, { distance: 20, duration: 0.5, delay: i * 0.1 })}
                >
                  <span className={`${styles.icon} ${styles[accent]}`}>
                    <Icon size={38} />
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
