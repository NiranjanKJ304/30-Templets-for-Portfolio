import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { chronicleConfig } from './template.config';
import { chronicleTheme } from './theme';
import ChronicleTemplate from './ChronicleTemplate';

export const chronicleTemplate: TemplateDefinition = {
  config: chronicleConfig,
  defaultTheme: chronicleTheme,
  component: ChronicleTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(chronicleTemplate);

export default chronicleTemplate;
