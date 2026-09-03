import type { ThemeTokens } from '../../core/types/theme';

export const kineticTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    // Light Mode Canvas: #F3F0E8
    background: '#F3F0E8',
    surface: '#E8E3D8',
    surfaceSubtle: '#F3F0E8', // Match background for subtle areas
    surfaceElevated: '#171717',

    primary: '#171717',
    primaryForeground: '#F3F0E8',
    primaryMuted: 'rgba(23, 23, 23, 0.1)',

    accent: '#E84F3D',
    accentForeground: '#FFFFFF',

    textPrimary: '#171717',
    textSecondary: '#555555',
    textMuted: '#285B63', // Secondary accent

    border: '#BDB7AA',
    borderSubtle: 'rgba(189, 183, 170, 0.5)',
    ring: '#E84F3D',
  },
  typography: {
    fontHeading: '"Space Grotesk", "Archivo Black", system-ui, sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", "Space Mono", monospace',
    scaleRatio: 1.333, // High contrast ratio for oversized type
  },
  spacing: {
    containerPadding: 'px-4 sm:px-8 md:px-12 lg:px-16',
    sectionSpacing: 'py-20 md:py-32',
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
  animation: 'expressive',
  density: 'comfortable',
};
