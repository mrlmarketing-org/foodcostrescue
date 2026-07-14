// Central copy file for the SupplyNegotiator landing page.
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

export const brand = {
  name: "supplynegotiator",
  displayName: "supply negotiator",
  domain: "https://www.supplynegotiator.com",
};

export const nav = {
  links: [
    { label: "Home", href: "/" },
    { label: "About us", href: "/#about" },
    { label: "What we audit", href: "/#what-we-audit" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  cta: "Get Started Now",
};

// Footer-only — deliberately left out of the top nav.
export const legalLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export const hero = {
  eyebrow: "Stop overpaying your food distributor.",
  headline: "You're overpaying your food distributor right now.",
  subhead:
    "Distributors overcharge in quiet ways: prices climb mid-contract, fees appear without explanation, and a busy operator rarely catches them — but that's exactly what we do for you. We pull your invoices, measure every line against real market pricing, and recover what you were overcharged.",
  primaryCta: "Get Started Now",
  secondaryCta: "See how it works",
};

export const trustStrip = [
  { text: "Small flat audit fee, refunded in full if we don't find savings", image: "trustRefund" },
  { text: "You keep the majority of what we recover", image: "trustKeep" },
  { text: "Benchmarked against real distributor pricing data", image: "trustBenchmark" },
  { text: "Built by people who understand restaurant supply chains", image: "trustSupplychain" },
];

// About us combines the source brief's "Problem" and "Solution" sections.
// `intro`, `bodyPreview`, and `bodyEmphasis` stay visible by default;
// `bodyMore` is revealed by the "Read more" toggle.
export const aboutUs = {
  kicker: "About us",
  headline: "Most restaurants overpay thousands a month and never notice.",
  intro: "Your distributor is counting on you not to check the invoice.",
  bodyPreview:
    "A distributor runs thousands of invoices a week, and no one's checking yours. Prices creep, rebates vanish, surcharges appear that were never agreed to — small amounts on every order that quietly stack into real money.",
  bodyEmphasis:
    "We've spent years on the supply side of this business, so we know exactly where distributors pad the bill — and how to get it back for you.",
  bodyMore: [
    "You're running a restaurant, not auditing freight invoices. Nobody on staff has the time to compare every line item against what it should actually cost, or the leverage to call the distributor and get it fixed.",
    { bold: "We do that part for you." },
    "supplynegotiator collects your recent supplier invoices and benchmarks every line item — against fair market pricing for your region and order volume. We flag overcharges, expired contract rates, missing rebates, and fees that shouldn't be there.",
    "Once we know where the money is, we go back to the distributor on your behalf — or arm you with exactly what to say — to recover credits and refunds, and to correct pricing going forward, so the overcharges stop happening.",
  ],
  callout: {
    body: "Your distributor's invoice is the only pricing you ever see — so there's no way to tell what's fair. We put yours next to what other restaurants and suppliers actually pay, flag what's off, and negotiate it back for you.",
  },
  checklist: [
    "Checked against real distributor pricing",
    "One small flat fee, refunded if we find nothing",
    "You keep your distributor. We just fix the bill.",
    "Built by people who've worked in restaurant supply",
  ],
  cta: "See how it works",
  flagsKicker: "What we catch",
  flagsLabel: "Four ways your bill gets padded",
  // The four things called out in bodyMore's "We flag overcharges, expired
  // contract rates, missing rebates, and fees that shouldn't be there" —
  // pulled into their own visual row so it isn't buried inside prose. Each
  // `example` is an illustrative found-money case, not a real client figure.
  flags: [
    {
      icon: "trendUp",
      label: "Price overcharges",
      body: "Unit prices that quietly crept up between orders.",
      example: {
        caption: "Caught on a recent invoice",
        detail: "billed $38.20 · fair $34.00",
        amount: "+$4.20",
      },
    },
    {
      icon: "contractMismatch",
      label: "Expired contract rates",
      body: "Billed at a rate that doesn't match what you signed.",
      example: {
        caption: "Caught on a recent invoice",
        detail: "signed $0.92 · billed $1.07/lb",
        amount: "+$0.15",
      },
    },
    {
      icon: "percentFlag",
      label: "Missing rebates",
      body: "Volume discounts you earned but never got credited.",
      example: {
        caption: "Caught over the year",
        detail: "3% rebate · $0 credited",
        amount: "+$1,140",
      },
    },
    {
      icon: "receipt",
      label: "Unauthorized fees",
      body: "Surcharges that were never part of the deal.",
      example: {
        caption: "Caught on a recent invoice",
        detail: "\"fuel surcharge\" · not in contract",
        amount: "−$85",
      },
    },
  ],
};

// Invoice mock embedded in the About Us section, styled as an app
// screenshot (browser chrome + product UI). Every dollar figure here is a
// made-up illustration of what a correction looks like — not a real client
// invoice or a promised recovery amount. `image` keys reference assets/images.
export const invoiceExample = {
  windowUrl: `app.${brand.name}.com/audits`,
  cardTitle: "Audited line items",
  invoiceLabel: "Invoice #7734",
  cardSub: "Benchmarked against regional fair market pricing",
  flaggedCount: "3 flagged",
  rows: [
    {
      image: "itemFlankSteak",
      item: "Beef flank steak, trimmed",
      detail: "Contract rate $5.60/lb",
      qty: "100 lb",
      was: "$980.00",
      flag: "+$420.00 over contract",
      now: "$560.00",
      nowLabel: "Corrected to contract price",
    },
    {
      image: "itemPaperTowelRoll",
      item: "Paper towels, case",
      detail: "Billed at an expired contract tier",
      qty: "50 cases",
      was: "$930.00",
      flag: "Off-contract tier",
      now: "$500.00",
      nowLabel: "Corrected to contract tier",
    },
    {
      image: "itemDeliveryReceipt",
      item: "Delivery documentation fee",
      detail: "Not in your agreement",
      qty: "1",
      was: "$350.00",
      flag: "Unauthorized",
      now: "$0.00",
      nowLabel: "Removed",
    },
  ],
  totalLabel: "Recovered on this invoice",
  totalValue: "$1,200.00",
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
  headline: "From invoice to recovered dollars.",
  steps: [
    { title: "Send your invoices", image: "howSend" },
    { title: "We benchmark", image: "howAnalyze" },
    { title: "See what's overpriced", image: "howOverpaying" },
    { title: "We recover it", image: "howNegotiate" },
    { title: "You keep it", image: "howSavings" },
  ],
};

export const pricing = {
  kicker: "Pricing",
  headline: "You pay for results, not promises.",
  intro: [
    "The flat audit fee covers a full written report, benchmarking every line item against fair market pricing. If we find no savings, it's refunded in full. If we do, that fee is credited against our percentage — which applies only to what we actually recover for you.",
  ],
  rows: [
    {
      badge: "Upfront · Refundable",
      label: "One-time audit fee",
      sub: "Covers the full written report — yours to keep either way.",
      value: "$150",
      valueSub: "Flat. Back in full if we find nothing.",
    },
    {
      badge: "Only if we recover",
      label: "On credits & refunds",
      sub: "Cash the distributor credits back for past overcharges.",
      value: "30%",
      valueSub: "of what's credited back to you.",
    },
    {
      badge: "Only if we recover",
      label: "On locked-in savings",
      sub: "Your corrected rate, held in place for a fixed term.",
      value: "25%",
      valueSub: "of your savings over the next 12 months.",
    },
  ],
  footnote: "Your $150 audit fee is credited against whichever percentage applies — you never pay it twice.",
  detailLinkLabel: "See how pricing is calculated →",
};

// Interactive walkthrough at /pricing/how-it-works, linked from below the
// pricing cards above.
export const feeWalkthrough = {
  eyebrow: "Pricing",
  title: "How the fee works",
  sub: "Tap through the outcomes, or plug in your own numbers to see what your recovery looks like.",
  tabs: [
    { id: "hard-credit", label: "Hard Credit" },
    { id: "rate-correction", label: "Rate Correction" },
    { id: "nothing-found", label: "Nothing Found" },
    { id: "calculator", label: "Try Your Numbers" },
  ],
  examples: [
    {
      id: "hard-credit",
      eyebrow: "USE CASE ONE",
      title: "Hard Credit for a Past Overcharge",
      found: 1800,
      keep: 1260,
      cost: 540,
      note: "Distributor issues an $1,800 credit for three months of overbilled chicken breast.",
      math: [
        { l: "Audit fee (paid upfront)", v: "$150" },
        { rule: true },
        { l: "Contract rate, chicken breast", v: "$2.10/lb", thin: true },
        { l: "Actual billed rate", v: "$2.40/lb", thin: true },
        { l: "Overcharge per lb", v: "$0.30", bold: true },
        { note: "2,000 lb/mo × 3 months affected" },
        { l: "Total overcharge found", v: "$1,800", bold: true },
        { rule: true },
        { l: "Distributor credit issued", v: "$1,800", pos: true },
        { l: "Our fee (30% of credit)", v: "-$540", neg: true },
        { l: "Audit fee credited back", v: "+$150", pos: true },
        { l: "Balance due from you", v: "$390", bold: true },
      ],
    },
    {
      id: "rate-correction",
      eyebrow: "USE CASE TWO",
      title: "Locked Go-Forward Rate Correction",
      found: 1680,
      keep: 1260,
      cost: 420,
      note: "Rate drops from $45 to $38/case, locked for 12 months, then continues at no further fee.",
      math: [
        { l: "Audit fee (paid upfront)", v: "$150" },
        { rule: true },
        { l: "Old rate, paper goods case", v: "$45.00", thin: true },
        { l: "New negotiated rate", v: "$38.00", thin: true },
        { l: "Savings per case", v: "$7.00", bold: true },
        { note: "20 cases/mo × 12-month term" },
        { l: "Total locked savings", v: "$1,680", bold: true },
        { rule: true },
        { l: "Our fee (25% of savings)", v: "-$420", neg: true },
        { l: "Audit fee credited back", v: "+$150", pos: true },
        { l: "Balance due from you", v: "$270", bold: true },
      ],
    },
    {
      id: "nothing-found",
      eyebrow: "USE CASE THREE",
      title: "Nothing Worth Pursuing Found",
      found: 0,
      keep: 0,
      cost: 0,
      note: "Your $150 audit fee is refunded in full, plus you keep the written report.",
      math: [
        { l: "Audit fee (paid upfront)", v: "$150" },
        { rule: true },
        { l: "Invoices reviewed", v: "✓", thin: true },
        { l: "Line items benchmarked", v: "✓", thin: true },
        { l: "Contract terms checked", v: "✓", thin: true },
        { l: "Overcharges found", v: "$0", bold: true },
        { rule: true },
        { l: "Audit fee refunded to you", v: "+$150", pos: true },
        { l: "Balance due from you", v: "$0", bold: true },
      ],
    },
  ],
  calculator: {
    eyebrow: "TRY IT YOURSELF",
    title: "Run your own numbers",
    hint: "Type in your own numbers to see how a recovery of your own size would play out.",
    defaultSavings: 1800,
    pctOptions: [30, 25],
    defaultPct: 30,
    auditFee: 150,
    auditHint: "Flat and fixed — refunded if we find nothing, credited if we do.",
  },
  ctaText: "Ready to see what your invoices could recover?",
};

// Short nudge banner between Pricing and Guarantee — the site was light on
// mid-page CTAs, so this gives visitors who are sold after the pricing cards
// a "Get Started" without having to scroll all the way to FinalCTA. No body
// copy here on purpose: "no commitment" framing would be misleading given the
// audit fee charged upfront (see `pricing` above).
export const midCta = {
  kicker: "Ready when you are",
  headline: "See what your invoices are hiding.",
  cta: "Get Started Now",
};

// Guarantee sits right after Pricing, is deliberately left out of the top
// nav, and covers three separate promises from the brief. Each item's
// `fullBody` is the verbatim source text, shown on its own detail page.
export const guarantee = {
  kicker: "Guarantee",
  headline: "Every audit comes with three guarantees.",
  items: [
    {
      slug: "how-we-calculate-savings",
      title: "Real savings, not market swings",
      summary:
        "We only count savings from issues we actually fix — a credit or a corrected rate — never off a total bill that weather and fuel costs distort. Once secured, it holds.",
      art: "savings",
      image: "guaranteeSavings",
      linkLabel: "See how it's calculated",
      fullBody: [
        "Food prices fluctuate for many reasons beyond our control, such as weather, seasonality, fuel costs, or poor harvests. Therefore, we never measure savings by comparing your total monthly invoice amount, as that figure would be distorted by those factors. Instead, we determine the savings at the moment we identify and resolve a specific issue—whether through a direct credit issued by the distributor to offset a previous overcharge, or through a corrected rate for a specific product calculated based on projected volume for a set period. If prices subsequently change due to factors unrelated to the market, this does not alter the savings we have already identified and secured.",
      ],
    },
    {
      slug: "yours-to-keep",
      title: "The findings are yours to keep",
      summary:
        "You walk away with a full written report: every overcharge, line by line, with the dollar figure attached. Yours whether the distributor fixes a thing or not.",
      art: "keep",
      image: "guaranteeKeep",
      linkLabel: "Read the full guarantee",
      fullBody: [
        "We charge a flat, one-time fee to audit your invoices. That fee pays for a concrete deliverable: a full written report showing exactly where you're being overcharged and by how much — yours to keep, whether the distributor agrees to fix anything.",
      ],
    },
    {
      slug: "audit-fee-refund",
      title: "No savings, full refund",
      summary:
        "If we don't confirm real savings, your $150 audit fee comes back in full. If we do, it's credited against our percentage — so the same work is never billed twice.",
      art: "refund",
      image: "guaranteeRefund",
      linkLabel: "Read the full guarantee",
      fullBody: [
        "If we don't find and confirm real savings, that $150 fee is refunded in full — you pay nothing. If we do get savings — a credit or a corrected rate — the audit fee is credited against our % fee, so you're not paying the same work twice.",
      ],
    },
  ],
  valueFraming:
    "There's genuinely no downside to finding out: if we come up empty, you get your $150 back. If we find real savings, the fee simply comes off what you'd owe us anyway.",
  cta: "Get Started Now",
};

export const whyUs = {
  kicker: "Why us",
  headline: "Why restaurants trust us with the math.",
  pillars: [
    {
      title: "We know what distributor pricing should actually look like.",
      body: "Our team has spent years in restaurant procurement and supply chain roles — we've sat on both sides of the invoice.",
      icon: "pricingExpertise",
    },
    {
      title: "A benchmarking approach, not a guess.",
      body: "We compare your invoices against pricing data gathered across many restaurants, regions, and order volumes — not a one-off opinion about whether a number looks high.",
      icon: "benchmarkBars",
    },
    {
      title: "We make an uncomfortable call, so you don't have to.",
      body: "Negotiating with a major distributor rep is awkward when you're also relying on them for tomorrow's delivery. We handle that conversation, so your relationship with the distributor stays intact.",
      icon: "toughCall",
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
    a: "Yes. We execute a non-disclosure agreement before any review begins. Access is restricted to the team assigned to your account, and your documents are used solely to benchmark your pricing against market data. They are never shared with outside parties.",
  },
];

export const finalCta = {
  headline: "Find out what you're overpaying — before your next delivery.",
  body: "Send us your last few invoices and we'll tell you exactly where the money is going. It only takes a few minutes to get started.",
  primaryCta: "Get Started Now",
};

export const contact = {
  kicker: "Contact",
  headline: "Have a question? We're here to help.",
  body: "Send us a message and we'll respond within one business day. If you'd prefer to speak by phone, let us know the best time to reach you and we'll follow up.",
  email: "admin@supplynegotiator.com",
  phone: "+1 313-241-6083",
  address: "1000 Brickell Plaza, Unit 2708, Miami, FL 33130",
  socials: [
    { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/supplynegotiator" },
    { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/profile.php?id=61591745824636" },
  ],
};

// The "Get Started Now" flow at /get-started — one continuous 3-step form
// (info -> agree to terms -> pay the $150 audit fee), used by every CTA
// sitewide. Field option lists live here so copy changes don't require
// touching component code.
export const getStartedFlow = {
  eyebrow: "Get started",
  headline: "Let's find out what you're overpaying.",
  subhead: "Three quick steps: tell us about your account, agree to the engagement terms, and pay the one-time $150 audit fee to lock in your spot.",
  steps: ["Your info", "Agree to terms", "Pay & continue"],
  distributorOptions: [
    { value: "sysco", label: "Sysco" },
    { value: "us-foods", label: "US Foods" },
    { value: "pfg", label: "Performance Food Group" },
    { value: "regional", label: "Regional or independent" },
    { value: "not-sure", label: "Not sure" },
  ],
  spendOptions: [
    { value: "under10k", label: "Under $10k" },
    { value: "10k-30k", label: "$10k–$30k" },
    { value: "30k-plus", label: "$30k+" },
  ],
  locationsOptions: [
    { value: "1", label: "1" },
    { value: "2-5", label: "2–5" },
    { value: "6-plus", label: "6+" },
  ],
  auditFee: "$150",
};
