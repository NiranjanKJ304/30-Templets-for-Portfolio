import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { paperfoldConfig } from './template.config';
import { paperfoldTheme } from './theme';
import PaperfoldTemplate from './PaperfoldTemplate';

export const paperfoldTemplate: TemplateDefinition = {
  config: paperfoldConfig,
  defaultTheme: paperfoldTheme,
  component: PaperfoldTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(paperfoldTemplate);

export default paperfoldTemplate;
