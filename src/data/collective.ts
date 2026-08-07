export type CollectivePage = {
  slug: string;
  title: string;
  deck: string;
  points: string[];
};

export const collectiveHub = {
  title: "Collective",
  deck: "The rooms inside 13UTOPiA — leadership, craft, growth, and culture.",
};

export const collectivePages: CollectivePage[] = [
  {
    slug: "leadership",
    title: "Leadership",
    deck: "Direction, accountability, and client trust — the people who own the outcome.",
    points: [
      "Sets engagement goals and decision rights",
      "Keeps craft and commercial reality in the same conversation",
      "Escalation path when scope or risk shifts",
      "Protects the brief from scope creep and vanity work",
    ],
  },
  {
    slug: "creative-studio",
    title: "Creative Studio",
    deck: "Brand, UI, motion, and CGI — taste with a system behind it.",
    points: [
      "Identity and art direction",
      "UI/UX and digital experience",
      "CGI, motion, and campaign assets",
      "Design systems that survive the next campaign",
    ],
  },
  {
    slug: "growth-specialists",
    title: "Growth Specialists",
    deck: "SEO, performance, content, and leads — demand with discipline.",
    points: [
      "Acquisition strategy and experiments",
      "Content and channel systems",
      "Measurement and iteration loops",
      "Honest reporting — what worked, what didn’t, what’s next",
    ],
  },
  {
    slug: "culture",
    title: "Culture",
    deck: "Serious about craft. Calm under deadlines. No mythology cosplay.",
    points: [
      "Clarity over theatre",
      "Ship, learn, improve",
      "Respect for client time and team energy",
      "Feedback as a habit, not a quarterly event",
    ],
  },
];

export function getCollectivePage(slug: string) {
  return collectivePages.find((p) => p.slug === slug);
}
