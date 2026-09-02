/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Fixture: Designer / Creative Director & Product Designer
 */

import type { PortfolioData } from '../types/portfolio';

export const designerFixture: PortfolioData = {
  profile: {
    name: 'Julian Vance',
    headline: 'Principal Product Designer & Design Systems Lead',
    role: 'Product Designer & Design Strategist',
    summary:
      'Crafting clear, typography-driven digital products and cohesive design systems for millions of daily users. Focused on micro-interactions, accessible UI architecture, and humane product experiences.',
    bio:
      'With 9+ years at the intersection of design systems, brand identity, and interface craft, I partner with forward-thinking teams to turn complex workflows into serene, effortless software.',
    location: 'Berlin, Germany / London, UK',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
    availableForHire: true,
    statusBadge: 'Accepting Design Advisory & Select Projects Q3/Q4',
    contactEmail: 'julian@julianvance.design',
    pronouns: 'they/them',
    resumeUrl: 'https://example.com/julian-vance-cv.pdf',
  },
  socials: [
    { platform: 'figma', url: 'https://figma.com/@julianvance', label: 'Figma Community' },
    { platform: 'dribbble', url: 'https://dribbble.com/julianvance', label: 'Dribbble' },
    { platform: 'twitter', url: 'https://twitter.com/julianvance', label: 'Twitter / X' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/julianvance', label: 'LinkedIn' },
    { platform: 'instagram', url: 'https://instagram.com/julian.design', label: 'Visual Journal' },
  ],
  skills: [
    {
      category: 'Product & Visual Design',
      skills: ['Design Systems', 'Interface Craft', 'Typography Systems', 'Design Tokens', 'Design Sprints', 'Information Architecture'],
    },
    {
      category: 'Prototyping & Motion',
      skills: ['Figma Variables & Components', 'Framer / Protopie', 'Motion Design & Micro-interactions', 'Principle'],
    },
    {
      category: 'Research & Strategy',
      skills: ['User Journey Mapping', 'Usability Testing', 'Design Ops', 'Accessibility (WCAG 2.2 AAA)'],
    },
  ],
  projects: [
    {
      id: 'des-proj-1',
      title: 'Monolith: Cross-Platform Enterprise Design System',
      subtitle: 'Scalable multi-brand tokenized UI kit powering 12 flagship applications',
      tagline: 'Precision tokenized design system engineered for scale',
      description:
        'Unified 14 fragmented product surfaces into one cohesive, accessible design language. Established token taxonomy bridging Figma directly to React and iOS codebases with automated sync pipelines.',
      role: 'Head of Design Systems',
      client: 'Kinetix Global Media',
      year: '2024',
      category: 'Design Systems',
      tags: ['Design Systems', 'Design Tokens', 'Figma', 'Accessibility', 'Cross-Platform'],
      featured: true,
      thumbnailUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
      media: [
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80',
          caption: 'Interactive token documentation platform and color ramp calibration',
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=80',
          caption: 'Accessible component matrix with keyboard navigation flow patterns',
        },
      ],
      caseStudyUrl: 'https://example.com/monolith-case-study',
      liveUrl: 'https://example.com/monolith-preview',
      highlights: [
        'Reduced feature UI delivery cycle time from 6 weeks to 8 business days across engineering teams',
        'Achieved 100% WCAG 2.1 AA compliance audit scores across 40+ atomic components',
        'Adopted by 180+ designers and 600+ developers globally',
      ],
      metrics: [
        { label: 'Time Saved / Sprint', value: '35%' },
        { label: 'Core Components', value: '42' },
        { label: 'Active Teams', value: '18' },
      ],
    },
    {
      id: 'des-proj-2',
      title: 'Solace: Mindful Financial Intelligence',
      subtitle: 'Native mobile companion app delivering humane spending clarity',
      tagline: 'Quiet, calm interfaces replacing stressful financial dashboards',
      description:
        'Designed an end-to-end iOS application prioritizing mental well-being over guilt-inducing charts. Utilized natural language summaries, warm sensory palettes, and tactile haptic feedback.',
      role: 'Lead Product Designer',
      year: '2023',
      category: 'Mobile UX',
      tags: ['iOS', 'Fintech', 'Sensory UX', 'Micro-interactions'],
      featured: true,
      thumbnailUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80',
      liveUrl: 'https://example.com/solace-app',
      highlights: [
        'Featured as App Store "App of the Day" in 24 countries',
        '4.9/5 star rating across 18,000+ customer reviews',
      ],
      metrics: [
        { label: 'App Store Rating', value: '4.9 ★' },
        { label: 'D30 Retention', value: '68%' },
      ],
    },
    {
      id: 'des-proj-3',
      title: 'Studio Typo: Variable Kinetic Specimen',
      subtitle: 'Interactive editorial playground celebrating experimental Swiss typography',
      tagline: 'Dynamic browser canvas exploring font weights and spatial hierarchy',
      description:
        'A browser-based interactive typography specimen showcasing kinetic optical-sizing behavior, responsive glyph grids, and responsive layout choreography.',
      role: 'Art Director & Creative Developer',
      year: '2023',
      category: 'Editorial / Web',
      tags: ['Typography', 'Editorial', 'Creative Direction'],
      featured: false,
      thumbnailUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80',
      liveUrl: 'https://example.com/studiotypo',
      highlights: ['Site of the Day winner on Awwwards and FWA'],
    },
  ],
  experience: [
    {
      id: 'exp-d1',
      role: 'Principal Design Systems Architect',
      company: 'Forma Design Studio',
      location: 'Berlin / Remote',
      startDate: '2021',
      current: true,
      description:
        'Overseeing design systems consulting for Tier-1 technology companies. Facilitating client workshops, tokens architecture, and design tooling.',
      highlights: [
        'Created design system foundations for two public SaaS companies in EMEA',
        'Authored open-source design token transform tools with 250k+ downloads',
      ],
    },
    {
      id: 'exp-d2',
      role: 'Senior Product Designer',
      company: 'Nordic Digital Labs',
      location: 'Stockholm, Sweden',
      startDate: '2018',
      endDate: '2021',
      description:
        'Led core product UX for web and mobile consumer products. Collaborated directly with founders on zero-to-one product initiatives.',
    },
  ],
  education: [
    {
      id: 'edu-d1',
      institution: 'Royal College of Art (RCA)',
      degree: 'Master of Arts (MA) in Visual Communication & Interaction',
      location: 'London, UK',
      startDate: '2016',
      endDate: '2018',
    },
    {
      id: 'edu-d2',
      institution: 'Bauhaus-Universität Weimar',
      degree: 'Bachelor of Arts (BA) in Media Design & Typography',
      startDate: '2012',
      endDate: '2016',
    },
  ],
  achievements: [
    {
      id: 'ach-d1',
      title: 'Apple Design Award Nominee – Interaction Design',
      issuer: 'Apple Inc.',
      date: '2023',
    },
    {
      id: 'ach-d2',
      title: 'Red Dot Award: Best of the Best (Interface Design)',
      issuer: 'Red Dot Foundation',
      date: '2022',
    },
  ],
  services: [
    {
      id: 'srv-1',
      title: 'Design System Architecture',
      description: 'End-to-end tokenization, component library build, documentation, and design-to-code pipelines.',
      deliverables: ['Figma Token Architecture', 'Accessible Component Kit', 'Developer Handoff Playbook'],
      rate: 'Project-based / Retainer',
    },
    {
      id: 'srv-2',
      title: '0-to-1 Product Strategy & MVP Design',
      description: 'High-fidelity prototyping, user flows, visual identity, and validated click-through testing.',
      deliverables: ['Interactive Prototype', 'Full UX Specifications', 'Design Guidelines'],
      rate: 'Fixed Scope Sprints',
    },
  ],
  testimonials: [
    {
      id: 'tst-1',
      author: 'Amara Chen',
      role: 'VP of Product',
      company: 'Kinetix Global Media',
      quote:
        'Julian transformed our fragmented design culture into a unified engine. Their precision with typography and deep understanding of engineering constraints is unparalleled.',
    },
    {
      id: 'tst-2',
      author: 'Marcus Lindqvist',
      role: 'Founder & CEO',
      company: 'Solace Tech',
      quote:
        'Working with Julian was transformative. They brought a calm, refined clarity to a complex domain that directly fueled our product adoption.',
    },
  ],
  contact: {
    email: 'julian@julianvance.design',
    location: 'Berlin, Germany',
    calendlyUrl: 'https://calendly.com/julianvance/design-review',
    messagePrompt: 'Let’s build something enduring. Reach out for design systems consulting, product design, or advising.',
  },
};
