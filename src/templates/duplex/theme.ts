import type { ThemeTokens } from '../../core/types/theme';

export const duplexTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    // Light Mode Canvas: #F2EEE7
    background: '#F2EEE7',
    surface: '#F2EEE7', // Right surface
    surfaceSubtle: '#E5DED2',
    surfaceElevated: '#181818', // Left panel is dark in light mode

    primary: '#181818', 
    primaryForeground: '#F5F1E9', // Left panel text
    primaryMuted: 'rgba(24, 24, 24, 0.1)',

    accent: '#D35F43', 
    accentForeground: '#FFFFFF',

    textPrimary: '#181818',
    textSecondary: '#5F625F',
    textMuted: '#587A72', // Secondary accent used as muted/highlight

    border: '#B7B0A5', 
    borderSubtle: 'rgba(183, 176, 165, 0.5)',
    ring: '#D35F43',
  },
  typography: {
    fontHeading: '"Space Grotesk", "Helvetica Neue", sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", "Space Mono", monospace',
    scaleRatio: 1.25,
  },
  spacing: {
    containerPadding: 'px-6 sm:px-8 lg:px-12',
    sectionSpacing: 'py-20 md:py-28',
    elementGap: 'gap-8',
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
