import type { ThemeTokens } from '../../core/types/theme';

export const memphisTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    // Light-first canvas and primary ink
    background: '#FFFDF7', // warm off-white canvas
    surface: '#FFFFFF', // pure white surface
    surfaceSubtle: '#F4F2EC', // slightly darker for contrast
    surfaceElevated: '#FFFFFF', // floating elements

    primary: '#2563EB', // Electric Blue
    primaryForeground: '#FFFFFF',
    primaryMuted: 'rgba(37, 99, 235, 0.1)',

    accent: '#EC4899', // Hot Pink
    accentForeground: '#FFFFFF',

    textPrimary: '#202124',
    textSecondary: '#4B5563',
    textMuted: '#6B7280',

    border: '#202124', // harsh borders are a staple of memphis design
    borderSubtle: '#E5E7EB',
    ring: '#FACC15', // Bright Yellow
  },
  typography: {
    fontHeading: '"Space Grotesk", system-ui, sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"JetBrains Mono", monospace',
    scaleRatio: 1.333,
  },
  spacing: {
    containerPadding: 'px-6 sm:px-8 lg:px-12',
    sectionSpacing: 'py-20 md:py-32',
    elementGap: 'gap-8',
  },
  radius: {
    sm: '0px', // geometric shapes are often sharp
    md: '0px', // some elements can be pill-shaped or fully rounded, but cards are often sharp
    lg: '0px',
    full: '9999px', // for circles
  },
  shadows: {
    // Offset solid shadows are key to Memphis design
    sm: '4px 4px 0px 0px #202124',
    md: '8px 8px 0px 0px #202124',
    lg: '12px 12px 0px 0px #202124',
  },
  animation: 'expressive',
  density: 'spacious',
};
