/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 02: Executive - Template Definition & Registration
 */

import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { executiveTemplateConfig } from './template.config';
import { executiveDefaultTheme } from './theme';
import { ExecutiveTemplate } from './ExecutiveTemplate';

export const executiveTemplate: TemplateDefinition = {
  config: executiveTemplateConfig,
  component: ExecutiveTemplate,
  defaultTheme: executiveDefaultTheme,
};

// Auto-register into the laboratory single-source-of-truth registry
registerTemplate(executiveTemplate);

export { ExecutiveTemplate } from './ExecutiveTemplate';
export { executiveTemplateConfig } from './template.config';
export { executiveDefaultTheme } from './theme';
export default executiveTemplate;
