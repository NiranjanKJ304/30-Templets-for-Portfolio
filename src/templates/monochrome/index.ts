import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { monochromeConfig } from './template.config';
import { monochromeTheme } from './theme';
import MonochromeTemplate from './MonochromeTemplate';

export const monochromeTemplate: TemplateDefinition = {
  config: monochromeConfig,
  defaultTheme: monochromeTheme,
  component: MonochromeTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(monochromeTemplate);

export default monochromeTemplate;
