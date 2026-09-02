/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template: Magazine Noir - Configuration Contract
 */

import type { TemplateConfig } from '../../core/types/template';

export const magazineNoirTemplateConfig: TemplateConfig = {
  id: 'magazine-noir-01',
  name: 'Magazine Noir',
  description:
    'A luxury visual-campaign portfolio featuring dramatic serif display typography, editorial image cropping, oversized whitespace, and refined luxury accents.',
  version: '1.0.0',
  category: 'creative',
  styles: [
    'luxury',
    'editorial',
    'fashion-inspired',
    'asymmetric',
    'typographic',
    'monochrome-accent',
    'high-contrast',
  ],
  supportedDomains: [
    'design',
    'engineering',
    'photography',
    'filmmaking',
    'writing',
    'architecture',
    'leadership',
    'consulting',
    'research',
    'creative',
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
