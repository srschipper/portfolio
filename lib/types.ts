export interface Socials {
  instagram: string;
  linkedin: string;
  email: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatar: string;
  socials: Socials;
}

export interface ProjectGallery {
  label: string;
  images: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  galleries?: ProjectGallery[];
  tiktokEmbeds?: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
