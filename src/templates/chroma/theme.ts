import type { ThemeTokens } from '../../core/types/theme';

export const chromaTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    background: '#F4F0E8',
    surface: '#F4F0E8',
    surfaceSubtle: '#E6C8B7', // Field Clay
    surfaceElevated: '#C7D2C5', // Field Sage

    primary: '#202522',
    primaryForeground: '#F4F0E8',
    primaryMuted: 'rgba(32, 37, 34, 0.1)',

    accent: '#263A39', // Deep Field
    accentForeground: '#F4F0E8',

    textPrimary: '#202522',
    textSecondary: '#6F756F',
    textMuted: '#6F756F',

    border: '#D1CDC2', // Boundary
    borderSubtle: 'rgba(209, 205, 194, 0.4)',
    ring: '#263A39',
  },
  typography: {
    fontHeading: '"DM Sans", system-ui, sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", monospace',
    scaleRatio: 1.25,
  },
  spacing: {
    containerPadding: 'px-6 sm:px-12 md:px-24 lg:px-32',
    sectionSpacing: 'py-24 md:py-32 lg:py-48',
    elementGap: 'gap-6 md:gap-12 lg:gap-16',
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
