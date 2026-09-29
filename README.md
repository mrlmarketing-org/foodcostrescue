# Recoup — restaurant invoice audit

Restaurants are overcharged by suppliers more often than they notice, because catching it means comparing line items across months of invoices by hand. Recoup takes the invoices and does the comparison.

**Live:** https://foodcostrescue-kappa.vercel.app · React · Stripe · Vercel Blob

---

## The flow

Upload invoices → pay for the audit → receive the findings. That ordering is the whole design problem: the customer pays before they know what was found, so everything around the payment has to be trustworthy.

- **Uploads go straight to Vercel Blob** from the browser (`api/blob-upload.js`), never through the API. Restaurant invoice batches are large and a serverless function has both a payload cap and a timeout.
- **Checkout is verified server-side** (`api/verify-payment.js`, `api/finalize-checkout.js`). The Stripe redirect is a hint, not proof — treating the browser's return as confirmation is how you end up delivering work for a payment that never settled.
- **Orphaned uploads are cleaned up on a cron** (`api/cron/cleanup-orphaned-uploads.js`). Anyone who uploads and abandons checkout leaves files behind; without a sweeper, storage fills with documents nobody will ever pay to have read — a cost and a data-retention problem at once.
- **Phone numbers are parsed with `libphonenumber-js`** rather than regex, because the customers are international and a regex that works for one country quietly rejects the next.

## Structure

```
api/          Serverless: upload, checkout, verification, contact, cron
api/_lib/     Shared Stripe client, email templates, metadata
src/          React front end (Vite), routing and page shells
scripts/      Sitemap generation
```

## Running locally

```bash
npm install
npm run dev
```

Needs Stripe and Resend keys, plus a Vercel Blob token, to exercise the full path.

## Stack

React · Vite · Stripe · Vercel Blob · Resend · React Helmet Async · Framer Motion

---

Built by [Jeremy Ahamioje](https://github.com/JeremyAhamioje).
