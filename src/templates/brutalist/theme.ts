/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template: Brutalist - Theme Tokens
 */

import type { ThemeTokens } from '../../core/types/theme';

export const brutalistDefaultTheme: ThemeTokens = {
  mode: 'system',
  colors: {
    background: '#F4F1E8', // Raw unbleached canvas
    surface: '#FFFFFF',
    surfaceSubtle: '#EAE6DA',
    surfaceElevated: '#FFFFFF',
    primary: '#111111', // Deep pitch black
    primaryForeground: '#F4F1E8',
    primaryMuted: '#D5D0C2',
    accent: '#2563EB', // Electric Blue
    accentForeground: '#FFFFFF',
    textPrimary: '#111111',
    textSecondary: '#444444',
    textMuted: '#777777',
    border: '#111111',
    borderSubtle: '#444444',
    ring: '#2563EB',
  },
  typography: {
    fontHeading:
      'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    fontBody:
      'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    scaleRatio: 1.333, // High-contrast Perfect Fourth
  },
  spacing: {
    containerPadding: 'px-4 sm:px-8',
    sectionSpacing: 'py-16 md:py-24',
    elementGap: 'gap-6',
  },
  radius: {
    sm: '0px',
    md: '0px',
    lg: '0px',
    full: '0px',
  },
  shadows: {
    sm: '2px 2px 0px 0px #111111',
    md: '4px 4px 0px 0px #111111',
    lg: '6px 6px 0px 0px #111111',
  },
  animation: 'subtle',
  density: 'compact',
};
