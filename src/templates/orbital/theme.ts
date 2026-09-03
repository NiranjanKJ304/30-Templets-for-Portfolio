import type { ThemeTokens } from '../../core/types/theme';

export const orbitalTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    // Orbital color system
    background: '#EEF2F1',
    surface: '#FFFFFF',
    surfaceSubtle: '#DDE5E4',
    surfaceElevated: '#FFFFFF',

    primary: '#172326',
    primaryForeground: '#FFFFFF',
    primaryMuted: 'rgba(23, 35, 38, 0.1)',

    accent: '#2F7C73',
    accentForeground: '#FFFFFF',

    textPrimary: '#172326',
    textSecondary: '#526467',
    textMuted: '#9BAAA9',

    border: '#B9C9C6',
    borderSubtle: 'rgba(185, 201, 198, 0.5)',
    ring: '#2F7C73',
  },
  typography: {
    fontHeading: '"Plus Jakarta Sans", "Manrope", sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"IBM Plex Mono", "Space Mono", monospace',
    scaleRatio: 1.25,
  },
  spacing: {
    containerPadding: 'px-6 sm:px-10 md:px-20',
    sectionSpacing: 'py-20 md:py-32',
    elementGap: 'gap-6 md:gap-12',
  },
  radius: {
    sm: '0.5rem', 
    md: '1rem', 
    lg: '2rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 4px 20px rgba(23, 35, 38, 0.04)',
    md: '0 8px 30px rgba(23, 35, 38, 0.06)',
    lg: '0 12px 40px rgba(23, 35, 38, 0.08)',
  },
  animation: 'subtle',
  density: 'spacious',
};
