import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { monoformConfig } from './template.config';
import { monoformTheme } from './theme';
import MonoformTemplate from './MonoformTemplate';

export const monoformTemplate: TemplateDefinition = {
  config: monoformConfig,
  defaultTheme: monoformTheme,
  component: MonoformTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(monoformTemplate);

export default monoformTemplate;
