import type { ThemeTokens } from '../../core/types/theme';

export const archiveTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    // Light Mode Canvas: #F3F0E8
    background: '#F3F0E8',
    surface: '#FAF8F2',
    surfaceSubtle: '#F3F0E8',
    surfaceElevated: '#20211F',

    primary: '#20211F',
    primaryForeground: '#FAF8F2',
    primaryMuted: 'rgba(32, 33, 31, 0.1)',

    accent: '#9D4937',
    accentForeground: '#FFFFFF',

    textPrimary: '#20211F',
    textSecondary: '#686861',
    textMuted: '#536C65', // Secondary accent

    border: '#C8C5BA', // Rule
    borderSubtle: 'rgba(200, 197, 186, 0.5)',
    ring: '#9D4937',
  },
  typography: {
    fontHeading: '"Sora", system-ui, sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", "Space Mono", monospace',
    scaleRatio: 1.25,
  },
  spacing: {
    containerPadding: 'px-4 sm:px-8 md:px-12',
    sectionSpacing: 'py-12 md:py-16',
    elementGap: 'gap-4',
  },
  radius: {
    sm: '0px',
    md: '0px',
    lg: '0px',
    full: '0px', // Strictly geometric for an archive feel
  },
  shadows: {
    sm: 'none',
    md: 'none',
    lg: 'none',
  },
  animation: 'subtle',
  density: 'compact',
};
