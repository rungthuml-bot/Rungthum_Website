import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiExternalLink,
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
} from "react-icons/si";

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

export interface Experience {
  company: string;
  role: string;
  date: string;
  achievements: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

// ──────────────────────────────────────────────
// Data
// ──────────────────────────────────────────────

export const siteConfig = {
  name: "Rungthum",
  title: "Rungthum | Full Stack Developer",
  description:
    "Full Stack Developer passionate about crafting modern, performant web experiences with React, Next.js, and Node.js.",
  url: "https://rungthum.dev",
  ogImage: "/og-image.png",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroData = {
  greeting: "สวัสดีครับ, I'm",
  name: "Rungthum",
  role: "Full Stack Developer",
  tagline:
    "I build modern, performant web applications that solve real-world problems — from pixel-perfect interfaces to scalable backend systems.",
  cta: {
    primary: { label: "View My Work", href: "#projects" },
    secondary: { label: "Contact Me", href: "#contact" },
  },
};

export const aboutData = {
  bio: `I'm a Full Stack Developer with a passion for creating elegant, high-performance web applications. With experience spanning frontend and backend development, I specialize in building end-to-end solutions using modern technologies like React, Next.js, Node.js, and Python. I believe in writing clean, maintainable code and designing systems that scale. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.`,
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "10+", label: "Technologies Mastered" },
  ] as Stat[],
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Python", icon: SiPython },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Prisma", icon: SiPrisma },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, Stripe payments, and an admin dashboard. Built with Next.js and PostgreSQL.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS"],
    github: "https://github.com/rungthum/ecommerce-platform",
    demo: "https://ecommerce.rungthum.dev",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with drag-and-drop boards, real-time updates via WebSocket, and team workspace management.",
    image: "/projects/taskapp.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Docker"],
    github: "https://github.com/rungthum/task-management",
    demo: "https://tasks.rungthum.dev",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool leveraging OpenAI APIs for blog writing, social media posts, and SEO optimization with analytics dashboard.",
    image: "/projects/aicontent.jpg",
    tags: ["Python", "FastAPI", "React", "OpenAI", "PostgreSQL"],
    github: "https://github.com/rungthum/ai-content-gen",
    demo: "https://aicontent.rungthum.dev",
  },
];

export const experiences: Experience[] = [
  {
    company: "Tech Solutions Co., Ltd.",
    role: "Full Stack Developer",
    date: "Jan 2024 — Present",
    achievements: [
      "Led development of a microservices-based platform serving 50K+ daily active users",
      "Reduced API response times by 40% through query optimization and Redis caching",
      "Mentored a team of 3 junior developers and conducted weekly code reviews",
    ],
  },
  {
    company: "Digital Agency Bangkok",
    role: "Frontend Developer",
    date: "Jun 2022 — Dec 2023",
    achievements: [
      "Built 10+ responsive web applications for clients across fintech and healthcare sectors",
      "Implemented CI/CD pipelines with GitHub Actions, reducing deployment time by 60%",
      "Migrated legacy jQuery codebase to React, improving page load speeds by 3x",
    ],
  },
  {
    company: "StartUp Hub",
    role: "Junior Developer (Intern)",
    date: "Jan 2022 — May 2022",
    achievements: [
      "Developed RESTful APIs using Express.js and integrated with third-party payment gateways",
      "Collaborated with UX designers to implement pixel-perfect responsive designs",
      "Wrote comprehensive unit tests achieving 85% code coverage",
    ],
  },
];

export const contactData = {
  heading: "Let's Work Together",
  description:
    "Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new opportunities and ideas.",
  email: "hello@rungthum.dev",
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/rungthum",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rungthum",
    icon: FiLinkedin,
  },
  {
    label: "Email",
    href: "mailto:hello@rungthum.dev",
    icon: FiMail,
  },
];

export const footerLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
