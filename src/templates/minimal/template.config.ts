/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 01: Minimal - Configuration Metadata
 */

import type { TemplateConfig } from '../../core/types/template';

export const minimalTemplateConfig: TemplateConfig = {
  id: 'minimal-01',
  name: 'Minimal',
  description: 'Refined whitespace, strong typography hierarchy, serene content-first layout.',
  version: '1.0.0',
  category: 'minimal',
  styles: ['minimal', 'clean', 'typography', 'timeless'],
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
  tags: ['minimal', 'clean', 'typography', 'universal', 'accessible'],
  author: 'Universal Portfolio System',
};
