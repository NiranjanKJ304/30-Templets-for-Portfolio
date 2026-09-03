import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const duplexConfig: TemplateConfig = {
  id: 'duplex-01',
  name: 'Duplex',
  description: 'A split-screen architectural portfolio with fixed identity panel and scrolling content.',
  author: 'System',
  version: '1.0.0',
  category: 'editorial',
  styles: ['split-screen', 'architectural', 'modern', 'clean', 'editorial'],
  supportedDomains: ['designers', 'architects', 'engineers', 'consultants', 'directors'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['split', 'duplex', 'panels', 'grotesk'],
};
