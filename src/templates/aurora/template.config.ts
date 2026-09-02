/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 08: Aurora - Configuration Contract
 */

import type { TemplateConfig } from '../../core/types/template';

export const auroraTemplateConfig: TemplateConfig = {
  id: 'aurora-01',
  name: 'Aurora',
  description:
    'A luminous, airy, colorful portfolio with fluid gradient atmospheres, translucent surfaces, and approachable typography.',
  version: '1.0.0',
  category: 'universal',
  styles: ['luminous', 'colorful', 'fluid', 'airy', 'approachable', 'optimistic'],
  supportedDomains: [
    'engineering',
    'product',
    'design',
    'research',
    'consulting',
    'leadership',
    'education',
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
  tags: ['luminous', 'gradients', 'pastel', 'airy', 'colorful', 'translucent'],
  author: 'Universal Portfolio System',
};
