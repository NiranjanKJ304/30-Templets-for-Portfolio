/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 06: Journey - Template Definition & Registry Export
 */

import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { journeyTemplateConfig } from './template.config';
import { journeyDefaultTheme } from './theme';
import { JourneyTemplate } from './JourneyTemplate';

export const journeyTemplate: TemplateDefinition = {
  config: journeyTemplateConfig,
  component: JourneyTemplate,
  defaultTheme: journeyDefaultTheme,
};

// Register into the laboratory single-source-of-truth registry
registerTemplate(journeyTemplate);

export { JourneyTemplate } from './JourneyTemplate';
export { journeyTemplateConfig } from './template.config';
export { journeyDefaultTheme } from './theme';
export default journeyTemplate;
