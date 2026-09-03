import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { kineticConfig } from './template.config';
import { kineticTheme } from './theme';
import KineticTemplate from './KineticTemplate';

export const kineticTemplate: TemplateDefinition = {
  config: kineticConfig,
  defaultTheme: kineticTheme,
  component: KineticTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(kineticTemplate);

export default kineticTemplate;
