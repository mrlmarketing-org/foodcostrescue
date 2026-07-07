import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import BlogIndexPage from "./pages/BlogIndexPage.jsx";
import BlogPostPage from "./pages/BlogPostPage.jsx";
import GuaranteeDetailPage from "./pages/GuaranteeDetailPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LegalPage from "./pages/LegalPage.jsx";
import { terms, privacy } from "./data/legal.js";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/guarantee/:slug" element={<GuaranteeDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<LegalPage doc={terms} />} />
        <Route path="/privacy" element={<LegalPage doc={privacy} />} />
      </Route>
    </Routes>
  );
}

export default App;
