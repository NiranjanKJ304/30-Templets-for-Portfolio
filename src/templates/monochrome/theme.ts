import type { ThemeTokens } from '../../core/types/theme';

export const monochromeTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    // High contrast monochrome editorial
    background: '#F4F1EA',
    surface: '#FAF9F5',
    surfaceSubtle: '#F4F1EA',
    surfaceElevated: '#FFFFFF',

    primary: '#151515',
    primaryForeground: '#FAF9F5',
    primaryMuted: 'rgba(21, 21, 21, 0.1)',

    accent: '#B44A35',
    accentForeground: '#FAF9F5',

    textPrimary: '#151515',
    textSecondary: '#555555',
    textMuted: '#8A8A84',

    border: '#C9C6BE',
    borderSubtle: 'rgba(201, 198, 190, 0.5)',
    ring: '#B44A35',
  },
  typography: {
    fontHeading: '"DM Serif Display", "Times New Roman", serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", "Space Mono", monospace',
    scaleRatio: 1.414,
  },
  spacing: {
    containerPadding: 'px-4 sm:px-8 md:px-16',
    sectionSpacing: 'py-24 md:py-40',
    elementGap: 'gap-8 md:gap-16',
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
  animation: 'none',
  density: 'spacious',
};
