import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { blueprintOSConfig } from './template.config';
import { blueprintOSTheme } from './theme';
import BlueprintOSTemplate from './BlueprintOSTemplate';

export const blueprintOSTemplate: TemplateDefinition = {
  config: blueprintOSConfig,
  defaultTheme: blueprintOSTheme,
  component: BlueprintOSTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(blueprintOSTemplate);

export default blueprintOSTemplate;
