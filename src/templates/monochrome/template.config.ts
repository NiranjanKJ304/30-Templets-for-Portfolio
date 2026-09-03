import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const monochromeConfig: TemplateConfig = {
  id: 'monochrome-01',
  name: 'Monochrome Grid',
  description: 'A high-contrast monochrome editorial portfolio.',
  version: '1.0.0',
  category: 'editorial',
  styles: ['monochrome', 'editorial', 'typographic', 'high-contrast', 'minimal'],
  supportedDomains: ['designers', 'architects', 'photographers', 'writers', 'directors', 'founders'],
  animationLevel: 'none',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['monochrome', 'typography', 'grid', 'publication', 'journal'],
  author: 'Universal Portfolio Builder',
};
