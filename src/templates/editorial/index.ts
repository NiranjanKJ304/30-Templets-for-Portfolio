/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template: Editorial Grid - Export & Registry Registration
 */

import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { EditorialTemplate } from './EditorialTemplate';
import { editorialTemplateConfig } from './template.config';
import { editorialDefaultTheme } from './theme';

export const editorialTemplate: TemplateDefinition = {
  config: editorialTemplateConfig,
  component: EditorialTemplate,
  defaultTheme: editorialDefaultTheme,
};

// Register into the central template registry
registerTemplate(editorialTemplate);

export { EditorialTemplate } from './EditorialTemplate';
export { editorialTemplateConfig } from './template.config';
export { editorialDefaultTheme } from './theme';
export default editorialTemplate;
