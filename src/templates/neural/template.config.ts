/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 03: Neural - Template Configuration
 */

import type { TemplateConfig } from '../../core/types/template';

export const neuralTemplateConfig: TemplateConfig = {
  id: 'neural-01',
  name: 'Neural',
  description: 'Futuristic, digital atmosphere with precision spatial grids, technical typography, and glowing interactive nodes.',
  version: '1.0.0',
  category: 'universal',
  styles: ['futuristic', 'digital', 'atmospheric', 'precision', 'modern'],
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
  tags: ['futuristic', 'digital', 'neural', 'atmospheric', 'universal', 'grid'],
  author: 'Universal Portfolio System',
};
