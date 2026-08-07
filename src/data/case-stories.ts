export type CaseStory = {
  slug: string;
  client: string;
  logo?: string;
  cover: string;
  gallery?: string[];
  sector: string;
  year?: string;
  summary: string;
  challenge: string;
  work: string[];
  result: string;
  outcomes?: string[];
  services: { label: string; href: string }[];
  solutionHref?: string;
};

/**
 * Case stories with legacy portfolio stills as cover/gallery.
 * Stills are studio work samples — swap for client-approved project media when locked.
 */
export const caseStories: CaseStory[] = [
  {
    slug: "tanyas-dental-house",
    client: "Tanya's Dental House",
    logo: "/legacy/clients/named/tanyas-dental-house.webp",
    cover: "/legacy/portfolio/Website-Showcase.webp",
    gallery: ["/legacy/portfolio/project-1.webp", "/legacy/portfolio/Untitled-design-51.webp"],
    sector: "Healthcare",
    year: "2024",
    summary: "Digital presence and brand clarity for a dental practice competing on trust.",
    challenge:
      "Patients research online before they book. The practice needed a credible digital face — clear services, calm visuals, and a path to enquiry that didn’t feel like a hard sell.",
    work: [
      "Brand and web direction aligned to clinical trust",
      "Patient-facing messaging and service hierarchy",
      "SEO-ready site structure and enquiry paths",
    ],
    result: "A cleaner digital front door aligned with how patients actually choose a clinic.",
    outcomes: ["Clearer service story", "Stronger enquiry path", "Search-ready structure"],
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
    cover: "/legacy/portfolio/Portfolio-Image-1.webp",
    gallery: ["/legacy/portfolio/Untitled-design-39.webp", "/legacy/portfolio/project-2.webp"],
    sector: "FMCG / Dairy",
    year: "2024",
    summary: "Brand and digital support for a dairy business building recognition beyond the neighbourhood.",
    challenge:
      "Category noise is high. Mayur Dairy needed distinctive presence across packaging-adjacent digital surfaces and social — without losing the warmth of a local brand.",
    work: [
      "Visual identity application across digital touchpoints",
      "Channel-ready creative system",
      "Asset library for campaigns and retail",
    ],
    result: "A more consistent brand footprint across the surfaces customers actually see.",
    outcomes: ["Unified visual system", "Faster campaign turnaround", "Stronger shelf-to-screen link"],
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
    cover: "/legacy/portfolio/home_portfolio1.webp",
    gallery: ["/legacy/portfolio/Untitled-design-52.webp", "/legacy/portfolio/project-4.webp"],
    sector: "Fitness",
    year: "2025",
    summary: "Stronger digital pull for a gym that sells results, not just memberships.",
    challenge:
      "Local fitness is crowded. Differentiation and conversion had to work harder online — bold creative, clear offers, and messaging that speaks to people ready to train.",
    work: [
      "Creative direction for campaigns and social",
      "Web and lead-oriented assets",
      "Offer framing built around outcomes",
    ],
    result: "Clearer story and sharper calls to action for people ready to train.",
    outcomes: ["Sharper campaign voice", "Stronger lead CTAs", "Consistent visual punch"],
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
    cover: "/legacy/portfolio/Portfolio-Image-2.webp",
    gallery: ["/legacy/portfolio/project-5.webp", "/legacy/portfolio/Untitled-design-17.webp"],
    sector: "Logistics",
    year: "2024",
    summary: "Professional digital presentation for an express logistics brand built on reliability.",
    challenge:
      "B2B buyers judge competence in seconds. Site structure, brand signals, and service copy had to match operational seriousness — not look like a generic courier template.",
    work: [
      "Brand application for digital and sales surfaces",
      "Web presence with clear service hierarchy",
      "B2B messaging for reliability and coverage",
    ],
    result: "A digital face that matches how the business actually delivers.",
    outcomes: ["Credible B2B presence", "Clearer service map", "Sales-ready assets"],
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
    cover: "/legacy/portfolio/Untitled-design-3-scaled.webp",
    gallery: ["/legacy/portfolio/Untitled-design-6-scaled.webp", "/legacy/portfolio/cgi04.webp"],
    sector: "Health / Wellness",
    year: "2025",
    summary: "Product-minded digital work for a wellness brand speaking to daily habits.",
    challenge:
      "Wellness audiences are sceptical. Tone, UX, and proof had to feel practical — helpful routines and clear value, not gimmicky health theatre.",
    work: [
      "UI/UX direction for product and content surfaces",
      "Content framing that respects scepticism",
      "Conversion-minded layouts without hard-sell noise",
    ],
    result: "A product story that reads as useful, not noisy.",
    outcomes: ["Calmer UX voice", "Clearer habit story", "Stronger conversion hierarchy"],
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
    cover: "/legacy/portfolio/Untitled-design-30-3.webp",
    gallery: ["/legacy/portfolio/Untitled-design-30-4.webp", "/legacy/portfolio/Untitled-design-45-qr5c6uske2i2nmr6q0a4om8lff29hokmcoizue4oc0.webp"],
    sector: "Design / Studio",
    year: "2025",
    summary: "Identity-forward digital presence for a studio that lives on visual credibility.",
    challenge:
      "A design brand’s own site is the portfolio. Craft, composition, and pacing had to sell taste before the pitch deck opened.",
    work: [
      "Visual system and art direction",
      "Site composition and portfolio rhythm",
      "Balance of motion, stills, and whitespace",
    ],
    result: "A presence that sells the studio’s taste before the pitch deck opens.",
    outcomes: ["Portfolio-grade composition", "Tighter brand system", "Memorable first impression"],
    services: [
      { label: "Brand Identity", href: "/capabilities/branding-creative/brand-identity" },
      { label: "Website Development", href: "/capabilities/digital-products/website-development" },
    ],
    solutionHref: "/solutions/launch",
  },
  {
    slug: "arteve",
    client: "Arteve",
    logo: "/legacy/clients/named/arteve.webp",
    cover: "/legacy/portfolio/Untitled-design-47-1-qr5ckpwv73hbwkm6ri10ymacv0q60ym39axtobkmk0.webp",
    gallery: ["/legacy/portfolio/Untitled-design-18.png", "/legacy/portfolio/Untitled-design-19.png"],
    sector: "Lifestyle / Brand",
    year: "2024",
    summary: "Brand and digital polish for a lifestyle label that needed presence with restraint.",
    challenge:
      "Lifestyle brands drown in lookalike feeds. Arteve needed a distinct visual and web language that felt elevated without becoming inaccessible.",
    work: [
      "Identity refinement and digital application",
      "Campaign and product imagery direction",
      "Web storytelling with calm hierarchy",
    ],
    result: "A quieter, sharper brand surface that holds up next to louder competitors.",
    outcomes: ["Elevated brand read", "Cohesive campaign look", "Cleaner digital story"],
    services: [
      { label: "Brand Identity", href: "/capabilities/branding-creative/brand-identity" },
      { label: "Visual Content", href: "/capabilities/branding-creative/visual-content" },
    ],
    solutionHref: "/solutions/growth",
  },
  {
    slug: "pehnaava",
    client: "Pehnaava",
    logo: "/legacy/clients/named/pehnaava.png",
    cover: "/legacy/portfolio/Untitled-design-40.png",
    gallery: ["/legacy/portfolio/Untitled-design-4.png", "/legacy/portfolio/Untitled-design-5.png"],
    sector: "Fashion / Retail",
    year: "2025",
    summary: "Fashion-forward digital work for a label selling through look, feel, and trust.",
    challenge:
      "Fashion buyers decide on vibe first. The brand needed product presentation, campaign rhythm, and a site path that converts interest into enquiry or purchase.",
    work: [
      "Lookbook and campaign creative direction",
      "E-commerce / catalogue presentation",
      "Social and site visual consistency",
    ],
    result: "A digital shelf that matches the garment quality the brand wants to be known for.",
    outcomes: ["Stronger lookbook system", "Clearer shop path", "Consistent social-to-site handoff"],
    services: [
      { label: "Creative Direction", href: "/capabilities/branding-creative/creative-direction" },
      { label: "Website Development", href: "/capabilities/digital-products/website-development" },
    ],
    solutionHref: "/solutions/launch",
  },
];

export function getCaseStory(slug: string) {
  return caseStories.find((c) => c.slug === slug);
}
