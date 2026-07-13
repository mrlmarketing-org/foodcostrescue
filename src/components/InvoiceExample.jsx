import { motion } from "framer-motion";
import { invoiceExample } from "../data/content.js";
import { images } from "../assets/images/index.js";
import { IconLock } from "./Icons.jsx";
import { useIsMobile } from "../hooks/useIsMobile.js";
import { reveal } from "../lib/motionPresets.js";
import styles from "./InvoiceExample.module.css";

export default function InvoiceExample() {
  const isMobile = useIsMobile();

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <motion.div className="section-head centered" {...reveal(isMobile, { distance: 20 })}>
          <span className="eyebrow">{invoiceExample.kicker}</span>
          <h2>{invoiceExample.headline}</h2>
          <p className={styles.intro}>{invoiceExample.intro}</p>
        </motion.div>

        <motion.div className={styles.window} {...reveal(isMobile, { distance: 30, amount: 0.25 })}>
          <div className={styles.chrome}>
            <div className={styles.dots}>
              <span className={`${styles.dot} ${styles.red}`} />
              <span className={`${styles.dot} ${styles.yellow}`} />
              <span className={`${styles.dot} ${styles.green}`} />
            </div>
            <div className={styles.urlBar}>
              <IconLock size={12} />
              {invoiceExample.windowUrl}
            </div>
          </div>

          <div className={styles.app}>
            <div className={styles.appHead}>
              <div>
                <h3 className={styles.cardTitle}>{invoiceExample.cardTitle}</h3>
                <p className={styles.cardSub}>
                  {invoiceExample.invoiceLabel} · {invoiceExample.cardSub}
                </p>
              </div>
              <span className={styles.flaggedPill}>{invoiceExample.flaggedCount}</span>
            </div>

            {invoiceExample.rows.map((row) => {
              return (
                <div key={row.item} className={styles.row}>
                  <div className={styles.rowMain}>
                    <img src={images[row.image]} alt="" className={styles.thumb} loading="lazy" />
                    <div className={styles.item}>
                      {row.item}
                      <small>{row.detail}</small>
                    </div>
                    <div className={styles.qty}>{row.qty}</div>
                    <div className={styles.was}>
                      <span className={styles.strike}>{row.was}</span>
                      <span className={styles.flagNote}>{row.flag}</span>
                    </div>
                  </div>
                  <div className={styles.rowFix}>
                    <span className={styles.nowLabel}>{row.nowLabel}</span>
                    <span className={styles.now}>{row.now}</span>
                  </div>
                </div>
              );
            })}

            <div className={styles.total}>
              <span className={styles.totalLabel}>{invoiceExample.totalLabel}</span>
              <span className={styles.totalValue}>{invoiceExample.totalValue}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
