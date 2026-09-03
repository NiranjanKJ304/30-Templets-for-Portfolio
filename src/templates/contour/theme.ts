import type { ThemeTokens } from '../../core/types/theme';

export const contourTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    background: '#F2F0E7', // Canvas
    surface: '#F9F8F1',
    surfaceSubtle: '#F2F0E7',
    surfaceElevated: '#F9F8F1',

    primary: '#202523',
    primaryForeground: '#F9F8F1',
    primaryMuted: 'rgba(32, 37, 35, 0.1)',

    accent: '#879A82', // Sage
    accentForeground: '#F9F8F1',

    textPrimary: '#202523',
    textSecondary: '#6E746E',
    textMuted: '#6E746E',

    border: '#C7C9B9', // Contour
    borderSubtle: 'rgba(199, 201, 185, 0.4)',
    ring: '#202523',
  },
  typography: {
    fontHeading: '"DM Serif Display", ui-serif, Georgia, serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", monospace',
    scaleRatio: 1.333,
  },
  spacing: {
    containerPadding: 'px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32',
    sectionSpacing: 'py-20 md:py-28 lg:py-40',
    elementGap: 'gap-8 md:gap-12 lg:gap-16',
  },
  radius: {
    sm: '0px',
    md: '0px',
    lg: '0px',
    full: '9999px',
  },
  shadows: {
    sm: 'none',
    md: 'none',
    lg: 'none',
  },
  animation: 'subtle',
  density: 'comfortable',
};
