import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { chromaConfig } from './template.config';
import { chromaTheme } from './theme';
import ChromaTemplate from './ChromaTemplate';

export const chromaTemplate: TemplateDefinition = {
  config: chromaConfig,
  defaultTheme: chromaTheme,
  component: ChromaTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(chromaTemplate);

export default chromaTemplate;
