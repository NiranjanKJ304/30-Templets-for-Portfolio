import type { ThemeTokens } from '../../core/types/theme';

export const organicFlowTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    background: '#F3F0E8',
    surface: '#FBFAF5',
    surfaceSubtle: '#F3F0E8',
    surfaceElevated: '#FBFAF5',

    primary: '#202321',
    primaryForeground: '#FBFAF5',
    primaryMuted: 'rgba(32, 35, 33, 0.1)',

    accent: '#C87558', // Terracotta
    accentForeground: '#FBFAF5',

    textPrimary: '#202321',
    textSecondary: '#6B706A',
    textMuted: '#6B706A',

    border: '#E8DED0', // Warm
    borderSubtle: 'rgba(232, 222, 208, 0.5)',
    ring: '#819B8A', // Sage
  },
  typography: {
    fontHeading: '"Sora", system-ui, sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", "Space Mono", monospace',
    scaleRatio: 1.333,
  },
  spacing: {
    containerPadding: 'px-6 sm:px-12 md:px-24',
    sectionSpacing: 'py-24 md:py-48',
    elementGap: 'gap-8 md:gap-16',
  },
  radius: {
    sm: '16px',
    md: '32px',
    lg: '64px',
    full: '9999px',
  },
  shadows: {
    sm: 'none',
    md: 'none',
    lg: '0 20px 40px -10px rgba(32, 35, 33, 0.05)',
  },
  animation: 'subtle',
  density: 'comfortable',
};
