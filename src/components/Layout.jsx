import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ScrollManager from "./ScrollManager.jsx";

// Every route rendered through <Outlet/> is responsible for its own <Seo>
// call (see pages/*.jsx) — a single source per page, no competing tags.
export default function Layout() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
