/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template: Brutalist - Export & Registry Registration
 */

import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { BrutalistTemplate } from './BrutalistTemplate';
import { brutalistTemplateConfig } from './template.config';
import { brutalistDefaultTheme } from './theme';

export const brutalistTemplate: TemplateDefinition = {
  config: brutalistTemplateConfig,
  component: BrutalistTemplate,
  defaultTheme: brutalistDefaultTheme,
};

// Register into the laboratory registry
registerTemplate(brutalistTemplate);

export { BrutalistTemplate } from './BrutalistTemplate';
export { brutalistTemplateConfig } from './template.config';
export { brutalistDefaultTheme } from './theme';
export default brutalistTemplate;
