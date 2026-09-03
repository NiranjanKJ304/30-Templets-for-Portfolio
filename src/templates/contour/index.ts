import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { contourConfig } from './template.config';
import { contourTheme } from './theme';
import ContourTemplate from './ContourTemplate';

export const contourTemplate: TemplateDefinition = {
  config: contourConfig,
  defaultTheme: contourTheme,
  component: ContourTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(contourTemplate);

export default contourTemplate;
