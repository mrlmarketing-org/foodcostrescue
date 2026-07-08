import { Link } from "react-router-dom";
import { Wordmark } from "./Logo.jsx";
import { nav, legalLinks } from "../data/content.js";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <Link to="/">
          <Wordmark size={20} />
        </Link>
        <nav className={styles.links}>
          {nav.links.map((link) =>
            link.href.startsWith("/#") ? (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} to={link.href}>
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>

      <div className={`container ${styles.legalRow}`}>
        <p className={styles.copy}>© {new Date().getFullYear()} supplynegotiator. All rights reserved.</p>
        <nav className={styles.legalLinks}>
          {legalLinks.map((link) => (
            <Link key={link.href} to={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
