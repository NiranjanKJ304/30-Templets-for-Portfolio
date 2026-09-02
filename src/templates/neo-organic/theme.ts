/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 15: Neo-Organic - Theme Tokens & Defaults
 */

import type { ThemeTokens } from '../../core/types/theme';

export const neoOrganicDefaultTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    background: '#F6F5EF', // Serene Organic Light Canvas
    surface: '#FFFFFF', // Pure Surface
    surfaceSubtle: '#F0EFE8',
    surfaceElevated: '#FFFFFF',
    primary: '#4169E1', // Primary Blue Accent (Actions, Links)
    primaryForeground: '#FFFFFF',
    primaryMuted: '#D9E7D0',
    accent: '#79A66A', // Organic Green Accent (Status, Organic Markers)
    accentForeground: '#FFFFFF',
    textPrimary: '#17211B', // Deep Forest Ink
    textSecondary: '#59635C', // Slate Green Muted
    textMuted: '#8A938C', // Soft Sage Grey
    border: 'rgba(23, 33, 27, 0.08)',
    borderSubtle: 'rgba(23, 33, 27, 0.04)',
    ring: '#4169E1',
  },
  typography: {
    fontHeading:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontBody:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    scaleRatio: 1.25,
  },
  spacing: {
    containerPadding: 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16',
    sectionSpacing: 'py-16 md:py-24 lg:py-28',
    elementGap: 'gap-6 lg:gap-10',
  },
  radius: {
    sm: '0.75rem',
    md: '1.25rem',
    lg: '1.75rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 2px 8px -2px rgba(23, 33, 27, 0.04)',
    md: '0 8px 24px -4px rgba(23, 33, 27, 0.06)',
    lg: '0 16px 40px -8px rgba(23, 33, 27, 0.08)',
  },
  animation: 'subtle',
  density: 'comfortable',
};
