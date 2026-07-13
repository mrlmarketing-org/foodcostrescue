// Both docs share one content-block schema so LegalPage.jsx has a single
// render path: each section is a heading plus an ordered list of blocks —
// { type: "p", text, bold? }, { type: "list", items }, or
// { type: "heading", text } for a sub-heading within a section.
//
// Terms text below is sourced verbatim from the counsel-drafted "TOS draft
// food service" document (dated July 10, 2026), with numbered sub-clauses
// (2.1, 3.1, etc.) split into heading+paragraph pairs to match this file's
// existing rendering pattern — not re-drafted or summarized.

export const terms = {
  title: "Terms of Service",
  path: "/terms",
  effectiveDate: "July 10, 2026",
  updatedDate: "July 9, 2026",
  intro:
    "These Terms of Service (\"Terms\") govern your access to and use of Supply Negotiator's website and invoice audit and recovery services (\"Services\"). By submitting the qualifying form, submitting invoices, accepting these Terms, or otherwise engaging our Services, you (\"Client,\" \"you,\" or \"your\") agree to be bound by these Terms. If you do not agree, do not use the Services.",
  sections: [
    {
      heading: "1. Description of Services",
      blocks: [
        {
          type: "p",
          text: "Supply Negotiator reviews Client's supplier invoices, benchmarks pricing and contract terms against market data, and identifies potential overcharges, expired contract rates, missing rebates, and improper fees (\"Audit\"). Where overcharges are identified, Supply Negotiator may contact Client's distributor(s) on Client's behalf, or advise Client directly, to pursue credits, refunds, or corrected go-forward pricing (\"Recovery\").",
        },
        {
          type: "p",
          text: "Supply Negotiator is not a law firm, accounting firm, or licensed financial advisor, and the Services do not constitute legal, tax, or accounting advice.",
        },
      ],
    },
    {
      heading: "2. Client Documents and Authorization",
      blocks: [
        { type: "heading", text: "2.1 Documents Provided" },
        {
          type: "p",
          text: "Client will provide Supply Negotiator with supplier invoices and related documents (e.g., contracts, rebate agreements) reasonably necessary to perform the Audit. Supply Negotiator does not require or request access to Client's bank accounts or accounting systems.",
        },
        { type: "heading", text: "2.2 Authorization Act" },
        {
          type: "p",
          text: "By engaging Supply Negotiator for Recovery services, Client authorizes Supply Negotiator to contact Client's distributor(s) and represent Client's interests in seeking credits, refunds, or corrected pricing. Client may revoke this authorization in writing at any time, provided any Fees already earned under Section 3 remain due.",
        },
        { type: "heading", text: "2.3 Accuracy" },
        {
          type: "p",
          text: "Client represents that documents provided are accurate, and that Client has the right to share them with Supply Negotiator.",
        },
      ],
    },
    {
      heading: "3. Fees",
      blocks: [
        { type: "heading", text: "3.1 Audit Fee" },
        {
          type: "p",
          text: "Client pays a flat, one-time fee of $150 (\"Audit Fee\"), due upon engagement, in exchange for a written benchmarking report (\"Report\").",
        },
        { type: "heading", text: "3.2 Refund Condition" },
        {
          type: "p",
          text: "If the Audit does not identify any savings opportunities, the Audit Fee is refunded in full, no questions asked. Client retains the Report regardless of outcome.",
        },
        { type: "heading", text: "3.3 Recovery Fee" },
        {
          type: "p",
          text: "The Recovery Fee described below applies only once Supply Negotiator has recovered something for Client — not merely identified a potential saving. If Supply Negotiator identifies and confirms savings that are actually recovered, Client owes a Recovery Fee calculated as set out below, and the Audit Fee already paid is credited against the Recovery Fee owed (Client is never charged both in full).",
        },
        {
          type: "list",
          items: [
            "Hard credits or refunds issued by the distributor for past overcharges: 30% of the credited/refunded amount — Audit Fee credited against this first",
            "Locked go-forward rate correction on a specific item (old price vs. new negotiated price × expected volume, fixed 12-month term): 25% of the calculated savings over the defined 12-month term — Audit Fee credited against this first",
          ],
        },
        { type: "heading", text: "3.4 How Savings Are Calculated" },
        {
          type: "p",
          text: "Savings are determined at the point when a specific overcharge is identified and resolved — either through a direct credit/refund from the distributor, or through a corrected rate for a specific item calculated against projected volume over a defined term. Savings are not calculated by comparing total invoice amounts over time, since totals fluctuate due to market factors (seasonality, fuel costs, weather, etc.) unrelated to Supply Negotiator's work. Subsequent market-driven price changes do not alter savings already identified and confirmed.",
        },
        { type: "heading", text: "3.5 Payment Terms" },
        {
          type: "p",
          text: "Recovery Fees are due within fifteen (15) days of a credit being issued, a refund being received, or a corrected rate taking effect, as applicable.",
        },
        { type: "heading", text: "3.6 Multiple Locations" },
        {
          type: "p",
          text: "Supply Negotiator currently serves single-location independent restaurants under the flat fee model described above; volume-based or multi-location pricing tiers do not apply. If Client operates in more than one location, pricing will be agreed in writing before any Audit begins.",
        },
      ],
    },
    {
      heading: "4. No Guarantee of Recovery",
      blocks: [
        {
          type: "p",
          text: "Supply Negotiator will use commercially reasonable efforts to identify overcharges and pursue recovery but does not guarantee that any distributor will agree to issue a credit, refund, or corrected rate. Distributors are independent third parties not controlled by Supply Negotiator. If no savings are confirmed, the Client's sole remedy is the Audit Fee refund described in Section 3.2.",
        },
      ],
    },
    {
      heading: "5. Data Handling and Confidentiality",
      blocks: [
        {
          type: "p",
          text: "5.1 Supply Negotiator will treat Client's invoices and related documents as confidential and use them solely to perform the Services.",
        },
        {
          type: "p",
          text: "5.2 Supply Negotiator retains Client invoices and related documents only as long as reasonably necessary to perform the Services and, where a Recovery Fee applies, to substantiate the amount owed. Documents are stored using industry-standard encryption and access controls and are deleted within thirty (30) days after the engagement concludes, or sooner upon Client's written request, except where retention is required by law.",
        },
        {
          type: "p",
          text: "5.3 Supply Negotiator will not share Client's invoice data with other clients or third parties except distributors directly involved in a Recovery effort, or as required by law.",
        },
      ],
    },
    {
      heading: "6. Report Ownership",
      blocks: [
        {
          type: "p",
          text: "The Report is Client's to keep and use for any lawful purpose (including as leverage with a distributor or to evaluate alternative suppliers), regardless of whether Recovery is pursued or successful. Supply Negotiator retains the underlying benchmarking methodology and data as its own confidential and proprietary information.",
        },
      ],
    },
    {
      heading: "7. Client Responsibilities",
      blocks: [
        {
          type: "p",
          text: "Client agrees to provide accurate, complete invoices and related documents in a timely manner, and to respond to reasonable requests for clarification needed to complete the Audit or pursue Recovery.",
        },
      ],
    },
    {
      heading: "8. Disclaimer of Warranties",
      blocks: [
        {
          type: "p",
          text: "THE SERVICES AND REPORT ARE PROVIDED \"AS IS.\" SUPPLY NEGOTIATOR DOES NOT WARRANT THAT ALL OVERCHARGES WILL BE IDENTIFIED, THAT ANY DISTRIBUTOR WILL AGREE TO A CREDIT, REFUND, OR RATE CORRECTION, OR THAT BENCHMARK PRICING DATA REFLECTS EVERY MARKET CONDITION.",
        },
      ],
    },
    {
      heading: "9. Limitation of Liability",
      blocks: [
        {
          type: "p",
          text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, SUPPLY NEGOTIATOR'S TOTAL LIABILITY ARISING OUT OF THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE TOTAL FEES PAID BY CLIENT TO SUPPLY NEGOTIATOR IN THE 12 MONTHS PRECEDING THE CLAIM. SUPPLY NEGOTIATOR SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING DAMAGE TO CLIENT'S RELATIONSHIP WITH ANY DISTRIBUTOR ARISING FROM RECOVERY EFFORTS.",
        },
      ],
    },
    {
      heading: "10. Indemnification",
      blocks: [
        {
          type: "p",
          text: "Client agrees to indemnify Supply Negotiator against claims arising from inaccurate documents or information Client provides, or from Client's own communications with a distributor outside of Supply Negotiator's involvement.",
        },
      ],
    },
    {
      heading: "11. Term and Termination",
      blocks: [
        {
          type: "p",
          text: "Either party may terminate the engagement in writing at any time. Fees earned prior to termination under Section 3 remain due. The engagement concludes upon delivery of the Report and completion of any agreed Recovery effort. Supply Negotiator does not provide automatic ongoing monitoring; any continued or recurring service must be agreed separately in writing.",
        },
      ],
    },
    {
      heading: "12. Governing Law and Dispute Resolution",
      blocks: [
        {
          type: "p",
          text: "These Terms are governed by the laws of the State of Illinois, without regard to its conflict-of-laws rules. Any dispute arising out of or relating to these Terms or the Services shall be resolved by binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules, seated in Chicago, Illinois, except that either party may bring an individual claim in small-claims court. Claims must be brought in an individual capacity, and not as part of any class, collective, or representative action.",
        },
      ],
    },
    {
      heading: "13. Changes to These Terms",
      blocks: [
        {
          type: "p",
          text: "We may update these Terms from time to time. Continued use of the Services after changes are posted constitutes acceptance.",
        },
      ],
    },
    {
      heading: "14. Contact",
      blocks: [
        {
          type: "p",
          text: "Questions about these Terms can be directed to admin@supplynegotiator.com.",
        },
      ],
    },
  ],
};

export const privacy = {
  title: "Privacy Policy",
  path: "/privacy",
  effectiveDate: "July 10, 2026",
  updatedDate: "July 9, 2026",
  intro:
    "This Privacy Policy explains how Supply Negotiator (\"Supply Negotiator,\" \"we,\" \"us,\" or \"our\") collects, uses, and shares personal information in connection with the website at supplynegotiator.com (the \"Site\") and our invoice audit and recovery services (the \"Services\"). It applies to visitors to the Site and to the restaurants and businesses that use our Services (\"Clients,\" \"you,\" or \"your\"). This Policy is separate from, and complements, our Terms of Service.",
  sections: [
    {
      heading: "1. Information We Collect",
      blocks: [
        { type: "heading", text: "Information you provide directly" },
        {
          type: "list",
          items: [
            "Contact and business information: your name, restaurant name, email, phone, and the details you enter in our qualifying form.",
            "Documents you upload: supplier invoices and related documents (such as contracts and rebate agreements) that you provide so we can perform the Audit. These documents may contain business information and, in some cases, personal information.",
            "Payment information: the billing details used to collect the Audit Fee and any Recovery Fee, processed by our payment provider.",
          ],
        },
        {
          type: "p",
          bold: true,
          text: "As stated in our Terms of Service, we do not require or request access to your bank accounts or accounting systems.",
        },
        { type: "heading", text: "Information collected automatically" },
        {
          type: "p",
          text: "When you use the Site, we may automatically collect device and usage data such as IP address, browser type, pages viewed, and referring pages, through cookies and similar technologies.",
        },
        { type: "heading", text: "Information from third parties" },
        {
          type: "p",
          text: "During a recovery effort, we may receive correspondence or documents from your distributor(s) relating to your account, such as credit or refund confirmations.",
        },
      ],
    },
    {
      heading: "2. How We Use Information",
      blocks: [
        { type: "p", text: "We use personal information to:" },
        {
          type: "list",
          items: [
            "Perform the Audit — review your invoices, benchmark pricing and contract terms against market data, and identify potential overcharges, expired rates, missing rebates, and improper fees",
            "Pursue Recovery — where you authorize it, contact your distributor(s) to seek credits, refunds, or corrected pricing on your behalf",
            "Communicate with you about your audit, results, and support requests",
            "Process payments and administer the Audit Fee and any Recovery Fee",
            "Operate, maintain, secure, and improve the Site and Services",
            "Comply with legal obligations and enforce our Terms of Service",
          ],
        },
      ],
    },
    {
      heading: "3. How We Share Information",
      blocks: [
        {
          type: "p",
          bold: true,
          text: "Sharing invoices and pricing data with your distributor(s) is part of how recovery works.",
        },
        {
          type: "p",
          text: "When you authorize us to pursue recovery, we share the specific invoice, pricing, and account information reasonably necessary with your distributor(s) to seek credits, refunds, or corrected pricing on your behalf. We share only what is needed for that purpose.",
        },
        { type: "p", text: "We also share personal information:" },
        {
          type: "list",
          items: [
            "With service providers who process data on our behalf — for example, email, website hosting, our database, payment processing, and any analytics provider we use.",
            "For legal reasons — to comply with law, respond to lawful requests, or protect our rights, our clients, or the public",
            "In a business transfer — in connection with a merger, acquisition, or sale of assets",
          ],
        },
        {
          type: "p",
          text: "We treat your invoices and related documents as confidential, use them solely to provide the services, and do not share your invoice data with other clients or with third parties except the distributor(s) involved in a recovery effort, or as required by law.",
        },
        {
          type: "p",
          text: "We do not sell personal information for money, and we do not share personal information for cross-context behavioral advertising.",
        },
      ],
    },
    {
      heading: "4. Cookies and Tracking Technologies",
      blocks: [
        {
          type: "p",
          text: "We use cookies and similar technologies to operate the Site, remember preferences, and understand usage. You can control cookies through your browser settings.",
        },
      ],
    },
    {
      heading: "5. Data Retention",
      blocks: [
        {
          type: "p",
          text: "We keep personal information only for as long as it serves a purpose described in this Policy and then delete or de-identify it. How long we keep information depends on the type of data and why we hold it. The periods below are our general guidelines; we may keep information longer where necessary to comply with law, resolve disputes, enforce our agreements, or substantiate fees.",
        },
        { type: "heading", text: "Retention by category" },
        {
          type: "list",
          items: [
            "Invoices and engagement documents (supplier invoices, contracts, and related documents you provide): kept only as long as needed to perform the Services and, where a Recovery Fee applies, to substantiate the amount owed, and in any event deleted within 120 days after the engagement concludes, or sooner on written request, except where a document remains necessary to substantiate an unpaid or disputed Fee or where retention is required by law.",
            "Client account and contact records: kept for the duration of the relationship and for [3 years] after the last engagement.",
            "Financial and billing records (fee and payment records): kept for [7 years] to meet tax, accounting, and recordkeeping obligations.",
            "Marketing and newsletter data: kept until you unsubscribe, after which we retain a minimal suppression record so we can continue to honor your opt-out.",
            "Website usage and analytics data: kept for [14 months], or the default retention period of the analytics tool we use.",
            "General correspondence and support messages: kept for [2 years], unless part of an active matter or engagement.",
          ],
        },
        {
          type: "p",
          text: "Legal holds: we may retain any information for longer where required to do so by law, or where reasonably needed to establish, exercise, or defend legal claims.",
        },
      ],
    },
    {
      heading: "6. Data Security",
      blocks: [
        {
          type: "p",
          text: "We store invoices and related documents received through our Zoho Mail account in an access-controlled database, using industry-standard encryption in transit and access controls that limit access to authorized personnel. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
        },
      ],
    },
    {
      heading: "7. Your Rights and Choices",
      blocks: [
        { type: "heading", text: "Rights available to everyone" },
        {
          type: "list",
          items: [
            "Access — request a copy of the personal information we hold about you.",
            "Correction — ask us to fix information that is inaccurate or incomplete.",
            "Deletion — ask us to delete your personal information, subject to the legal exceptions described below.",
            "Opt out of marketing — unsubscribe from marketing emails at any time using the link in any message.",
            "Withdraw consent — where we rely on your consent, you may withdraw it at any time; this does not affect processing already carried out.",
          ],
        },
        { type: "heading", text: "How to exercise your rights" },
        {
          type: "list",
          items: [
            "Submit a request using the contact details in Section 11.",
            "We may need to verify your identity before acting on a request to protect your information.",
            "We aim to respond within the timeframe required by applicable law (generally within [45 days]) and will tell you if we need more time.",
            "We do not charge a fee for reasonable requests, and we will not discriminate against you for exercising your rights.",
            "An authorized agent may submit a request on your behalf with proof of authorization.",
          ],
        },
        { type: "heading", text: "California residents (CCPA/CPRA)" },
        { type: "p", text: "If you are a California resident, you have the right to:" },
        {
          type: "list",
          items: [
            "Know and access the categories and specific pieces of personal information we collect, the sources, the purposes for collecting it, and the categories of third parties we disclose it to.",
            "Delete personal information we hold about you, subject to legal exceptions.",
            "Correct inaccurate personal information.",
            "Opt out of the \"sale\" or \"sharing\" of personal information. As noted in Section 3, we do not sell personal information for money and do not share it for cross-context behavioral advertising.",
            "Limit the use of sensitive personal information to what is necessary to provide the Services.",
            "Not receiving discriminatory treatment for exercising any of these rights.",
          ],
        },
        {
          type: "p",
          text: "California's \"Shine the Light\" law (Civil Code § 1798.83) also lets California residents request information about disclosures of personal information to third parties for those third parties' own direct marketing.",
        },
        { type: "heading", text: "Other U.S. state privacy laws" },
        {
          type: "p",
          text: "Residents of states with comprehensive privacy laws — including Virginia, Colorado, Connecticut, Utah, Texas, Oregon, Montana, and a growing number of others — may have similar rights to access, correct, delete, and obtain a portable copy of their personal information, to opt out of targeted advertising, sale, and certain profiling, and to appeal a denial of a request.",
        },
      ],
    },
    {
      heading: "8. Children's Privacy",
      blocks: [
        {
          type: "p",
          text: "The Site and Services are intended for businesses and the adults who operate them and are not directed to children. We do not knowingly collect personal information from children. If you believe a child has provided us information, contact us and we will delete it.",
        },
      ],
    },
    {
      heading: "9. Third-Party Sites",
      blocks: [
        {
          type: "p",
          text: "The Site may link to third-party websites or tools we do not control. Their privacy practices are governed by their own policies, not this one.",
        },
      ],
    },
    {
      heading: "10. Changes to This Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Policy from time to time. We will post the updated version with a new \"Last Updated\" date, and continued use of the Site or Services after changes are posted constitutes acceptance of the revised Policy.",
        },
      ],
    },
    {
      heading: "11. Contact Us",
      blocks: [
        {
          type: "p",
          text: "For privacy questions or to exercise your rights, contact us at admin@supplynegotiator.com.",
        },
      ],
    },
  ],
};
