/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Fixture: Student / Early Career Researcher & Engineer
 */

import type { PortfolioData } from '../types/portfolio';

export const studentFixture: PortfolioData = {
  profile: {
    name: 'Maya Patel',
    headline: 'Computer Science & Machine Learning Student',
    role: 'CS & AI Undergraduate Researcher',
    summary:
      'Senior at Stanford University researching computer vision, neural representation models, and efficient inference. Actively seeking 2025/2026 full-time software engineering and AI research opportunities.',
    bio:
      'Passionate about democratizing machine learning through efficient algorithms and open benchmarks. Former Google SWE Intern and President of the Stanford Women in Computer Science society.',
    location: 'Stanford, CA / Seattle, WA',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    availableForHire: true,
    statusBadge: 'Seeking 2025 New Grad Software & ML Roles',
    contactEmail: 'mpatel@stanford.edu',
    pronouns: 'she/her',
    resumeUrl: 'https://example.com/maya-patel-resume.pdf',
  },
  socials: [
    { platform: 'github', url: 'https://github.com/maya-patel', label: 'GitHub' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/mayapatel-cs', label: 'LinkedIn' },
    { platform: 'twitter', url: 'https://twitter.com/mayapatel_cs', label: 'Twitter' },
    { platform: 'email', url: 'mpatel@stanford.edu', label: 'Stanford Email' },
  ],
  skills: [
    {
      category: 'Languages',
      skills: ['Python', 'C++', 'Java', 'TypeScript', 'SQL', 'Bash'],
    },
    {
      category: 'Frameworks & Tools',
      skills: ['PyTorch', 'TensorFlow', 'CUDA', 'NumPy & Pandas', 'Git', 'Linux / Unix', 'React'],
    },
    {
      category: 'Coursework',
      skills: ['Deep Learning (CS230)', 'Computer Vision (CS231N)', 'Operating Systems (CS111)', 'Algorithms (CS161)', 'Database Systems (CS145)'],
    },
  ],
  projects: [
    {
      id: 'stu-proj-1',
      title: 'NeuralSplat: Fast Radiance Field Reconstruction',
      subtitle: 'Real-time 3D scene reconstruction from sparse monocular drone camera footage',
      tagline: 'Undergraduate honors thesis project under Stanford AI Lab',
      description:
        'Developed an optimized 3D Gaussian splatting algorithm that reconstructs complex indoor geometries using 60% fewer training epochs with competitive PSNR quality.',
      role: 'Lead Researcher',
      year: '2024',
      category: 'Computer Vision / AI',
      tags: ['PyTorch', '3D Gaussian Splatting', 'CUDA', 'Computer Vision'],
      technologies: ['Python', 'PyTorch', 'CUDA C++', 'Open3D'],
      featured: true,
      thumbnailUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
      liveUrl: 'https://example.com/neuralsplat-demo',
      sourceUrl: 'https://github.com/maya/neuralsplat',
      highlights: [
        'Presented at CVPR 2024 Student Workshop in Seattle',
        'Achieved 45 FPS real-time rendering on consumer-grade RTX 3080 GPUs',
      ],
      metrics: [
        { label: 'Rendering FPS', value: '45+' },
        { label: 'Speedup', value: '3.4x' },
      ],
    },
    {
      id: 'stu-proj-2',
      title: 'CampusRide: Peer-to-Peer Transit Router',
      subtitle: 'Carpooling and route optimization app for university student communities',
      tagline: 'Full-stack mobile web app serving 3,500 active campus riders',
      description:
        'Built a graph-based vehicle routing optimizer and real-time chat application to connect students commuting to airport hubs and regional stations.',
      role: 'Full-Stack Developer',
      year: '2023',
      category: 'Web App',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Routing Algorithms'],
      technologies: ['React', 'TypeScript', 'Node.js', 'PostGIS', 'Tailwind'],
      featured: true,
      thumbnailUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80',
      sourceUrl: 'https://github.com/maya/campusride',
      highlights: [
        'Won 1st Place at Stanford TreeHacks 2023 (Sustainability Track)',
        'Facilitated over 8,000 shared rides, saving students an estimated $120,000',
      ],
    },
  ],
  experience: [
    {
      id: 'exp-s1',
      role: 'Software Engineering Intern',
      company: 'Google',
      location: 'Mountain View, CA',
      startDate: 'June 2024',
      endDate: 'September 2024',
      description:
        'Worked on Google Search core ranking infrastructure team optimizing distributed feature store cache invalidation algorithms.',
      highlights: [
        'Designed asynchronous caching protocol decreasing cache miss rates by 8.4%',
        'Authored comprehensive unit and integration tests achieving 94% test coverage',
      ],
      technologies: ['C++', 'Protobuf', 'Flume', 'Borg'],
    },
    {
      id: 'exp-s2',
      role: 'Undergraduate Research Assistant',
      company: 'Stanford Artificial Intelligence Laboratory (SAIL)',
      location: 'Stanford, CA',
      startDate: 'September 2023',
      current: true,
      description:
        'Conducting research on lightweight neural networks for robotics under Prof. Silvio Savarese.',
    },
  ],
  education: [
    {
      id: 'edu-s1',
      institution: 'Stanford University',
      degree: 'B.S. in Computer Science (Artificial Intelligence Track)',
      fieldOfStudy: 'Artificial Intelligence & Systems',
      location: 'Stanford, CA',
      startDate: '2021',
      endDate: '2025 (Expected)',
      grade: '3.96 / 4.00 GPA',
      activities: ['President, Women in Computer Science (WiCS)', 'Teaching Assistant for CS106B', 'Tau Beta Pi Engineering Honor Society'],
    },
  ],
  achievements: [
    {
      id: 'ach-s1',
      title: 'Stanford Undergraduate Research Fellowship (SURF)',
      issuer: 'Stanford School of Engineering',
      date: '2024',
    },
    {
      id: 'ach-s2',
      title: '1st Place – TreeHacks Hackathon (Sustainability Track)',
      issuer: 'Stanford TreeHacks',
      date: '2023',
    },
  ],
  contact: {
    email: 'mpatel@stanford.edu',
    location: 'Stanford, California',
    messagePrompt: 'I am always eager to talk about research collaborations, internship reflections, or new grad opportunities!',
  },
};
