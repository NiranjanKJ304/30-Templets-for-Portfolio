import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { folioConfig } from './template.config';
import { folioTheme } from './theme';
import FolioTemplate from './FolioTemplate';

export const folioTemplate: TemplateDefinition = {
  config: folioConfig,
  defaultTheme: folioTheme,
  component: FolioTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(folioTemplate);

export default folioTemplate;
