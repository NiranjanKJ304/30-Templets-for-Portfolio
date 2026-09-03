import type { ThemeTokens } from '../../core/types/theme';

export const kinshipTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    background: '#F5F3EE',
    surface: '#FCFBF7',
    surfaceSubtle: '#F5F3EE',
    surfaceElevated: '#FCFBF7',

    primary: '#202624',
    primaryForeground: '#FCFBF7',
    primaryMuted: 'rgba(32, 38, 36, 0.1)',

    accent: '#356B63', // Anchor
    accentForeground: '#FCFBF7',

    textPrimary: '#202624',
    textSecondary: '#737A75',
    textMuted: '#737A75',

    border: '#A8B2AC', // Connector
    borderSubtle: 'rgba(168, 178, 172, 0.5)',
    ring: '#356B63',
  },
  typography: {
    fontHeading: '"DM Sans", system-ui, sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", monospace',
    scaleRatio: 1.25,
  },
  spacing: {
    containerPadding: 'px-6 sm:px-12 md:px-24',
    sectionSpacing: 'py-20 md:py-32',
    elementGap: 'gap-8 md:gap-16',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  shadows: {
    sm: 'none',
    md: 'none',
    lg: 'none',
  },
  animation: 'subtle',
  density: 'spacious',
};
