import type { ThemeTokens } from '../../core/types/theme';

export const mosaicTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    // Light Mode Canvas: #F5F2EC
    background: '#F5F2EC',
    surface: '#FFFDF8',
    surfaceSubtle: '#E9DED0', // Warm surface
    surfaceElevated: '#1B1B1A',

    primary: '#1B1B1A',
    primaryForeground: '#FFFDF8',
    primaryMuted: 'rgba(27, 27, 26, 0.1)',

    accent: '#D66B4D',
    accentForeground: '#FFFFFF',

    textPrimary: '#1B1B1A',
    textSecondary: '#65645F',
    textMuted: '#4E7772', // Secondary accent

    border: '#CBC5BB',
    borderSubtle: 'rgba(203, 197, 187, 0.5)',
    ring: '#D66B4D',
  },
  typography: {
    fontHeading: '"Sora", system-ui, sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", "Space Mono", monospace',
    scaleRatio: 1.25,
  },
  spacing: {
    containerPadding: 'px-4 sm:px-8 md:px-12',
    sectionSpacing: 'py-16 md:py-24',
    elementGap: 'gap-6',
  },
  radius: {
    sm: '0px', // Strict geometric tiles
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
