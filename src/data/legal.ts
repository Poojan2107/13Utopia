export type LegalPage = {
  slug: "privacy" | "terms" | "refund";
  title: string;
  deck: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
};

export const legalPages: LegalPage[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    deck: "How 13UTOPiA collects, uses, and protects information when you use our site or contact us.",
    updated: "2026-08-07",
    sections: [
      {
        heading: "Who we are",
        body: [
          "13UTOPiA is a growth and technology agency based in Ahmedabad, India. Contact: info@13utopia.com · +91 9924131397.",
          "Office: 1123, Iconic Shyamal, Shyamal Cross Roads, 132 Feet Ring Rd, Swinagar Society, Nehru Nagar, Shyamal, Ahmedabad, Gujarat 380015.",
        ],
      },
      {
        heading: "What we collect",
        body: [
          "When you use the Connect form or email us, we may receive your name, email, phone, company, and message content.",
          "Standard server and analytics logs may include IP address, browser type, pages viewed, and approximate location — used to run and improve the site.",
          "We do not knowingly collect personal data from children under 16.",
        ],
      },
      {
        heading: "How we use information",
        body: [
          "To respond to project inquiries and schedule discovery.",
          "To operate, secure, and improve 13utopia.com.",
          "To send follow-ups you request — not bulk spam.",
        ],
      },
      {
        heading: "Sharing",
        body: [
          "We do not sell your personal information.",
          "We may use trusted processors (email, hosting, analytics) under agreements that require appropriate care of data.",
          "We may disclose information if required by law or to protect rights, safety, or the integrity of our services.",
        ],
      },
      {
        heading: "Retention & rights",
        body: [
          "Inquiry records are kept as long as needed for the conversation and legitimate business records, then deleted or anonymized.",
          "You may ask to access, correct, or delete personal data we hold about you by emailing info@13utopia.com.",
        ],
      },
      {
        heading: "Changes",
        body: [
          "We may update this policy. The date at the top of this page reflects the latest revision. Continued use of the site after changes means you accept the updated policy.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Use",
    deck: "The ground rules for using 13utopia.com and engaging 13UTOPiA.",
    updated: "2026-08-07",
    sections: [
      {
        heading: "Acceptance",
        body: [
          "By using this website you agree to these terms. If you do not agree, do not use the site.",
        ],
      },
      {
        heading: "What this site is",
        body: [
          "13utopia.com is an informational and marketing site for 13UTOPiA’s services. Content is provided for general information and does not form a binding proposal until we issue a written scope or agreement.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "Brand marks, copy, design, and media on this site belong to 13UTOPiA or their respective owners. You may not copy, scrape, or reuse them commercially without written permission.",
          "Client logos and case materials appear with permission for portfolio context; rights remain with their owners.",
        ],
      },
      {
        heading: "Engagements",
        body: [
          "Project work is governed by a separate proposal, statement of work, or contract. Fees, timelines, deliverables, and IP transfer are defined there — not by browsing this site.",
        ],
      },
      {
        heading: "Disclaimer",
        body: [
          "We aim for accuracy but do not warrant that site content is complete or error-free. Outcomes described in case stories are contextual; results vary.",
          "To the fullest extent permitted by law, 13UTOPiA is not liable for indirect or consequential damages arising from use of this website.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "These terms are governed by the laws of India. Courts in Ahmedabad, Gujarat have exclusive jurisdiction for disputes arising from site use, unless a project contract says otherwise.",
        ],
      },
      {
        heading: "Contact",
        body: ["Questions: info@13utopia.com · +91 9924131397."],
      },
    ],
  },
  {
    slug: "refund",
    title: "Refund & Return Policy",
    deck: "How payments, cancellations, and refunds work for 13UTOPiA services.",
    updated: "2026-08-07",
    sections: [
      {
        heading: "Services, not goods",
        body: [
          "13UTOPiA provides professional services (strategy, design, development, marketing, and related work). There is no physical product return process.",
        ],
      },
      {
        heading: "Proposals & deposits",
        body: [
          "Engagements start after written agreement and any agreed deposit or milestone payment.",
          "Deposits are generally non-refundable once work has begun, unless your contract states otherwise.",
        ],
      },
      {
        heading: "Cancellations",
        body: [
          "Either party may pause or end an engagement as described in the signed agreement.",
          "You remain responsible for fees for work completed and approved up to the cancellation date, plus any non-cancellable third-party costs already incurred on your behalf.",
        ],
      },
      {
        heading: "Refunds",
        body: [
          "Refunds, if any, are handled case-by-case per the contract — for example unused prepaid retainers after a clean wind-down.",
          "Approved refunds are processed to the original payment method within a commercially reasonable time.",
        ],
      },
      {
        heading: "Questions",
        body: [
          "Billing or refund questions: info@13utopia.com · +91 9924131397. Include your company name and invoice or proposal reference.",
        ],
      },
    ],
  },
];

export function getLegalPage(slug: string) {
  return legalPages.find((p) => p.slug === slug);
}
