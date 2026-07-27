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

export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  caption?: string;
}

export interface MediaLink {
  title: string;
  source: string;
  url: string;
  description?: string;
}

export interface ProjectGallery {
  label: string;
  images?: GalleryImage[];
  links?: MediaLink[];
  brands?: string[];
  instagramEmbeds?: string[];
  tiktokEmbeds?: string[];
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
  accentColor?: string;
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
