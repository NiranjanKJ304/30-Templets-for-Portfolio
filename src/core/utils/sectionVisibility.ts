/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Section Visibility and Data Availability Evaluator
 */

import type { PortfolioData } from '../types/portfolio';
import type { SectionConfig, SectionId } from '../types/section';

/**
 * Evaluates whether relevant data exists for a given section.
 * STRICT RULE: Never invent placeholder data. If data is absent, return false.
 */
export function hasSectionData(sectionId: SectionId, data?: PortfolioData | null): boolean {
  if (!data) return false;

  switch (sectionId) {
    case 'profile':
      return Boolean(data.profile && data.profile.name);

    case 'about':
      return Boolean(
        data.profile &&
          (Boolean(data.profile.bio && data.profile.bio.trim()) ||
            Boolean(data.profile.summary && data.profile.summary.trim()))
      );

    case 'work':
      return Array.isArray(data.projects) && data.projects.length > 0;

    case 'experience':
      return Array.isArray(data.experience) && data.experience.length > 0;

    case 'skills':
      return (
        Array.isArray(data.skills) &&
        data.skills.length > 0 &&
        data.skills.some((group) => Array.isArray(group.skills) && group.skills.length > 0)
      );

    case 'education':
      return Array.isArray(data.education) && data.education.length > 0;

    case 'achievements':
      return Array.isArray(data.achievements) && data.achievements.length > 0;

    case 'certifications':
      return Array.isArray(data.certifications) && data.certifications.length > 0;

    case 'services':
      return Array.isArray(data.services) && data.services.length > 0;

    case 'testimonials':
      return Array.isArray(data.testimonials) && data.testimonials.length > 0;

    case 'connect':
      return Array.isArray(data.socials) && data.socials.length > 0;

    case 'contact':
      return Boolean(
        data.contact &&
          (Boolean(data.contact.email) ||
            Boolean(data.contact.phone) ||
            Boolean(data.contact.calendlyUrl) ||
            Boolean(data.contact.messagePrompt) ||
            Boolean(data.contact.address) ||
            (Array.isArray(data.contact.customFields) && data.contact.customFields.length > 0))
      );

    default:
      return false;
  }
}

/**
 * Checks if a section should be rendered based on both:
 * 1. section is enabled in config
 * 2. section has real non-empty data in PortfolioData
 */
export function isSectionVisible(
  sectionId: SectionId,
  config: Record<SectionId, boolean> | undefined,
  data?: PortfolioData | null
): boolean {
  if (!data) return false;
  const isEnabled = config ? config[sectionId] !== false : true;
  if (!isEnabled) return false;
  return hasSectionData(sectionId, data);
}

/**
 * Generates default configuration with all universal sections enabled
 */
export function getDefaultSectionsConfig(): Record<SectionId, boolean> {
  return {
    profile: true,
    about: true,
    work: true,
    experience: true,
    skills: true,
    education: true,
    achievements: true,
    certifications: true,
    services: true,
    testimonials: true,
    connect: true,
    contact: true,
  };
}

/**
 * Converts a map to an array of SectionConfig objects
 */
export function toSectionConfigs(map: Record<SectionId, boolean>): SectionConfig[] {
  return (Object.keys(map) as SectionId[]).map((id, index) => ({
    id,
    enabled: map[id],
    order: index,
  }));
}
