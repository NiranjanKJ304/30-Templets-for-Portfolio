/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template: Botanical - Theme Tokens
 */

import type { ThemeTokens } from '../../core/types/theme';

export const botanicalDefaultTheme: ThemeTokens = {
  mode: 'system',
  colors: {
    background: '#F6F5F0',
    surface: '#FFFFFF',
    surfaceSubtle: '#EBE9DF',
    surfaceElevated: '#FFFFFF',
    primary: '#243828', // Deep Forest Cypress
    primaryForeground: '#F6F5F0',
    primaryMuted: '#E4ECE4',
    accent: '#BF6648', // Warm Terracotta
    accentForeground: '#FFFFFF',
    textPrimary: '#1C261E',
    textSecondary: '#586359',
    textMuted: '#8C9A8E',
    border: '#D8D4C8',
    borderSubtle: '#EBE9DF',
    ring: '#243828',
  },
  typography: {
    fontHeading: 'serif, Georgia, Cambria, "Times New Roman", Times, serif',
    fontBody: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    scaleRatio: 1.25,
  },
  spacing: {
    containerPadding: 'px-6 sm:px-8',
    sectionSpacing: 'py-20 md:py-28',
    elementGap: 'gap-8',
  },
  radius: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(28, 38, 30, 0.05)',
    md: '0 4px 6px -1px rgba(28, 38, 30, 0.08)',
    lg: '0 10px 15px -3px rgba(28, 38, 30, 0.1)',
  },
  animation: 'subtle',
  density: 'comfortable',
};
