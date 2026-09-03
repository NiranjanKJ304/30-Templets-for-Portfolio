import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { duplexConfig } from './template.config';
import { duplexTheme } from './theme';
import DuplexTemplate from './DuplexTemplate';

export const duplexTemplate: TemplateDefinition = {
  config: duplexConfig,
  defaultTheme: duplexTheme,
  component: DuplexTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(duplexTemplate);

export default duplexTemplate;
