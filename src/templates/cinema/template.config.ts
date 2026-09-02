/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 04: Cinema - Template Configuration
 */

import type { TemplateConfig } from '../../core/types/template';

export const cinemaTemplateConfig: TemplateConfig = {
  id: 'cinema-01',
  name: 'Cinema',
  description: 'Immersive, narrative-driven portfolio template with dramatic visual scale, atmospheric contrast, and wide-aperture storytelling.',
  version: '1.0.0',
  category: 'universal',
  styles: ['cinematic', 'narrative', 'immersive', 'dramatic', 'atmospheric'],
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
  animationLevel: 'expressive',
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
  tags: ['cinematic', 'narrative', 'storytelling', 'dramatic', 'universal', 'wide'],
  author: 'Universal Portfolio System',
};
