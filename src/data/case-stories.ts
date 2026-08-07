export type CaseStory = {
  slug: string;
  client: string;
  logo?: string;
  sector: string;
  summary: string;
  challenge: string;
  work: string[];
  result: string;
  services: { label: string; href: string }[];
  solutionHref?: string;
};

/** Stub stories from known clients — expand with real case media later */
export const caseStories: CaseStory[] = [
  {
    slug: "tanyas-dental-house",
    client: "Tanya's Dental House",
    logo: "/legacy/clients/named/tanyas-dental-house.webp",
    sector: "Healthcare",
    summary: "Digital presence and brand clarity for a dental practice competing on trust.",
    challenge: "Patients research online before they book — the practice needed a credible, clear digital face.",
    work: ["Brand and web direction", "Patient-facing messaging", "SEO-ready site structure"],
    result: "A cleaner digital front door aligned with how patients actually choose a clinic.",
    services: [
      { label: "Website Development", href: "/capabilities/digital-products/website-development" },
      { label: "Brand Identity", href: "/capabilities/branding-creative/brand-identity" },
    ],
    solutionHref: "/solutions/launch",
  },
  {
    slug: "mayur-dairy",
    client: "Mayur Dairy",
    logo: "/legacy/clients/named/mayur-dairy.png",
    sector: "FMCG / Dairy",
    summary: "Brand and digital support for a dairy business building recognition beyond the neighbourhood.",
    challenge: "Category noise is high — the brand needed distinctive presence across digital touchpoints.",
    work: ["Visual identity application", "Digital asset system", "Channel-ready creative"],
    result: "A more consistent brand footprint across the surfaces customers actually see.",
    services: [
      { label: "Brand Identity", href: "/capabilities/branding-creative/brand-identity" },
      { label: "Visual Content", href: "/capabilities/branding-creative/visual-content" },
    ],
    solutionHref: "/solutions/growth",
  },
  {
    slug: "sfw-the-gym",
    client: "SFW The Gym",
    logo: "/legacy/clients/named/sfw-the-gym.webp",
    sector: "Fitness",
    summary: "Stronger digital pull for a gym that sells results, not just memberships.",
    challenge: "Local fitness is crowded — differentiation and conversion needed to work harder online.",
    work: ["Creative direction", "Web / campaign assets", "Lead-oriented messaging"],
    result: "Clearer story and sharper calls to action for people ready to train.",
    services: [
      { label: "Social Media Marketing", href: "/capabilities/growth-marketing/social-media-marketing" },
      { label: "Creative Direction", href: "/capabilities/branding-creative/creative-direction" },
    ],
    solutionHref: "/solutions/growth",
  },
  {
    slug: "fujitec-express",
    client: "Fujitec Express",
    logo: "/legacy/clients/named/fujitec-express.png",
    sector: "Logistics",
    summary: "Professional digital presentation for an express logistics brand built on reliability.",
    challenge: "B2B buyers judge competence fast — the site and brand signals had to match operational seriousness.",
    work: ["Brand application", "Web presence", "Service messaging"],
    result: "A digital face that matches how the business actually delivers.",
    services: [
      { label: "Website Development", href: "/capabilities/digital-products/website-development" },
      { label: "Brand Experience", href: "/capabilities/branding-creative/brand-experience" },
    ],
    solutionHref: "/solutions/launch",
  },
  {
    slug: "diet-diary",
    client: "Diet Diary",
    logo: "/legacy/clients/named/diet-diary.webp",
    sector: "Health / Wellness",
    summary: "Product-minded digital work for a wellness brand speaking to daily habits.",
    challenge: "Wellness audiences are sceptical — tone, UX, and proof had to feel practical, not gimmicky.",
    work: ["UI/UX direction", "Content framing", "Conversion-minded layouts"],
    result: "A product story that reads as useful, not noisy.",
    services: [
      { label: "UI/UX Design", href: "/capabilities/branding-creative/ui-ux-design" },
      { label: "Content Strategy", href: "/capabilities/growth-marketing/content-strategy" },
    ],
    solutionHref: "/solutions/scale",
  },
  {
    slug: "zaign",
    client: "Zaign",
    logo: "/legacy/clients/named/zaign.webp",
    sector: "Design / Studio",
    summary: "Identity-forward digital presence for a studio that lives on visual credibility.",
    challenge: "A design brand’s own site is the portfolio — craft and clarity had to be non-negotiable.",
    work: ["Visual system", "Site composition", "Motion / still balance"],
    result: "A presence that sells the studio’s taste before the pitch deck opens.",
    services: [
      { label: "Brand Identity", href: "/capabilities/branding-creative/brand-identity" },
      { label: "Website Development", href: "/capabilities/digital-products/website-development" },
    ],
    solutionHref: "/solutions/launch",
  },
];

export function getCaseStory(slug: string) {
  return caseStories.find((c) => c.slug === slug);
}
