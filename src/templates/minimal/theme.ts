/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 01: Minimal - Default Theme Tokens
 */

import type { ThemeTokens } from '../../core/types/theme';

export const minimalDefaultTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    background: '#FAFAF9',
    surface: '#FFFFFF',
    surfaceSubtle: '#F5F5F4',
    surfaceElevated: '#E7E5E4',
    primary: '#1C1917',
    primaryForeground: '#FFFFFF',
    primaryMuted: '#78716C',
    accent: '#1C1917',
    accentForeground: '#FFFFFF',
    textPrimary: '#1C1917',
    textSecondary: '#57534E',
    textMuted: '#78716C',
    border: '#E7E5E4',
    borderSubtle: '#F5F5F4',
    ring: '#A8A29E',
  },
  typography: {
    fontHeading: 'font-serif',
    fontBody: 'font-sans',
    fontMono: 'font-mono',
    scaleRatio: 1.25,
  },
  spacing: {
    containerPadding: 'px-6 sm:px-10 lg:px-16',
    sectionSpacing: 'py-20 md:py-28',
    elementGap: 'gap-8',
  },
  radius: {
    sm: 'rounded-xs',
    md: 'rounded-sm',
    lg: 'rounded-md',
    full: 'rounded-full',
  },
  shadows: {
    sm: 'shadow-xs',
    md: 'shadow-sm',
    lg: 'shadow-md',
  },
  animation: 'subtle',
  density: 'comfortable',
};
