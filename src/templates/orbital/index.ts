import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { orbitalConfig } from './template.config';
import { orbitalTheme } from './theme';
import OrbitalTemplate from './OrbitalTemplate';

export const orbitalTemplate: TemplateDefinition = {
  config: orbitalConfig,
  defaultTheme: orbitalTheme,
  component: OrbitalTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(orbitalTemplate);

export default orbitalTemplate;
