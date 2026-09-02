/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Universal Portfolio Template Theme Contract
 */

export type ThemeMode = 'light' | 'dark' | 'system';
export type AnimationLevel = 'none' | 'subtle' | 'expressive';
export type LayoutDensity = 'compact' | 'comfortable' | 'spacious';

export interface ThemeColors {
  background: string;
  surface: string;
  surfaceSubtle: string;
  surfaceElevated: string;
  primary: string;
  primaryForeground: string;
  primaryMuted: string;
  accent: string;
  accentForeground: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  borderSubtle: string;
  ring: string;
}

export interface ThemeTypography {
  fontHeading: string;
  fontBody: string;
  fontMono: string;
  scaleRatio: number; // e.g. 1.25 or 1.333
}

export interface ThemeSpacing {
  containerPadding: string; // e.g. 'px-4 sm:px-8 lg:px-12'
  sectionSpacing: string;   // e.g. 'py-16 md:py-24'
  elementGap: string;       // e.g. 'gap-6'
}

export interface ThemeRadius {
  sm: string;
  md: string;
  lg: string;
  full: string;
}

export interface ThemeShadows {
  sm: string;
  md: string;
  lg: string;
}

export interface ThemeTokens {
  mode: ThemeMode;
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  radius: ThemeRadius;
  shadows: ThemeShadows;
  animation: AnimationLevel;
  density: LayoutDensity;
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type ThemeOverride = DeepPartial<ThemeTokens>;
