/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 07: Swiss - Theme Tokens
 */

import type { ThemeTokens } from '../../core/types/theme';

export const swissDefaultTheme: ThemeTokens = {
  mode: 'system',
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    surfaceSubtle: '#F4F4F5',
    surfaceElevated: '#FFFFFF',
    primary: '#DC2626', // Swiss International Red Accent
    primaryForeground: '#FFFFFF',
    primaryMuted: '#FEE2E2',
    accent: '#18181B',
    accentForeground: '#FFFFFF',
    textPrimary: '#09090B',
    textSecondary: '#52525B',
    textMuted: '#71717A',
    border: '#18181B',
    borderSubtle: '#E4E4E7',
    ring: '#DC2626',
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
    elementGap: 'gap-6',
  },
  radius: {
    sm: '0px',
    md: '0px',
    lg: '0px',
    full: '0px', // Swiss precision sharp corners
  },
  shadows: {
    sm: 'none',
    md: 'none',
    lg: 'none',
  },
  animation: 'subtle',
  density: 'comfortable',
};
