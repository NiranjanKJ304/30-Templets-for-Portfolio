import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { vellumConfig } from './template.config';
import { vellumTheme } from './theme';
import VellumTemplate from './VellumTemplate';

export const vellumTemplate: TemplateDefinition = {
  config: vellumConfig,
  defaultTheme: vellumTheme,
  component: VellumTemplate,
};

// CRITICAL: Explicit runtime registration
registerTemplate(vellumTemplate);

export default vellumTemplate;
