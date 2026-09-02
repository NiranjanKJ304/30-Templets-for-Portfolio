/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Universal Portfolio Fixtures Registry & Loaders
 */

import type { PortfolioData } from '../types/portfolio';
import { developerFixture } from './developer';
import { designerFixture } from './designer';
import { studentFixture } from './student';
import { legalFixture } from './legal';
import { creativeFixture } from './creative';
import { sparseFixture } from './sparse';

export interface FixtureMeta {
  id: string;
  name: string;
  domain: string;
  density: 'high' | 'medium' | 'sparse';
  description: string;
  data: PortfolioData;
}

export const FIXTURES: FixtureMeta[] = [
  {
    id: 'developer',
    name: 'Elena Rostova',
    domain: 'Software & Distributed Systems Engineer',
    density: 'high',
    description: 'High-density technical portfolio with systems projects, GitHub links, and deep experience.',
    data: developerFixture,
  },
  {
    id: 'designer',
    name: 'Julian Vance',
    domain: 'Principal Product & Design Systems Lead',
    density: 'high',
    description: 'Visual case studies with rich imagery, testimonials, design system deliverables, and awards.',
    data: designerFixture,
  },
  {
    id: 'student',
    name: 'Maya Patel',
    domain: 'CS & AI Undergraduate Researcher',
    density: 'medium',
    description: 'Academic coursework, internships, student projects, hackathon achievements, and resume.',
    data: studentFixture,
  },
  {
    id: 'legal',
    name: 'Alexander Sterling, J.D.',
    domain: 'Partner & Technology Transactions Counsel',
    density: 'medium',
    description: 'Corporate law advisory, regulatory compliance frameworks, bar admissions, and client services.',
    data: legalFixture,
  },
  {
    id: 'creative',
    name: 'Soren Lindqvist',
    domain: 'Cinematographer & Documentary Filmmaker',
    density: 'high',
    description: 'Film gallery, festivals, cinematography equipment skills, and editorial photography.',
    data: creativeFixture,
  },
  {
    id: 'sparse',
    name: 'Robin Chen (Sparse Data)',
    domain: 'Independent Researcher',
    density: 'sparse',
    description: 'Minimal data profile (only basic profile + 1 project + 1 skill list) testing empty section handling.',
    data: sparseFixture,
  },
];

export function getFixtureById(id: string): FixtureMeta | undefined {
  return FIXTURES.find((f) => f.id === id);
}

export function getDefaultFixture(): FixtureMeta {
  return FIXTURES[0];
}

export {
  developerFixture,
  designerFixture,
  studentFixture,
  legalFixture,
  creativeFixture,
  sparseFixture,
};
