import type { ThemeTokens } from '../../core/types/theme';

export const folioTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    background: '#EAE7DF', // Canvas
    surface: '#FAF8F1', // Sheet
    surfaceSubtle: '#F3F0E7', // Sheet Alternate
    surfaceElevated: '#FAF8F1',

    primary: '#1D2020',
    primaryForeground: '#FAF8F1',
    primaryMuted: 'rgba(29, 32, 32, 0.1)',

    accent: '#1D2020',
    accentForeground: '#FAF8F1',

    textPrimary: '#1D2020',
    textSecondary: '#70736F',
    textMuted: '#70736F',

    border: '#C9C5BA', // Rule
    borderSubtle: 'rgba(201, 197, 186, 0.4)',
    ring: '#1D2020',
  },
  typography: {
    fontHeading: '"Cormorant Garamond", ui-serif, Georgia, serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", monospace',
    scaleRatio: 1.333,
  },
  spacing: {
    containerPadding: 'px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32',
    sectionSpacing: 'py-16 md:py-24 lg:py-32',
    elementGap: 'gap-8 md:gap-12 lg:gap-16',
  },
  radius: {
    sm: '0px',
    md: '0px',
    lg: '0px',
    full: '9999px',
  },
  shadows: {
    sm: '0 2px 10px rgba(29, 32, 32, 0.05)',
    md: '0 4px 20px rgba(29, 32, 32, 0.08)',
    lg: '0 8px 40px rgba(29, 32, 32, 0.12)',
  },
  animation: 'subtle',
  density: 'comfortable',
};
