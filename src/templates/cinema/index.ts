/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 04: Cinema - Template Definition & Registry Export
 */

import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { cinemaTemplateConfig } from './template.config';
import { cinemaDefaultTheme } from './theme';
import { CinemaTemplate } from './CinemaTemplate';

export const cinemaTemplate: TemplateDefinition = {
  config: cinemaTemplateConfig,
  component: CinemaTemplate,
  defaultTheme: cinemaDefaultTheme,
};

// Register into the laboratory single-source-of-truth registry
registerTemplate(cinemaTemplate);

export { CinemaTemplate } from './CinemaTemplate';
export { cinemaTemplateConfig } from './template.config';
export { cinemaDefaultTheme } from './theme';
export default cinemaTemplate;
