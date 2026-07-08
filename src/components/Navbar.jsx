import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wordmark } from "./Logo.jsx";
import GetStartedButton from "./GetStartedButton.jsx";
import { nav } from "../data/content.js";
import styles from "./Navbar.module.css";

function NavLink({ href, children, onClick, className }) {
  if (href.startsWith("/#")) {
    return (
      <a href={href} onClick={onClick} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand}>
          <Wordmark size={22} />
        </Link>

        <nav className={styles.links}>
          {nav.links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <GetStartedButton className={`btn btn-primary ${styles.cta}`}>
          {nav.cta}
        </GetStartedButton>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          {nav.links.map((link) => (
            <NavLink key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <GetStartedButton className="btn btn-primary" onClick={() => setOpen(false)}>
            {nav.cta}
          </GetStartedButton>
        </div>
      )}
    </motion.header>
  );
}
