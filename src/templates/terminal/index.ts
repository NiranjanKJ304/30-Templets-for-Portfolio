import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { terminalConfig } from './template.config';
import { terminalTheme } from './theme';
import TerminalTemplate from './TerminalTemplate';

export const terminalTemplate: TemplateDefinition = {
  config: terminalConfig,
  defaultTheme: terminalTheme,
  component: TerminalTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(terminalTemplate);

export default terminalTemplate;
