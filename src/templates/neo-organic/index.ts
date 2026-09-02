/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 15: Neo-Organic - Template Definition & Registry Export
 */

import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { neoOrganicTemplateConfig } from './template.config';
import { neoOrganicDefaultTheme } from './theme';
import { NeoOrganicTemplate } from './NeoOrganicTemplate';

export const neoOrganicTemplate: TemplateDefinition = {
  config: neoOrganicTemplateConfig,
  component: NeoOrganicTemplate,
  defaultTheme: neoOrganicDefaultTheme,
};

// Register into central template registry
registerTemplate(neoOrganicTemplate);

export { NeoOrganicTemplate } from './NeoOrganicTemplate';
export { neoOrganicTemplateConfig } from './template.config';
export { neoOrganicDefaultTheme } from './theme';
export default neoOrganicTemplate;
