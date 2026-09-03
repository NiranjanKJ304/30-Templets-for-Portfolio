import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { kinshipConfig } from './template.config';
import { kinshipTheme } from './theme';
import KinshipTemplate from './KinshipTemplate';

export const kinshipTemplate: TemplateDefinition = {
  config: kinshipConfig,
  defaultTheme: kinshipTheme,
  component: KinshipTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(kinshipTemplate);

export default kinshipTemplate;
