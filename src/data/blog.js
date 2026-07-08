// Blog post content. Each post's `image` key maps to an imported photo in
// components/blogImages.js — add new images there when adding a post.

export const posts = [
  {
    slug: "how-to-read-your-distributor-invoice",
    title: "How to Read Your Distributor Invoice Like an Auditor",
    excerpt:
      "Most invoices are designed to be skimmed, not read. Here's what to actually look at before you approve one.",
    metaDescription:
      "A line-by-line guide to reading a food distributor invoice: what the codes mean, where contract rates slip, and which lines are worth a second look.",
    date: "2026-05-04",
    author: "supplynegotiator team",
    readTime: "6 min read",
    image: "invoice",
    body: [
      {
        heading: "Start with the case size, not the price",
        paragraphs: [
          "The fastest way to miss an overcharge is to look at the total price per line and nothing else. Distributors routinely adjust the pack size or case count instead of the unit price — the per-case number looks stable while the actual cost per pound quietly climbs. Before you check whether a price moved, check whether the pack size did.",
          "Keep a running sheet of the pack size for your 15-20 highest-volume items. It takes an afternoon to build and turns a 20-minute invoice review into a 2-minute one from then on.",
        ],
      },
      {
        heading: "Contract rates expire quietly",
        paragraphs: [
          "Most distributor contracts lock a rate for a set window — 90 days is common — and quietly revert to list price when it lapses. Nobody calls you when that happens. If your contract renewal isn't on a calendar with a reminder, you're relying on your rep to flag it, and your rep's incentives don't always point the same direction as yours.",
        ],
      },
      {
        heading: "The lines worth double-checking every time",
        paragraphs: [
          "Fuel and delivery surcharges: these should be a fixed, disclosed line — not a variable percentage that changes without explanation.",
          "Rebates: if your contract includes a volume rebate, it should show up as a credit on the invoice or a separate statement. If you've never seen it applied, ask.",
          "'Miscellaneous' or 'adjustment' lines: any charge that doesn't map to a specific product or fee you agreed to is worth a phone call.",
        ],
      },
    ],
  },
  {
    slug: "why-produce-prices-swing-more-than-you-think",
    title: "Why Produce Prices Swing More Than You Think — and How to Tell What's Real",
    excerpt:
      "Weather and seasonality explain some of the swing in your produce line. Here's how to separate that from an actual overcharge.",
    metaDescription:
      "Understand which produce price swings are driven by weather and seasonality, and which ones indicate your distributor is quietly marking up an item.",
    date: "2026-04-18",
    author: "supplynegotiator team",
    readTime: "5 min read",
    image: "produce",
    body: [
      {
        heading: "Some volatility is real",
        paragraphs: [
          "A poor harvest, an early frost, or a fuel cost spike can genuinely move produce pricing 10-20% in a matter of weeks. That's not something your distributor is doing to you — it's the market, and it affects every buyer on the same item at the same time.",
        ],
      },
      {
        heading: "The tell is in the timing and the peers",
        paragraphs: [
          "Real market moves tend to show up across every distributor at roughly the same time, and they tend to revert once the underlying cause resolves. An increase that shows up on your invoice alone, stays flat for months after the rest of the market has corrected, or only affects your account and not a comparable one, is worth benchmarking rather than assuming.",
          "This is exactly why we never compare your invoice to your own invoice from last month — we compare it to what similar restaurants, in your region, at your volume, are paying right now. That's the only way to tell a market move from a markup.",
        ],
      },
    ],
  },
  {
    slug: "the-fuel-surcharge-line-most-restaurants-never-question",
    title: "The Fuel Surcharge Line Most Restaurants Never Question",
    excerpt:
      "Fuel and delivery surcharges are one of the easiest line items to quietly pad — because almost nobody asks what they're based on.",
    metaDescription:
      "Fuel and delivery surcharges on food distributor invoices are rarely audited. Here's what a fair fuel surcharge should look like and how to check yours.",
    date: "2026-03-22",
    author: "supplynegotiator team",
    readTime: "4 min read",
    image: "surcharges",
    body: [
      {
        heading: "A fuel surcharge should be a formula, not a guess",
        paragraphs: [
          "A defensible fuel surcharge is tied to a public benchmark — a regional diesel index, typically — and moves up and down with it. If your surcharge has only ever gone up, or doesn't move when diesel prices drop, that's a sign it's being set independently of the thing it's supposedly tracking.",
        ],
      },
      {
        heading: "Ask for the basis, not just the number",
        paragraphs: [
          "You're entitled to ask your rep what index the surcharge is based on and how often it's recalculated. A distributor with a legitimate formula will have an answer ready. Vague answers, or a surcharge that never appeared in your original contract at all, are the two biggest flags we see in invoice audits.",
        ],
      },
    ],
  },
  {
    slug: "what-fair-market-pricing-actually-means",
    title: "What \"Fair Market Pricing\" Actually Means for a Restaurant",
    excerpt:
      "It's not the lowest price anyone's ever paid — it's the price a comparable account, at a comparable volume, should reasonably expect.",
    metaDescription:
      "A practical definition of fair market pricing for restaurant food distribution, and why comparing your invoice to your own history isn't enough.",
    date: "2026-02-11",
    author: "supplynegotiator team",
    readTime: "5 min read",
    image: "market",
    body: [
      {
        heading: "Fair doesn't mean cheapest",
        paragraphs: [
          "A single-location cafe ordering two cases of chicken breast a week isn't going to see the same price as a 12-location group buying pallets. Fair market pricing accounts for your actual volume and region — it's not a claim that everyone should pay the same number, it's a claim that your number should match what comparable accounts pay.",
        ],
      },
      {
        heading: "Why your own invoice history isn't the right yardstick",
        paragraphs: [
          "Comparing this month's invoice to last month's tells you whether a price moved — it doesn't tell you whether the price was fair to begin with. If a rate crept up gradually over two years without you noticing, your own history has already absorbed the overcharge as \"normal.\"",
          "That's the gap an independent benchmark closes: real pricing data pulled from many restaurants, at many volumes, in your region, so you have something to compare against besides your own bill.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}
