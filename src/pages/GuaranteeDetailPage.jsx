import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo.jsx";
import { guarantee } from "../data/content.js";
import { images } from "../assets/images/index.js";
import BookCallButton from "../components/BookCallButton.jsx";
import styles from "./GuaranteeDetailPage.module.css";

export default function GuaranteeDetailPage() {
  const { slug } = useParams();
  const item = guarantee.items.find((g) => g.slug === slug);

  if (!item) {
    return <Navigate to="/#pricing" replace />;
  }

  return (
    <>
      <Seo title={item.title} description={item.summary} path={`/guarantee/${item.slug}`} />

      <article className={`section ${styles.section}`}>
        <div className={`container ${styles.container}`}>
          <Link to="/#pricing" className={styles.back}>
            ← Back to pricing
          </Link>

          <motion.img
            src={images[item.image]}
            alt={item.title}
            className={styles.cover}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {item.title}
          </motion.h1>

          <div className={styles.body}>
            {item.fullBody.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>

          <div className={styles.ctaBox}>
            <p>Ready to find out what you're overpaying?</p>
            <BookCallButton className="btn btn-primary">
              Book a 15-minute call <span aria-hidden>→</span>
            </BookCallButton>
          </div>
        </div>
      </article>
    </>
  );
}
