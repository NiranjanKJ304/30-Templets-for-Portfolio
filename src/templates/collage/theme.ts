import type { ThemeTokens } from '../../core/types/theme';

export const collageTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    // Physical paper aesthetic
    background: '#F7F3EA', // primary light canvas
    surface: '#FFFDF8', // paper white
    surfaceSubtle: '#EBE6DA',
    surfaceElevated: '#FFFFFF',

    primary: '#171717', // ink
    primaryForeground: '#FFFDF8',
    primaryMuted: 'rgba(23, 23, 23, 0.1)',

    accent: '#F26B5B', // Coral accent
    accentForeground: '#FFFDF8',

    textPrimary: '#171717',
    textSecondary: '#4A4A4A',
    textMuted: '#737373',

    border: '#D4CFC4', // subtle paper edge
    borderSubtle: '#E5E1D8',
    ring: '#315CFF', // Cobalt
  },
  typography: {
    fontHeading: '"Playfair Display", "Times New Roman", serif', // editorial serif
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"JetBrains Mono", monospace',
    scaleRatio: 1.25,
  },
  spacing: {
    containerPadding: 'px-6 sm:px-8 lg:px-12',
    sectionSpacing: 'py-20 md:py-32',
    elementGap: 'gap-6',
  },
  radius: {
    sm: '0px', 
    md: '2px', // very slight rounding for paper cuts
    lg: '4px',
    full: '9999px',
  },
  shadows: {
    // Layered, sharp drop shadows to simulate physical paper layers
    sm: '2px 2px 0px 0px rgba(23, 23, 23, 0.08)',
    md: '4px 4px 0px 0px rgba(23, 23, 23, 0.12)',
    lg: '8px 8px 0px 0px rgba(23, 23, 23, 0.15)',
  },
  animation: 'subtle',
  density: 'comfortable',
};
