import type { ThemeTokens } from '../../core/types/theme';

export const indexTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    // Light Mode Canvas: #F6F5F1
    background: '#F6F5F1',
    surface: '#FFFFFF',
    surfaceSubtle: '#F6F5F1',
    surfaceElevated: '#181A19',

    primary: '#181A19',
    primaryForeground: '#FFFFFF',
    primaryMuted: 'rgba(24, 26, 25, 0.1)',

    accent: '#365F58',
    accentForeground: '#FFFFFF',

    textPrimary: '#181A19',
    textSecondary: '#696C67',
    textMuted: '#B9C8C3', // Soft accent

    border: '#D5D6D0', // Rule
    borderSubtle: 'rgba(213, 214, 208, 0.5)',
    ring: '#365F58',
  },
  typography: {
    fontHeading: '"Sora", system-ui, sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", "Space Mono", monospace',
    scaleRatio: 1.25,
  },
  spacing: {
    containerPadding: 'px-4 sm:px-8 md:px-12 lg:px-16',
    sectionSpacing: 'py-16',
    elementGap: 'gap-4',
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
