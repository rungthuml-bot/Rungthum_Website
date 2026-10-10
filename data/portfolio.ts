import React from "react";
import {
  FiGithub,
  FiMail,
  FiArrowUpRight,
  FiTerminal,
  FiCode,
  FiLayers,
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiFigma,
  SiMongodb,
  SiPrisma,
  SiLinux,
} from "react-icons/si";

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────
export interface NavLink {
  number: string;
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  category: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  type: string;
  year: string;
  featured?: boolean;
  summary: string;
  description: string;
  architectureHighlights: string[];
  tags: string[];
  github?: string;
  demo?: string;
}

export interface Milestone {
  period: string;
  role: string;
  organization: string;
  type: "Education" | "Engineering Milestone" | "Project Lab";
  location: string;
  details: string[];
  technologies: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  icon: React.ComponentType<{ className?: string }>;
}

// ──────────────────────────────────────────────
// Data
// ──────────────────────────────────────────────

export const siteConfig = {
  name: "Rungthum",
  role: "Software Engineer & Builder",
  title: "Rungthum — Software Engineering & Systems Portfolio",
  description:
    "Modern editorial portfolio of Rungthum, showcasing full-stack web applications, TypeScript architecture, and software design principles.",
  url: "https://github.com/rungthuml-bot/rungthum_website",
  ogImage: "/og-image.png",
  locale: "th_TH",
};

export const navLinks: NavLink[] = [
  { number: "01", label: "Selected Works", href: "#projects" },
  { number: "02", label: "About & Perspective", href: "#about" },
  { number: "03", label: "Technical Stack", href: "#skills" },
  { number: "04", label: "Milestones", href: "#experience" },
  { number: "05", label: "Contact", href: "#contact" },
];

export const heroData = {
  label: "PORTFOLIO / 2026",
  greeting: "สวัสดีครับ, I'm",
  name: "Rungthum",
  role: "Software Engineer & Builder",
  status: "Available for internships & software roles",
  summary:
    "Engineering modern, performant web applications with a focus on type safety, clean systems design, and restrained digital aesthetics.",
  focusAreas: [
    "Full-Stack Web Systems",
    "TypeScript & React Ecosystem",
    "API & Relational Data Design",
  ],
  cta: {
    primary: { label: "Explore Selected Works", href: "#projects" },
    secondary: { label: "Direct Inquiries", href: "#contact" },
  },
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Next.js Modular Commerce Engine",
    category: "Full-Stack Application",
    type: "Architecture Case Study",
    year: "2025",
    featured: true,
    summary:
      "A modular, type-safe commerce platform emphasizing server-side orchestration, atomic state transitions, and responsive inventory workflows.",
    description:
      "Engineered with Next.js App Router and Prisma ORM to explore transactional integrity, relational schema design with PostgreSQL, and component reusability. Emphasizes fast initial render times and predictable cart states.",
    architectureHighlights: [
      "Relational product & inventory data models with PostgreSQL & Prisma",
      "Server actions for streamlined mutations and reduced client bundle size",
      "Accessible design system built on custom semantic CSS tokens",
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/rungthuml-bot/rungthum_website",
  },
  {
    id: "02",
    title: "Collaborative Task & Workspace Engine",
    category: "Real-Time Systems",
    type: "Engineering Exploration",
    year: "2024",
    featured: false,
    summary:
      "Interactive kanban and workflow system focused on low-latency state synchronization and intuitive drag-and-drop mechanics.",
    description:
      "Explores reactive frontend patterns, optimistic UI updates, and decoupled state management. Built to investigate asynchronous data flows and keyboard-accessible task reordering.",
    architectureHighlights: [
      "Optimistic UI updates for instant interaction feedback",
      "Decoupled store architecture separating board state from view layers",
      "Containerized dev environment with Docker for reproducible setups",
    ],
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Docker"],
    github: "https://github.com/rungthuml-bot",
  },
  {
    id: "03",
    title: "Intelligent Content & Semantic API Service",
    category: "Backend & Machine Learning",
    type: "API & Data Pipeline",
    year: "2024",
    featured: false,
    summary:
      "Asynchronous content parsing pipeline utilizing Python and FastAPI for automated text structuring and semantic processing.",
    description:
      "Designed to handle background generation queues, rate limiting, and structured JSON outputs for client consumption. Evaluates schema validation and asynchronous Python workers.",
    architectureHighlights: [
      "Asynchronous worker design with FastAPI and Pydantic validation",
      "Structured schema generation ensuring type contracts across client/server",
      "PostgreSQL integration for persistent execution logs and history",
    ],
    tags: ["Python", "FastAPI", "React", "PostgreSQL", "REST API"],
    github: "https://github.com/rungthuml-bot",
  },
];

export const aboutData = {
  sectionNumber: "02",
  title: "About & Engineering Philosophy",
  affiliation: "Faculty of Science / Khon Kaen University (KKU)",
  introduction:
    "I am a software engineering practitioner and student at Khon Kaen University, passionate about crafting reliable digital systems that bridge computational logic with clear, thoughtful user experience.",
  principles: [
    {
      title: "Clarity Over Cleverness",
      body: "Code is read far more often than it is written. I prioritize well-named abstractions, static typing, and predictable data flow over obfuscated short-cuts.",
    },
    {
      title: "Holistic Systems Thinking",
      body: "A reliable interface begins with deliberate data structures. Designing schemas, network contracts, and frontend state together creates resilient products.",
    },
    {
      title: "Relentless Craft & Discipline",
      body: "From keyboard navigation to fine border treatments and zero runtime errors, genuine craftsmanship shows in details that users feel even before they notice.",
    },
  ],
  interests: [
    "Modern Web Architecture (Next.js, Server Components)",
    "Relational Databases & Data Modeling (PostgreSQL, Prisma)",
    "Distributed Web Tooling & Developer Experience",
    "Minimalist Editorial & Typographic Interface Design",
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    description:
      "Type-safe component design, responsive layouts, and modern rendering patterns.",
    skills: [
      { name: "React 18", category: "Core", icon: SiReact },
      { name: "Next.js 14 (App Router)", category: "Framework", icon: SiNextdotjs },
      { name: "TypeScript", category: "Language", icon: SiTypescript },
      { name: "Tailwind CSS", category: "Styling", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend & Persistence",
    description:
      "Server-side execution, RESTful API design, and structured relational persistence.",
    skills: [
      { name: "Node.js", category: "Runtime", icon: SiNodedotjs },
      { name: "Python", category: "Language", icon: SiPython },
      { name: "PostgreSQL", category: "Database", icon: SiPostgresql },
      { name: "Prisma ORM", category: "Data Access", icon: SiPrisma },
      { name: "MongoDB", category: "NoSQL", icon: SiMongodb },
    ],
  },
  {
    title: "Tools & Infrastructure",
    description:
      "Version control workflows, containerization, and interface prototyping.",
    skills: [
      { name: "Git & GitHub", category: "VCS", icon: SiGit },
      { name: "Docker", category: "Containers", icon: SiDocker },
      { name: "Linux / Shell", category: "OS", icon: SiLinux },
      { name: "Figma", category: "Interface Design", icon: SiFigma },
    ],
  },
];

export const milestones: Milestone[] = [
  {
    period: "2023 — Present",
    role: "Computer Science & Software Development",
    organization: "Khon Kaen University (KKU)",
    type: "Education",
    location: "Khon Kaen, Thailand",
    details: [
      "Rigorous foundations in algorithms, data structures, relational database systems, and object-oriented programming.",
      "Active team participation in academic software engineering projects and continuous independent coursework.",
    ],
    technologies: ["TypeScript", "Python", "PostgreSQL", "C++", "Data Structures"],
  },
  {
    period: "2024 — Present",
    role: "Full-Stack Web Engineering & Systems Exploration",
    organization: "Independent Practice & Open Source Labs",
    type: "Engineering Milestone",
    location: "Remote / Independent",
    details: [
      "Engineered full-stack applications utilizing Next.js App Router, React Server Components, and Prisma ORM.",
      "Researched performance optimization, strict TypeScript contracts, and accessible editorial UI systems.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma"],
  },
  {
    period: "2024",
    role: "Backend & API Service Architecture",
    organization: "Laboratory & Applied Projects",
    type: "Project Lab",
    location: "Khon Kaen, Thailand",
    details: [
      "Built asynchronous API pipelines using Python and Node.js with database migrations and containerized setups.",
      "Implemented structured validation contracts and relational persistence schemas.",
    ],
    technologies: ["Node.js", "Python", "FastAPI", "Docker", "PostgreSQL"],
  },
];

export const contactData = {
  heading: "Start a Conversation",
  subheading: "Available for Software Engineering Roles & Internships",
  description:
    "Whether you have a technical opportunity, a prospective internship, or want to discuss modern web systems, my inbox is open. I respond reliably to genuine inquiries.",
  email: "rungthum.l@kkumail.com",
  location: "Khon Kaen, Thailand (UTC+7)",
  availability: "Actively seeking 2026 software engineering internships & full-time roles",
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    handle: "@rungthuml-bot",
    href: "https://github.com/rungthuml-bot",
    icon: FiGithub,
  },
  {
    label: "Email",
    handle: "rungthum.l@kkumail.com",
    href: "mailto:rungthum.l@kkumail.com",
    icon: FiMail,
  },
  {
    label: "Repository",
    handle: "rungthum_website",
    href: "https://github.com/rungthuml-bot/rungthum_website",
    icon: FiCode,
  },
];

export const footerLinks: NavLink[] = [
  { number: "01", label: "Selected Works", href: "#projects" },
  { number: "02", label: "About", href: "#about" },
  { number: "03", label: "Technical Stack", href: "#skills" },
  { number: "04", label: "Milestones", href: "#experience" },
  { number: "05", label: "Contact", href: "#contact" },
];
