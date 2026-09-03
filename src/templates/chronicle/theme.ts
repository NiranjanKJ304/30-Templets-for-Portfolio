import type { ThemeTokens } from '../../core/types/theme';

export const chronicleTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    background: '#F3F0E8', // Canvas
    surface: '#FAF8F2',
    surfaceSubtle: '#F3F0E8',
    surfaceElevated: '#FAF8F2',

    primary: '#202321',
    primaryForeground: '#FAF8F2',
    primaryMuted: 'rgba(32, 35, 33, 0.1)',

    accent: '#B96852', // Terracotta
    accentForeground: '#FAF8F2',

    textPrimary: '#202321',
    textSecondary: '#6F746F',
    textMuted: '#6F746F',

    border: '#C9C5BB', // Rule
    borderSubtle: 'rgba(201, 197, 187, 0.4)',
    ring: '#202321',
  },
  typography: {
    fontHeading: '"Instrument Serif", ui-serif, Georgia, serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", monospace',
    scaleRatio: 1.333,
  },
  spacing: {
    containerPadding: 'px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24',
    sectionSpacing: 'py-16 md:py-24 lg:py-32',
    elementGap: 'gap-6 md:gap-10 lg:gap-16',
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
