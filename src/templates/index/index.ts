import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { indexConfig } from './template.config';
import { indexTheme } from './theme';
import IndexTemplate from './IndexTemplate';

export const indexTemplate: TemplateDefinition = {
  config: indexConfig,
  defaultTheme: indexTheme,
  component: IndexTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(indexTemplate);

export default indexTemplate;
