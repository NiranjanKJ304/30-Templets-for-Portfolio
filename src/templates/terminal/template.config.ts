import type { TemplateConfig } from '../../core/types/template';
import { getDefaultSectionsConfig, toSectionConfigs } from '../../core/utils/sectionVisibility';

export const terminalConfig: TemplateConfig = {
  id: 'terminal-01',
  name: 'Terminal',
  description: 'A developer workspace and command-line inspired portfolio.',
  version: '1.0.0',
  category: 'technical',
  styles: ['terminal', 'monospace', 'developer', 'workspace'],
  supportedDomains: ['developers', 'engineers', 'sysadmins', 'hackers', 'technical'],
  animationLevel: 'subtle',
  supportsDarkMode: true,
  sections: toSectionConfigs(getDefaultSectionsConfig()),
  tags: ['terminal', 'cli', 'code', 'monospace'],
  author: 'System',
};
