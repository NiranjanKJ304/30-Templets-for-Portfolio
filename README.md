# 🎨 Universal Portfolio Template System

> **40-in-1 Professional Portfolio Laboratory**  
> A collection of 40 distinct, production-ready portfolio templates built with **React 19**, **TypeScript 5.8**, **TailwindCSS 4**, and **Vite 6** — all powered by a single canonical data schema.

[![Templates](https://img.shields.io/badge/Templates-40%20Unique%20Designs-blueviolet?style=for-the-badge)](./src/templates)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Complete Catalog of All 40 Templates](#-complete-catalog-of-all-40-templates)
- [Interactive Development Workbench](#-interactive-development-workbench)
- [Core Architecture & Principles](#-core-architecture--principles)
- [Canonical Data Contract](#-canonical-data-contract)
- [Supported Sections](#-supported-sections)
- [Fixture Profiles](#-fixture-profiles)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Quality Gates & Coding Rules](#-quality-gates--coding-rules)
- [Detailed Technical Documentation](#-detailed-technical-documentation)

---

## 🌟 About the Project

The **Universal Portfolio Template System** is an engineering and design laboratory demonstrating how a single, strictly typed data contract (`PortfolioData`) can power **40 completely distinct visual languages and interactive user experiences**.

Instead of coupling each portfolio design to bespoke databases or arbitrary content fields, every template in this project renders the same unified data structure. Whether a user is a software engineer, creative director, academic researcher, architect, or student, their data seamlessly transitions across 40 bespoke visual metaphors — from minimalist editorial layouts to terminal emulators, topographic landscapes, and brutalist posters.

---

## ✨ Key Features

- **40 Production-Ready Templates**: Each with its own unique visual personality, typography pairings, color systems, and interactive micro-details.
- **One Data Contract, Infinite Expressions**: Switch between any of the 40 templates instantly with zero data transformation or re-formatting.
- **Zero DOM Footprint**: Sections that are disabled or contain empty data are completely omitted from the DOM — no empty wrappers, ghost headings, or leftover spacing.
- **Dynamic Adaptive Navigation**: Menus, anchor bars, and page counters derive strictly from visible sections with non-empty content.
- **Light & Dark Mode**: Handcrafted color schemes for both light and dark themes across every single template.
- **Strictly No Fabricated Data**: No fake metrics, placeholder text, fake dates, or synthetic fallback strings.
- **Interactive Development Workbench**: Real-time viewport emulation (Desktop, Tablet, Mobile, Mobile-SM), live section toggling, fixture switching, and raw JSON data inspector.
- **100% Type-Safe**: Full TypeScript coverage with strict types and zero emit errors.

---

## 📚 Complete Catalog of All 40 Templates

| # | Template Name | Template ID | Category | Creative Concept & Visual Metaphor |
|:---:|:---|:---|:---|:---|
| **01** | **Minimal** | `minimal-01` | Minimal | Clean, whitespace-driven minimalism with razor-sharp typography. |
| **02** | **Executive** | `executive-01` | Executive | Corporate, authoritative, and structured for leadership & directors. |
| **03** | **Neural** | `neural-01` | Technical | Cybernetic, data-inspired nodes and tech-forward glowing lines. |
| **04** | **Cinema** | `cinema-01` | Cinema | Dramatic widescreen compositions, letterbox ratios, and cinematic pacing. |
| **05** | **Canvas** | `canvas-01` | Creative | Open artist's studio canvas with raw materiality and creative freedom. |
| **06** | **Journey** | `journey-01` | Modern | Chronological chapter-based narrative storytelling of a professional career. |
| **07** | **Swiss** | `swiss-01` | Swiss | International Typographic Style with rigid grid discipline and bold sans typography. |
| **08** | **Aurora** | `aurora-01` | Modern | Luminous mesh gradients, ethereal lighting, and subtle iridescent blurs. |
| **09** | **Retro** | `retro-01` | Creative | Nostalgic computing, vintage cathode-ray CRT motifs, and pixel accents. |
| **10** | **Botanical** | `botanical-01` | Creative | Organic herbarium, earthy tones, fine pressed-plant lines, and botanical charm. |
| **11** | **Brutalist** | `brutalist-01` | Brutalist | High-contrast, raw borders, unapologetic typography, and anti-design ethos. |
| **12** | **Bento** | `bento-01` | Modern | Modern modular bento-box compartments with curated information density. |
| **13** | **Editorial** | `editorial-01` | Editorial | High-fashion quarterly magazine layout with serif headlines and pull quotes. |
| **14** | **Magazine Noir** | `magazine-noir-01` | Editorial | Dark-mode editorial publication with moody shadows and high-contrast styling. |
| **15** | **Neo Organic** | `neo-organic-01` | Creative | Soft pebbles, biomorphic curves, fluid surfaces, and warm natural hues. |
| **16** | **Memphis** | `memphis-01` | Creative | 1980s Ettore Sottsass design movement with bold geometric patterns and vibrant contrasts. |
| **17** | **Collage** | `collage-01` | Creative | Tactile mixed-media paper cutouts, pinned notes, and layered sheet overlaps. |
| **18** | **Blueprint** | `blueprint-01` | Technical | Engineering architectural blueprints, cyanotype grids, and technical drafting marks. |
| **19** | **Paperfold** | `paperfold-01` | Creative | Crisp origami-inspired paper creases, subtle drop facets, and folded tabs. |
| **20** | **Monochrome** | `monochrome-01` | Minimal | Pure black and white stark minimalism with zero hue distraction. |
| **21** | **Orbital** | `orbital-01` | Modern | Planetary orbits, circular trajectory lines, and celestial focal points. |
| **22** | **Duplex** | `duplex-01` | Modern | Two-tone split-screen composition contrasting content and identity. |
| **23** | **Kinetic** | `kinetic-01` | Modern | Dynamic motion typography, sliding directional cues, and speed lines. |
| **24** | **Mosaic** | `mosaic-01` | Creative | Interlocking stone mosaic patterns and geometric tile arrangements. |
| **25** | **Archive** | `archive-01` | Editorial | Archival file catalog, index cards, metadata tags, and museum documentation. |
| **26** | **Index** | `index-01` | Minimal | Systematic directory index, tabular listings, and clean reference rows. |
| **27** | **Terminal** | `terminal-01` | Technical | Authentic CLI monospace terminal with command prompts and system headers. |
| **28** | **Poster** | `poster-01` | Modern | Large-scale typographic poster design with bold block lettering and rules. |
| **29** | **Blueprint OS** | `blueprint-os-01` | Technical | Window-manager workstation metaphor with draggable and focused task windows. |
| **30** | **Organic Flow** | `organic-flow-01` | Creative | Fluid liquid contours, smooth wave transitions, and flowing gradients. |
| **31** | **Monumental** | `monumental-01` | Minimal | Architectural monoliths, colossal typography, and heroic negative space. |
| **32** | **Prism** | `prism-01` | Creative | Refracted light, faceted geometric angles, and subtle spectral chromatic dispersion. |
| **33** | **Kinship** | `kinship-01` | Modern | Relational networks, connected pathways, node clusters, and community ties. |
| **34** | **Tessera** | `tessera-01` | Creative | Assembled interlocking mosaic pieces forming a cohesive single identity. |
| **35** | **Vellum** | `vellum-01` | Editorial | Living annotated manuscript with marginalia, editorial brackets, and footnotes. |
| **36** | **Chroma** | `chroma-01` | Modern | Expansive color fields where deliberate chromatic shifts define functional zones. |
| **37** | **Monoform** | `monoform-01` | Minimal | A single continuous carved surface without fragmented cards or disjointed boxes. |
| **38** | **Chronicle** | `chronicle-01` | Editorial | Horizontal temporal strata and geological layers of career milestones. |
| **39** | **Contour** | `contour-01` | Modern | Information landscape with topographic contour curves and subtle elevation levels. |
| **40** | **Folio** | `folio-01` | Editorial | Layered professional portfolio sheets assembled in a presentation folder. |

---

## 🛠 Interactive Development Workbench

The application entry point (`src/App.tsx`) is an interactive **Template Laboratory Workbench** designed for real-time testing, inspection, and QA:

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│  🎨 Portfolio Template Lab    [Template: Folio ▼]    [Fixture: Developer ▼]    [Viewport: Full ▼] │
│  [🌓 Dark Mode]   [⚙️ Section Manager]   [🔍 Data Inspector]   [🗺️ Roadmap]                      │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

1. **Template Switcher**: Instant live-rendering of all 40 registered templates.
2. **Viewport Simulation**: Test responsiveness without resizing your browser:
   - **Full**: 100% fluid browser width
   - **Desktop**: Centered at `1440px` with drop-shadow frame
   - **Tablet**: Centered at `768px`
   - **Mobile**: Centered at `375px` (iPhone standard)
   - **Mobile-SM**: Centered at `320px` (Ultra-compact)
3. **Section Visibility Manager**: Live toggle for any of the 12 sections to verify zero-DOM footprint behavior.
4. **Data Inspector**: Slide-over drawer displaying the active fixture's raw JSON structure.
5. **Dark Mode Toggle**: Immediate theme switching via root `.dark` class injection.
6. **Project Modal System**: Full modal overlay testing with multi-image carousels, metrics, and technology chips.

---

## 🏛 Core Architecture & Principles

### 1. Template Isolation
Every template resides in its own isolated folder under `src/templates/<template-name>/`. Templates **never** import from sibling template directories. All shared functionality is imported exclusively from `src/core/`.

### 2. Runtime Registration Pattern
Every template module exports a `TemplateDefinition` and automatically registers itself via `registerTemplate()`:

```typescript
// src/templates/folio/index.ts
import { registerTemplate } from '../../core/registry/templateRegistry';
import { folioConfig } from './template.config';
import { folioTheme } from './theme';
import FolioTemplate from './FolioTemplate';

export const folioTemplate: TemplateDefinition = {
  config: folioConfig,
  defaultTheme: folioTheme,
  component: FolioTemplate,
};

// Explicit runtime registration
registerTemplate(folioTemplate);

export default folioTemplate;
```

### 3. Dual-Layer Section Visibility Gate
A section only mounts and renders when **both** conditions are met:
1. It is enabled in the user's `sectionsConfig`.
2. Real data exists in the canonical `PortfolioData` object.

```tsx
// Layer 1: Template conditional evaluation
{config.skills !== false && isSectionVisible('skills', config, data) && (
  <FolioSkillsSection data={data} enabled={config.skills} />
)}

// Layer 2: Core SectionWrapper gate
<SectionWrapper id="skills" enabled={enabled} hasData={hasData}>
  {/* Content */}
</SectionWrapper>
```

---

## 📋 Canonical Data Contract

All templates consume the identical TypeScript interface defined in `src/core/types/portfolio.ts`:

```typescript
export interface PortfolioData {
  profile: Profile;                 // Required: name, role, bio, headline, avatarUrl, etc.
  socials?: SocialLink[];           // Optional: platform, url, label, username
  skills?: SkillGroup[];            // Optional: category, skills: (string | SkillItem)[]
  projects?: Project[];             // Optional: title, description, media, tags, liveUrl
  experience?: Experience[];        // Optional: role, company, dates, highlights
  education?: Education[];          // Optional: institution, degree, fieldOfStudy
  certifications?: Certification[]; // Optional: name, issuer, issueDate, credentialUrl
  achievements?: Achievement[];     // Optional: title, issuer, date, category
  services?: Service[];             // Optional: title, description, deliverables, rate
  testimonials?: Testimonial[];     // Optional: author, quote, company, avatarUrl
  contact?: ContactInfo;            // Optional: email, phone, location, calendlyUrl
  meta?: PortfolioMeta;             // Optional: lastUpdated, customDomain, keywords
}
```

---

## 📑 Supported Sections

| Section ID | Display Title | Description | Requirement |
|:---|:---|:---|:---:|
| `profile` | **Profile / Hero** | Name, headline, role, avatar, location, status badge | **Mandatory** |
| `about` | **About / Biography** | Summary statement, extended biographical narrative | Optional |
| `work` | **Work & Projects** | Case studies, featured media, metrics, technology tags | Optional |
| `experience` | **Experience** | Professional history, roles, companies, highlights | Optional |
| `skills` | **Skills & Capabilities**| Grouped competencies with optional levels/experience | Optional |
| `education` | **Education** | Degrees, institutions, fields of study, honors | Optional |
| `certifications` | **Certifications** | Professional credentials, license IDs, verification links | Optional |
| `achievements` | **Achievements** | Honors, awards, hackathons, and career milestones | Optional |
| `services` | **Services & Offerings**| Consulting offerings, deliverables, timelines, rates | Optional |
| `testimonials` | **Testimonials** | Client endorsements, peer recommendations, quotes | Optional |
| `connect` | **Connect & Socials** | Social media profiles and platform links | Optional |
| `contact` | **Contact** | Direct reach-out channels, email, phone, Calendly booking | Optional |

---

## 👥 Fixture Profiles

Sample datasets are located in `src/core/fixtures/` to simulate real-world developer and creative profiles:

- **Developer (`developer.ts`)**: Full-stack engineer with comprehensive project metrics, deep tech stack, open-source work, and experience history.
- **Designer (`designer.ts`)**: Product designer with visual case studies, deliverables, and testimonials.
- **Creative (`creative.ts`)**: Multidisciplinary creative featuring gallery showcases and artistic achievements.
- **Student (`student.ts`)**: Academic record, hackathon awards, coursework, and early-career projects.
- **Legal (`legal.ts`)**: Corporate consultant / legal advisor with services, certifications, and credentials.
- **Sparse (`sparse.ts`)**: Bare-minimum dataset (profile only) used to verify that templates degrade gracefully when data is sparse.

---

## 📁 Project Directory Structure

```
30-Templets-for-Portfolio/
├── ARCHITECTURE.md                  # Detailed system architecture document
├── README.md                        # Project overview & template guide
├── index.html                       # HTML application entry
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript compiler configuration
├── vite.config.ts                   # Vite build tool setup
│
├── public/                          # Static assets and icons
│
└── src/
    ├── main.tsx                     # React DOM entry point
    ├── App.tsx                      # Development workbench shell
    ├── index.css                    # TailwindCSS 4 import & base styles
    │
    ├── components/                  # Workbench UI components
    │   ├── PreviewToolbar.tsx       # Top preview control bar
    │   ├── SectionTogglePanel.tsx   # Section visibility manager modal
    │   ├── DataInspectorModal.tsx   # JSON fixture inspector modal
    │   ├── TemplateRoadmapModal.tsx # Template catalog overview modal
    │   └── EmptyTemplateLab.tsx     # Empty state workbench view
    │
    ├── core/                        # Universal core system
    │   ├── types/                   # Canonical TypeScript definitions
    │   │   ├── portfolio.ts         # Canonical PortfolioData schema
    │   │   ├── template.ts          # TemplateConfig & TemplateProps
    │   │   ├── theme.ts             # ThemeTokens & color definitions
    │   │   └── section.ts           # SectionId & SectionConfig
    │   ├── registry/                # Central template registry singleton
    │   │   └── templateRegistry.ts  # Registry Map & getter functions
    │   ├── utils/                   # Shared utility functions
    │   │   ├── sectionVisibility.ts # isSectionVisible & hasSectionData
    │   │   ├── cn.ts                # Tailwind class merger (clsx + twMerge)
    │   │   └── formatters.ts        # Date and text string formatters
    │   ├── components/              # Shared core components
    │   │   ├── SectionWrapper.tsx   # Zero-DOM visibility wrapper
    │   │   ├── ImageWithFallback.tsx# Image error handling component
    │   │   ├── ProjectDetailModal.tsx# Universal project detail modal
    │   │   └── ResumeButton.tsx     # CV download button
    │   └── fixtures/                # Sample profile datasets
    │
    └── templates/                   # 40 template implementations
        ├── index.ts                 # Central export hub for all 40 templates
        ├── minimal/                 # Template 01
        ├── executive/               # Template 02
        ├── ...                      # Templates 03 - 39
        └── folio/                   # Template 40
            ├── index.ts             # Template definition & auto-registration
            ├── template.config.ts   # Metadata and default section configs
            ├── theme.ts             # Design tokens (colors, fonts, radii)
            ├── FolioTemplate.tsx    # Root template React component
            ├── components/          # Template-specific visual primitives
            └── sections/            # Template-specific section implementations
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version `18.0.0` or higher
- **npm**: Version `9.0.0` or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NiranjanKJ304/30-Templets-for-Portfolio.git
   cd 30-Templets-for-Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 📜 Available Scripts

| Command | Action |
|:---|:---|
| `npm run dev` | Launches Vite local development server on `http://localhost:3000` with HMR. |
| `npm run build` | Compiles TypeScript and builds the production bundle into `dist/`. |
| `npm run preview` | Starts a local web server to preview the production build from `dist/`. |
| `npm run lint` | Runs `tsc --noEmit` to verify type safety across the entire project. |
| `npx tsc --noEmit` | Runs strict TypeScript checks independently. |

---

## 🛡 Quality Gates & Coding Rules

To maintain absolute uniformity and prevent regressions across all 40 templates, every template adheres to these strict quality rules:

1. **Canonical Skills Property**: Always access skills via `group.skills.map(...)`. Never use `group.items`, `group.entries`, or `group.skillItems`.
2. **No Bio/Summary Fallback Chains**: Never use `bio || summary` or `summary || bio`. Bio and summary serve distinct narrative purposes.
3. **Zero Fabricated Content**: No fake metrics (e.g. "99.9% uptime"), hardcoded dates, or invented company names.
4. **No Cross-Template Imports**: Templates are self-contained. Template A must never import from Template B.
5. **Zero DOM Footprint**: If a section is disabled or has no data, it returns `null`. No blank wrappers or orphaned dividers.
6. **Accessible Semantic HTML**: Proper heading hierarchy (`h1` → `h2` → `h3`), `aria-label` tags, and `aria-hidden="true"` on decorative glyphs.
7. **Fluid Responsive Design**: Every template is verified from `320px` mobile up to `1440px+` ultra-wide displays with zero horizontal scrollbars.

---

## 📖 Detailed Technical Documentation

For in-depth architectural specifications, sequence diagrams, state flows, and instructions on creating new templates, see:

📄 **[ARCHITECTURE.md](./ARCHITECTURE.md)**

---

## 📄 License

This project is licensed under the **Apache-2.0 License**.  
See the [LICENSE](./LICENSE) file for more details.
