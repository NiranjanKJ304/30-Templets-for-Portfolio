import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { archiveConfig } from './template.config';
import { archiveTheme } from './theme';
import ArchiveTemplate from './ArchiveTemplate';

export const archiveTemplate: TemplateDefinition = {
  config: archiveConfig,
  defaultTheme: archiveTheme,
  component: ArchiveTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(archiveTemplate);

export default archiveTemplate;
