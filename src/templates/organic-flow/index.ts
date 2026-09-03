import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { organicFlowConfig } from './template.config';
import { organicFlowTheme } from './theme';
import OrganicFlowTemplate from './OrganicFlowTemplate';

export const organicFlowTemplate: TemplateDefinition = {
  config: organicFlowConfig,
  defaultTheme: organicFlowTheme,
  component: OrganicFlowTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(organicFlowTemplate);

export default organicFlowTemplate;
