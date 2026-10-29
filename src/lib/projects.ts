import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "intellitwin-ai",
    title: "IntelliTwin AI",
    category: "AI & ML",
    tagline: "Cybersecurity Anomaly Detection & Explainable ML Platform",
    description:
      "A cybersecurity anomaly detection platform featuring machine-learning predictions, explainability metrics, and an API-driven microservice architecture.",
    longDescription:
      "IntelliTwin AI delivers proactive threat hunting and network telemetry analysis. Built with an asynchronous FastAPI backend and a Next.js interface, it utilizes XGBoost classification algorithms paired with SHAP (SHapley Additive exPlanations) values to clarify why a specific anomaly is flagged, bridging the gap between automated ML alerts and actionable SOC analyst workflows.",
    technologies: ["Python", "FastAPI", "Next.js", "PostgreSQL", "XGBoost", "SHAP", "Tailwind CSS"],
    features: {
      implemented: [
        "FastAPI REST endpoints for network telemetry ingestion",
        "XGBoost-powered anomaly scoring pipeline",
        "SHAP-based decision breakdown for ML explainability",
        "Relational event storage with PostgreSQL",
        "Responsive telemetry dashboards in Next.js",
      ],
      planned: [
        "Kafka stream ingestion for high-throughput enterprise logs",
        "Multi-tenant role-based access control (RBAC)",
        "Automated PDF incident report generation",
      ],
    },
    repository: "https://github.com/Vishwakarmasuraj333/IntelliTwin-AI",
    liveDemo: undefined, // Honest: live demo pending production environment deployment
    architectureHighlights: [
      "Asynchronous Python ML inference worker",
      "Explainability pipeline converting raw feature vectors to human-readable SHAP insights",
      "Modular client-side data visualizer with dynamic thresholding",
    ],
    role: "Full Stack & ML Integration Developer",
    status: "Active",
    accentColor: "#D6B477",
    image: "/images/projects/intellitwin.jpg",
  },
  {
    id: "nexora-social",
    title: "Nexora Social",
    category: "Social Media",
    tagline: "Centralized Publishing Workflows & Social Media Management",
    description:
      "A social media management application focused on post publishing workflows, multi-channel account management, and unified dashboarding.",
    longDescription:
      "Nexora Social addresses multi-platform fragmentation by unifying cross-channel content drafting, scheduling, and channel monitoring. Engineered with Next.js, Node.js, and modern UI engineering, it establishes structured draft review processes, queueing mechanics, and modular channel connectors.",
    technologies: ["Next.js", "React", "Node.js", "Tailwind CSS", "TypeScript", "REST APIs"],
    features: {
      implemented: [
        "Centralized content composer with multi-account preview",
        "Post scheduling timeline with status states (Draft, Scheduled, Published)",
        "Responsive interface engineered for desktop and tablet workflows",
        "Structured modular state management for draft lifecycles",
      ],
      planned: [
        "Direct OAuth2 integration with Twitter/X and LinkedIn APIs",
        "Media asset optimizer with automatic CDN delivery",
        "Unified engagement inbox with sentiment filtering",
      ],
    },
    repository: "https://github.com/Vishwakarmasuraj333/-Nexora-Social",
    liveDemo: undefined,
    architectureHighlights: [
      "Optimistic UI updates for high-responsiveness post staging",
      "Unified JSON schema representation of multi-network content constraints",
      "Accessible modal and drawer workflows for high-frequency actions",
    ],
    role: "Lead Full Stack Architect",
    status: "In Development",
    accentColor: "#E8D2A1",
    image: "/images/projects/nexora.jpg",
  },
  {
    id: "se-ranking",
    title: "SE Ranking Research Studio",
    category: "SEO & Web",
    tagline: "Search-Engine Ranking Intelligence & Competitor Research",
    description:
      "A search-engine research and administration interface with ranking research, competitor keyword analysis, and database-backed workflows.",
    longDescription:
      "A focused SEO workbench designed to track organic search performance, discover competitor keyword targets, and manage site audits. Features modular metric cards, search volume distribution graphs, and relational caching to minimize third-party API request overhead.",
    technologies: ["React", "JavaScript", "Node.js", "REST APIs", "Tailwind CSS", "Data Analytics"],
    features: {
      implemented: [
        "Keyword performance research workspace",
        "Competitor SERP comparison metrics and rank variation tracking",
        "Database-backed caching for queried keyword search volumes",
        "Interactive analytics graphs and responsive table filtering",
      ],
      planned: [
        "Automated backlink toxicity monitor",
        "Periodic automated email alert triggers on rank drops",
        "Exportable CSV/XLS audit sheets",
      ],
    },
    repository: "https://github.com/MamtaYdvTech1/SE-Ranking",
    liveDemo: undefined,
    architectureHighlights: [
      "Normalized client-side tabular datasets with multi-column sorting and filtering",
      "Throttled API dispatch layers to respect third-party rate limits",
      "Lightweight SVG chart rendering without heavy external charting bloat",
    ],
    role: "Core Web Developer & Data Interface Engineer",
    status: "Completed",
    accentColor: "#D6B477",
    image: "/images/projects/seranking.jpg",
  },
];

