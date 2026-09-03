import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { tesseraConfig } from './template.config';
import { tesseraTheme } from './theme';
import TesseraTemplate from './TesseraTemplate';

export const tesseraTemplate: TemplateDefinition = {
  config: tesseraConfig,
  defaultTheme: tesseraTheme,
  component: TesseraTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(tesseraTemplate);

export default tesseraTemplate;
