import type { ThemeTokens } from '../../core/types/theme';

export const blueprintOSTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    background: '#E9ECE8',
    surface: '#F8FAF7',
    surfaceSubtle: '#F8FAF7',
    surfaceElevated: '#FFFFFF',

    primary: '#1D2523',
    primaryForeground: '#FFFFFF',
    primaryMuted: 'rgba(29, 37, 35, 0.1)',

    accent: '#356B63',
    accentForeground: '#FFFFFF',

    textPrimary: '#1D2523',
    textSecondary: '#68716D',
    textMuted: '#68716D',

    border: '#CBD2CD',
    borderSubtle: 'rgba(203, 210, 205, 0.5)',
    ring: '#356B63',
  },
  typography: {
    fontHeading: '"Sora", system-ui, sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", "Space Mono", monospace',
    scaleRatio: 1.25,
  },
  spacing: {
    containerPadding: 'px-4 sm:px-6 md:px-8',
    sectionSpacing: 'py-8 md:py-12',
    elementGap: 'gap-4 md:gap-6',
  },
  radius: {
    sm: '0px',
    md: '0px',
    lg: '0px',
    full: '0px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  animation: 'subtle',
  density: 'compact',
};
