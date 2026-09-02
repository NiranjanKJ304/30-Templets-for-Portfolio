/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Template 08: Aurora - Theme & Color Tokens
 */

import type { ThemeTokens } from '../../core/types/theme';

export const auroraDefaultTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    // Luminous airy canvas default (Light Mode)
    background: '#FAFAFF',
    surface: '#FFFFFF',
    surfaceSubtle: '#F4F4FD',
    surfaceElevated: '#FFFFFF',
    
    // Friendly high-contrast palette
    primary: '#171725',
    primaryForeground: '#FAFAFF',
    primaryMuted: '#5C5C7A',
    
    // Controlled chromatic Aurora accent palette (Lavender & Sky)
    accent: '#8B5CF6',
    accentForeground: '#FFFFFF',
    
    textPrimary: '#171725',
    textSecondary: '#5C5C7A',
    textMuted: '#8E8EA8',
    
    border: 'rgba(226, 232, 240, 0.8)',
    borderSubtle: 'rgba(241, 245, 249, 0.6)',
    ring: 'rgba(139, 92, 246, 0.4)',
  },
  typography: {
    fontHeading: 'system-ui, -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", "Inter", sans-serif',
    fontBody: 'system-ui, -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", "Inter", sans-serif',
    fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    scaleRatio: 1.25,
  },
  spacing: {
    containerPadding: 'px-4 sm:px-6 lg:px-8',
    sectionSpacing: 'py-16 sm:py-24',
    elementGap: 'gap-6 sm:gap-8',
  },
  radius: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 2px 8px -2px rgba(139, 92, 246, 0.05)',
    md: '0 12px 30px -6px rgba(139, 92, 246, 0.08), 0 4px 12px -2px rgba(56, 189, 248, 0.05)',
    lg: '0 20px 40px -12px rgba(139, 92, 246, 0.12), 0 8px 24px -4px rgba(251, 113, 133, 0.08)',
  },
  animation: 'expressive',
  density: 'comfortable',
};
