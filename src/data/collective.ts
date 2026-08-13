export type CollectivePage = {
  slug: string;
  title: string;
  deck: string;
  body: string;
  points: string[];
  room?: "leadership" | "creative-studio" | "growth-specialists" | "engineering";
};

export const collectiveHub = {
  title: "Collective",
  deck: "The rooms inside 13UTOPiA — leadership, craft, growth, engineering, and culture.",
};

export const collectivePages: CollectivePage[] = [
  {
    slug: "leadership",
    title: "Leadership",
    deck: "Direction, accountability, and client trust — the people who own the outcome.",
    body: "Leadership keeps craft and commercial reality in the same conversation. Decision rights are explicit. Scope doesn’t drift because someone was afraid to say no.",
    room: "leadership",
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
    body: "This is the craft room. Distinctive work, still 13UTOPiA — identity that survives the next campaign, interfaces that convert, motion that earns the scroll.",
    room: "creative-studio",
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
    body: "Growth here is a practice: channel mix, measurement, and honest loops. We report what moved, what didn’t, and what we’ll try next.",
    room: "growth-specialists",
    points: [
      "Acquisition strategy and experiments",
      "Content and channel systems",
      "Measurement and iteration loops",
      "Honest reporting — what worked, what didn’t, what’s next",
    ],
  },
  {
    slug: "engineering",
    title: "Engineering",
    deck: "Web, apps, automation, and cloud — the stack that makes strategy survive handoff.",
    body: "Engineering is how the brief becomes something the client can run. Product, cloud, and automation sit with the same quality bar as the brand work.",
    room: "engineering",
    points: [
      "Web, app, and platform builds",
      "APIs, cloud, and CI/CD that make releases boring",
      "Automation that respects guardrails",
      "Handoff with runbooks — not a zip file and silence",
    ],
  },
  {
    slug: "culture",
    title: "Culture",
    deck: "Serious about craft. Calm under deadlines. No mythology cosplay.",
    body: "We hire for judgment and follow-through. Clarity over theatre. Feedback as a habit. If you need a throne room, this isn’t it.",
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
