import type { ThemeTokens } from '../../core/types/theme';

export const monoformTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    background: '#ECEAE4', // Canvas
    surface: '#F5F3ED',
    surfaceSubtle: '#E4E2DA', // Inset
    surfaceElevated: '#FAF9F5', // Raised

    primary: '#1D1F1E',
    primaryForeground: '#F5F3ED',
    primaryMuted: 'rgba(29, 31, 30, 0.1)',

    accent: '#A65A45',
    accentForeground: '#F5F3ED',

    textPrimary: '#1D1F1E',
    textSecondary: '#6C706B',
    textMuted: '#6C706B',

    border: '#C8C7BF', // Rule
    borderSubtle: 'rgba(200, 199, 191, 0.4)',
    ring: '#1D1F1E',
  },
  typography: {
    fontHeading: '"Manrope", system-ui, sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", monospace',
    scaleRatio: 1.25,
  },
  spacing: {
    containerPadding: 'px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24',
    sectionSpacing: 'py-20 md:py-28 lg:py-36',
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
