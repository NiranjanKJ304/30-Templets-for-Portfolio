/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template: Bento - Theme Tokens Contract
 */

import type { ThemeTokens } from '../../core/types/theme';

export const bentoDefaultTheme: ThemeTokens = {
  mode: 'system',
  colors: {
    background: '#F5F7FA', // Soft cool neutral canvas
    surface: '#FFFFFF', // Crisp white primary tile surface
    surfaceSubtle: '#EEF1F5', // Structural tinted tile surface
    surfaceElevated: '#FFFFFF',
    primary: '#171A1F', // Deep readable text / primary identity
    primaryForeground: '#FFFFFF',
    primaryMuted: '#E2E6ED',
    accent: '#3B82F6', // Vibrant modern blue
    accentForeground: '#FFFFFF',
    textPrimary: '#171A1F',
    textSecondary: '#5F6672',
    textMuted: '#8E95A3',
    border: '#E2E6ED',
    borderSubtle: '#F0F2F6',
    ring: '#3B82F6',
  },
  typography: {
    fontHeading:
      'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    fontBody:
      'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    scaleRatio: 1.25, // Major Third
  },
  spacing: {
    containerPadding: 'px-4 sm:px-6 lg:px-8',
    sectionSpacing: 'py-10 md:py-16',
    elementGap: 'gap-5 sm:gap-6',
  },
  radius: {
    sm: '12px',
    md: '16px',
    lg: '24px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.04)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)',
  },
  animation: 'subtle',
  density: 'comfortable',
};
