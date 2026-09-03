import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { blueprintConfig } from './template.config';
import { blueprintTheme } from './theme';
import BlueprintTemplate from './BlueprintTemplate';

export const blueprintTemplate: TemplateDefinition = {
  config: blueprintConfig,
  defaultTheme: blueprintTheme,
  component: BlueprintTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(blueprintTemplate);

export default blueprintTemplate;
