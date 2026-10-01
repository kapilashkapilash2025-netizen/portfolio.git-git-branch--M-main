export type PortfolioProject = {
  name: string;
  slug: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  ownershipLabel: string;
  visual: 'mission' | 'workflow' | 'risk' | 'map' | 'school' | 'leads' | 'sports' | 'finance';
  highlights?: string[];
  status?: string;
};

const owner = 'https://github.com/kapilashkapilash2025-netizen';

export const PROJECTS: PortfolioProject[] = [
  {
    name: 'Mars Research AI OS',
    slug: 'mars-research-ai-os',
    category: 'AI Research System',
    description: 'An early-stage research platform for Mars mission knowledge, scientific data, and reproducible workflows. The repository includes a Mission Control Simulator MVP and a local research console with source trails.',
    technologies: ['Python', 'TypeScript', 'pytest', 'Docker'],
    githubUrl: `${owner}/mars-research-ai-os`,
    featured: true,
    ownershipLabel: 'Built by Kapilash',
    visual: 'mission',
    highlights: ['Mission Control Simulator MVP', 'Local evidence search with source trails', 'Replayable event timeline and safety controls'],
    status: 'Early research platform',
  },
  {
    name: 'AXSONprime ProjectFlow',
    slug: 'axsonprime-projectflow',
    category: 'Developer Tool',
    description: 'A local-first dashboard for projects, tasks, bugs, quality gates, and GitHub workflow tracking. Its release-readiness assessment is documented and backed by tested domain logic.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'SQLite'],
    githubUrl: `${owner}/axsonprime-projectflow`,
    ownershipLabel: 'Built by Kapilash',
    visual: 'workflow',
    highlights: ['Local SQLite storage', 'Quality gates and release readiness', 'Project, task, and issue tracking'],
  },
  {
    name: 'AXON PRIME — Risk Guard Pro',
    slug: 'AXON-PRIME-Free-Hosting-Deployment',
    category: 'Full-Stack SaaS',
    description: 'A trading risk-management application with position sizing, daily loss controls, drawdown tracking, and a trade journal. The repository separates a Next.js frontend from an Express and Prisma API.',
    technologies: ['Next.js', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    githubUrl: `${owner}/AXON-PRIME-Free-Hosting-Deployment`,
    ownershipLabel: 'Built by Kapilash',
    visual: 'risk',
    highlights: ['Position-size calculator and daily loss guard', 'Drawdown tracking and trade journal', 'JWT authentication and Stripe subscription flow'],
  },
  {
    name: 'Sri Lanka Travel Explorer',
    slug: 'KSTM-Explorer',
    category: 'Travel Platform',
    description: 'A tourism platform for discovering places and hotels, planning trips, saving favourites, and finding emergency contacts. Map integration, authentication, and SOS behavior are identified in the repository as placeholders or simulations.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: `${owner}/KSTM-Explorer`,
    liveUrl: 'https://kstm-explorer.vercel.app',
    ownershipLabel: 'Built by Kapilash',
    visual: 'map',
    highlights: ['Place discovery and trip planning', 'Local-storage favourites and dashboard', 'Responsive interface with safety information'],
  },
  {
    name: 'VVC School Platform',
    slug: 'vvc-school-platform',
    category: 'Full-Stack Platform',
    description: 'A bilingual school website and administration platform with a content workflow, role-based admin tools, sports events, and a live scoreboard. The repository documents PostgreSQL and Prisma-backed data features.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    githubUrl: `${owner}/vvc-school-platform`,
    ownershipLabel: 'Built by Kapilash',
    visual: 'school',
    highlights: ['Tamil and English public content', 'Role-based CMS and review workflow', 'Sports events and scoreboard'],
  },
];

export const REPOSITORIES: PortfolioProject[] = [
  {
    name: 'USD Client Hunter AI',
    slug: 'USD_ClintHunter_26',
    category: 'Client Workflow Tool',
    description: 'A SaaS-style dashboard for organizing leads, scoring opportunities, and managing outreach drafts and follow-ups. Its README documents a Prisma and SQLite setup with configurable email providers.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'SQLite'],
    githubUrl: `${owner}/USD_ClintHunter_26`,
    ownershipLabel: 'Personal Project',
    visual: 'leads',
  },
  {
    name: 'School Sports Meet',
    slug: 'school-sports-meet',
    category: 'Full-Stack System',
    description: 'An administration system for student registration, event participation, scoring, results, and leaderboards, backed by a REST API.',
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL'],
    githubUrl: `${owner}/school-sports-meet`,
    liveUrl: 'https://school-sports-meet.vercel.app',
    ownershipLabel: 'Personal Project',
    visual: 'sports',
  },
  {
    name: 'Excellent Wealth',
    slug: 'excellent-wealth',
    category: 'Finance Software · In Development',
    description: 'An in-development, privacy-minded finance platform. The repository describes a Next.js frontend, Fastify API, shared packages, and a decimal-safe financial calculation engine.',
    technologies: ['TypeScript', 'Next.js', 'Fastify', 'Prisma', 'PostgreSQL'],
    githubUrl: `${owner}/excellent-wealth`,
    ownershipLabel: 'Personal Project',
    visual: 'finance',
    status: 'In development',
  },
];
