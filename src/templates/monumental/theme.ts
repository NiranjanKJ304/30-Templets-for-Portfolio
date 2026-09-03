import type { ThemeTokens } from '../../core/types/theme';

export const monumentalTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    background: '#ECE9E1',
    surface: '#F8F6F0',
    surfaceSubtle: '#ECE9E1',
    surfaceElevated: '#F8F6F0',

    primary: '#171918',
    primaryForeground: '#F8F6F0',
    primaryMuted: 'rgba(23, 25, 24, 0.1)',

    accent: '#B94F38', // Accent Red
    accentForeground: '#F8F6F0',

    textPrimary: '#171918',
    textSecondary: '#686B66',
    textMuted: '#686B66',

    border: '#D8D4C9', // Structural
    borderSubtle: 'rgba(216, 212, 201, 0.5)',
    ring: '#71838A', // Muted Blue
  },
  typography: {
    fontHeading: '"Space Grotesk", system-ui, sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", "Space Mono", monospace',
    scaleRatio: 1.414,
  },
  spacing: {
    containerPadding: 'px-8 sm:px-16 md:px-32 lg:px-48',
    sectionSpacing: 'py-32 md:py-64 lg:py-80',
    elementGap: 'gap-16 md:gap-32',
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
    lg: '0 40px 80px -20px rgba(23, 25, 24, 0.1)',
  },
  animation: 'subtle',
  density: 'comfortable',
};
