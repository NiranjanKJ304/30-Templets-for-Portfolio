/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Formatting utilities for dates, URLs, text
 */

export function formatDateRange(
  startDate?: string,
  endDate?: string,
  current?: boolean
): string {
  if (!startDate && !endDate) return '';
  if (current) {
    return startDate ? `${startDate} — Present` : 'Present';
  }
  if (startDate && endDate) {
    return `${startDate} — ${endDate}`;
  }
  return startDate || endDate || '';
}

export function formatUrl(url?: string): string {
  if (!url) return '';
  try {
    const parsed = new URL(url.startsWith('http') ? url : `https://${url}`);
    return parsed.hostname.replace(/^www\./, '') + (parsed.pathname === '/' ? '' : parsed.pathname);
  } catch {
    return url;
  }
}

export function truncate(text: string, maxLength: number): string {
  if (!text || text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}…`;
}
