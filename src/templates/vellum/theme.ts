import type { ThemeTokens } from '../../core/types/theme';

export const vellumTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    background: '#F1EDE3',
    surface: '#FAF8F1',
    surfaceSubtle: '#F1EDE3',
    surfaceElevated: '#FAF8F1',

    primary: '#242522',
    primaryForeground: '#FAF8F1',
    primaryMuted: 'rgba(36, 37, 34, 0.1)',

    accent: '#425C72', // Ink Blue
    accentForeground: '#FAF8F1',

    textPrimary: '#242522',
    textSecondary: '#6D6D66',
    textMuted: '#6D6D66',

    border: '#C8C2B5', // Rule
    borderSubtle: 'rgba(200, 194, 181, 0.4)',
    ring: '#425C72',
  },
  typography: {
    fontHeading: '"Newsreader", "Times New Roman", Times, serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", monospace',
    scaleRatio: 1.25,
  },
  spacing: {
    containerPadding: 'px-4 sm:px-8 md:px-16 lg:px-32',
    sectionSpacing: 'py-16 md:py-24',
    elementGap: 'gap-4 md:gap-8 lg:gap-12',
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
