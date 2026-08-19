export const site = {
  name: "Vercel",
  title: "Agentic Infrastructure - Vercel",
  description: "The autonomous stack for every app and agent.",
};

export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
  badge?: string;
};

export type NavGroup = {
  title: string;
  links: NavLink[];
};

export const productMenu: NavGroup[] = [
  {
    title: "Agent Stack",
    links: [
      { href: "/ai-sdk", label: "AI SDK" },
      { href: "/ai-gateway", label: "AI Gateway" },
      { href: "/sandbox", label: "Sandbox" },
      { href: "/passport", label: "Passport" },
      { href: "/connect", label: "Connect" },
      { href: "/eve", label: "eve" },
    ],
  },
  {
    title: "Core Platform",
    links: [
      { href: "/security", label: "Security" },
      { href: "/cdn", label: "Content Delivery" },
      { href: "/fluid", label: "Fluid Compute" },
      { href: "/products/observability", label: "Observability" },
      { href: "/workflows", label: "Workflows" },
      { href: "/products/previews", label: "CI/CD" },
    ],
  },
  {
    title: "Tools",
    links: [
      { href: "/frameworks/nextjs", label: "Next.js" },
      { href: "/agent", label: "Vercel Agent" },
      { href: "/plugin", label: "Vercel Plugin" },
      { href: "/domains", label: "Domains", external: true },
      { href: "https://v0.app", label: "v0", external: true },
    ],
  },
];

export const resourceMenu: NavGroup[] = [
  {
    title: "Learn",
    links: [
      { href: "/docs", label: "Docs" },
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/changelog", label: "Changelog" },
      { href: "/kb", label: "Knowledge Base" },
    ],
  },
  {
    title: "Build",
    links: [
      { href: "/ai", label: "AI Apps" },
      { href: "/solutions/web-apps", label: "Web Apps" },
      { href: "/solutions/marketing-sites", label: "Marketing Sites" },
      { href: "/solutions/multi-tenant-saas", label: "Platforms" },
      { href: "/solutions/composable-commerce", label: "Commerce" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/customers", label: "Customers" },
      { href: "/marketplace", label: "Marketplace" },
      { href: "/partners/solution-partners", label: "Partner Finder" },
      { href: "/partners/aws", label: "AWS" },
      {
        href: "https://community.vercel.com/",
        label: "Community",
        external: true,
      },
    ],
  },
];

export const footerColumns: NavGroup[] = [
  {
    title: "Agent Stack",
    links: [
      { href: "/ai-sdk", label: "AI SDK" },
      { href: "/ai-gateway", label: "AI Gateway" },
      { href: "/sandbox", label: "Sandbox" },
      { href: "/workflows", label: "Workflows" },
      { href: "/connect", label: "Connect", badge: "New" },
      { href: "/passport", label: "Passport", badge: "New" },
      { href: "/eve", label: "eve", badge: "New" },
    ],
  },
  {
    title: "Core Platform",
    links: [
      { href: "/products/previews", label: "CI/CD" },
      { href: "/cdn", label: "Content Delivery" },
      { href: "/fluid", label: "Fluid Compute" },
      { href: "/products/observability", label: "Observability" },
    ],
  },
  {
    title: "Security",
    links: [
      { href: "/security", label: "Platform Security" },
      { href: "/security/web-application-firewall", label: "WAF" },
      { href: "/security/bot-management", label: "Bot Management" },
      { href: "/botid", label: "Bot ID" },
    ],
  },
  {
    title: "Tools",
    links: [
      { href: "/drop", label: "Vercel Drop", badge: "New" },
      { href: "/agent", label: "Vercel Agent" },
      { href: "/plugin", label: "Vercel Plugin", badge: "New" },
      { href: "/frameworks/nextjs", label: "Next.js" },
      { href: "/domains", label: "Domains" },
    ],
  },
  {
    title: "Frameworks",
    links: [
      { href: "/frameworks/nextjs", label: "Next.js" },
      { href: "/docs/frameworks/full-stack/nuxt", label: "Nuxt" },
      { href: "/docs/frameworks/full-stack/sveltekit", label: "SvelteKit" },
      { href: "/solutions/turborepo", label: "Turborepo" },
      { href: "/docs/frameworks", label: "All frameworks" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/docs", label: "Docs" },
      { href: "/blog", label: "Blog" },
      { href: "/changelog", label: "Changelog" },
      { href: "/kb", label: "Knowledge Base" },
      { href: "/academy", label: "Academy" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/customers", label: "Customers" },
      { href: "/marketplace", label: "Marketplace" },
      { href: "/templates", label: "Templates" },
      { href: "/partners/solution-partners", label: "Partner Finder" },
      { href: "/partners/aws", label: "Vercel + AWS" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/press", label: "Press" },
      { href: "/events", label: "Events" },
      { href: "/startups", label: "Startups" },
    ],
  },
];
