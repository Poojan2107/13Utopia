export type Solution = {
  slug: string;
  title: string;
  intent: string;
  deck: string;
  approach: string[];
  capabilityHrefs: { label: string; href: string }[];
  outcomes: string[];
};

export const solutions: Solution[] = [
  {
    slug: "growth",
    title: "Growth",
    intent: "More qualified demand",
    deck: "When visibility and pipeline need to compound — SEO, performance, content, and lead systems working as one.",
    approach: [
      "Diagnose where demand leaks (channel, offer, site, follow-up).",
      "Prioritize the highest-leverage channel mix for your stage.",
      "Install measurement so every experiment has a clear kill/keep rule.",
    ],
    capabilityHrefs: [
      { label: "Search Engine Optimization", href: "/capabilities/growth-marketing/search-engine-optimization" },
      { label: "Performance Marketing", href: "/capabilities/growth-marketing/performance-marketing" },
      { label: "Lead Generation", href: "/capabilities/growth-marketing/lead-generation" },
      { label: "Content Strategy", href: "/capabilities/growth-marketing/content-strategy" },
    ],
    outcomes: ["Clearer acquisition model", "Higher-quality inquiries", "Repeatable experiment cadence"],
  },
  {
    slug: "launch",
    title: "Launch",
    intent: "Go live with confidence",
    deck: "New brand, product, or site — positioning, design, and build sequenced so launch day is a release, not a scramble.",
    approach: [
      "Lock narrative and offer before pixels and code.",
      "Design and build against a fixed MVP scope.",
      "Ship with SEO, analytics, and a post-launch checklist.",
    ],
    capabilityHrefs: [
      { label: "Brand Strategy", href: "/capabilities/branding-creative/brand-strategy" },
      { label: "Brand Identity", href: "/capabilities/branding-creative/brand-identity" },
      { label: "Website Development", href: "/capabilities/digital-products/website-development" },
      { label: "MVP Development", href: "/capabilities/digital-products/mvp-development" },
    ],
    outcomes: ["Coherent brand + product story", "Shippable digital presence", "Clean handoff to growth"],
  },
  {
    slug: "scale",
    title: "Scale",
    intent: "Systems that keep up",
    deck: "When the team, product, or traffic outgrows ad-hoc ops — architecture, product engineering, and growth that won’t collapse under load.",
    approach: [
      "Separate what must scale now from what can wait.",
      "Strengthen the stack and delivery process in parallel.",
      "Protect conversion while throughput rises.",
    ],
    capabilityHrefs: [
      { label: "Product Engineering", href: "/capabilities/digital-products/product-engineering" },
      { label: "Cloud Architecture", href: "/capabilities/cloud-engineering/cloud-architecture" },
      { label: "Full Stack Engineering", href: "/capabilities/cloud-engineering/full-stack-engineering" },
      { label: "Growth Strategy", href: "/capabilities/strategy-consulting/growth-strategy" },
    ],
    outcomes: ["Stable release cadence", "Capacity without chaos", "Room for the next 10×"],
  },
  {
    slug: "modernize",
    title: "Modernize",
    intent: "Upgrade without freezing",
    deck: "Legacy sites, stacks, or workflows that slow the business — migrate and rebuild in slices, not a risky big bang.",
    approach: [
      "Audit risk, cost, and business dependency.",
      "Choose strangler patterns over all-or-nothing rewrites.",
      "Ship visible improvements while the old system still runs.",
    ],
    capabilityHrefs: [
      { label: "Legacy Modernization", href: "/capabilities/cloud-engineering/legacy-modernization" },
      { label: "Website Development", href: "/capabilities/digital-products/website-development" },
      { label: "System Architecture Review", href: "/capabilities/strategy-consulting/system-architecture-review" },
      { label: "DevOps & CI/CD", href: "/capabilities/cloud-engineering/devops-ci-cd" },
    ],
    outcomes: ["Lower maintenance drag", "Safer change velocity", "Modern UX without downtime drama"],
  },
  {
    slug: "automate",
    title: "Automate",
    intent: "Remove busywork",
    deck: "Agents, chatbots, and workflows that take work out of inboxes — grounded in your tools and guardrails.",
    approach: [
      "Map the highest-cost repeatable processes.",
      "Automate with human checkpoints where judgment matters.",
      "Measure time saved and error rate, not vanity bot demos.",
    ],
    capabilityHrefs: [
      { label: "Workflow Automation", href: "/capabilities/ai-automation/workflow-automation" },
      { label: "AI Agent Development", href: "/capabilities/ai-automation/ai-agent-development" },
      { label: "AI Chatbots", href: "/capabilities/ai-automation/ai-chatbots" },
      { label: "Business Process Automation", href: "/capabilities/ai-automation/business-process-automation" },
    ],
    outcomes: ["Fewer manual handoffs", "Faster response times", "Team focus on high-judgment work"],
  },
  {
    slug: "transform",
    title: "Transform",
    intent: "Change that sticks",
    deck: "Multi-workstream programs — product, tech, brand, and growth — with owners, sequencing, and outcomes leadership can track.",
    approach: [
      "Diagnose current state without theatre.",
      "Sequence bets so early wins fund later ambition.",
      "Embed advisory so decisions don’t stall mid-flight.",
    ],
    capabilityHrefs: [
      { label: "Digital Transformation", href: "/capabilities/strategy-consulting/digital-transformation" },
      { label: "CTO Advisory", href: "/capabilities/strategy-consulting/cto-advisory" },
      { label: "Product Discovery", href: "/capabilities/strategy-consulting/product-discovery" },
      { label: "Technology Consulting", href: "/capabilities/strategy-consulting/technology-consulting" },
    ],
    outcomes: ["Shared roadmap", "Accountable owners", "Progress you can show the board"],
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
