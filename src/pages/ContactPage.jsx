import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo.jsx";
import { contact } from "../data/content.js";
import { IconMail, IconPhone, IconMapPin, IconInstagram, IconLinkedIn, IconX } from "../components/Icons.jsx";
import BookCallButton from "../components/BookCallButton.jsx";
import styles from "./ContactPage.module.css";

const socialIconMap = {
  instagram: IconInstagram,
  linkedin: IconLinkedIn,
  x: IconX,
};

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  const subject = `Message from ${name || "your website"}`;
  const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactPage() {
  return (
    <>
      <Seo title="Contact — foodcostrescue" description={contact.body} path="/contact" />

      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.grid}`}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link to="/" className={styles.back}>
              ← Back to home
            </Link>

            <span className="eyebrow">{contact.kicker}</span>
            <h1 className={styles.headline}>{contact.headline}</h1>
            <p className={styles.body}>{contact.body}</p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.field}>
                <span>Name</span>
                <input type="text" name="name" required placeholder="Your name" />
              </label>
              <label className={styles.field}>
                <span>Email</span>
                <input type="email" name="email" required placeholder="you@restaurant.com" />
              </label>
              <label className={styles.field}>
                <span>Message</span>
                <textarea name="message" rows={5} required placeholder="Tell us a bit about your invoices…" />
              </label>
              <button type="submit" className="btn btn-primary">
                Send message <span aria-hidden>→</span>
              </button>
              <p className={styles.formNote}>Opens your email client with this message pre-filled.</p>
            </form>
          </motion.div>

          <motion.div
            className={styles.infoPanel}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          >
            <a href={`mailto:${contact.email}`} className={styles.infoRow}>
              <span className={styles.infoIcon}>
                <IconMail size={19} />
              </span>
              <span>{contact.email}</span>
            </a>
            <div className={styles.infoRow}>
              <span className={styles.infoIcon}>
                <IconPhone size={19} />
              </span>
              <span>{contact.phone}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoIcon}>
                <IconMapPin size={19} />
              </span>
              <span>{contact.address}</span>
            </div>

            <div className={styles.socials}>
              {contact.socials.map((s) => {
                const Icon = socialIconMap[s.icon];
                return (
                  <a key={s.label} href={s.href} className={styles.socialIconLink} aria-label={s.label}>
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <BookCallButton className={styles.bookLink}>
              Or skip the form and book a 15-minute call →
            </BookCallButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
