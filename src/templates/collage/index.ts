import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { collageConfig } from './template.config';
import { collageTheme } from './theme';
import CollageTemplate from './CollageTemplate';

export const collageTemplate: TemplateDefinition = {
  config: collageConfig,
  defaultTheme: collageTheme,
  component: CollageTemplate,
};

registerTemplate(collageTemplate);

export default collageTemplate;
