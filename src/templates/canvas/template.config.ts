/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 05: Canvas - Template Configuration
 */

import type { TemplateConfig } from '../../core/types/template';

export const canvasTemplateConfig: TemplateConfig = {
  id: 'canvas-01',
  name: 'Canvas',
  description: 'Art-directed, modular, composition-driven portfolio with asymmetric spatial layout and architectural framing.',
  version: '1.0.0',
  category: 'universal',
  styles: ['art-directed', 'modular', 'asymmetric', 'compositional', 'editorial'],
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
  tags: ['modular', 'asymmetric', 'composition', 'art-directed', 'universal', 'studio'],
  author: 'Universal Portfolio System',
};
