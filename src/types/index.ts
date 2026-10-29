export type Theme = "dark" | "light";

export interface Project {
  id: string;
  title: string;
  category: "AI & ML" | "Social Media" | "SEO & Web" | "Full Stack";
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: {
    implemented: string[];
    planned?: string[];
  };
  repository: string;
  liveDemo?: string;
  architectureHighlights: string[];
  role: string;
  status: "Active" | "Completed" | "In Development";
  accentColor: string;
  image?: string;
}

export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Databases" | "Tools" | "Additional";
  description: string;
  iconName: string;
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: "Completed" | "Pursuing";
  description: string;
  highlights: string[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  category: "Architecture" | "Full Stack Milestone" | "AI & Cloud" | "Foundations";
  description: string;
  keyLearnings: string[];
  technologies: string[];
}

export interface GitHubStats {
  username: string;
  name: string;
  publicRepos: number;
  followers: number;
  following: number;
  avatarUrl: string;
  profileUrl: string;
  bio: string;
  recentRepos: Array<{
    name: string;
    description: string | null;
    stars: number;
    forks: number;
    url: string;
    language: string | null;
    updatedAt: string;
  }>;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

