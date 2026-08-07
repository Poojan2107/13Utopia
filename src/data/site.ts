export const site = {
  name: "13UTOPiA",
  legalName: "13UTOPiA",
  tagline: "Empowering businesses to thrive in the digital landscape.",
  headline: "Growth, craft, and systems for brands ready to scale.",
  description:
    "13UTOPiA is a growth and technology agency in Ahmedabad offering SEO, branding, web and app development, AI automation, cloud engineering, and strategy — Shyamal HQ.",
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
    { value: "200+", label: "Projects" },
    { value: "99%", label: "Success rate" },
    { value: "18+", label: "Countries" },
  ],
  social: {
    instagram: "https://www.instagram.com/13_utopia_/",
    linkedin: "https://www.linkedin.com/company/13utopia/",
    behance: "https://www.behance.net/13utopia",
    facebook: "https://www.facebook.com/13UTOPIA/",
    linktree: "https://linktr.ee/13utopiaa",
  },
} as const;

/** Live nav — routes that exist */
export const nav = [
  { href: "/", label: "Home" },
  { href: "/perspective", label: "Perspective" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/solutions", label: "Solutions" },
  { href: "/case-stories", label: "Case Stories" },
  { href: "/collective", label: "Collective" },
  { href: "/careers", label: "Careers" },
  { href: "/connect", label: "Connect" },
] as const;

export const processSteps = [
  { n: "01", title: "Discover", blurb: "Goals, audience, and constraints — clear before we design." },
  { n: "02", title: "Define", blurb: "Positioning, scope, and the system we’ll build against." },
  { n: "03", title: "Build", blurb: "Craft and engineering in the same loop — shippable quality." },
  { n: "04", title: "Launch", blurb: "Go live with performance, SEO basics, and a clean handoff." },
  { n: "05", title: "Grow", blurb: "Measure, iterate, and compound what already works." },
] as const;
