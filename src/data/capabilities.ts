export type Service = {
  slug: string;
  title: string;
  deck: string;
  deliverables: string[];
};

export type Pillar = {
  slug: string;
  title: string;
  blurb: string;
  services: Service[];
};

export const capabilities: Pillar[] = [
  {
    slug: "growth-marketing",
    title: "Growth & Marketing",
    blurb: "Demand, visibility, and reputation systems that compound.",
    services: [
      {
        slug: "search-engine-optimization",
        title: "Search Engine Optimization",
        deck: "Rank for the queries that matter — technical foundations, content, and authority built for lasting organic growth.",
        deliverables: ["Technical & on-page SEO", "Keyword and content roadmap", "Authority & internal linking", "Measurement and iteration"],
      },
      {
        slug: "performance-marketing",
        title: "Performance Marketing",
        deck: "Paid acquisition that respects CAC — creative, targeting, and testing loops aimed at qualified demand.",
        deliverables: ["Channel strategy (Meta, Google, more)", "Creative testing system", "Landing alignment", "ROAS / CPA reporting"],
      },
      {
        slug: "social-media-marketing",
        title: "Social Media Marketing",
        deck: "Presence with a point of view — content and community that support brand and pipeline.",
        deliverables: ["Channel strategy", "Content calendar & production", "Community ops", "Growth experiments"],
      },
      {
        slug: "content-strategy",
        title: "Content Strategy",
        deck: "Editorial systems that educate buyers and feed SEO, social, and sales — not random posts.",
        deliverables: ["Audience & narrative map", "Pillar content plan", "Distribution model", "Governance & cadence"],
      },
      {
        slug: "lead-generation",
        title: "Lead Generation",
        deck: "Funnels and offers designed to capture intent and hand sales something usable.",
        deliverables: ["Offer & funnel design", "Lead magnets / landing flows", "CRM-ready capture", "Nurture basics"],
      },
      {
        slug: "online-reputation-management",
        title: "Online Reputation Management",
        deck: "Monitor, respond, and shape how your brand shows up when people search and review you.",
        deliverables: ["Listening & review coverage", "Response playbooks", "Crisis readiness", "Positive proof amplification"],
      },
    ],
  },
  {
    slug: "branding-creative",
    title: "Branding & Creative",
    blurb: "Identity and visual systems that make the work unmistakable.",
    services: [
      {
        slug: "brand-strategy",
        title: "Brand Strategy",
        deck: "Positioning, audience, and narrative — so every asset has a reason to exist.",
        deliverables: ["Positioning & differentiation", "Audience insights", "Messaging architecture", "Brand narrative"],
      },
      {
        slug: "brand-identity",
        title: "Brand Identity",
        deck: "Marks, type, color, and rules that hold together across every touchpoint.",
        deliverables: ["Logo system", "Type & color", "Guidelines", "Core templates"],
      },
      {
        slug: "creative-direction",
        title: "Creative Direction",
        deck: "A coherent visual and verbal direction across campaigns, product, and content.",
        deliverables: ["Art direction", "Campaign concepts", "Asset systems", "Vendor / production oversight"],
      },
      {
        slug: "brand-experience",
        title: "Brand Experience",
        deck: "How the brand feels in digital and physical moments — consistent, intentional, memorable.",
        deliverables: ["Journey mapping", "Experience principles", "Touchpoint design", "Launch kits"],
      },
      {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        deck: "Interfaces that are clear, convertible, and on-brand — from flows to high-fidelity UI.",
        deliverables: ["UX flows & wireframes", "UI systems", "Prototypes", "Handoff-ready specs"],
      },
      {
        slug: "cgi-motion-graphics",
        title: "CGI & Motion Graphics",
        deck: "Immersive 3D and motion that make products and stories stop the scroll.",
        deliverables: ["CGI / 3D production", "Motion design", "Ad & social cuts", "Brand films"],
      },
      {
        slug: "visual-content",
        title: "Visual Content",
        deck: "Still and motion assets built for campaigns, sites, and always-on channels.",
        deliverables: ["Campaign visuals", "Social packs", "Web imagery", "Template kits"],
      },
    ],
  },
  {
    slug: "digital-products",
    title: "Digital Products",
    blurb: "Websites, apps, and platforms designed to ship and scale.",
    services: [
      {
        slug: "website-development",
        title: "Website Development",
        deck: "Fast, SEO-ready sites that express the brand and convert — not template leftovers.",
        deliverables: ["IA & UX", "Design system build", "Next.js / modern stack", "Perf & SEO basics"],
      },
      {
        slug: "mobile-app-development",
        title: "Mobile App Development",
        deck: "Native-quality mobile products with clear UX and reliable engineering.",
        deliverables: ["Product scoping", "iOS / Android builds", "API integration", "Store-ready delivery"],
      },
      {
        slug: "saas-development",
        title: "SaaS Development",
        deck: "Multi-tenant products with auth, billing hooks, and room to grow.",
        deliverables: ["Architecture", "Core product build", "Admin & roles", "Observability basics"],
      },
      {
        slug: "custom-software-solutions",
        title: "Custom Software Solutions",
        deck: "Internal tools and bespoke systems that fit how your business actually works.",
        deliverables: ["Requirements & UX", "Custom apps", "Integrations", "Support handover"],
      },
      {
        slug: "product-engineering",
        title: "Product Engineering",
        deck: "Ongoing product teams that ship roadmap — design, build, and quality in one loop.",
        deliverables: ["Squad embedding", "Sprint delivery", "QA & release", "Tech debt control"],
      },
      {
        slug: "ecommerce-solutions",
        title: "E-Commerce Solutions",
        deck: "Stores and commerce experiences optimized for discovery, trust, and checkout.",
        deliverables: ["Storefront UX", "Catalog & checkout", "Payments & ops", "Growth instrumentation"],
      },
      {
        slug: "mvp-development",
        title: "MVP Development",
        deck: "Ship the smallest credible product — learn fast without painting yourself into a corner.",
        deliverables: ["Scope cut to signal", "Rapid build", "Launch checklist", "Learning backlog"],
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    blurb: "Agents, workflows, and intelligence that remove busywork and unlock speed.",
    services: [
      {
        slug: "ai-strategy-consulting",
        title: "AI Strategy & Consulting",
        deck: "Where AI actually pays off in your stack — use cases, risks, and a sane roadmap.",
        deliverables: ["Opportunity map", "Build vs buy", "Data readiness", "Pilot plan"],
      },
      {
        slug: "ai-agent-development",
        title: "AI Agent Development",
        deck: "Agents that take actions in your tools — research, ops, support, and sales assist.",
        deliverables: ["Agent design", "Tool integrations", "Guardrails", "Eval & monitoring"],
      },
      {
        slug: "generative-ai-solutions",
        title: "Generative AI Solutions",
        deck: "Content, code, and knowledge assistants grounded in your brand and data.",
        deliverables: ["RAG / knowledge systems", "Content assistants", "Brand voice controls", "Human-in-the-loop"],
      },
      {
        slug: "workflow-automation",
        title: "Workflow Automation",
        deck: "Connect the tools you already use so handoffs stop living in inboxes.",
        deliverables: ["Process mapping", "Automation builds", "Error handling", "Ops docs"],
      },
      {
        slug: "business-process-automation",
        title: "Business Process Automation",
        deck: "End-to-end process redesign and automation for teams drowning in repeatable work.",
        deliverables: ["Process audit", "Automation blueprint", "Implementation", "KPI tracking"],
      },
      {
        slug: "ai-chatbots",
        title: "AI Chatbots",
        deck: "Support and sales bots that answer well, escalate cleanly, and stay on-brand.",
        deliverables: ["Conversation design", "Bot build", "CRM / helpdesk hooks", "Analytics"],
      },
      {
        slug: "machine-learning-solutions",
        title: "Machine Learning Solutions",
        deck: "Predictive and classification models where the data and ROI justify the build.",
        deliverables: ["Problem framing", "Model pipeline", "Deployment", "Monitoring"],
      },
    ],
  },
  {
    slug: "cloud-engineering",
    title: "Cloud & Engineering",
    blurb: "Solid foundations — apps, APIs, cloud, and security that won’t buckle under growth.",
    services: [
      {
        slug: "frontend-backend-development",
        title: "Frontend & Backend Development",
        deck: "Application engineering across the stack — clean interfaces and reliable services.",
        deliverables: ["Frontend apps", "API / services", "Auth & data layers", "Quality gates"],
      },
      {
        slug: "full-stack-engineering",
        title: "Full Stack Engineering",
        deck: "One accountable build from UI to database — fewer handoffs, faster shipping.",
        deliverables: ["End-to-end features", "Shared standards", "CI-ready code", "Docs & handover"],
      },
      {
        slug: "cloud-architecture",
        title: "Cloud Architecture",
        deck: "Cloud shapes that fit your stage — scalable, observable, and cost-aware.",
        deliverables: ["Architecture design", "Cloud setup", "Cost & scale plan", "Diagrams & runbooks"],
      },
      {
        slug: "devops-ci-cd",
        title: "DevOps & CI/CD",
        deck: "Pipelines and environments that make releases boring — in a good way.",
        deliverables: ["CI/CD pipelines", "Environments", "Observability basics", "Release process"],
      },
      {
        slug: "api-development",
        title: "API Development",
        deck: "APIs that other systems can trust — clear contracts, auth, and documentation.",
        deliverables: ["API design", "Implementation", "Auth & rate limits", "Docs & SDKs"],
      },
      {
        slug: "legacy-modernization",
        title: "Legacy Modernization",
        deck: "Move old systems forward without a big-bang rewrite that freezes the business.",
        deliverables: ["Assessment", "Strangler / migration plan", "Incremental rebuild", "Risk controls"],
      },
      {
        slug: "infrastructure-security",
        title: "Infrastructure & Security",
        deck: "Hardening, access, and infrastructure practices that protect the product and the brand.",
        deliverables: ["Security baseline", "Access & secrets", "Infra hardening", "Audit support"],
      },
    ],
  },
  {
    slug: "strategy-consulting",
    title: "Strategy & Consulting",
    blurb: "Clarity before spend — product, tech, and growth decisions with teeth.",
    services: [
      {
        slug: "digital-transformation",
        title: "Digital Transformation",
        deck: "Multi-workstream change programs with priorities, owners, and measurable outcomes.",
        deliverables: ["Current-state diagnosis", "Roadmap", "Operating model", "Execution coaching"],
      },
      {
        slug: "product-discovery",
        title: "Product Discovery",
        deck: "Validate problems and solutions before you burn budget on the wrong build.",
        deliverables: ["Research & interviews", "Opportunity scoring", "Prototypes", "Build / kill decisions"],
      },
      {
        slug: "technology-consulting",
        title: "Technology Consulting",
        deck: "Stack, vendor, and architecture choices grounded in your constraints — not fashion.",
        deliverables: ["Tech assessment", "Recommendations", "RFP / vendor support", "Decision memos"],
      },
      {
        slug: "growth-strategy",
        title: "Growth Strategy",
        deck: "Where growth will actually come from — channels, offers, and experiments sequenced.",
        deliverables: ["Growth model", "Channel priorities", "Experiment backlog", "KPI framework"],
      },
      {
        slug: "cto-advisory",
        title: "CTO Advisory",
        deck: "Fractional technical leadership for founders who need senior judgment without a full-time hire.",
        deliverables: ["Tech leadership cadence", "Hiring support", "Architecture reviews", "Vendor oversight"],
      },
      {
        slug: "system-architecture-review",
        title: "System Architecture Review",
        deck: "An honest look at what you have — risks, bottlenecks, and what to fix first.",
        deliverables: ["Architecture audit", "Risk register", "Remediation plan", "Executive summary"],
      },
      {
        slug: "technical-due-diligence",
        title: "Technical Due Diligence",
        deck: "Investor- and acquirer-grade diligence on codebase, stack, and delivery risk.",
        deliverables: ["Code & stack review", "Team & process review", "Risk scoring", "Diligence report"],
      },
    ],
  },
];

export function getPillar(slug: string) {
  return capabilities.find((p) => p.slug === slug);
}

export function getService(pillarSlug: string, serviceSlug: string) {
  const pillar = getPillar(pillarSlug);
  if (!pillar) return null;
  const service = pillar.services.find((s) => s.slug === serviceSlug);
  if (!service) return null;
  return { pillar, service };
}

export function allCapabilityPaths() {
  return capabilities.flatMap((p) => [
    `/capabilities/${p.slug}`,
    ...p.services.map((s) => `/capabilities/${p.slug}/${s.slug}`),
  ]);
}
