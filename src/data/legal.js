// Terms is still placeholder boilerplate, NOT reviewed by a lawyer — replace
// before launch. Privacy is the counsel-drafted text supplied by the client.
//
// Both docs share one content-block schema so LegalPage.jsx has a single
// render path: each section is a heading plus an ordered list of blocks —
// { type: "p", text, bold? }, { type: "list", items }, or
// { type: "heading", text } for a sub-heading within a section.

export const terms = {
  title: "Terms & Conditions",
  path: "/terms",
  intro:
    "These Terms & Conditions (\"Terms\") govern your use of the supplynegotiator website and invoice audit services (the \"Service\"). By booking a call, submitting invoices, or otherwise using the Service, you agree to these Terms.",
  sections: [
    {
      heading: "1. Description of Service",
      blocks: [
        {
          type: "p",
          text: "supplynegotiator audits a restaurant's supplier invoices, benchmarks pricing against market data, and helps identify and recover overcharges. The Service includes a one-time audit fee and, where savings are found, a percentage-based recovery fee, as described on our Pricing page.",
        },
      ],
    },
    {
      heading: "2. Fees & Payment",
      blocks: [
        {
          type: "p",
          text: "The audit fee is due upfront and is fully refundable if no savings are identified and confirmed. Where savings are confirmed, the audit fee is credited against the applicable recovery fee, and the remaining recovery fee becomes due as described in our Guarantee pages.",
        },
      ],
    },
    {
      heading: "3. Client Responsibilities",
      blocks: [
        {
          type: "p",
          text: "You agree to provide accurate and complete invoice data, and to respond to reasonable requests for clarification during the audit process. supplynegotiator is not responsible for inaccuracies arising from incomplete or incorrect information provided by the client.",
        },
      ],
    },
    {
      heading: "4. Intellectual Property",
      blocks: [
        {
          type: "p",
          text: "The written report produced from your audit is yours to keep and use as you see fit. supplynegotiator retains ownership of its underlying benchmarking methodology, pricing data, and analysis tools.",
        },
      ],
    },
    {
      heading: "5. Limitation of Liability",
      blocks: [
        {
          type: "p",
          text: "The Service is provided on a best-efforts basis. supplynegotiator makes no guarantee of a specific dollar recovery amount and is not liable for a distributor's refusal to honor a credit, refund, or corrected rate.",
        },
      ],
    },
    {
      heading: "6. Termination",
      blocks: [
        {
          type: "p",
          text: "Either party may end an engagement at any time. Fees already earned under the terms of the Guarantee remain payable.",
        },
      ],
    },
    {
      heading: "7. Governing Law",
      blocks: [{ type: "p", text: "[Placeholder: state/country of governing law to be confirmed before launch.]" }],
    },
    {
      heading: "8. Changes to These Terms",
      blocks: [
        {
          type: "p",
          text: "We may update these Terms from time to time. Continued use of the Service after changes are posted constitutes acceptance of the revised Terms.",
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
          text: "For privacy questions or to exercise your rights, contact us at privacy@supplynegotiator.com.",
        },
        { type: "p", bold: true, text: "[Confirm the privacy contact address you want to publish.]" },
      ],
    },
  ],
};
