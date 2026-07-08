import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo.jsx";
import { getPostBySlug, posts } from "../data/blog.js";
import { images } from "../assets/images/index.js";
import { brand } from "../data/content.js";
import GetStartedButton from "../components/GetStartedButton.jsx";
import styles from "./BlogPostPage.module.css";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const image = `${brand.domain}${images[post.image]}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "supplynegotiator" },
  };

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Seo title={post.title} description={post.metaDescription} path={`/blog/${post.slug}`} image={image} jsonLd={jsonLd} />

      <article className={`section ${styles.section}`}>
        <div className={`container ${styles.container}`}>
          <Link to="/blog" className={styles.back}>
            ← All articles
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.meta}>
              <span>{post.author}</span>
              <span aria-hidden>·</span>
              <span>{formatDate(post.date)}</span>
              <span aria-hidden>·</span>
              <span>{post.readTime}</span>
            </div>
          </motion.header>

          <motion.img
            src={images[post.image]}
            alt={post.title}
            className={styles.cover}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />

          <div className={styles.body}>
            {post.body.map((block) => (
              <section key={block.heading}>
                <h2>{block.heading}</h2>
                {block.paragraphs.map((p) => (
                  <p key={p.slice(0, 30)}>{p}</p>
                ))}
              </section>
            ))}
          </div>

          <div className={styles.ctaBox}>
            <p>Want to know what your own invoices are hiding?</p>
            <GetStartedButton className="btn btn-primary">
              Get Started Now <span aria-hidden>→</span>
            </GetStartedButton>
          </div>

          {related.length > 0 && (
            <div className={styles.related}>
              <h3>Keep reading</h3>
              <div className={styles.relatedGrid}>
                {related.map((p) => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className={styles.relatedCard}>
                    <img src={images[p.image]} alt={p.title} loading="lazy" />
                    <span>{p.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
