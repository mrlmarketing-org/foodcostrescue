import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo.jsx";
import styles from "./LegalPage.module.css";

export default function LegalPage({ doc }) {
  return (
    <>
      <Seo title={`${doc.title} — supplynegotiator`} description={doc.intro} path={doc.path} />

      <article className={`section ${styles.section}`}>
        <div className={`container ${styles.container}`}>
          <Link to="/" className={styles.back}>
            ← Back to home
          </Link>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {doc.title}
          </motion.h1>

          <p className={styles.updated}>{doc.updated}</p>
          <p className={styles.intro}>{doc.intro}</p>

          <div className={styles.body}>
            {doc.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 30)}>{p}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
