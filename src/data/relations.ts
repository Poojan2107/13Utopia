import { caseStories } from "@/data/case-stories";
import { solutions } from "@/data/solutions";

export function solutionsUsingService(pillarSlug: string, serviceSlug: string) {
  const href = `/capabilities/${pillarSlug}/${serviceSlug}`;
  return solutions.filter((s) => s.capabilityHrefs.some((c) => c.href === href));
}

export function solutionsUsingPillar(pillarSlug: string) {
  const prefix = `/capabilities/${pillarSlug}/`;
  return solutions.filter((s) => s.capabilityHrefs.some((c) => c.href.startsWith(prefix)));
}

export function casesUsingService(pillarSlug: string, serviceSlug: string) {
  const href = `/capabilities/${pillarSlug}/${serviceSlug}`;
  return caseStories.filter((c) => c.services.some((s) => s.href === href));
}

export function casesUsingSolution(slug: string) {
  return caseStories.filter((c) => c.solutionHref === `/solutions/${slug}`);
}

export const serviceAudience: Record<string, string> = {
  "growth-marketing/search-engine-optimization":
    "Founders and marketing leads who need organic demand that compounds — not a one-off audit PDF.",
  "growth-marketing/performance-marketing":
    "Teams ready to spend on paid channels with a kill/keep rule, not vanity ROAS screenshots.",
  "growth-marketing/social-media-marketing":
    "Brands that want a point of view on social — calendar, craft, and community, not random posts.",
  "growth-marketing/content-strategy":
    "Operators who need editorial systems that feed SEO, sales, and social from one narrative.",
  "growth-marketing/lead-generation":
    "Sales-led teams tired of junk inquiries — funnels and offers that hand over usable leads.",
  "growth-marketing/online-reputation-management":
    "Practices and brands whose search and review surface is now the first sales meeting.",
  "branding-creative/brand-strategy":
    "Founders who need positioning before pixels — so every asset has a reason to exist.",
  "branding-creative/brand-identity":
    "Teams launching or refreshing a mark that has to hold across site, campaign, and product.",
  "branding-creative/creative-direction":
    "Brands running campaigns, product, and content that currently look like three different companies.",
  "branding-creative/brand-experience":
    "Operators who care how the brand feels in every moment — digital, physical, launch day.",
  "branding-creative/ui-ux-design":
    "Product and marketing leads who need interfaces that convert without abandoning the brand.",
  "branding-creative/cgi-motion-graphics":
    "Campaign and product teams who need motion that stops the scroll and still serves the brief.",
  "branding-creative/visual-content":
    "Always-on brands that need still and motion packs without starting from zero every week.",
  "digital-products/website-development":
    "Teams replacing a template or stale site with something fast, SEO-ready, and on-brand.",
  "digital-products/mobile-app-development":
    "Founders with a clear job-to-be-done who need a reliable iOS / Android product, not a demo.",
  "digital-products/saas-development":
    "Teams building multi-tenant products that need auth, roles, and room to grow.",
  "digital-products/custom-software-solutions":
    "Operators whose tools don’t fit off-the-shelf — internal systems that match how work actually happens.",
  "digital-products/product-engineering":
    "Companies that need an embedded squad to ship roadmap — design, build, and quality in one loop.",
  "digital-products/ecommerce-solutions":
    "Retail and D2C teams who need discovery, trust, and checkout to work as one path.",
  "digital-products/mvp-development":
    "Founders who need the smallest credible product — learn fast without painting into a corner.",
  "ai-automation/ai-strategy-consulting":
    "Leaders who want to know where AI actually pays off — use cases, risk, and a sane pilot plan.",
  "ai-automation/ai-agent-development":
    "Ops and product teams ready for agents that take actions in real tools, with guardrails.",
  "ai-automation/generative-ai-solutions":
    "Teams that need assistants grounded in their brand and data — not generic chatbot theatre.",
  "ai-automation/workflow-automation":
    "Operators drowning in inbox handoffs between tools they already pay for.",
  "ai-automation/business-process-automation":
    "Functions with repeatable, high-cost processes that should not still live in spreadsheets.",
  "ai-automation/ai-chatbots":
    "Support and sales teams who need bots that answer well, escalate cleanly, and stay on-brand.",
  "ai-automation/machine-learning-solutions":
    "Teams with data and a clear ROI case — not a model for the sake of a model.",
  "cloud-engineering/frontend-backend-development":
    "Product owners who need clean interfaces and reliable services under one accountable build.",
  "cloud-engineering/full-stack-engineering":
    "Teams tired of frontend/backend ping-pong — one stack, one owner, faster shipping.",
  "cloud-engineering/cloud-architecture":
    "CTOs and founders who need cloud that fits the stage — scalable, observable, cost-aware.",
  "cloud-engineering/devops-ci-cd":
    "Engineering leads who want releases to be boring — pipelines, environments, and a process.",
  "cloud-engineering/api-development":
    "Teams exposing or consuming services that other systems have to trust.",
  "cloud-engineering/legacy-modernization":
    "Operators stuck on old stacks who cannot freeze the business for a big-bang rewrite.",
  "cloud-engineering/infrastructure-security":
    "Teams who need hardening, access, and secrets handled before the next audit or incident.",
  "strategy-consulting/digital-transformation":
    "Leadership running multi-workstream change who need owners, sequence, and outcomes.",
  "strategy-consulting/product-discovery":
    "Founders who want to validate the problem before burning budget on the wrong build.",
  "strategy-consulting/technology-consulting":
    "Operators choosing stack, vendors, or architecture without fashion-driven advice.",
  "strategy-consulting/growth-strategy":
    "CMOs and founders who need to know where growth will actually come from — sequenced.",
  "strategy-consulting/cto-advisory":
    "Founders who need senior technical judgment without a full-time hire yet.",
  "strategy-consulting/system-architecture-review":
    "Teams who need an honest look at risk, bottlenecks, and what to fix first.",
  "strategy-consulting/technical-due-diligence":
    "Investors and acquirers who need codebase, stack, and delivery risk scored clearly.",
};

export function getServiceAudience(pillarSlug: string, serviceSlug: string) {
  return (
    serviceAudience[`${pillarSlug}/${serviceSlug}`] ??
    "Teams that want a clear scope and a studio that ships — without juggling three vendors."
  );
}

export const pillarFaqs: Record<string, { question: string; answer: string }[]> = {
  "growth-marketing": [
    {
      question: "How do you pick channels?",
      answer:
        "We start from the offer, audience, and current leaks — then sequence SEO, paid, content, and leads. We don’t run every channel by default.",
    },
    {
      question: "What does reporting look like?",
      answer:
        "Kill/keep rules, qualified inquiries, and what we’ll try next. Vanity dashboards stay off the table.",
    },
  ],
  "branding-creative": [
    {
      question: "Do you only design logos?",
      answer:
        "No. Identity is a system — mark, type, color, UI, motion, and the rules that keep campaigns from drifting.",
    },
    {
      question: "Can brand work ship with the website?",
      answer:
        "Yes. That’s the usual path: narrative and identity first, then the site and campaign assets in the same loop.",
    },
  ],
  "digital-products": [
    {
      question: "What stack do you use?",
      answer:
        "Modern web by default (Next.js and related). Mobile, SaaS, and commerce stacks are chosen against the product, not fashion.",
    },
    {
      question: "Can you take over an existing product?",
      answer:
        "Yes — after a short architecture and quality look. We won’t pretend a rewrite is always the answer.",
    },
  ],
  "ai-automation": [
    {
      question: "Do you sell chatbots to everyone?",
      answer:
        "No. We map where automation actually saves time or money, then build with guardrails and a human checkpoint where judgment matters.",
    },
    {
      question: "Will this work with our current tools?",
      answer:
        "That’s the point of workflow work — connect what you already use. Greenfield only when the current stack can’t carry the job.",
    },
  ],
  "cloud-engineering": [
    {
      question: "Do you only build greenfield?",
      answer:
        "No. A lot of the work is hardening, APIs, CI/CD, and slicing legacy systems so the business keeps running.",
    },
    {
      question: "Who owns the cloud after launch?",
      answer:
        "You do, with runbooks and a clear handoff. Ongoing care is optional — not a lock-in surprise.",
    },
  ],
  "strategy-consulting": [
    {
      question: "Is this slideware?",
      answer:
        "No. Memos and roadmaps are meant to be executed — often by the same studio in a following phase.",
    },
    {
      question: "How short can an advisory engagement be?",
      answer:
        "A focused review or discovery can be days to a few weeks. Transformation programs are sequenced, not open-ended retainers by default.",
    },
  ],
};
