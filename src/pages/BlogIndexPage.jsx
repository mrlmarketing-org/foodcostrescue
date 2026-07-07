import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { posts } from "../data/blog.js";
import { images } from "../assets/images/index.js";
import styles from "./BlogIndexPage.module.css";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function BlogIndexPage() {
  return (
    <>
      <Seo
        title="Blog — foodcostrescue"
        description="Straight talk on reading distributor invoices, fuel surcharges, produce pricing, and fair market benchmarks for restaurants."
        path="/blog"
      />

      <section className={`section ${styles.section}`}>
        <div className="container">
          <motion.div
            className="section-head centered"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="eyebrow">Blog</span>
            <h1>Straight talk on invoices, pricing, and margins.</h1>
          </motion.div>

          <div className={styles.grid}>
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Link to={`/blog/${post.slug}`} className={styles.imgLink}>
                  <img src={images[post.image]} alt={post.title} loading="lazy" />
                  <span className={styles.date}>{formatDate(post.date)}</span>
                </Link>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className={styles.readMore}>
                  Read full story
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
