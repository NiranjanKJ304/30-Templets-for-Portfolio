/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 03: Neural - Default Theme Tokens
 */

import type { ThemeTokens } from '../../core/types/theme';

export const neuralDefaultTheme: ThemeTokens = {
  mode: 'dark',
  colors: {
    background: '#08090C',
    surface: '#0F1117',
    surfaceSubtle: '#161922',
    surfaceElevated: '#1E2230',
    primary: '#06B6D4', // Electric Cyan
    primaryForeground: '#08090C',
    primaryMuted: 'rgba(6, 182, 212, 0.15)',
    accent: '#38BDF8',
    accentForeground: '#08090C',
    textPrimary: '#F1F5F9',
    textSecondary: '#94A3B8',
    textMuted: '#64748B',
    border: 'rgba(255, 255, 255, 0.08)',
    borderSubtle: 'rgba(255, 255, 255, 0.04)',
    ring: '#06B6D4',
  },
  typography: {
    fontHeading: 'font-sans',
    fontBody: 'font-sans',
    fontMono: 'font-mono',
    scaleRatio: 1.25,
  },
  spacing: {
    containerPadding: 'px-6 sm:px-12 lg:px-20',
    sectionSpacing: 'py-20 sm:py-28',
    elementGap: 'gap-8',
  },
  radius: {
    sm: 'rounded-none',
    md: 'rounded-none',
    lg: 'rounded-none',
    full: 'rounded-full',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.4)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.6)',
  },
  animation: 'expressive',
  density: 'comfortable',
};
