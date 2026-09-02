/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Classname concatenation helper
 */

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ').trim();
}
