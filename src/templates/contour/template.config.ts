import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const contourConfig: TemplateConfig = {
  id: 'contour-01',
  name: 'Contour',
  description: 'An information landscape with subtle topographic contours.',
  version: '1.0.0',
  category: 'minimal',
  styles: ['topographic', 'organic', 'spacious', 'layered'],
  supportedDomains: ['designers', 'researchers', 'environmentalists', 'creatives'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['topographic', 'landscape', 'contour', 'elevation'],
  author: 'System',
};
