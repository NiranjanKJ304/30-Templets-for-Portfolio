import type { ThemeTokens } from '../../core/types/theme';

export const posterTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    background: '#F4EFE4',
    surface: '#FFFDF7',
    surfaceSubtle: '#F4EFE4',
    surfaceElevated: '#FFFDF7',

    primary: '#17191B',
    primaryForeground: '#FFFDF7',
    primaryMuted: 'rgba(23, 25, 27, 0.1)',

    accent: '#D94B36', // Vermilion
    accentForeground: '#FFFDF7',

    textPrimary: '#17191B',
    textSecondary: '#65635D',
    textMuted: '#65635D',

    border: '#C9C3B7',
    borderSubtle: 'rgba(201, 195, 183, 0.5)',
    ring: '#3157D5', // Cobalt
  },
  typography: {
    fontHeading: '"Sora", system-ui, sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", "Space Mono", monospace',
    scaleRatio: 1.4,
  },
  spacing: {
    containerPadding: 'px-6 sm:px-8 md:px-12',
    sectionSpacing: 'py-20 md:py-32',
    elementGap: 'gap-6 md:gap-12',
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
