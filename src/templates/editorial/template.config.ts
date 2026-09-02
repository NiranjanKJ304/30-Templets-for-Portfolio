/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template: Editorial Grid - Configuration Contract
 */

import type { TemplateConfig } from '../../core/types/template';

export const editorialTemplateConfig: TemplateConfig = {
  id: 'editorial-01',
  name: 'Editorial Grid',
  description:
    'A contemporary magazine-inspired publication layout featuring refined editorial typography, asymmetric column spreads, hairline rules, and art-directed content hierarchy.',
  version: '1.0.0',
  category: 'creative',
  styles: ['editorial', 'magazine', 'asymmetric', 'typographic', 'publication', 'print-inspired'],
  supportedDomains: [
    'design',
    'writing',
    'creative',
    'photography',
    'filmmaking',
    'engineering',
    'research',
    'product',
    'consulting',
    'leadership',
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
