import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ScrollManager from "./ScrollManager.jsx";
import PageLoader from "./PageLoader.jsx";

// Every route rendered through <Outlet/> is responsible for its own <Seo>
// call (see pages/*.jsx) — a single source per page, no competing tags.
// Suspense wraps just the outlet (not Navbar/Footer) so route-split pages
// (see App.jsx) show a spinner in place rather than a blank page.
export default function Layout() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}
