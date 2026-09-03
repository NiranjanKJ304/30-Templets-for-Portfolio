import type { ThemeTokens } from '../../core/types/theme';

export const blueprintTheme: ThemeTokens = {
  mode: 'light',
  colors: {
    // Drafting paper aesthetic
    background: '#F2F5F7',
    surface: '#FAFCFD',
    surfaceSubtle: '#E6ECEF',
    surfaceElevated: '#FFFFFF',

    primary: '#2E6FBB', // Technical Blue
    primaryForeground: '#FFFFFF',
    primaryMuted: 'rgba(46, 111, 187, 0.1)',

    accent: '#E8893A', // Orange Accent
    accentForeground: '#FFFFFF',

    textPrimary: '#17202A', // Ink
    textSecondary: '#173A5E', // Blueprint Navy
    textMuted: '#73808C', // Muted Gray

    border: '#2E6FBB', // Technical Blue used for primary construction lines
    borderSubtle: '#BDC8D2', // Subtle lines
    ring: '#3DA9C9', // Cyan
  },
  typography: {
    fontHeading: '"Inter", "Helvetica Neue", sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"JetBrains Mono", "Space Mono", monospace',
    scaleRatio: 1.2,
  },
  spacing: {
    containerPadding: 'px-8 sm:px-12 lg:px-16',
    sectionSpacing: 'py-24 md:py-32',
    elementGap: 'gap-8',
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
  animation: 'none',
  density: 'compact',
};
