export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  description?: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  description: string;
  period?: string;
  location?: string;
}

export interface EducationItem {
  school: string;
  degree?: string;
  description: string;
}

