import { SkillItem } from "@/types";

export const skillCategories = [
  "All",
  "Frontend",
  "Backend",
  "Databases",
  "Tools",
  "Additional",
] as const;

export const skills: SkillItem[] = [
  // FRONTEND
  {
    name: "React",
    category: "Frontend",
    description: "Component architecture, custom hooks, state synchronization, and reactive UI patterns.",
    iconName: "Atom",
    featured: true,
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "App Router, Server Components (RSC), SSR/SSG workflows, API routes, and SEO optimization.",
    iconName: "Layers",
    featured: true,
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    description: "Modern asynchronous workflows, closures, event-loop mechanics, and DOM performance.",
    iconName: "FileCode2",
    featured: true,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first CSS architecture, bespoke design systems, responsive grids, and design tokens.",
    iconName: "Palette",
    featured: true,
  },
  {
    name: "HTML5",
    category: "Frontend",
    description: "Semantic structures, accessible landmarks, microdata, and SEO-compliant markup.",
    iconName: "Code",
  },
  {
    name: "CSS3",
    category: "Frontend",
    description: "Flexbox, CSS Grid, custom properties, modern animations, and cross-browser styling.",
    iconName: "Layout",
  },
  {
    name: "Responsive Design",
    category: "Frontend",
    description: "Fluid clamp() typography, mobile-first layouts, touch targets, and viewport adaptability.",
    iconName: "Smartphone",
    featured: true,
  },

  // BACKEND
  {
    name: "Node.js",
    category: "Backend",
    description: "Event-driven runtime for high-throughput network services and asynchronous backend processing.",
    iconName: "Server",
    featured: true,
  },
  {
    name: "Express.js",
    category: "Backend",
    description: "Modular routing, custom middleware pipelines, error handling, and session management.",
    iconName: "Cpu",
    featured: true,
  },
  {
    name: "REST APIs",
    category: "Backend",
    description: "Idempotent resource modeling, consistent status codes, pagination, and clean contracts.",
    iconName: "Network",
    featured: true,
  },
  {
    name: "Authentication",
    category: "Backend",
    description: "JWT session tokens, HTTP-only cookie security, password hashing with bcrypt, and OAuth.",
    iconName: "ShieldCheck",
    featured: true,
  },
  {
    name: "Server-side Validation",
    category: "Backend",
    description: "Defensive input sanitization, schema enforcement with Zod, and payload error handling.",
    iconName: "CheckCircle2",
  },

  // DATABASES
  {
    name: "MongoDB",
    category: "Databases",
    description: "Document data modeling, schema indexing, aggregation pipelines, and Mongoose ODM.",
    iconName: "Database",
    featured: true,
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    description: "ACID transactions, relational constraints, foreign keys, and performant indexing.",
    iconName: "TableProperties",
    featured: true,
  },
  {
    name: "MySQL",
    category: "Databases",
    description: "Relational schema engineering, stored queries, joins, and database normalization.",
    iconName: "HardDrive",
  },

  // TOOLS
  {
    name: "Git",
    category: "Tools",
    description: "Version control, branching workflows, clean commit hygiene, and merge resolution.",
    iconName: "GitBranch",
    featured: true,
  },
  {
    name: "GitHub",
    category: "Tools",
    description: "Repository management, Pull Request collaboration, issues tracking, and GitHub Actions.",
    iconName: "Github",
    featured: true,
  },
  {
    name: "GitLab",
    category: "Tools",
    description: "Source code repository hosting and continuous integration concepts.",
    iconName: "GitMerge",
  },
  {
    name: "VS Code",
    category: "Tools",
    description: "Configured developer environment with linting, debugging, and productivity tooling.",
    iconName: "TerminalSquare",
  },
  {
    name: "Postman",
    category: "Tools",
    description: "API testing, automated collection runners, header verification, and mocking responses.",
    iconName: "Send",
  },

  // ADDITIONAL TECHNOLOGIES
  {
    name: "TypeScript",
    category: "Additional",
    description: "Static typing, generics, strict type safety, union types, and interface contracts.",
    iconName: "FileCode",
    featured: true,
  },
  {
    name: "Python",
    category: "Additional",
    description: "Scripting, algorithmic workflows, data preprocessing, and backend service development.",
    iconName: "Binary",
    featured: true,
  },
  {
    name: "FastAPI",
    category: "Additional",
    description: "High-performance Python asynchronous APIs with Pydantic typing and OpenAPI docs.",
    iconName: "Zap",
    featured: true,
  },
  {
    name: "Strapi",
    category: "Additional",
    description: "Headless CMS content architecture, role permissions, and content modeling.",
    iconName: "Boxes",
  },
  {
    name: "Testing & Deployment",
    category: "Additional",
    description: "Unit testing fundamentals, environment configuration, and cloud hosting workflows.",
    iconName: "CloudUpload",
  },
];

