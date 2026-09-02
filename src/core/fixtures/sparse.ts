/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Fixture: Sparse Data (Minimal user data to test empty handling & resilient layout)
 */

import type { PortfolioData } from '../types/portfolio';

export const sparseFixture: PortfolioData = {
  profile: {
    name: 'Robin Chen',
    headline: 'Independent Researcher & Writer',
    summary: 'Investigating human-machine collaboration, interface ergonomics, and technical communication.',
    contactEmail: 'robin@example.org',
  },
  socials: [
    { platform: 'email', url: 'robin@example.org', label: 'Email' },
    { platform: 'github', url: 'https://github.com/example-robin', label: 'GitHub' },
  ],
  skills: [
    {
      category: 'Focus Areas',
      skills: ['Technical Writing', 'User Research', 'Content Architecture'],
    },
  ],
  projects: [
    {
      id: 'sparse-1',
      title: 'Ergonomics of Digital Canvas Tools',
      subtitle: 'Open research essay on cognitive load in spatial interfaces',
      description:
        'A comprehensive review analyzing interaction friction in modern web-based whiteboard software and creative tools.',
      category: 'Research',
      year: '2024',
      liveUrl: 'https://example.org/canvas-ergonomics',
    },
  ],
  // No experience, no education, no achievements, no certifications, no services, no testimonials
  contact: {
    email: 'robin@example.org',
  },
};
