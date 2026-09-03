import type { ThemeTokens } from '../../core/types/theme';

export const terminalTheme: ThemeTokens = {
  mode: 'dark',
  colors: {
    // Dark Mode Canvas: #0D1110
    background: '#0D1110',
    surface: '#151A18',
    surfaceSubtle: '#0D1110',
    surfaceElevated: '#1B211E',

    primary: '#E6E8E3', // Used for main text, wait, terminal text is DCE4DC? I'll use E6E8E3 for primary.
    primaryForeground: '#0D1110',
    primaryMuted: 'rgba(230, 232, 227, 0.1)',

    accent: '#79C98B', // Green
    accentForeground: '#0D1110',

    textPrimary: '#DCE4DC', // Terminal text
    textSecondary: '#9CA39D',
    textMuted: '#9CA39D',

    border: '#303833',
    borderSubtle: 'rgba(48, 56, 51, 0.5)',
    ring: '#79C98B',
  },
  typography: {
    fontHeading: '"IBM Plex Mono", "Space Mono", monospace',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", "Space Mono", monospace',
    scaleRatio: 1.125,
  },
  spacing: {
    containerPadding: 'px-4 sm:px-6 md:px-8',
    sectionSpacing: 'py-8',
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
  density: 'compact',
};
