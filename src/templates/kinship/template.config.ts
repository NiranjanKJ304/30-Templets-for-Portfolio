import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const kinshipConfig: TemplateConfig = {
  id: 'kinship-01',
  name: 'Kinship',
  description: 'A professional identity represented as a system of connected anchors and relationships.',
  version: '1.0.0',
  category: 'modern',
  styles: ['relational', 'connected', 'spacious', 'calm'],
  supportedDomains: ['professionals', 'consultants', 'strategists', 'creators', 'researchers'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['anchors', 'connectors', 'relational', 'ecosystem'],
  author: 'System',
};
