/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 01: Minimal - Template Definition & Registry Export
 */

import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { minimalTemplateConfig } from './template.config';
import { minimalDefaultTheme } from './theme';
import { MinimalTemplate } from './MinimalTemplate';

export const minimalTemplate: TemplateDefinition = {
  config: minimalTemplateConfig,
  component: MinimalTemplate,
  defaultTheme: minimalDefaultTheme,
};

// Register into the laboratory single-source-of-truth registry
registerTemplate(minimalTemplate);

export { MinimalTemplate } from './MinimalTemplate';
export { minimalTemplateConfig } from './template.config';
export { minimalDefaultTheme } from './theme';
export default minimalTemplate;
