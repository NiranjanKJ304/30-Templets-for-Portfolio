/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 05: Canvas - Template Definition & Registry Export
 */

import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { canvasTemplateConfig } from './template.config';
import { canvasDefaultTheme } from './theme';
import { CanvasTemplate } from './CanvasTemplate';

export const canvasTemplate: TemplateDefinition = {
  config: canvasTemplateConfig,
  component: CanvasTemplate,
  defaultTheme: canvasDefaultTheme,
};

// Register into the laboratory single-source-of-truth registry
registerTemplate(canvasTemplate);

export { CanvasTemplate } from './CanvasTemplate';
export { canvasTemplateConfig } from './template.config';
export { canvasDefaultTheme } from './theme';
export default canvasTemplate;
