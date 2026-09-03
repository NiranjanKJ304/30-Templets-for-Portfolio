import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { posterConfig } from './template.config';
import { posterTheme } from './theme';
import PosterTemplate from './PosterTemplate';

export const posterTemplate: TemplateDefinition = {
  config: posterConfig,
  defaultTheme: posterTheme,
  component: PosterTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(posterTemplate);

export default posterTemplate;
