/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 15: Neo-Organic - Configuration Metadata
 */

import type { TemplateConfig } from '../../core/types/template';

export const neoOrganicTemplateConfig: TemplateConfig = {
  id: 'neo-organic-01',
  name: 'Neo-Organic',
  description: 'Flowing natural geometry, soft futurism, and human-centered technology with a serene palette.',
  version: '1.0.0',
  category: 'creative',
  styles: ['organic', 'soft-futurism', 'fluid', 'human-centered', 'clean', 'rounded'],
  supportedDomains: [
    'developer',
    'designer',
    'student',
    'researcher',
    'lawyer',
    'writer',
    'teacher',
    'consultant',
    'entrepreneur',
    'freelancer',
    'photographer',
    'filmmaker',
    'artist',
    'product manager',
    'architect',
    'scientist',
    'general',
  ],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: [
    { id: 'profile', enabled: true },
    { id: 'about', enabled: true },
    { id: 'work', enabled: true },
    { id: 'skills', enabled: true },
    { id: 'experience', enabled: true },
    { id: 'services', enabled: true },
    { id: 'education', enabled: true },
    { id: 'certifications', enabled: true },
    { id: 'achievements', enabled: true },
    { id: 'testimonials', enabled: true },
    { id: 'connect', enabled: true },
    { id: 'contact', enabled: true },
  ],
};
