/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Fixture: Developer / Software Engineer
 */

import type { PortfolioData } from '../types/portfolio';

export const developerFixture: PortfolioData = {
  profile: {
    name: 'Elena Rostova',
    headline: 'Senior Distributed Systems & Cloud Architect',
    role: 'Staff Software Engineer',
    summary:
      'Designing resilient, high-throughput distributed architectures, cloud-native infrastructure, and developer platforms. Passionate about open-source systems, observable reliability, and low-latency databases.',
    bio:
      'Over a decade of experience leading platform engineering teams, scaling Kubernetes clusters across multi-region cloud topologies, and contributing to core database engines. Previously architected real-time streaming engines processing 2M+ events/sec.',
    location: 'San Francisco, CA (Remote)',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    availableForHire: true,
    statusBadge: 'Open to Staff & Principal Roles',
    contactEmail: 'elena.rostova@example.com',
    contactPhone: '+1 (415) 555-0198',
    pronouns: 'she/her',
    resumeUrl: 'https://example.com/elena-rostova-resume.pdf',
  },
  socials: [
    { platform: 'github', url: 'https://github.com/example-elena', label: 'GitHub', username: 'elena-systems' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/example-elena', label: 'LinkedIn' },
    { platform: 'twitter', url: 'https://twitter.com/example_elena', label: 'X (Twitter)' },
    { platform: 'substack', url: 'https://elena.substack.com', label: 'Tech Newsletter' },
    { platform: 'email', url: 'elena.rostova@example.com', label: 'Email' },
  ],
  skills: [
    {
      category: 'Languages & Core',
      description: 'Primary programming languages for high-performance computing',
      skills: ['Rust', 'Go (Golang)', 'TypeScript', 'C++', 'Python', 'SQL'],
    },
    {
      category: 'Distributed Systems & Cloud',
      description: 'Cloud orchestration, messaging, and storage systems',
      skills: ['Kubernetes', 'Apache Kafka', 'gRPC & Protobuf', 'Terraform', 'AWS / GCP', 'Redis', 'PostgreSQL'],
    },
    {
      category: 'Reliability & Observability',
      description: 'Metrics, tracing, and high-availability operations',
      skills: ['OpenTelemetry', 'Prometheus & Grafana', 'Chaos Engineering', 'eBPF', 'CI/CD Pipelines'],
    },
  ],
  projects: [
    {
      id: 'dev-proj-1',
      title: 'AetherDB: Embedded Distributed Key-Value Engine',
      subtitle: 'LSM-Tree storage engine written in Rust with Raft consensus protocol',
      tagline: 'High-throughput transactional storage for edge compute',
      description:
        'A zero-dependency distributed key-value store optimized for NVMe storage devices. Features pluggable consensus, write-ahead logging, adaptive compaction, and snapshot isolation.',
      detailedMarkdown:
        '# Architectural Overview\n\n- **Storage Engine**: Log-Structured Merge-tree with cache-aware bloom filters\n- **Consensus**: Multi-Raft group partitioning with dynamic membership changes\n- **Benchmarked Performance**: Sustained 1.4M write IOPS with p99 latency < 1.2ms on c6i.8xlarge clusters.',
      role: 'Creator & Lead Maintainer',
      year: '2024',
      startDate: 'Jan 2023',
      endDate: 'Present',
      category: 'Open Source / Systems',
      tags: ['Rust', 'Raft Consensus', 'Distributed Systems', 'LSM-Tree'],
      technologies: ['Rust', 'Tokio', 'Raft', 'RocksDB C-FFI', 'Criterion.rs'],
      featured: true,
      thumbnailUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
      liveUrl: 'https://example.com/aetherdb-docs',
      sourceUrl: 'https://github.com/example/aetherdb',
      highlights: [
        'Over 4,200 GitHub stars and 80+ global open-source contributors',
        'Achieved 3.2x lower p99 latency compared to baseline BadgerDB under heavy random-write workloads',
        'Integrated zero-copy serialization avoiding heap allocation overheads',
      ],
      metrics: [
        { label: 'Throughput', value: '1.4M IOPS' },
        { label: 'p99 Latency', value: '1.18 ms' },
        { label: 'GitHub Stars', value: '4.2k+' },
      ],
    },
    {
      id: 'dev-proj-2',
      title: 'KubeStream: Multi-Tenant Event Gateway',
      subtitle: 'Dynamic Kafka-to-WebSocket gateway handling 800k concurrent client connections',
      tagline: 'Enterprise real-time stream broker with zero-downtime reconfiguration',
      description:
        'Engineered a high-concurrency streaming gateway bridge connecting backend Apache Kafka clusters to browser clients over HTTP/2 and WebSockets with tenant isolation and token-bucket rate limiting.',
      role: 'Principal Architect',
      year: '2023',
      category: 'Cloud Infrastructure',
      tags: ['Go', 'Kafka', 'WebSockets', 'Kubernetes', 'Redis'],
      technologies: ['Go', 'Apache Kafka', 'Fiber', 'Redis Cluster', 'Prometheus'],
      featured: true,
      thumbnailUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
      liveUrl: 'https://example.com/kubestream',
      sourceUrl: 'https://github.com/example/kubestream',
      highlights: [
        'Reduced infrastructure spend by 42% via custom memory pool allocator in Go',
        'Implemented fine-grained RBAC and automated topic filtering',
      ],
      metrics: [
        { label: 'Concurrent Conns', value: '800k+' },
        { label: 'Cost Reduction', value: '42%' },
      ],
    },
    {
      id: 'dev-proj-3',
      title: 'FluxTrace: eBPF Network Observability Mesh',
      subtitle: 'Kernel-level packet inspection and service-mesh telemetry collector',
      tagline: 'Kernel telemetry with zero code changes or sidecar proxy overhead',
      description:
        'Continuous network packet latency analysis using Linux eBPF probes. Auto-discovers microservice topologies and highlights cross-availability-zone communication bottlenecks.',
      role: 'Core Contributor',
      year: '2023',
      category: 'Observability',
      tags: ['C', 'Rust', 'eBPF', 'Linux Kernel', 'Grafana'],
      technologies: ['eBPF', 'Rust (Aya)', 'Linux', 'Grafana Mimir', 'ClickHouse'],
      featured: false,
      thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      sourceUrl: 'https://github.com/example/fluxtrace',
      highlights: [
        'Replaced Istio Envoy sidecars for basic metrics, lowering CPU overhead by 18%',
      ],
    },
  ],
  experience: [
    {
      id: 'exp-1',
      role: 'Staff Infrastructure Engineer',
      company: 'Novacloud Technologies',
      companyUrl: 'https://example.com',
      location: 'San Francisco, CA',
      locationType: 'hybrid',
      employmentType: 'full-time',
      startDate: '2022',
      current: true,
      description:
        'Technical lead for the core cloud runtime team. Directing architecture across 40+ Kubernetes clusters across 6 global cloud regions.',
      highlights: [
        'Led migration to cell-based multi-region architecture serving 99.999% SLA across 40M daily active requests',
        'Mentored 14 senior and staff engineers across storage and networking tracks',
        'Designed company-wide disaster recovery failover drill executing in under 3 minutes',
      ],
      technologies: ['Go', 'Rust', 'Kubernetes', 'AWS', 'Kafka', 'Terraform'],
    },
    {
      id: 'exp-2',
      role: 'Senior Platform Engineer',
      company: 'DataScale Systems',
      location: 'Seattle, WA',
      locationType: 'remote',
      employmentType: 'full-time',
      startDate: '2019',
      endDate: '2022',
      description:
        'Engineered distributed database drivers and real-time ingestion pipelines handling multi-terabyte analytics.',
      highlights: [
        'Built automated database schema migration operator reducing deployment incidents by 70%',
        'Optimized cross-region latency by deploying intelligent read replica caching algorithms',
      ],
      technologies: ['Go', 'PostgreSQL', 'Docker', 'GCP', 'Redis'],
    },
    {
      id: 'exp-3',
      role: 'Software Engineer',
      company: 'Vanguard Software Labs',
      location: 'Boston, MA',
      locationType: 'on-site',
      employmentType: 'full-time',
      startDate: '2016',
      endDate: '2019',
      description:
        'Built internal developer tools, build automation infrastructure, and REST/gRPC backend microservices.',
      technologies: ['C++', 'Python', 'Linux', 'Jenkins', 'Docker'],
    },
  ],
  education: [
    {
      id: 'edu-1',
      institution: 'Carnegie Mellon University',
      degree: 'Master of Science (M.S.) in Computer Science',
      fieldOfStudy: 'Distributed Systems & Database Foundations',
      location: 'Pittsburgh, PA',
      startDate: '2014',
      endDate: '2016',
      grade: '3.94 GPA',
      description: 'Thesis on Fault-Tolerant Replicated State Machines under Asymmetric Network Partitions.',
    },
    {
      id: 'edu-2',
      institution: 'University of Michigan',
      degree: 'Bachelor of Science (B.S.) in Computer Engineering',
      startDate: '2010',
      endDate: '2014',
      grade: 'Summa Cum Laude',
    },
  ],
  certifications: [
    {
      id: 'cert-1',
      name: 'Certified Kubernetes Security Specialist (CKS)',
      issuer: 'Cloud Native Computing Foundation (CNCF)',
      issueDate: '2023',
      credentialId: 'CNCF-CKS-889102',
    },
    {
      id: 'cert-2',
      name: 'AWS Certified Solutions Architect – Professional',
      issuer: 'Amazon Web Services',
      issueDate: '2022',
    },
  ],
  achievements: [
    {
      id: 'ach-1',
      title: 'Best Technical Paper Award – ACM SIGMOD Systems Track',
      issuer: 'ACM SIGMOD',
      date: '2023',
      description: 'Awarded for research paper on speculative transaction validation in distributed datastores.',
    },
    {
      id: 'ach-2',
      title: 'Keynote Speaker at RustConf Global',
      issuer: 'Rust Foundation',
      date: '2024',
      description: 'Delivered presentation on building lock-free concurrency primitives in modern Rust.',
    },
  ],
  contact: {
    email: 'elena.rostova@example.com',
    location: 'San Francisco, California, USA',
    calendlyUrl: 'https://calendly.com/example-elena/consultation',
    officeHours: 'Tuesdays & Thursdays, 2:00 PM – 5:00 PM PT',
    messagePrompt: 'Interested in technical advisory, distributed systems design, or keynote speaking? Drop a line.',
  },
};
