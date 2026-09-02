/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template: Bento - Export & Registry Registration
 */

import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { BentoTemplate } from './BentoTemplate';
import { bentoTemplateConfig } from './template.config';
import { bentoDefaultTheme } from './theme';

export const bentoTemplate: TemplateDefinition = {
  config: bentoTemplateConfig,
  component: BentoTemplate,
  defaultTheme: bentoDefaultTheme,
};

// Register into the template registry
registerTemplate(bentoTemplate);

export { BentoTemplate } from './BentoTemplate';
export { bentoTemplateConfig } from './template.config';
export { bentoDefaultTheme } from './theme';
export default bentoTemplate;
