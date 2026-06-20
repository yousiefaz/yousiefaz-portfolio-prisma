import { LucideIcon } from "lucide-react";

export interface SocialLink {
  href: string;
  icon: LucideIcon;
}

export interface NavLink extends SocialLink {
  title: string;
}

export interface Statistics {
  label: string;
  value: number;
}

export type SkillCategory = "frontend" | "backend" | "tools";

export interface Skill {
  id: string;
  label: string;
  value: number;
  category: SkillCategory;
}

export interface TabItem {
  value: SkillCategory;
  icon: LucideIcon;
  label: string;
}

export interface CarouselProps {
  images: string[];
  className?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  demoLink: string | null;
  githubLink: string | null;
  publishedAt: Date | null;
  isResponsive: boolean;
}
