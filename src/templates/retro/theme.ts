/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 10: Retro - Theme Tokens
 */

import type { ThemeTokens } from '../../core/types/theme';

export const retroDefaultTheme: ThemeTokens = {
  mode: 'system',
  colors: {
    background: '#FFF4D6',
    surface: '#FFF9EA',
    surfaceSubtle: '#F4E7C5',
    surfaceElevated: '#FFFDF5',
    primary: '#E76F2E', // Retro Terracotta Orange
    primaryForeground: '#FFF4D6',
    primaryMuted: '#FCD8C1',
    accent: '#E9B949', // Warm Mustard Yellow
    accentForeground: '#29231F',
    textPrimary: '#29231F', // Deep Charcoal Carbon
    textSecondary: '#665D55', // Warm Brown Ink
    textMuted: '#A89B8E',
    border: '#29231F',
    borderSubtle: '#E0D4BE',
    ring: '#E76F2E',
  },
  typography: {
    fontHeading: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontBody: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    scaleRatio: 1.25,
  },
  spacing: {
    containerPadding: 'px-4 sm:px-6 lg:px-8',
    sectionSpacing: 'py-16 sm:py-24',
    elementGap: 'gap-8',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  shadows: {
    sm: '2px 2px 0px #29231F',
    md: '4px 4px 0px #29231F',
    lg: '6px 6px 0px #29231F',
  },
  animation: 'expressive',
  density: 'comfortable',
};
