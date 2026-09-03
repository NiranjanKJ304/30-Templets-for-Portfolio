import type { ThemeTokens } from '../../core/types/theme';

export const tesseraTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    background: '#F2EFE7',
    surface: '#FBF9F3',
    surfaceSubtle: '#F2EFE7',
    surfaceElevated: '#FBF9F3',

    primary: '#242522',
    primaryForeground: '#FBF9F3',
    primaryMuted: 'rgba(36, 37, 34, 0.1)',

    accent: '#315F5A', // Deep Teal
    accentForeground: '#FBF9F3',

    textPrimary: '#242522',
    textSecondary: '#73756E',
    textMuted: '#73756E',

    border: '#C8C4B9', // Seam
    borderSubtle: 'rgba(200, 196, 185, 0.4)',
    ring: '#315F5A',
  },
  typography: {
    fontHeading: '"Sora", system-ui, sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", monospace',
    scaleRatio: 1.2,
  },
  spacing: {
    containerPadding: 'px-4 sm:px-8 md:px-16',
    sectionSpacing: 'py-16 md:py-24',
    elementGap: 'gap-4 md:gap-8',
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
