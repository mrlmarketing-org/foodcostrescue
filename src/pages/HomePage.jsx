import Seo from "../components/Seo.jsx";
import Hero from "../components/Hero.jsx";
import TrustStrip from "../components/TrustStrip.jsx";
import AboutUs from "../components/AboutUs.jsx";
import WhatWeAudit from "../components/WhatWeAudit.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Pricing from "../components/Pricing.jsx";
import Guarantee from "../components/Guarantee.jsx";
import WhyUs from "../components/WhyUs.jsx";
import FAQ from "../components/FAQ.jsx";
import FinalCTA from "../components/FinalCTA.jsx";
import { brand } from "../data/content.js";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "supplynegotiator",
  url: brand.domain,
  description:
    "supplynegotiator audits restaurant supplier invoices, benchmarks pricing against fair market data, and recovers overcharges.",
  areaServed: "US",
};

export default function HomePage() {
  return (
    <>
      <Seo
        title="supplynegotiator — stop overpaying your food distributor"
        description="We audit your restaurant's supplier invoices, benchmark every line item against fair market pricing, and recover money you're being overcharged."
        path="/"
        jsonLd={jsonLd}
      />
      <Hero />
      <TrustStrip />
      <AboutUs />
      <WhatWeAudit />
      <HowItWorks />
      <Pricing />
      <Guarantee />
      <WhyUs />
      <FAQ />
      <FinalCTA />
    </>
  );
}
