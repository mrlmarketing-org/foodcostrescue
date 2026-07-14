import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { aboutUs, invoiceExample } from "../data/content.js";
import { images } from "../assets/images/index.js";
import { IconCheck, IconTrendUp, IconContractMismatch, IconPercentFlag, IconReceipt, IconLock } from "./Icons.jsx";
import { useIsMobile } from "../hooks/useIsMobile.js";
import { useCountUp } from "../hooks/useCountUp.js";
import { reveal } from "../lib/motionPresets.js";
import styles from "./AboutUs.module.css";

const flagIcons = {
  trendUp: IconTrendUp,
  contractMismatch: IconContractMismatch,
  percentFlag: IconPercentFlag,
  receipt: IconReceipt,
};

const flagAccents = ["coral", "mint", "sky", "coral"];

function parseCurrency(str) {
  return parseFloat(str.replace(/[^0-9.-]/g, "")) || 0;
}

function formatCurrency(n) {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Counts a dollar string up from $0 to its target — used for the invoice
// mock's per-row and total figures, replayed each time the card scrolls
// into view (see `windowInView` below).
function CountUpValue({ target, start, duration, skip, className }) {
  const value = useCountUp(target, { start, duration, skip });
  return <span className={className}>{formatCurrency(value)}</span>;
}

export default function AboutUs() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const windowRef = useRef(null);
  const windowInView = useInView(windowRef, { once: false, amount: 0.4 });

  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.art}
          {...reveal(isMobile, { axis: "x", distance: -50, amount: 0.3, duration: 0.7 })}
        >
          <div className={styles.window} ref={windowRef}>
            <div className={styles.chrome}>
              <div className={styles.dots}>
                <span className={`${styles.dot} ${styles.red}`} />
                <span className={`${styles.dot} ${styles.yellow}`} />
                <span className={`${styles.dot} ${styles.green}`} />
              </div>
              <div className={styles.urlBar}>
                <IconLock size={11} />
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

              {invoiceExample.rows.map((row) => (
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
                    <CountUpValue
                      className={styles.now}
                      target={parseCurrency(row.now)}
                      start={windowInView}
                      duration={1100}
                      skip={prefersReducedMotion}
                    />
                  </div>
                </div>
              ))}

              <div className={styles.total}>
                <span className={styles.totalLabel}>{invoiceExample.totalLabel}</span>
                <CountUpValue
                  className={styles.totalValue}
                  target={parseCurrency(invoiceExample.totalValue)}
                  start={windowInView}
                  duration={1700}
                  skip={prefersReducedMotion}
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.copy}
          {...reveal(isMobile, { axis: "x", distance: 50, amount: 0.3, duration: 0.7, delay: 0.05 })}
        >
          <span className="eyebrow">{aboutUs.kicker}</span>
          <h2 className={styles.headline}>{aboutUs.headline}</h2>
          <p className={styles.intro}>{aboutUs.intro}</p>
          <p className={styles.p}>{aboutUs.bodyPreview}</p>
          <p className={styles.pStrong}>{aboutUs.bodyEmphasis}</p>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={styles.more}
              >
                {aboutUs.bodyMore.map((block) =>
                  typeof block === "string" ? (
                    <p key={block.slice(0, 24)} className={styles.p}>
                      {block}
                    </p>
                  ) : (
                    <p key={block.bold} className={styles.transition}>
                      {block.bold}
                    </p>
                  )
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <button type="button" className={styles.readMore} onClick={() => setOpen((v) => !v)}>
            {open ? "Show less" : "Read more"}
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} aria-hidden>
              ↓
            </motion.span>
          </button>

          <ul className={styles.checklist}>
            {aboutUs.checklist.map((item) => (
              <li key={item}>
                <span className={styles.checkBadge}>
                  <IconCheck size={13} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a href="#how-it-works" className={styles.cta}>
            {aboutUs.cta} <span aria-hidden>→</span>
          </a>
        </motion.div>
      </div>

      <motion.div className={`container ${styles.flagsWrap}`} {...reveal(isMobile, { distance: 20, amount: 0.3 })}>
        <div className={styles.flagsHead}>
          <span className="eyebrow">{aboutUs.flagsKicker}</span>
          <h3 className={styles.flagsLabel}>{aboutUs.flagsLabel}</h3>
        </div>
        <div className={styles.flagsGrid}>
          {aboutUs.flags.map((flag, i) => {
            const Icon = flagIcons[flag.icon];
            const accent = flagAccents[i % flagAccents.length];
            return (
              <motion.div
                key={flag.label}
                className={styles.flagCard}
                {...reveal(isMobile, { distance: 16, duration: 0.5, delay: i * 0.07 })}
              >
                <span className={`${styles.flagIcon} ${styles[accent]}`}>
                  <Icon size={20} />
                </span>
                <h3 className={styles.flagTitle}>{flag.label}</h3>
                <p className={styles.flagBody}>{flag.body}</p>
                <div className={styles.flagExample}>
                  <p className={styles.flagExampleCaption}>{flag.example.caption}</p>
                  <div className={styles.flagExampleRow}>
                    <span className={styles.flagExampleDetail}>{flag.example.detail}</span>
                    <span className={styles.flagExampleAmount}>{flag.example.amount}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        className={`container ${styles.calloutRow}`}
        {...reveal(isMobile, { axis: "x", distance: -80, amount: 0.4, duration: 0.7 })}
      >
        <div className={styles.callout}>
          <p className={styles.calloutBody}>
            {aboutUs.callout.body.map((part, i) =>
              typeof part === "string" ? (
                <span key={i}>{part}</span>
              ) : (
                <span key={i} className={styles.accent}>
                  {part.text}
                </span>
              )
            )}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
