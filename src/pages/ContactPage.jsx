import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo.jsx";
import { contact } from "../data/content.js";
import { IconMail, IconMapPin, IconInstagram, IconLinkedIn, IconX } from "../components/Icons.jsx";
import GetStartedButton from "../components/GetStartedButton.jsx";
import { useIsMobile } from "../hooks/useIsMobile.js";
import { reveal } from "../lib/motionPresets.js";
import styles from "./ContactPage.module.css";

const socialIconMap = {
  instagram: IconInstagram,
  linkedin: IconLinkedIn,
  x: IconX,
};

export default function ContactPage() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState(null);
  const isMobile = useIsMobile();

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/send-contact-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <Seo title="Contact — supplynegotiator" description={contact.body} path="/contact" />

      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.grid}`}>
          <motion.div {...reveal(isMobile, { axis: "x", distance: -40, amount: 0.3 })}>
            <Link to="/" className={styles.back}>
              ← Back to home
            </Link>

            <span className="eyebrow">{contact.kicker}</span>
            <h1 className={styles.headline}>{contact.headline}</h1>
            <p className={styles.body}>{contact.body}</p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.field}>
                <span>Name</span>
                <input type="text" name="name" required placeholder="Your name" disabled={status === "sending"} />
              </label>
              <label className={styles.field}>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@restaurant.com"
                  disabled={status === "sending"}
                />
              </label>
              <label className={styles.field}>
                <span>Message</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us a bit about your invoices…"
                  disabled={status === "sending"}
                />
              </label>
              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"} <span aria-hidden>→</span>
              </button>
              {status === "success" && (
                <p className={styles.formSuccess}>Thanks — your message is on its way to our team.</p>
              )}
              {status === "error" && <p className={styles.formError}>{error}</p>}
              {status === "idle" && <p className={styles.formNote}>We'll get back to you within one business day.</p>}
            </form>
          </motion.div>

          <motion.div
            className={styles.infoPanel}
            {...reveal(isMobile, { axis: "x", distance: 40, amount: 0.3, delay: 0.05 })}
          >
            <a href={`mailto:${contact.email}`} className={styles.infoRow}>
              <span className={styles.infoIcon}>
                <IconMail size={19} />
              </span>
              <span>{contact.email}</span>
            </a>
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

            <GetStartedButton className={styles.bookLink}>
              Or skip the form and send us your invoices →
            </GetStartedButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
