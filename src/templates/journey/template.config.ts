/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 06: Journey - Configuration Contract
 */

import type { TemplateConfig } from '../../core/types/template';
import { ALL_SECTIONS_META } from '../../core/types/section';

export const journeyTemplateConfig: TemplateConfig = {
  id: 'journey-01',
  name: 'Journey',
  description:
    'A chronological and progressive storytelling portfolio structured along an anchored narrative timeline spine.',
  version: '1.0.0',
  category: 'universal',
  styles: ['chronological', 'flowing', 'progressive', 'timeline-driven', 'directional'],
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
  tags: ['timeline', 'progression', 'waypoints', 'milestones', 'chapters'],
  author: 'Universal Portfolio System',
};
