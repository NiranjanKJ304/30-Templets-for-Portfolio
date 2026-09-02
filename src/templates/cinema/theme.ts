/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 04: Cinema - Default Theme Tokens
 */

import type { ThemeTokens } from '../../core/types/theme';

export const cinemaDefaultTheme: ThemeTokens = {
  mode: 'dark',
  colors: {
    background: '#090A0D',
    surface: '#111318',
    surfaceSubtle: '#181A20',
    surfaceElevated: '#20232B',
    primary: '#F59E0B', // Warm Amber Glow
    primaryForeground: '#090A0D',
    primaryMuted: 'rgba(245, 158, 11, 0.15)',
    accent: '#D97706',
    accentForeground: '#FFFFFF',
    textPrimary: '#FAFAFA',
    textSecondary: '#A1A1AA',
    textMuted: '#71717A',
    border: 'rgba(255, 255, 255, 0.08)',
    borderSubtle: 'rgba(255, 255, 255, 0.04)',
    ring: '#F59E0B',
  },
  typography: {
    fontHeading: 'font-serif',
    fontBody: 'font-sans',
    fontMono: 'font-mono',
    scaleRatio: 1.333, // Perfect Fourth for dramatic cinematic contrast
  },
  spacing: {
    containerPadding: 'px-6 sm:px-12 lg:px-20',
    sectionSpacing: 'py-28 sm:py-36',
    elementGap: 'gap-10',
  },
  radius: {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },
  shadows: {
    sm: '0 2px 8px -1px rgba(0, 0, 0, 0.5)',
    md: '0 12px 24px -4px rgba(0, 0, 0, 0.6)',
    lg: '0 24px 48px -8px rgba(0, 0, 0, 0.8)',
  },
  animation: 'expressive',
  density: 'comfortable',
};
