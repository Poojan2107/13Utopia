export const site = {
  name: "13UTOPiA",
  legalName: "13UTOPiA",
  tagline: "Be Unreal. Be Unreasonable.",
  headline: "Be Unreal. Be Unreasonable.",
  description:
    "A creative technology and growth company building brands, products and systems for ambitious organizations.",
  url: "https://13utopia.com",
  email: "info@13utopia.com",
  phone: "+91 9924131397",
  phoneTel: "+919924131397",
  whatsapp: "https://wa.me/919924131397",
  address: {
    lines: [
      "1123, Iconic Shyamal, Shyamal Cross Roads",
      "132 Feet Ring Rd, Swinagar Society, Nehru Nagar",
      "Shyamal, Ahmedabad, Gujarat 380015",
    ],
    locality: "Ahmedabad",
    region: "Gujarat",
    postalCode: "380015",
    country: "India",
  },
  metrics: [
    { value: "200+", label: "Projects shipped" },
    { value: "Ongoing", label: "Client partnerships" },
    { value: "18+", label: "Countries reached" },
  ],
  metricsNote: "Studio figures — verified metrics publish when audited.",
  social: {
    instagram: "https://www.instagram.com/13_utopia_/",
    linkedin: "https://www.linkedin.com/company/13utopia/",
    behance: "https://www.behance.net/13utopia",
    facebook: "https://www.facebook.com/13UTOPIA/",
    linktree: "https://linktr.ee/13utopiaa",
  },
} as const;

/** Primary nav — brief C20. Careers lives inside Collective. */
export const nav = [
  { href: "/case-stories", label: "Work" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/solutions", label: "Solutions" },
  { href: "/perspective", label: "Perspective" },
  { href: "/collective", label: "Collective" },
  { href: "/connect", label: "Connect" },
] as const;

export const cta = {
  persistent: "Start something unreasonable",
  persistentHref: "/connect",
  discovery: "Schedule discovery",
  discoveryHref: "/connect",
  heroPrimary: "Enter Utopia",
  heroSecondary: "Start a project",
  final: "Let's make it real",
} as const;

export const processSteps = [
  { n: "01", title: "Question", blurb: "Challenge the obvious." },
  { n: "02", title: "Imagine", blurb: "Find the unreasonable possibility." },
  { n: "03", title: "Define", blurb: "Turn the idea into strategy." },
  { n: "04", title: "Create", blurb: "Design the experience." },
  { n: "05", title: "Build", blurb: "Engineer the system." },
  { n: "06", title: "Grow", blurb: "Launch, measure, optimize." },
] as const;
