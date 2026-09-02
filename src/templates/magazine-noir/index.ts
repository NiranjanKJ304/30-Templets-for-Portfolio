/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template: Magazine Noir - Export & Registry Registration
 */

import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { MagazineNoirTemplate } from './MagazineNoirTemplate';
import { magazineNoirTemplateConfig } from './template.config';
import { magazineNoirDefaultTheme } from './theme';

export const magazineNoirTemplate: TemplateDefinition = {
  config: magazineNoirTemplateConfig,
  component: MagazineNoirTemplate,
  defaultTheme: magazineNoirDefaultTheme,
};

// Register into the central template registry
registerTemplate(magazineNoirTemplate);

export { MagazineNoirTemplate } from './MagazineNoirTemplate';
export { magazineNoirTemplateConfig } from './template.config';
export { magazineNoirDefaultTheme } from './theme';
export default magazineNoirTemplate;
