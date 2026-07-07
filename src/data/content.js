// Central copy file for the FoodCostRescue landing page.
// Items derived from [CONFIRM: ...] placeholders in the source brief use the
// example values given there as working defaults — swap them here before launch.
//
// STILL OPEN from the source brief (not fabricated, deliberately left out of
// live copy — flagged here so it isn't lost):
//   - Guarantee section, "audit fee refund" item: the brief has
//     "[CONFIRM: any minimum engagement terms, e.g., how long we continue
//     monitoring after the initial audit.]" attached to the refund guarantee.
//     No engagement/monitoring-term copy has been written anywhere on the
//     site — decide the term and add it to guarantee.items[2].fullBody.
//   - Contact page phone/address/socials are placeholders (see `contact`
//     below) pending real business details.

export const brand = {
  name: "foodcostrescue",
  displayName: "food cost rescue",
  domain: "https://www.foodcostrescue.com",
  // Placeholder Calendly account — swap for the company's real one later.
  calendlyUrl: "https://calendly.com/iruoma-jennifer-onyia",
};

export const nav = {
  links: [
    { label: "Home", href: "/" },
    { label: "About us", href: "/#about" },
    { label: "What we audit", href: "/#what-we-audit" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  cta: "Book a call",
};

// Footer-only — deliberately left out of the top nav.
export const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export const hero = {
  eyebrow: "Stop overpaying your food distributor.",
  headline: "We audit your supplier's invoices and get back every dollar you're overpaid.",
  subhead:
    "Restaurants buying bulk from big distributors are routinely overcharged — random price hikes, broken contract terms, fees that shouldn't be there. We benchmark every invoice against fair market pricing, show you exactly where you're losing money, and negotiate the recovery on your behalf.",
  primaryCta: "Book a 15-minute call",
  secondaryCta: "See how it works",
};

export const trustStrip = [
  "Small flat audit fee, refunded in full if we don't find savings",
  "You keep the majority of what we recover",
  "Benchmarked against real distributor pricing data",
  "Built by people who understand restaurant supply chains",
];

// About us combines the source brief's "Problem" and "Solution" sections.
// `intro` + `bodyPreview` stay visible by default; `bodyMore` is revealed by
// the "Read more" toggle. Text is verbatim from the brief (brand placeholder
// swapped for the real name).
export const aboutUs = {
  kicker: "About us",
  headline: "We find where you're overpaying. You keep savings.",
  intro: "Your distributor is counting on you not checking the invoice.",
  bodyPreview:
    "Big distributors process thousands of invoices a week. Prices creep between orders, agreed-upon contract rates quietly lapse; rebates go unapplied, and fuel or delivery surcharges get added that were never part of the deal. Any single overcharge looks small. Across a year of weekly deliveries, it adds up to thousands of dollars — money that's already left in your account.",
  bodyMore: [
    "You're running a restaurant, not auditing freight invoices. Nobody on staff has the time to compare every line item against what it should actually cost, or the leverage to call the distributor and get it fixed.",
    { bold: "We do that part for you." },
    "foodcostrescue collects your recent supplier invoices and benchmarks every line item — against fair market pricing for your region and order volume. We flag overcharges, expired contract rates, missing rebates, and fees that shouldn't be there.",
    "Once we know where the money is, we go back to the distributor on your behalf — or arm you with exactly what to say — to recover credits and refunds, and to correct pricing going forward, so the overcharges stop happening.",
  ],
  callout: {
    body: "Most restaurants have no independent way to know whether their invoice pricing is fair — they only see one distributor's numbers. We compare real market benchmarks across many restaurants and suppliers, so you find out exactly what \"fair\" looks like before you pick up the phone.",
  },
  checklist: [
    "Benchmarked against real market data",
    "No cost unless we find savings",
    "You keep your distributor relationship",
    "Built by restaurant supply-chain people",
  ],
  cta: "See how it works",
};

export const whatWeAudit = {
  kicker: "What we audit",
  headline: "Every part of the invoice that can quietly cost you money.",
  items: [
    {
      title: "Proteins & Perishables",
      body: "Proteins, produce, dairy, and seafood pricing checked against regional benchmarks.",
      image: "proteins",
    },
    {
      title: "Dry Goods & Paper Goods",
      body: "Bulk dry goods, oils, and paper/disposables checked against volume-tier pricing.",
      image: "dryGoods",
    },
    {
      title: "Contract Terms & Rebates",
      body: "Agreed rebates, locked-in rates, and minimum-order clauses that aren't being honored.",
      image: "contracts",
    },
    {
      title: "Surcharges & Fees",
      body: "Fuel, delivery, and \"fuel adjustment\" charges that shouldn't apply to your account.",
      image: "surcharges",
    },
  ],
  footnote: "Don't see your distributor listed? If they send itemized invoices, we can likely audit them. Ask for your call.",
};

export const howItWorks = {
  kicker: "How it works",
  headline: "Five steps from invoice to recovered dollars.",
  steps: [
    {
      title: "Send us your invoices.",
      body: "Share 2–3 months of recent invoices from your main distributor(s). Takes most owners a few minutes.",
      icon: "send",
    },
    {
      title: "We benchmark and analyze.",
      body: "We compare every line item against fair market pricing for your item mix, region, and order volume, and check your contract terms line by line.",
      icon: "search",
    },
    {
      title: "We show you where you're overpaying.",
      body: "You get a clear report: what's overpriced, by how much, and what it's costing you per month and per year.",
      icon: "chart",
    },
    {
      title: "We negotiate the recovery.",
      body: "We contact the distributor on your behalf to recover credits or refunds, and to correct pricing going forward.",
      icon: "phone",
    },
    {
      title: "Keep savings.",
      body: "Corrected pricing stays in place, and we keep monitoring future invoices, so new overcharges get caught early.",
      icon: "shield",
    },
  ],
};

export const pricing = {
  kicker: "Pricing",
  headline: "A small audit fee to get started. The rest is only paid if we save you money.",
  intro:
    "We charge a flat, one-time fee to audit your invoices. That fee pays for a concrete deliverable: a full written report benchmarking every line item against fair market pricing and flagging every contract violation we find — yours to keep, whether the distributor agrees to fix anything. If we do get savings — a credit or a corrected rate — that audit fee is credited against our % fee, so you're not paying twice. The % fee only applies when we actually recover something.",
  rows: [
    {
      label: "One-time invoice audit fee",
      sub: "Due upfront, per engagement",
      value: "$150",
      valueSub: "flat, one time",
    },
    {
      label: "Hard credits or refunds",
      sub: "Issued by the distributor for past overcharges",
      value: "30%",
      valueSub: "of the credited amount — audit fee credited against this first",
    },
    {
      label: "Locked go-forward rate correction",
      sub: "Old price vs. new negotiated price × expected volume, fixed term",
      value: "25%",
      valueSub: "of the calculated savings over a defined 12-month term — audit fee credited against this first",
    },
  ],
};

// Guarantee sits right after Pricing, is deliberately left out of the top
// nav, and covers three separate promises from the brief. Each item's
// `fullBody` is the verbatim source text, shown on its own detail page.
export const guarantee = {
  kicker: "Guarantee",
  headline: "Three guarantees, so there's no downside to finding out.",
  items: [
    {
      slug: "how-we-calculate-savings",
      title: "How we calculate savings",
      summary:
        "We never measure savings against your shifting invoice total. We lock them in the moment we find and fix a specific issue, so market swings never erase what we've already secured.",
      image: "guaranteeSavings",
      linkLabel: "Read the full breakdown",
      fullBody: [
        "Food prices fluctuate for many reasons beyond our control, such as weather, seasonality, fuel costs, or poor harvests. Therefore, we never measure savings by comparing your total monthly invoice amount, as that figure would be distorted by those factors. Instead, we determine the savings at the moment we identify and resolve a specific issue—whether through a direct credit issued by the distributor to offset a previous overcharge, or through a corrected rate for a specific product calculated based on projected volume for a set period. If prices subsequently change due to factors unrelated to the market, this does not alter the savings we have already identified and secured.",
      ],
    },
    {
      slug: "yours-to-keep",
      title: "The findings are yours to keep",
      summary:
        "Every audit ends in a full written report showing exactly where you're being overcharged and by how much — yours to keep, whether or not the distributor agrees to fix anything.",
      image: "guaranteeKeep",
      linkLabel: "Read the full guarantee",
      fullBody: [
        "We charge a flat, one-time fee to audit your invoices. That fee pays for a concrete deliverable: a full written report showing exactly where you're being overcharged and by how much — yours to keep, whether the distributor agrees to fix anything.",
      ],
    },
    {
      slug: "audit-fee-refund",
      title: "Full refund if we don't find savings",
      summary:
        "If we don't find and confirm real savings, your $150 audit fee is refunded in full. If we do, that same fee is credited against our % fee, so you're never paying for the same work twice.",
      image: "guaranteeRefund",
      linkLabel: "Read the full guarantee",
      fullBody: [
        "If we don't find and confirm real savings, that $150 fee is refunded in full — you pay nothing. If we do get savings — a credit or a corrected rate — the audit fee is credited against our % fee, so you're not paying the same work twice.",
      ],
    },
  ],
  valueFraming:
    "There's genuinely no downside to finding out: if we come up empty, you get your $150 back. If we find real savings, the fee simply comes off what you'd owe us anyway.",
  cta: "Book a call to get your first invoice review",
};

export const whyUs = {
  kicker: "Why us",
  headline: "Why foodcostrescue",
  pillars: [
    {
      title: "We know what distributor pricing should actually look like.",
      body: "Our team has spent years in restaurant procurement and supply chain roles — we've sat on both sides of the invoice.",
      icon: "target",
    },
    {
      title: "A benchmarking approach, not a guess.",
      body: "We compare your invoices against pricing data gathered across many restaurants, regions, and order volumes — not a one-off opinion about whether a number looks high.",
      icon: "trendingUp",
    },
    {
      title: "We make an uncomfortable call, so you don't have to.",
      body: "Negotiating with a major distributor rep is awkward when you're also relying on them for tomorrow's delivery. We handle that conversation, so your relationship with the distributor stays intact.",
      icon: "partners",
    },
  ],
};

export const faq = [
  {
    q: "Which distributors do you audit?",
    a: "Sysco, US Foods, Performance Food Group, and most regional or independent distributors that send itemized invoices.",
  },
  {
    q: "Will this hurt my relationship with my distributor?",
    a: "Our goal is to fix pricing and terms, not create conflict. In most cases the outcome is a credit or corrected rate, not a dispute — distributors expect some accounts to check their invoices.",
  },
  {
    q: "How do you know what price is \"fair\"?",
    a: "We benchmark against pricing data collected across restaurants, regions, and order volumes, so you can see how your invoice compares to what similar accounts are paying.",
  },
  {
    q: "What if you don't find any overcharges?",
    a: "The $150 audit fee is refunded to you in full — you pay nothing. You keep the written report either way, so even a clean result gives you documented peace of mind at no cost.",
  },
  {
    q: "What if you find an overcharge, but the distributor refuses to fix it?",
    a: "This can happen, especially with large distributors who won't always move on pricing. Since no real savings were confirmed, the $150 audit fee is refunded in full — you owe nothing. You keep the full written report, which you're free to use yourself — for example, as leverage with the distributor directly, or to compare against a competing supplier.",
  },
  {
    q: "Food prices change all the time due to different factors — how do you separate that from your work?",
    a: "We don't measure savings by comparing your invoice total over time, since that gets affected by things that have nothing to do with us. Instead, we lock in savings when we find and fix a specific issue — either a hard credit for a past overcharge, or a corrected go-forward rate on a specific item, calculated against expected volume. If market prices move afterward for unrelated reasons, it doesn't change what we've already found.",
  },
  {
    q: "Why do I have to pay an audit fee if the rest is based on results?",
    a: "Think of it as fully refundable rather than a sunk cost: if we don't find and confirm real savings, you get the $150 back in full. If we do, that same $150 is credited against our % fee — so either way, you never pay for the audit and the result separately.",
  },
  {
    q: "I have multiple locations — does the % or audit fee change based on volume?",
    a: "We tailor pricing for multi-location accounts — tell us your footprint on the call and we'll walk through what a fair structure looks like for you.",
  },
  {
    q: "Do you need access to my bank or accounting system?",
    a: "No. We only need your supplier invoices — such as PDFs, photos, or exports from your ordering system.",
  },
  {
    q: "How much can I expect to recover?",
    a: "It varies by order volume and distributor, but overcharges of several percent of total food spend are common. We'll give you an exact number after reviewing your invoices.",
  },
  {
    q: "Is my invoice safe?",
    a: "Yes. We sign an NDA before reviewing anything, access is limited to the team working on your account, and your documents are used only to benchmark your pricing — never shared or sold.",
  },
];

export const finalCta = {
  headline: "Find out what you're overpaying — before your next delivery.",
  body: "Send us your last few invoices and we'll tell you exactly where the money is going. One call is all it takes to get started.",
  primaryCta: "Book a 15-minute call",
  secondaryCta: "Or send us your invoices and we'll reach out",
};

// Placeholder business details — swap for the real phone/address/socials
// before launch (user chose to proceed with clear placeholders for now).
export const contact = {
  kicker: "Contact",
  headline: "Let's talk about your invoices.",
  body: "Send us a message and we'll get back to you within one business day — or book a call directly if you'd rather skip the back-and-forth.",
  email: "hello@foodcostrescue.com",
  // Dummy placeholder values — swap for the real phone/address before launch.
  phone: "+1 (415) 555-0148",
  address: "248 Market Street, Suite 310, San Francisco, CA 94105",
  socials: [
    { label: "Instagram", icon: "instagram", href: "#" },
    { label: "LinkedIn", icon: "linkedin", href: "#" },
    { label: "X", icon: "x", href: "#" },
  ],
};
