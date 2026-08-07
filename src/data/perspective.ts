export type PerspectivePage = {
  slug: string;
  title: string;
  deck: string;
  sections: { heading: string; body: string }[];
};

export const perspectiveHub = {
  title: "Perspective",
  deck: "Who we are, how we think, and why brands work with 13UTOPiA.",
};

export const perspectivePages: PerspectivePage[] = [
  {
    slug: "our-story",
    title: "Our Story",
    deck: "An Ahmedabad studio built to ship growth, craft, and systems — not slideware.",
    sections: [
      {
        heading: "Where we started",
        body: "13UTOPiA grew out of real client work in brand, web, and marketing — then expanded into products, AI, and engineering as the work demanded it.",
      },
      {
        heading: "Where we are",
        body: "India HQ in Shyamal, Ahmedabad. A full capability map under one roof: growth, branding, digital products, AI, cloud, and strategy.",
      },
      {
        heading: "What we refuse",
        body: "Mythology theatre, vanity metrics, and builds that look clever but don’t move the business. We prefer clear outcomes and shippable craft.",
      },
    ],
  },
  {
    slug: "vision",
    title: "Vision",
    deck: "Become the default growth-and-technology partner for ambitious brands that want execution, not noise.",
    sections: [
      {
        heading: "The standard",
        body: "Every engagement should leave the brand clearer, faster, and more capable than it was — digitally and operationally.",
      },
      {
        heading: "The horizon",
        body: "A studio where marketing psychology and serious engineering sit in the same room, so strategy doesn’t die in handoff.",
      },
    ],
  },
  {
    slug: "mission",
    title: "Mission",
    deck: "Help businesses thrive in the digital landscape through craft, systems, and accountable delivery.",
    sections: [
      {
        heading: "What we do daily",
        body: "Diagnose, design, build, and improve — across demand, brand, product, automation, and infrastructure.",
      },
      {
        heading: "How we measure ourselves",
        body: "Shipped work, clearer pipelines, stronger presence, and systems the client’s team can actually run.",
      },
    ],
  },
  {
    slug: "team",
    title: "Team",
    deck: "Operators across creative, growth, and engineering — assembled per engagement, led with clear ownership.",
    sections: [
      {
        heading: "How we’re organized",
        body: "Leadership sets direction. Creative Studio owns taste. Growth Specialists own demand. Engineering owns the stack. See Collective for how the rooms work.",
      },
      {
        heading: "Faces coming soon",
        body: "Named bios and photos publish as we lock portraits. Until then, the structure and contact path are live.",
      },
    ],
  },
  {
    slug: "why-13-utopia",
    title: "Why 13UTOPiA?",
    deck: "Creativity, strategy, and innovation only matter when they expand the brand — we treat every idea as something to execute, not decorate.",
    sections: [
      {
        heading: "One accountable studio",
        body: "Brand, growth, product, and tech don’t live in separate agencies fighting over the brief. We sequence them.",
      },
      {
        heading: "Outcome before ornament",
        body: "We care about craft. We care more that the craft converts, launches, or automates something real.",
      },
      {
        heading: "Built for compounders",
        body: "Clients who want the next release, the next channel, the next system — not a one-off brochure site.",
      },
    ],
  },
  {
    slug: "our-process",
    title: "Our Process",
    deck: "Discover → Define → Build → Launch → Grow. Same spine every time; depth scales with the problem.",
    sections: [
      {
        heading: "01 — Discover",
        body: "Goals, audience, constraints, and what “done” looks like before anyone opens Figma or an IDE.",
      },
      {
        heading: "02 — Define",
        body: "Positioning, scope, architecture, and success metrics. Ambiguity is expensive; we kill it early.",
      },
      {
        heading: "03 — Build",
        body: "Design and engineering in one loop. Reviews are frequent. Surprises are rare.",
      },
      {
        heading: "04 — Launch",
        body: "Performance, SEO basics, analytics, and a handoff the client’s team can own.",
      },
      {
        heading: "05 — Grow",
        body: "Measure, iterate, and compound. Optional retainers for growth, product, or care.",
      },
    ],
  },
  {
    slug: "global-presence",
    title: "Global Presence",
    deck: "Ahmedabad HQ — serving brands across India and international markets from one studio.",
    sections: [
      {
        heading: "India headquarters",
        body: "1123, Iconic Shyamal, Shyamal Cross Roads, 132 Feet Ring Rd, Swinagar Society, Nehru Nagar, Shyamal, Ahmedabad, Gujarat 380015.",
      },
      {
        heading: "Markets",
        body: "Work spans multiple countries and categories. Exact footprint figures update as we publish verified metrics.",
      },
      {
        heading: "How to reach us",
        body: "Connect for projects and discovery. WhatsApp and email for fast first contact.",
      },
    ],
  },
];

export function getPerspectivePage(slug: string) {
  return perspectivePages.find((p) => p.slug === slug);
}
