/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 02: Executive - Default Theme Tokens
 */

import type { ThemeTokens } from '../../core/types/theme';

export const executiveDefaultTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    background: '#FBFBFA',
    surface: '#FFFFFF',
    surfaceSubtle: '#F4F4F2',
    surfaceElevated: '#E8E8E5',
    primary: '#141413',
    primaryForeground: '#FFFFFF',
    primaryMuted: '#5C5B57',
    accent: '#141413',
    accentForeground: '#FFFFFF',
    textPrimary: '#141413',
    textSecondary: '#474642',
    textMuted: '#7A7873',
    border: '#E2E2DE',
    borderSubtle: '#EEEEEC',
    ring: '#141413',
  },
  typography: {
    fontHeading: 'font-serif',
    fontBody: 'font-sans',
    fontMono: 'font-mono',
    scaleRatio: 1.333,
  },
  spacing: {
    containerPadding: 'px-6 sm:px-12 lg:px-20',
    sectionSpacing: 'py-24 sm:py-32',
    elementGap: 'gap-10',
  },
  radius: {
    sm: 'rounded-none',
    md: 'rounded-xs',
    lg: 'rounded-sm',
    full: 'rounded-full',
  },
  shadows: {
    sm: 'shadow-none',
    md: 'shadow-xs',
    lg: 'shadow-sm',
  },
  animation: 'subtle',
  density: 'comfortable',
};
