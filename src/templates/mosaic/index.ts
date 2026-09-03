import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { mosaicConfig } from './template.config';
import { mosaicTheme } from './theme';
import MosaicTemplate from './MosaicTemplate';

export const mosaicTemplate: TemplateDefinition = {
  config: mosaicConfig,
  defaultTheme: mosaicTheme,
  component: MosaicTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(mosaicTemplate);

export default mosaicTemplate;
