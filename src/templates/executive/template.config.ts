/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 02: Executive - Configuration Metadata
 */

import type { TemplateConfig } from '../../core/types/template';

export const executiveTemplateConfig: TemplateConfig = {
  id: 'executive-01',
  name: 'Executive',
  description: 'Authoritative, structured editorial grids, corporate leadership, strategic advisory, and prestige presentation.',
  version: '1.0.0',
  category: 'executive',
  styles: ['executive', 'editorial', 'structured', 'authoritative', 'serif'],
  supportedDomains: [
    'developer',
    'designer',
    'student',
    'researcher',
    'lawyer',
    'marketer',
    'consultant',
    'freelancer',
    'entrepreneur',
    'creative',
    'general',
  ],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: [
    { id: 'profile', enabled: true },
    { id: 'about', enabled: true },
    { id: 'services', enabled: true },
    { id: 'skills', enabled: true },
    { id: 'work', enabled: true },
    { id: 'experience', enabled: true },
    { id: 'education', enabled: true },
    { id: 'certifications', enabled: true },
    { id: 'achievements', enabled: true },
    { id: 'testimonials', enabled: true },
    { id: 'connect', enabled: true },
    { id: 'contact', enabled: true },
  ],
  tags: ['executive', 'leadership', 'consulting', 'editorial', 'authoritative', 'universal'],
  author: 'Universal Portfolio System',
};
