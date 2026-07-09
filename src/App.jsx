import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import { terms, privacy } from "./data/legal.js";

// Only the homepage loads eagerly (it's the entry point almost every visitor
// hits first). Everything else is route-split so a visitor only downloads
// the page they're actually on — this is what keeps libphonenumber-js
// (Get Started's phone validation) and framer-motion-heavy secondary pages
// out of the initial bundle. See Layout.jsx for the <Suspense> boundary.
const BlogIndexPage = lazy(() => import("./pages/BlogIndexPage.jsx"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage.jsx"));
const GuaranteeDetailPage = lazy(() => import("./pages/GuaranteeDetailPage.jsx"));
const PricingHowItWorksPage = lazy(() => import("./pages/PricingHowItWorksPage.jsx"));
const GetStartedPage = lazy(() => import("./pages/GetStartedPage.jsx"));
const GetStartedReturnPage = lazy(() => import("./pages/GetStartedReturnPage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const LegalPage = lazy(() => import("./pages/LegalPage.jsx"));

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/guarantee/:slug" element={<GuaranteeDetailPage />} />
        <Route path="/pricing/how-it-works" element={<PricingHowItWorksPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/get-started/return" element={<GetStartedReturnPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<LegalPage doc={terms} />} />
        <Route path="/privacy" element={<LegalPage doc={privacy} />} />
      </Route>
    </Routes>
  );
}

export default App;
