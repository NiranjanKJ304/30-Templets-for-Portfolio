/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 07: Swiss - Template Definition & Registry Export
 */

import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { swissTemplateConfig } from './template.config';
import { swissDefaultTheme } from './theme';
import { SwissTemplate } from './SwissTemplate';

export const swissTemplate: TemplateDefinition = {
  config: swissTemplateConfig,
  component: SwissTemplate,
  defaultTheme: swissDefaultTheme,
};

// Register into the laboratory single-source-of-truth registry
registerTemplate(swissTemplate);

export { SwissTemplate } from './SwissTemplate';
export { swissTemplateConfig } from './template.config';
export { swissDefaultTheme } from './theme';
export default swissTemplate;
