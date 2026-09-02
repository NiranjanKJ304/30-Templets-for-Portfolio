/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template: Botanical - Export & Registry Registration
 */

import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { BotanicalTemplate } from './BotanicalTemplate';
import { botanicalTemplateConfig } from './template.config';
import { botanicalDefaultTheme } from './theme';

export const botanicalTemplate: TemplateDefinition = {
  config: botanicalTemplateConfig,
  component: BotanicalTemplate,
  defaultTheme: botanicalDefaultTheme,
};

// Register into the laboratory registry
registerTemplate(botanicalTemplate);

export { BotanicalTemplate } from './BotanicalTemplate';
export { botanicalTemplateConfig } from './template.config';
export { botanicalDefaultTheme } from './theme';
export default botanicalTemplate;
