/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Universal Portfolio Template Development Project - Canonical Portfolio Data Contract
 */

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'x' | 'dribbble' | 'behance' | 'instagram' | 'youtube' | 'email' | 'website' | 'substack' | 'medium' | 'codepen' | 'figma' | 'discord' | 'custom' | string;
  url: string;
  label?: string;
  username?: string;
}

export interface Profile {
  name: string;
  headline?: string;
  role?: string;
  summary?: string;
  bio?: string;
  location?: string;
  avatarUrl?: string;
  bannerUrl?: string;
  availableForHire?: boolean;
  statusBadge?: string;
  contactEmail?: string;
  contactPhone?: string;
  pronouns?: string;
  resumeUrl?: string;
}

export interface SkillItem {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert' | number; // e.g. 1-5 or 1-100 or semantic
  icon?: string;
  yearsOfExperience?: number;
}

export interface SkillGroup {
  category: string;
  description?: string;
  skills: (string | SkillItem)[];
}

export interface ProjectMedia {
  type: 'image' | 'video' | 'embed';
  url: string;
  alt?: string;
  caption?: string;
  thumbnailUrl?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '9:16' | string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  description?: string;
  detailedMarkdown?: string;
  role?: string;
  client?: string;
  year?: string | number;
  startDate?: string;
  endDate?: string;
  category?: string;
  tags?: string[];
  technologies?: string[];
  featured?: boolean;
  thumbnailUrl?: string;
  media?: ProjectMedia[];
  liveUrl?: string;
  sourceUrl?: string;
  caseStudyUrl?: string;
  highlights?: string[];
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  logoUrl?: string;
  location?: string;
  locationType?: 'remote' | 'hybrid' | 'on-site' | string;
  employmentType?: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship' | string;
  startDate: string; // ISO or YYYY-MM or display string
  endDate?: string;
  current?: boolean;
  description?: string;
  highlights?: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  location?: string;
  logoUrl?: string;
  institutionUrl?: string;
  startDate?: string;
  endDate?: string;
  current?: boolean;
  grade?: string; // GPA or honors
  description?: string;
  activities?: string[];
  courses?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuerLogoUrl?: string;
  issueDate?: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  description?: string;
  url?: string;
  category?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  deliverables?: string[];
  rate?: string;
  timeline?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  company?: string;
  avatarUrl?: string;
  quote: string;
  relationship?: string;
  url?: string;
  rating?: number;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  location?: string;
  calendlyUrl?: string;
  officeHours?: string;
  preferredMethod?: 'email' | 'phone' | 'calendly' | 'form';
  messagePrompt?: string;
  address?: string;
  customFields?: { label: string; value: string }[];
}

/**
 * Universal canonical PortfolioData shape.
 * Every template consumes this exact data contract.
 */
export interface PortfolioData {
  profile: Profile;
  socials?: SocialLink[];
  skills?: SkillGroup[];
  projects?: Project[];
  experience?: Experience[];
  education?: Education[];
  certifications?: Certification[];
  achievements?: Achievement[];
  services?: Service[];
  testimonials?: Testimonial[];
  contact?: ContactInfo;
  meta?: {
    lastUpdated?: string;
    customDomain?: string;
    keywords?: string[];
  };
}
