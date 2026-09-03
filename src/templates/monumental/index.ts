import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { monumentalConfig } from './template.config';
import { monumentalTheme } from './theme';
import MonumentalTemplate from './MonumentalTemplate';

export const monumentalTemplate: TemplateDefinition = {
  config: monumentalConfig,
  defaultTheme: monumentalTheme,
  component: MonumentalTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(monumentalTemplate);

export default monumentalTemplate;
