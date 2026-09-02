/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template: Magazine Noir - Theme Tokens Contract
 */

import type { ThemeTokens } from '../../core/types/theme';

export const magazineNoirDefaultTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    background: '#F4F1EA', // Warm luxury canvas
    surface: '#FBFAF7', // High-end surface
    surfaceSubtle: '#EDEAE1', // Subtle contrasting panel
    surfaceElevated: '#FBFAF7',
    primary: '#171717', // High-contrast noir typography
    primaryForeground: '#FBFAF7',
    primaryMuted: '#E2DED5',
    accent: '#8B5E3C', // Cognac / warm leather accent
    accentForeground: '#FBFAF7',
    textPrimary: '#171717',
    textSecondary: '#68645D',
    textMuted: '#99938A',
    border: 'rgba(23, 23, 23, 0.12)',
    borderSubtle: 'rgba(23, 23, 23, 0.06)',
    ring: '#8B5E3C',
  },
  typography: {
    fontHeading:
      'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    fontBody:
      'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    scaleRatio: 1.333, // High-contrast visual campaign scale
  },
  spacing: {
    containerPadding: 'px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20',
    sectionSpacing: 'py-16 md:py-24 lg:py-32',
    elementGap: 'gap-8 lg:gap-16',
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
    lg: '0 4px 16px 0 rgba(0, 0, 0, 0.06)',
  },
  animation: 'subtle',
  density: 'spacious',
};
