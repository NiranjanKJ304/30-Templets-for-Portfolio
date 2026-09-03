import type { TemplateDefinition } from '../../core/types/template';
import { registerTemplate } from '../../core/registry/templateRegistry';
import { memphisConfig } from './template.config';
import { memphisTheme } from './theme';
import MemphisTemplate from './MemphisTemplate';

export const memphisTemplate: TemplateDefinition = {
  config: memphisConfig,
  defaultTheme: memphisTheme,
  component: MemphisTemplate,
};

registerTemplate(memphisTemplate);

export default memphisTemplate;
