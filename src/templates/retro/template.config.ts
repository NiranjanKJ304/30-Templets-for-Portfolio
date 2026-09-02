/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 10: Retro - Configuration Contract
 */

import type { TemplateConfig } from '../../core/types/template';

export const retroTemplateConfig: TemplateConfig = {
  id: 'retro-01',
  name: 'Retro',
  description:
    'A warm, bold modern-retro portfolio inspired by 1970s editorial layouts, vintage print, and geometric color blocking.',
  version: '1.0.0',
  category: 'universal',
  styles: ['retro', 'vintage', 'bold', 'graphic', 'warm', 'editorial', 'geometric'],
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
  tags: ['retro', 'vintage', 'graphic', 'poster', 'print', 'color-block', 'warm', 'playful'],
  author: 'Universal Portfolio System',
};
