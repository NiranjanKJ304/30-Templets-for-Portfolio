/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template: Editorial Grid - Theme Tokens Contract
 */

import type { ThemeTokens } from '../../core/types/theme';

export const editorialDefaultTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    background: '#F7F5EF', // Warm paper canvas
    surface: '#FFFDF8', // Crisp publication paper surface
    surfaceSubtle: '#F0ECE1', // Warm tinted paper panel
    surfaceElevated: '#FFFDF8',
    primary: '#171717', // Deep editorial ink
    primaryForeground: '#FFFDF8',
    primaryMuted: '#E5E0D8',
    accent: '#B42318', // Editorial crimson / vermilion
    accentForeground: '#FFFFFF',
    textPrimary: '#171717',
    textSecondary: '#68655F',
    textMuted: '#918D85',
    border: '#E5E0D8',
    borderSubtle: '#ECE7DF',
    ring: '#B42318',
  },
  typography: {
    fontHeading:
      'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    fontBody:
      'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    scaleRatio: 1.333, // Perfect Fourth (High contrast editorial scale)
  },
  spacing: {
    containerPadding: 'px-4 sm:px-8 lg:px-12 xl:px-16',
    sectionSpacing: 'py-12 md:py-20 lg:py-24',
    elementGap: 'gap-8 lg:gap-12',
  },
  radius: {
    sm: '0px',
    md: '2px',
    lg: '4px',
    full: '9999px',
  },
  shadows: {
    sm: 'none',
    md: '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
    lg: '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
  },
  animation: 'subtle',
  density: 'comfortable',
};
