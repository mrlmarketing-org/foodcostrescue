import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import styles from "./GuaranteeArt.module.css";

// One custom illustration per guarantee, each tied to its own card's text
// (volatile bars + a lock for "market swings," a flagged report + a seal
// for "yours to keep," a ring closing around the fee for "full refund").
// Plays once per scroll-into-view, replaying on re-entry — no infinite
// ambient loop, matching the rest of the site's motion convention.
export default function GuaranteeArt({ variant }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: false, amount: 0.6 });
  const play = Boolean(reduce || inView);

  return (
    <div className={styles.art} ref={ref}>
      <svg viewBox="0 0 150 110" className={styles.svg} aria-hidden="true">
        {variant === "savings" && <SavingsMarks play={play} />}
        {variant === "keep" && <KeepMarks play={play} />}
        {variant === "refund" && <RefundMarks play={play} />}
      </svg>
    </div>
  );
}

const barHeights = [30, 46, 22, 38];
const barX = [16, 34, 52, 70];

function SavingsMarks({ play }) {
  return (
    <>
      {barHeights.map((h, i) => (
        <motion.rect
          key={i}
          x={barX[i]}
          y={92 - h}
          width="12"
          height={h}
          rx="3"
          fill="var(--ink-faint)"
          style={{ transformOrigin: `${barX[i] + 6}px 92px` }}
          initial={false}
          animate={{ scaleY: play ? 1 : 0 }}
          transition={{ duration: 0.45, delay: 0.1 + i * 0.09, ease: "easeOut" }}
        />
      ))}
      <motion.g
        initial={false}
        animate={play ? { scale: 1, opacity: 1 } : { scale: 0.4, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.58 }}
        style={{ transformOrigin: "118px 52px" }}
      >
        <circle cx="118" cy="52" r="27" fill="#28c840" />
        <rect x="108" y="50" width="20" height="15" rx="3" fill="none" stroke="var(--paper)" strokeWidth="2.4" />
        <path d="M112 50v-6a6 6 0 0 1 12 0v6" fill="none" stroke="var(--paper)" strokeWidth="2.4" strokeLinecap="round" />
      </motion.g>
    </>
  );
}

const lineWidths = [32, 26, 29, 22, 27];
const flaggedLines = [1, 3];

function KeepMarks({ play }) {
  return (
    <>
      <rect x="45" y="10" width="60" height="80" rx="8" fill="var(--paper)" stroke="var(--line)" strokeWidth="1.5" />
      {lineWidths.map((w, i) => {
        const flagged = flaggedLines.includes(i);
        return (
          <motion.rect
            key={i}
            x="53"
            y={24 + i * 13}
            height="5"
            rx="2.5"
            fill={flagged ? "var(--red)" : "var(--line)"}
            initial={false}
            animate={{ width: play ? w : 0 }}
            transition={{ duration: 0.4, delay: 0.12 + i * 0.09, ease: "easeOut" }}
          />
        );
      })}
      <motion.g
        initial={false}
        animate={play ? { scale: 1, opacity: 1 } : { scale: 0.4, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.82 }}
        style={{ transformOrigin: "104px 86px" }}
      >
        <circle cx="104" cy="86" r="15" fill="#28c840" stroke="var(--green-tint)" strokeWidth="3" />
        <path d="M97 86l5 5 9-10" fill="none" stroke="var(--paper)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
    </>
  );
}

function RefundMarks({ play }) {
  return (
    <>
      <circle cx="75" cy="55" r="30" fill="var(--paper)" stroke="var(--line)" strokeWidth="2" />
      <text
        x="75"
        y="61"
        textAnchor="middle"
        fontSize="18"
        fontWeight="700"
        fill="var(--ink)"
        style={{ fontFamily: "var(--font-display)" }}
      >
        $150
      </text>
      <motion.circle
        cx="75"
        cy="55"
        r="38"
        fill="none"
        stroke="#28c840"
        strokeWidth="3"
        strokeLinecap="round"
        initial={false}
        animate={{ pathLength: play ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.15, ease: "easeInOut" }}
        style={{ rotate: -90, transformOrigin: "75px 55px" }}
      />
    </>
  );
}
