export const worlds = [
  {
    id: "create",
    word: "CREATE",
    href: "/capabilities/branding-creative",
    line: "Branding, Design, Motion & Experiences.",
    crafts: [
      "Brand strategy",
      "Identity",
      "Creative direction",
      "Brand experience",
      "UI/UX",
      "CGI",
      "Motion",
      "Visual content",
    ],
  },
  {
    id: "build",
    word: "BUILD",
    href: "/capabilities/digital-products",
    line: "Digital Products, AI, Cloud & Engineering.",
    crafts: [
      "Websites",
      "Apps",
      "SaaS",
      "AI agents",
      "Automation",
      "Custom software",
      "Cloud",
      "DevOps",
      "APIs",
      "Product engineering",
    ],
  },
  {
    id: "grow",
    word: "GROW",
    href: "/capabilities/growth-marketing",
    line: "Marketing, SEO, Growth & Strategy.",
    crafts: [
      "SEO",
      "Performance marketing",
      "Social",
      "Content",
      "Lead generation",
      "Growth strategy",
      "Digital transformation",
      "CTO advisory",
    ],
  },
] as const;

export const outcomeOrder = ["launch", "growth", "scale", "modernize", "automate", "transform"] as const;

export const outcomeMeaning: Record<(typeof outcomeOrder)[number], string> = {
  launch: "Bring something new into the world.",
  growth: "Attention, customers, revenue.",
  scale: "Systems that hold growth.",
  modernize: "Replace what is outdated.",
  automate: "Remove unnecessary manual work.",
  transform: "Change how the business operates.",
};

export const homeProcess = [
  { n: "01", title: "Question", blurb: "Challenge the obvious." },
  { n: "02", title: "Imagine", blurb: "Find the unreasonable possibility." },
  { n: "03", title: "Define", blurb: "Turn the idea into strategy." },
  { n: "04", title: "Create", blurb: "Design the experience." },
  { n: "05", title: "Build", blurb: "Engineer the system." },
  { n: "06", title: "Grow", blurb: "Launch, measure, optimize." },
] as const;

export const unreasonablePairs = [
  {
    normal: "Build a website.",
    unreasonable: "Build a digital ecosystem that changes how the company sells.",
  },
  {
    normal: "Run marketing.",
    unreasonable: "Build a growth engine.",
  },
] as const;

export const featuredCaseSlugs = ["tanyas-dental-house", "fujitec-express", "sfw-the-gym"] as const;

export const collectiveLine =
  "A collective of strategists, designers, engineers, creators and growth thinkers.";

export const supportingLine = "We imagine beyond the obvious. We build beyond the expected.";
