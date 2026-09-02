/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Universal Portfolio Template Section Configuration Contract
 */

export type SectionId =
  | 'profile'
  | 'about'
  | 'skills'
  | 'work'
  | 'experience'
  | 'education'
  | 'achievements'
  | 'certifications'
  | 'services'
  | 'testimonials'
  | 'contact'
  | 'connect';

export interface SectionConfig {
  id: SectionId;
  enabled: boolean;
  customTitle?: string;
  order?: number;
}

export type SectionVisibilityMap = Record<SectionId, boolean>;

export interface SectionMeta {
  id: SectionId;
  label: string;
  description: string;
  isCore: boolean; // profile is the only strictly required section
}

export const ALL_SECTIONS_META: SectionMeta[] = [
  { id: 'profile', label: 'Profile / Hero', description: 'Core identity, headline, avatar, status and call-to-actions', isCore: true },
  { id: 'about', label: 'About', description: 'Bio, summary, mission, and background details', isCore: false },
  { id: 'work', label: 'Work & Projects', description: 'Showcase of selected projects, case studies, and work artifacts', isCore: false },
  { id: 'experience', label: 'Experience', description: 'Career timeline, roles, achievements, and responsibilities', isCore: false },
  { id: 'skills', label: 'Skills & Expertise', description: 'Categorized capabilities, competencies, and tools', isCore: false },
  { id: 'education', label: 'Education', description: 'Academic degrees, honors, institutions, and coursework', isCore: false },
  { id: 'achievements', label: 'Achievements & Awards', description: 'Honors, recognitions, competition wins, and milestones', isCore: false },
  { id: 'certifications', label: 'Certifications', description: 'Professional licenses, credentials, and verifications', isCore: false },
  { id: 'services', label: 'Services & Offerings', description: 'Professional packages, consulting, and deliverables', isCore: false },
  { id: 'testimonials', label: 'Testimonials', description: 'Recommendations, endorsements, and peer reviews', isCore: false },
  { id: 'connect', label: 'Connect & Socials', description: 'Direct social profiles, platforms, and network links', isCore: false },
  { id: 'contact', label: 'Contact', description: 'Direct reach-out methods, message portal, and office hours', isCore: false },
];
