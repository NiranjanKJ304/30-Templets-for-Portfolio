/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Fixture: Creative / Multimedia Artist, Filmmaker & Photographer
 */

import type { PortfolioData } from '../types/portfolio';

export const creativeFixture: PortfolioData = {
  profile: {
    name: 'Soren Lindqvist',
    headline: 'Cinematographer, Documentary Director & Spatial Artist',
    role: 'Visual Director & Documentary Filmmaker',
    summary:
      'Exploring the tension between natural wilderness and human architecture through medium-format cinematography, sensory sound design, and spatial installations.',
    bio:
      'Directing international non-fiction features and visual campaigns for National Geographic, BBC Studios, and independent art institutions. Recipient of the 2023 Nordic Cinephile Golden Lens.',
    location: 'Reykjavik, Iceland / Copenhagen, Denmark',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    availableForHire: true,
    statusBadge: 'Booking 2025/2026 Directing & Editorial Commissions',
    contactEmail: 'studio@sorenlindqvist.com',
    pronouns: 'he/him',
  },
  socials: [
    { platform: 'instagram', url: 'https://instagram.com/soren.visuals', label: 'Instagram' },
    { platform: 'youtube', url: 'https://vimeo.com/sorenlindqvist', label: 'Vimeo Portfolio' },
    { platform: 'behance', url: 'https://behance.net/sorenlindqvist', label: 'Behance' },
    { platform: 'email', url: 'studio@sorenlindqvist.com', label: 'Studio Inquiries' },
  ],
  skills: [
    {
      category: 'Cinematography & Direction',
      skills: ['ARRI Alexa & RED Ecosystems', 'Anamorphic Optics', 'Remote Expedition Production', 'Color Grading (DaVinci Resolve)'],
    },
    {
      category: 'Post-Production & Audio',
      skills: ['Spatial Sound (Ambisonics)', 'Non-Linear Editing (Premiere / Avid)', 'Archival Research'],
    },
  ],
  projects: [
    {
      id: 'crt-proj-1',
      title: 'Glacial Resonance: The Vanishing Icefields',
      subtitle: 'Feature-length acoustic documentary captured across the Arctic Circle',
      tagline: 'Sensory cinema exploring acoustic ecology of melting glaciers',
      description:
        'A 78-minute sensory documentary filmed over four seasons in Greenland and Svalbard. Utilized custom hydrophones lowered 300 meters into glacial crevasses combined with 65mm anamorphic camera rigs.',
      role: 'Director & Cinematographer',
      year: '2024',
      category: 'Documentary Film',
      tags: ['Documentary', 'Cinematography', 'Acoustic Ecology', 'Arctic', '65mm'],
      featured: true,
      thumbnailUrl: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1000&q=80',
      media: [
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1000&q=80',
          caption: 'Rigging camera package on Vatnajökull ice cap at sunrise',
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
          caption: 'Aerial perspective of glacial meltwater currents',
        },
      ],
      highlights: [
        'World premiere at International Documentary Film Festival Amsterdam (IDFA)',
        'Winner: Best Visual Craft at Tribeca Film Festival 2024',
      ],
      metrics: [
        { label: 'Festival Laurels', value: '14' },
        { label: 'Global Theatrical', value: '28 Cities' },
      ],
    },
    {
      id: 'crt-proj-2',
      title: 'Monoliths of Silence: Nordic Brutalism',
      subtitle: 'Photographic monograph and exhibition catalogue exploring postwar civic concrete',
      tagline: 'Large-format architectural monograph published by Lund Humphries',
      description:
        'Curated five-year photographic survey examining 48 brutalist churches, civic centres, and public facilities across Norway, Sweden, and Finland.',
      role: 'Photographer & Author',
      year: '2023',
      category: 'Architecture / Monograph',
      tags: ['Photography', 'Architecture', 'Book', 'Brutalism'],
      featured: true,
      thumbnailUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
      highlights: ['Sold out initial 3,000 copy hardcover print run within two months'],
    },
  ],
  experience: [
    {
      id: 'exp-c1',
      role: 'Director & Founder',
      company: 'Ultima Thule Visuals',
      location: 'Reykjavik, Iceland',
      startDate: '2018',
      current: true,
      description:
        'Directing independent documentaries, commercial visual campaigns, and gallery installations.',
    },
    {
      id: 'exp-c2',
      role: 'Staff Camera Operator & 2nd Unit DP',
      company: 'Nordic Film & Television Fund',
      location: 'Copenhagen, Denmark',
      startDate: '2014',
      endDate: '2018',
      description: 'Filmed on 9 major broadcast drama series and documentary productions across Scandinavia.',
    },
  ],
  education: [
    {
      id: 'edu-c1',
      institution: 'National Film School of Denmark',
      degree: 'Diploma in Cinematography & Visual Storytelling',
      location: 'Copenhagen, Denmark',
      startDate: '2010',
      endDate: '2014',
    },
  ],
  achievements: [
    {
      id: 'ach-c1',
      title: 'Tribeca Film Festival: Best Cinematography Award',
      issuer: 'Tribeca Enterprises',
      date: '2024',
    },
    {
      id: 'ach-c2',
      title: 'Danish Film Academy Robert Award Nominee',
      issuer: 'Danish Film Academy',
      date: '2023',
    },
  ],
  services: [
    {
      id: 'srv-c1',
      title: 'Documentary Directing & DP Services',
      description: 'End-to-end principal photography, expedition logistics, and visual identity for non-fiction features.',
    },
    {
      id: 'srv-c2',
      title: 'Commercial Visuals & Editorial Photography',
      description: 'High-end branded campaigns, lookbooks, and architectural photographic documentation.',
    },
  ],
  testimonials: [
    {
      id: 'tst-c1',
      author: 'Karin Björklund',
      role: 'Commissioning Editor',
      company: 'BBC Storyville',
      quote:
        'Soren has an extraordinary visual grammar. His frames hold a quiet gravitas that captures the poetic weight of landscapes rarely seen on screen.',
    },
  ],
  contact: {
    email: 'studio@sorenlindqvist.com',
    location: 'Reykjavik, Iceland',
    messagePrompt: 'For commission inquiries, gallery exhibitions, or commercial representation, please reach out.',
  },
};
