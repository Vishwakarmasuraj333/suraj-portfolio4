import { EducationItem, JourneyMilestone } from "@/types";

export const educationList: EducationItem[] = [
  {
    degree: "Master of Science in Information Technology (M.Sc. IT)",
    institution: "Abhinav College",
    location: "Bhayandar, Maharashtra, India",
    period: "2025 — Present",
    status: "Pursuing",
    description:
      "Advanced postgraduate study focused on distributed systems, enterprise software architecture, machine learning implementations, and advanced database engineering.",
    highlights: [
      "Specializing in modern full-stack system architecture and backend engineering",
      "Researching ML-driven anomaly detection architectures and real-time inference",
      "Hands-on architectural modeling and high-throughput application design",
    ],
  },
  {
    degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
    institution: "Abhinav College",
    location: "Bhayandar, Maharashtra, India",
    period: "2022 — 2025",
    status: "Completed",
    description:
      "Comprehensive undergraduate foundation in computer science, software engineering principles, algorithms, data structures, and database management systems.",
    highlights: [
      "Graduated with core competencies in JavaScript, Python, relational databases, and web protocols",
      "Led technical project teams during practical laboratory capstones",
      "Built full-stack web prototypes and established software engineering best practices",
    ],
  },
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "2025 — Present",
    title: "AI Integrations & Microservice Architecture",
    category: "AI & Cloud",
    description:
      "Engineered IntelliTwin AI, bridging machine learning models (XGBoost, SHAP) with an asynchronous FastAPI microservice and Next.js frontend for cybersecurity anomaly detection.",
    keyLearnings: [
      "Translating complex ML explainability math (SHAP) into consumable UI insights",
      "Asynchronous request processing with Python & FastAPI",
      "Relational data persistence with PostgreSQL for network telemetry logs",
    ],
    technologies: ["Python", "FastAPI", "Next.js", "PostgreSQL", "XGBoost", "SHAP"],
  },
  {
    year: "2024 — 2025",
    title: "Full Stack Mastery & Production UI Systems",
    category: "Full Stack Milestone",
    description:
      "Architected Nexora Social and SE Ranking Research Studio. Explored scalable state management, multi-platform dashboarding, client-side caching, and search engine analytics.",
    keyLearnings: [
      "Engineered decoupled UI component libraries with Tailwind CSS & TypeScript",
      "Built resilient RESTful API consumers with optimistic state updates",
      "Implemented performant data visualization without bloated third-party charting libraries",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "REST APIs"],
  },
  {
    year: "2023 — 2024",
    title: "Backend Engineering, Databases & Authentication",
    category: "Architecture",
    description:
      "Deepened backend expertise with Node.js, Express, and database modeling across MongoDB and SQL. Implemented defensive validation, JWT session management, and clean RESTful design.",
    keyLearnings: [
      "Designed normalized relational schemas and flexible document models",
      "Secured API endpoints with token-based authentication and HTTP-only cookies",
      "Defensive server-side data validation using Zod",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "MySQL", "JWT", "Postman"],
  },
  {
    year: "2022 — 2023",
    title: "Core Foundations & Modern Web Development",
    category: "Foundations",
    description:
      "Established foundational mastery in modern JavaScript (ES6+), semantic HTML5, responsive CSS3 architectures, Git version control, and component-driven React engineering.",
    keyLearnings: [
      "DOM lifecycle, asynchronous JavaScript, and event delegation",
      "Fluid responsive design principles and mobile-first layouts",
      "Collaborative version control and GitHub branch management",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Git", "GitHub", "React"],
  },
];

