import type { ThemeTokens } from '../../core/types/theme';

export const prismTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    background: '#F4F2EC',
    surface: '#FCFBF7',
    surfaceSubtle: '#F4F2EC',
    surfaceElevated: '#FCFBF7',

    primary: '#171A1B',
    primaryForeground: '#FCFBF7',
    primaryMuted: 'rgba(23, 26, 27, 0.1)',

    accent: '#4566C7', // Facet Blue
    accentForeground: '#FCFBF7',

    textPrimary: '#171A1B',
    textSecondary: '#6B706F',
    textMuted: '#6B706F',

    border: 'rgba(23, 26, 27, 0.1)',
    borderSubtle: 'rgba(23, 26, 27, 0.05)',
    ring: '#6C9CA3', // Facet Cyan
  },
  typography: {
    fontHeading: '"Manrope", "Plus Jakarta Sans", system-ui, sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", monospace',
    scaleRatio: 1.333,
  },
  spacing: {
    containerPadding: 'px-6 sm:px-12 md:px-24',
    sectionSpacing: 'py-24 md:py-40',
    elementGap: 'gap-8 md:gap-16',
  },
  radius: {
    sm: '0px',
    md: '0px',
    lg: '0px',
    full: '0px',
  },
  shadows: {
    sm: 'none',
    md: 'none',
    lg: 'none',
  },
  animation: 'subtle',
  density: 'comfortable',
};
