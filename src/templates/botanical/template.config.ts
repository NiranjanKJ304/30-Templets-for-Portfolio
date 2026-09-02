/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template: Botanical - Configuration Contract
 */

import type { TemplateConfig } from '../../core/types/template';

export const botanicalTemplateConfig: TemplateConfig = {
  id: 'botanical-01',
  name: 'Botanical',
  description:
    'An earthy, nature-inspired, serene editorial portfolio with calming sage greens, warm linen backgrounds, terracotta accents, and organic card typography.',
  version: '1.0.0',
  category: 'universal',
  styles: ['botanical', 'organic', 'earthy', 'editorial', 'serene', 'warm'],
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
  tags: ['botanical', 'organic', 'sage', 'earthy', 'editorial', 'nature', 'linen'],
  author: 'Universal Portfolio System',
};
