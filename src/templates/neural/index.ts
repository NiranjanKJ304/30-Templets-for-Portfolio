/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 03: Neural - Template Definition & Registration
 */

import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { neuralTemplateConfig } from './template.config';
import { neuralDefaultTheme } from './theme';
import { NeuralTemplate } from './NeuralTemplate';

export const neuralTemplate: TemplateDefinition = {
  config: neuralTemplateConfig,
  component: NeuralTemplate,
  defaultTheme: neuralDefaultTheme,
};

// Auto-register into the laboratory central registry
registerTemplate(neuralTemplate);

export { NeuralTemplate } from './NeuralTemplate';
export { neuralTemplateConfig } from './template.config';
export { neuralDefaultTheme } from './theme';
export default neuralTemplate;
