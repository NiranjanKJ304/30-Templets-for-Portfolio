import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { prismConfig } from './template.config';
import { prismTheme } from './theme';
import PrismTemplate from './PrismTemplate';

export const prismTemplate: TemplateDefinition = {
  config: prismConfig,
  defaultTheme: prismTheme,
  component: PrismTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(prismTemplate);

export default prismTemplate;
