/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template: Bento - Configuration Contract
 */

import type { TemplateConfig } from '../../core/types/template';

export const bentoTemplateConfig: TemplateConfig = {
  id: 'bento-01',
  name: 'Bento',
  description:
    'A modular, responsive portfolio system presenting personal identity, work, and capabilities through variable-scale intelligent content tiles and asymmetric visual rhythm.',
  version: '1.0.0',
  category: 'universal',
  styles: ['bento', 'modular', 'asymmetric', 'tactile', 'modern', 'clean'],
  supportedDomains: [
    'engineering',
    'product',
    'design',
    'research',
    'consulting',
    'leadership',
    'education',
    'creative',
    'writing',
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
