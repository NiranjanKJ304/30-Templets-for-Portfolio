/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template: Brutalist - Configuration Contract
 */

import type { TemplateConfig } from '../../core/types/template';

export const brutalistTemplateConfig: TemplateConfig = {
  id: 'brutalist-01',
  name: 'Brutalist',
  description:
    'A raw, bold, structural, high-contrast digital artifact with oversized grotesque typography, heavy 2px architectural borders, offset blocks, and exposed registry layouts.',
  version: '1.0.0',
  category: 'universal',
  styles: ['brutalist', 'high-contrast', 'structural', 'typographic', 'bold', 'raw'],
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
};
