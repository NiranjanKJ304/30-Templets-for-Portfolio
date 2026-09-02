/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 08: Aurora - Template Definition & Registry Export
 */

import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { auroraTemplateConfig } from './template.config';
import { auroraDefaultTheme } from './theme';
import { AuroraTemplate } from './AuroraTemplate';

export const auroraTemplate: TemplateDefinition = {
  config: auroraTemplateConfig,
  component: AuroraTemplate,
  defaultTheme: auroraDefaultTheme,
};

// Register into the laboratory single-source-of-truth registry
registerTemplate(auroraTemplate);

export { AuroraTemplate } from './AuroraTemplate';
export { auroraTemplateConfig } from './template.config';
export { auroraDefaultTheme } from './theme';
export default auroraTemplate;
