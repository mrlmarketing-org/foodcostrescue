import { motion } from "framer-motion";
import Seo from "../components/Seo.jsx";
import styles from "./LegalPage.module.css";

const EMAIL_RE = /[^\s@]+@[^\s@]+\.[^\s@]+/g;

// Auto-links bare email addresses (e.g. "privacy@supplynegotiator.com")
// found in policy text into mailto: links, without needing every data entry
// to hand-author its own <a>.
function Linkified({ text }) {
  const parts = text.split(EMAIL_RE);
  const emails = text.match(EMAIL_RE) || [];
  return parts.flatMap((part, i) => [
    part,
    emails[i] ? (
      <a key={emails[i] + i} href={`mailto:${emails[i]}`}>
        {emails[i]}
      </a>
    ) : null,
  ]);
}

function Block({ block }) {
  switch (block.type) {
    case "heading":
      return <h3>{block.text}</h3>;
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item.slice(0, 40)}>
              <Linkified text={item} />
            </li>
          ))}
        </ul>
      );
    case "p":
    default:
      return (
        <p className={block.bold ? styles.callout : undefined}>
          <Linkified text={block.text} />
        </p>
      );
  }
}

export default function LegalPage({ doc }) {
  return (
    <>
      <Seo title={`${doc.title} — supplynegotiator`} description={doc.intro} path={doc.path} />

      <article className={`section ${styles.section}`}>
        <div className={`container ${styles.container}`}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {doc.title}
          </motion.h1>

          {doc.updated && <p className={styles.updated}>{doc.updated}</p>}
          {(doc.effectiveDate || doc.updatedDate) && (
            <div className={styles.dates}>
              {doc.effectiveDate && (
                <span className={styles.datePill}>Effective Date: {doc.effectiveDate}</span>
              )}
              {doc.updatedDate && <span className={styles.datePill}>Last Updated: {doc.updatedDate}</span>}
            </div>
          )}

          <p className={styles.intro}>{doc.intro}</p>

          <div className={styles.body}>
            {doc.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
