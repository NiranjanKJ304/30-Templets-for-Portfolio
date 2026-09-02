/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Fixture: Legal Consultant / Partner & Corporate Counsel
 */

import type { PortfolioData } from '../types/portfolio';

export const legalFixture: PortfolioData = {
  profile: {
    name: 'Alexander Sterling, J.D.',
    headline: 'Partner & Technology Transactions Counsel',
    role: 'Corporate Counsel & Regulatory Strategist',
    summary:
      'Advising pioneering technology companies, venture capital funds, and sovereign enterprises on cross-border transactions, AI compliance, and intellectual property governance.',
    bio:
      'With 16+ years of legal counsel across Silicon Valley and European financial hubs, Alexander has structured over $4.2B in strategic mergers, licensing frameworks, and frontier technology compliance mandates.',
    location: 'New York, NY / Zurich, Switzerland',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    availableForHire: true,
    statusBadge: 'Advising Select Board & Regulatory Committees',
    contactEmail: 'a.sterling@sterlinglex.com',
    contactPhone: '+1 (212) 555-0144',
    pronouns: 'he/him',
    resumeUrl: 'https://example.com/alexander-sterling-cv.pdf',
  },
  socials: [
    { platform: 'linkedin', url: 'https://linkedin.com/in/alexandersterling-legal', label: 'LinkedIn' },
    { platform: 'substack', url: 'https://sterlinglaw.substack.com', label: 'Tech Law Dispatch' },
    { platform: 'email', url: 'a.sterling@sterlinglex.com', label: 'Confidential Email' },
  ],
  skills: [
    {
      category: 'Practice Areas',
      skills: [
        'Technology Transactions & M&A',
        'Global AI Governance & EU AI Act',
        'Cross-Border IP Licensing',
        'Venture Financing & Structuring',
        'Data Privacy & GDPR / CCPA',
      ],
    },
    {
      category: 'Jurisdictions & Admissions',
      skills: [
        'New York State Bar (2009)',
        'California State Bar (2012)',
        'Solicitor, England & Wales (2015)',
        'Swiss Bar Association (Advisory)',
      ],
    },
  ],
  projects: [
    {
      id: 'leg-proj-1',
      title: 'Global Sovereign AI Governance Framework',
      subtitle: 'Advising multinational consortium on EU AI Act conformity assessments',
      tagline: 'Comprehensive risk taxonomy and algorithmic audit architecture',
      description:
        'Structured the compliance blueprint and board-level risk management framework for a Tier-1 medical diagnostics AI enterprise entering European and North American hospital systems.',
      role: 'Lead Regulatory Counsel',
      client: 'BioSynthetix Global',
      year: '2024',
      category: 'Regulatory Advisory',
      tags: ['AI Governance', 'EU AI Act', 'Healthcare Tech', 'Risk Governance'],
      featured: true,
      highlights: [
        'Navigated complex high-risk AI CE-mark readiness protocols across 6 member states',
        'Authored proprietary data provenance clauses adopted across 40+ vendor relationships',
      ],
    },
    {
      id: 'leg-proj-2',
      title: 'Transatlantic Technology Venture Merger',
      subtitle: '$850M cross-border acquisition of semiconductor photonics pioneer',
      tagline: 'Multi-jurisdictional CFIUS review and antitrust clearance',
      description:
        'Represented acquirer in comprehensive IP due diligence, CFIUS clearance, patent portfolio assignment, and key management retention structuring.',
      role: 'Lead M&A Co-Counsel',
      year: '2023',
      category: 'Corporate Transactions',
      tags: ['Mergers & Acquisitions', 'Cross-Border', 'Semiconductors', 'IP Strategy'],
      featured: true,
    },
  ],
  experience: [
    {
      id: 'exp-l1',
      role: 'Senior Partner',
      company: 'Sterling, Vance & Keller LLP',
      location: 'New York, NY',
      startDate: '2017',
      current: true,
      description:
        'Co-managing head of the Global Technology, Emerging Growth, and Regulatory Practice Group.',
    },
    {
      id: 'exp-l2',
      role: 'Special Counsel',
      company: 'Covington & Burling LLP',
      location: 'San Francisco, CA / London',
      startDate: '2011',
      endDate: '2017',
      description:
        'Advised technology companies and venture funds on IP asset acquisition, venture rounds, and commercial licensing.',
    },
  ],
  education: [
    {
      id: 'edu-l1',
      institution: 'Columbia Law School',
      degree: 'Juris Doctor (J.D.)',
      fieldOfStudy: 'Corporate Law & Intellectual Property',
      location: 'New York, NY',
      startDate: '2006',
      endDate: '2009',
      grade: 'Harlan Fiske Stone Scholar',
      description: 'Editor, Columbia Journal of Transnational Law.',
    },
    {
      id: 'edu-l2',
      institution: 'Princeton University',
      degree: 'Bachelor of Arts (A.B.) in Public Policy & Economics',
      startDate: '2002',
      endDate: '2006',
      grade: 'Summa Cum Laude, Phi Beta Kappa',
    },
  ],
  certifications: [
    {
      id: 'cert-l1',
      name: 'Certified Information Privacy Professional (CIPP/E)',
      issuer: 'International Association of Privacy Professionals (IAPP)',
      issueDate: '2021',
    },
  ],
  services: [
    {
      id: 'srv-l1',
      title: 'Strategic Outside General Counsel',
      description: 'Fractional executive legal oversight for scale-ups navigating growth rounds, governance, and licensing.',
      deliverables: ['Board Meeting Advisory', 'Commercial Contract System', 'Investor Term Sheet Guidance'],
    },
    {
      id: 'srv-l2',
      title: 'AI Governance & Compliance Audit',
      description: 'Rapid diagnostic of AI models, training data provenance, and EU/US regulatory risk alignment.',
      deliverables: ['Risk Assessment Matrix', 'Remediation Roadmap', 'Compliance Certification Letter'],
    },
  ],
  contact: {
    email: 'a.sterling@sterlinglex.com',
    location: '575 Madison Avenue, New York, NY 10022',
    phone: '+1 (212) 555-0144',
    officeHours: 'Monday – Friday, 9:00 AM – 6:00 PM ET',
    messagePrompt: 'For institutional retained inquiries or speaking requests, please contact my office directly.',
  },
};
