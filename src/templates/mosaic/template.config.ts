import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const mosaicConfig: TemplateConfig = {
  id: 'mosaic-01',
  name: 'Mosaic',
  description: 'A variable-size editorial mosaic portfolio.',
  version: '1.0.0',
  category: 'editorial',
  styles: ['mosaic', 'grid', 'asymmetric', 'curated', 'irregular'],
  supportedDomains: ['designers', 'artists', 'photographers', 'creators', 'directors'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['mosaic', 'grid', 'editorial', 'asymmetric'],
  author: 'System',
};
