/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 05: Canvas - Default Theme Tokens
 */

import type { ThemeTokens } from '../../core/types/theme';

export const canvasDefaultTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    background: '#F8F7F4', // Warm Alabaster Studio Paper
    surface: '#FFFFFF', // Crisp Studio White
    surfaceSubtle: '#F0ECE4', // Tactile Warm Stone
    surfaceElevated: '#FFFFFF',
    primary: '#EA580C', // Terracotta Studio Flame
    primaryForeground: '#FFFFFF',
    primaryMuted: 'rgba(234, 88, 12, 0.12)',
    accent: '#C2410C',
    accentForeground: '#FFFFFF',
    textPrimary: '#1C1917', // Deep Warm Charcoal
    textSecondary: '#57534E', // Warm Stone Slate
    textMuted: '#8C857B', // Muted Studio Grey
    border: 'rgba(28, 25, 23, 0.14)',
    borderSubtle: 'rgba(28, 25, 23, 0.07)',
    ring: '#EA580C',
  },
  typography: {
    fontHeading: 'font-sans',
    fontBody: 'font-sans',
    fontMono: 'font-mono',
    scaleRatio: 1.25, // Major Third for dense, flexible architectural balance
  },
  spacing: {
    containerPadding: 'px-6 sm:px-10 lg:px-16',
    sectionSpacing: 'py-24 sm:py-32',
    elementGap: 'gap-8',
  },
  radius: {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },
  shadows: {
    sm: '0 1px 3px 0 rgba(28, 25, 23, 0.05)',
    md: '3px 3px 0px 0px rgba(28, 25, 23, 0.08)',
    lg: '6px 6px 0px 0px rgba(28, 25, 23, 0.12)',
  },
  animation: 'expressive',
  density: 'comfortable',
};
