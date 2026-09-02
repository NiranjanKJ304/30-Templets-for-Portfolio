/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 10: Retro - Template Definition & Registry Export
 */

import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { retroTemplateConfig } from './template.config';
import { retroDefaultTheme } from './theme';
import { RetroTemplate } from './RetroTemplate';

export const retroTemplate: TemplateDefinition = {
  config: retroTemplateConfig,
  component: RetroTemplate,
  defaultTheme: retroDefaultTheme,
};

// Register into the universal laboratory template registry
registerTemplate(retroTemplate);

export { RetroTemplate } from './RetroTemplate';
export { retroTemplateConfig } from './template.config';
export { retroDefaultTheme } from './theme';
export default retroTemplate;
