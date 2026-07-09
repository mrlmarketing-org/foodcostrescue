import styles from "./PageLoader.module.css";

// Suspense fallback shown while a route-split page chunk downloads (see
// App.jsx). Navbar/Footer stay mounted around this — only the page content
// area shows the spinner, so navigation doesn't flash to a blank page.
export default function PageLoader() {
  return (
    <div className={styles.wrap} role="status" aria-label="Loading">
      <span className={styles.spinner} />
    </div>
  );
}
