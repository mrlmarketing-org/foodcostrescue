import { useEffect, useMemo, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo.jsx";
import BookCallButton from "../components/BookCallButton.jsx";
import { feeWalkthrough } from "../data/content.js";
import styles from "./PricingHowItWorksPage.module.css";

function fmt(n) {
  const r = Math.round(n);
  return (r < 0 ? "-" : "") + "$" + Math.abs(r).toLocaleString("en-US");
}

function SplitBar({ found, keep, cost }) {
  if (found <= 0) {
    return (
      <div className={styles.splitBar}>
        <div className={`${styles.splitSeg} ${styles.empty}`} style={{ width: "100%" }}>
          Audit fee only — no savings found
        </div>
      </div>
    );
  }
  const keepPct = Math.max(0, Math.min(100, (keep / found) * 100));
  const costPct = 100 - keepPct;
  return (
    <div className={styles.splitBar}>
      <div className={`${styles.splitSeg} ${styles.keep}`} style={{ width: `${keepPct}%` }}>
        {keepPct > 18 ? `You keep ${fmt(keep)}` : ""}
      </div>
      <div className={`${styles.splitSeg} ${styles.cost}`} style={{ width: `${costPct}%` }}>
        {costPct > 14 ? fmt(cost) : ""}
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className={styles.legend}>
      <span>
        <span className={styles.sw} style={{ background: "var(--mint-deep)" }} /> You keep
      </span>
      <span>
        <span className={styles.sw} style={{ background: "var(--sky-deep)" }} /> Goes to us
      </span>
    </div>
  );
}

function MathRows({ rows }) {
  return (
    <div className={styles.mathBody}>
      {rows.map((r, i) => {
        if (r.rule) return <hr key={i} className={styles.ruleDash} />;
        if (r.note)
          return (
            <p key={i} className={styles.mathNote}>
              {r.note}
            </p>
          );
        const cls = [
          styles.row,
          r.bold && styles.bold,
          r.pos && styles.pos,
          r.neg && styles.neg,
          r.thin && styles.thin,
        ]
          .filter(Boolean)
          .join(" ");
        return (
          <div key={i} className={cls}>
            <span className={styles.lbl}>{r.l}</span>
            <span className={styles.leader} />
            <span className={styles.val}>{r.v}</span>
          </div>
        );
      })}
    </div>
  );
}

function ExampleCard({ example }) {
  return (
    <div className={styles.card}>
      <p className={styles.rEyebrow}>{example.eyebrow}</p>
      <p className={styles.rTitle}>{example.title}</p>

      <div className={styles.stats}>
        <div className={`${styles.stat} ${styles.found}`}>
          <p className={styles.statLabel}>Money found</p>
          <p className={styles.statValue}>{fmt(example.found)}</p>
        </div>
        <div className={`${styles.stat} ${styles.keepStat}`}>
          <p className={styles.statLabel}>You keep</p>
          <p className={`${styles.statValue} ${styles.keepValue}`}>{fmt(example.keep)}</p>
        </div>
        <div className={`${styles.stat} ${styles.cost}`}>
          <p className={styles.statLabel}>Your total cost</p>
          <p className={styles.statValue}>{fmt(example.cost)}</p>
        </div>
      </div>

      <SplitBar found={example.found} keep={example.keep} cost={example.cost} />
      <Legend />

      <p className={styles.noteLine}>{example.note}</p>

      <details className={styles.details}>
        <summary className={styles.summary}>Show the full math</summary>
        <MathRows rows={example.math} />
      </details>
    </div>
  );
}

function Calculator({ config }) {
  const [savings, setSavings] = useState(config.defaultSavings);
  const [pct, setPct] = useState(config.defaultPct);

  const s = Math.max(0, Number(savings) || 0);
  const a = config.auditFee;
  const fee = s * (pct / 100);
  const noSavings = s <= 0;
  const total = noSavings ? 0 : Math.max(a, fee);
  const auditRefunded = noSavings ? a : 0;
  const creditApplied = noSavings ? 0 : Math.min(a, fee);
  const balance = noSavings ? 0 : Math.max(0, fee - a);
  const keep = Math.max(0, s - total);

  return (
    <div className={styles.card}>
      <p className={styles.rEyebrow}>{config.eyebrow}</p>
      <p className={styles.rTitle}>{config.title}</p>
      <p className={styles.calcHint}>{config.hint}</p>

      <div className={styles.field}>
        <label htmlFor="calc-savings">Savings found</label>
        <div className={`${styles.inputWrap} ${styles.hasPrefix}`}>
          <span className={styles.prefix}>$</span>
          <input
            id="calc-savings"
            type="number"
            min="0"
            step="50"
            value={savings}
            onChange={(e) => setSavings(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label>Our fee</label>
        <div className={styles.segmented}>
          {config.pctOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              className={`${styles.seg} ${pct === opt ? styles.active : ""}`}
              onClick={() => setPct(opt)}
            >
              {opt}%
            </button>
          ))}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="calc-audit">Audit fee</label>
        <div className={`${styles.inputWrap} ${styles.hasPrefix}`}>
          <span className={styles.prefix}>$</span>
          <input id="calc-audit" type="number" value={a} disabled />
        </div>
        <p className={styles.fieldHint}>{config.auditHint}</p>
      </div>

      {noSavings && (
        <div className={styles.warn}>
          No savings found — your ${a} audit fee is refunded in full. Total cost: $0.
        </div>
      )}
      {!noSavings && fee < a && (
        <div className={styles.warn}>
          Savings found are small relative to the audit fee — total cost is capped at your ${a}{" "}
          audit fee (full refund only applies when nothing at all is found).
        </div>
      )}

      <div className={styles.stats}>
        <div className={`${styles.stat} ${styles.found}`}>
          <p className={styles.statLabel}>Money found</p>
          <p className={styles.statValue}>{fmt(s)}</p>
        </div>
        <div className={`${styles.stat} ${styles.keepStat}`}>
          <p className={styles.statLabel}>You keep</p>
          <p className={`${styles.statValue} ${styles.keepValue}`}>{fmt(keep)}</p>
        </div>
        <div className={`${styles.stat} ${styles.cost}`}>
          <p className={styles.statLabel}>Your total cost</p>
          <p className={styles.statValue}>{fmt(total)}</p>
        </div>
      </div>

      <SplitBar found={s} keep={keep} cost={total} />
      <Legend />

      <details className={styles.details}>
        <summary className={styles.summary}>Show the full math</summary>
        <div className={styles.mathBody}>
          <div className={styles.row}>
            <span className={styles.lbl}>Savings found</span>
            <span className={styles.leader} />
            <span className={styles.val}>{fmt(s)}</span>
          </div>
          <div className={`${styles.row} ${styles.neg}`}>
            <span className={styles.lbl}>Our fee ({pct}% of savings)</span>
            <span className={styles.leader} />
            <span className={styles.val}>{noSavings ? "$0" : "-" + fmt(fee)}</span>
          </div>
          <div className={`${styles.row} ${styles.pos}`}>
            <span className={styles.lbl}>Audit fee (refunded or credited)</span>
            <span className={styles.leader} />
            <span className={styles.val}>
              {noSavings ? `+${fmt(auditRefunded)} (refunded)` : `+${fmt(creditApplied)} (credited)`}
            </span>
          </div>
          <hr className={styles.ruleDash} />
          <div className={`${styles.row} ${styles.bold}`}>
            <span className={styles.lbl}>Balance due from you</span>
            <span className={styles.leader} />
            <span className={styles.val}>{fmt(balance)}</span>
          </div>
        </div>
      </details>
    </div>
  );
}

export default function PricingHowItWorksPage() {
  const location = useLocation();
  const tabIds = useMemo(() => feeWalkthrough.tabs.map((t) => t.id), []);

  const [activeTab, setActiveTab] = useState(() => {
    const hash = location.hash.replace("#", "");
    return tabIds.includes(hash) ? hash : tabIds[0];
  });

  useEffect(() => {
    window.history.replaceState(null, "", `#${activeTab}`);
  }, [activeTab]);

  const activeExample = feeWalkthrough.examples.find((ex) => ex.id === activeTab);

  return (
    <>
      <Seo
        title={feeWalkthrough.title}
        description={feeWalkthrough.sub}
        path="/pricing/how-it-works"
      />

      <article className={`section ${styles.section}`}>
        <div className={`container ${styles.container}`}>
          <Link to="/#pricing" className={styles.back}>
            ← Back to pricing
          </Link>

          <span className="eyebrow">{feeWalkthrough.eyebrow}</span>
          <h1 className={styles.title}>{feeWalkthrough.title}</h1>
          <p className={styles.sub}>{feeWalkthrough.sub}</p>

          <div className={styles.tabs}>
            {feeWalkthrough.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`${styles.tab} ${activeTab === tab.id ? styles.active : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {activeTab === "calculator" ? (
              <Calculator config={feeWalkthrough.calculator} />
            ) : (
              activeExample && <ExampleCard example={activeExample} />
            )}
          </motion.div>

          <div className={styles.ctaBox}>
            <p>{feeWalkthrough.ctaText}</p>
            <BookCallButton className="btn btn-primary">
              Book a 15-minute call <span aria-hidden>→</span>
            </BookCallButton>
          </div>
        </div>
      </article>
    </>
  );
}
