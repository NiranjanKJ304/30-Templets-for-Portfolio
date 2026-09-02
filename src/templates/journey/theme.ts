/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 06: Journey - Theme Tokens
 */

import type { ThemeTokens } from '../../core/types/theme';

export const journeyDefaultTheme: ThemeTokens = {
  mode: 'system',
  colors: {
    background: '#FBFBFA',
    surface: '#FFFFFF',
    surfaceSubtle: '#F4F3EF',
    surfaceElevated: '#FFFFFF',
    primary: '#0D9488', // Waypoint Teal
    primaryForeground: '#FFFFFF',
    primaryMuted: '#CCFBF1',
    accent: '#0F766E',
    accentForeground: '#FFFFFF',
    textPrimary: '#18181B',
    textSecondary: '#52525B',
    textMuted: '#A1A1AA',
    border: '#E4E4E7',
    borderSubtle: '#F4F4F5',
    ring: '#0D9488',
  },
  typography: {
    fontHeading: 'system-ui, -apple-system, sans-serif',
    fontBody: 'system-ui, -apple-system, sans-serif',
    fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    scaleRatio: 1.25,
  },
  spacing: {
    containerPadding: 'px-4 sm:px-6 lg:px-8',
    sectionSpacing: 'py-20 md:py-28',
    elementGap: 'gap-8',
  },
  radius: {
    sm: '0.375rem',
    md: '0.75rem',
    lg: '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.04)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)',
  },
  animation: 'expressive',
  density: 'comfortable',
};
