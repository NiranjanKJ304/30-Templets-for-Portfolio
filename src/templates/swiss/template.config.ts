/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 07: Swiss - Configuration Contract
 */

import type { TemplateConfig } from '../../core/types/template';

export const swissTemplateConfig: TemplateConfig = {
  id: 'swiss-01',
  name: 'Swiss',
  description:
    'A precision-driven, typographic portfolio structured along a strict 12-column grid inspired by the International Typographic Style.',
  version: '1.0.0',
  category: 'universal',
  styles: ['precise', 'systematic', 'typographic', 'grid-controlled', 'high-contrast'],
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
  tags: ['grid', 'swiss', 'typography', 'international', 'systematic', 'precision'],
  author: 'Universal Portfolio System',
};
