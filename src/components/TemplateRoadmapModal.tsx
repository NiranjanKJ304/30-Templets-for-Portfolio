/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * TemplateRoadmapModal - Planned 35+ Template Architecture Roadmap
 */

import React from 'react';
import { X, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import type { TemplateDefinition } from '../core/types/template';
import { cn } from '../core/utils/cn';

export interface TemplateRoadmapModalProps {
  isOpen: boolean;
  onClose: () => void;
  registeredTemplates: TemplateDefinition[];
}

export const PLANNED_TEMPLATES = [
  { id: 'minimal-01', num: '01', name: 'Minimal', category: 'minimal', desc: 'Refined whitespace, strong typography hierarchy, serene content-first layout' },
  { id: 'executive-01', num: '02', name: 'Executive', category: 'executive', desc: 'Authoritative, structured editorial grids, corporate & consulting prestige' },
  { id: 'neural-01', num: '03', name: 'Neural', category: 'technical', desc: 'High-density systems architecture, data streams, terminal-inspired accents' },
  { id: 'cinema-01', num: '04', name: 'Cinema', category: 'creative', desc: 'Immersive widescreen framing, high-impact media focus, dark mood' },
  { id: 'canvas-01', num: '05', name: 'Canvas', category: 'creative', desc: 'Gallery-inspired studio showcase, asymmetric balance, visual storytelling' },
  { id: 'journey-01', num: '06', name: 'Journey', category: 'editorial', desc: 'Chronological narrative flow, milestone timeline, immersive storytelling' },
  { id: 'aurora-01', num: '07', name: 'Aurora', category: 'modern', desc: 'Vibrant ambient glows, smooth spatial cards, dynamic glass elements' },
  { id: 'brutalist-01', num: '08', name: 'Brutalist', category: 'brutalist', desc: 'Raw high-contrast borders, bold typography, unapologetic structure' },
  { id: 'swiss-01', num: '09', name: 'Swiss', category: 'swiss', desc: 'International Typographic Style, mathematical grid discipline, asymmetric clarity' },
  { id: 'retro-01', num: '10', name: 'Retro', category: 'editorial', desc: '1970s–80s poster typography, warm cream paper, geometric color blocking, analog print aesthetic' },
  { id: 'botanical-01', num: '11', name: 'Botanical', category: 'editorial', desc: 'Earthy, nature-inspired serene portfolio with sage greens, warm terracottas, and organic card typography' },
  { id: 'mono-01', num: '12', name: 'Mono', category: 'technical', desc: 'Monospaced precision, developer craft, ASCII & terminal details' },
  { id: 'orbit-01', num: '12', name: 'Orbit', category: 'modern', desc: 'Centric focal point, radial layouts, interactive planetary cards' },
  { id: 'paper-01', num: '13', name: 'Paper', category: 'minimal', desc: 'Tactile stationery feel, subtle shadows, organic print-like margins' },
  { id: 'grid-01', num: '14', name: 'Grid', category: 'swiss', desc: 'Strict multi-column modular grid, visible rules, balanced matrix' },
  { id: 'flux-01', num: '15', name: 'Flux', category: 'modern', desc: 'Dynamic fluid transitions, adaptive color accents, interactive kinetic energy' },
  { id: 'horizon-01', num: '16', name: 'Horizon', category: 'editorial', desc: 'Expansive horizontal scroll sections, wide-angle panoramic cards' },
  { id: 'frame-01', num: '17', name: 'Frame', category: 'minimal', desc: 'Architectural border framing, viewport boundary aesthetics' },
  { id: 'spectrum-01', num: '18', name: 'Spectrum', category: 'creative', desc: 'Vibrant gradient harmonies, expressive multi-tone palettes' },
  { id: 'typeform-01', num: '19', name: 'Typeform', category: 'minimal', desc: 'Pure typography-led layout, oversized lettering, minimal decoration' },
  { id: 'bento-01', num: '20', name: 'Bento', category: 'modern', desc: 'Modular bento-box grid cards, multi-dimensional content grouping' },
  { id: 'archive-01', num: '21', name: 'Archive', category: 'editorial', desc: 'Museum catalog indexing, systematic taxonomy, structured indices' },
  { id: 'blueprint-01', num: '22', name: 'Blueprint', category: 'technical', desc: 'Technical drafting aesthetics, coordinate lines, engineering precision' },
  { id: 'organic-01', num: '23', name: 'Organic', category: 'creative', desc: 'Soft curved geometry, earthen neutral tones, flowing natural lines' },
  { id: 'noir-01', num: '24', name: 'Noir', category: 'creative', desc: 'Monochromatic high-contrast shadow play, cinematic black & white' },
  { id: 'sol-01', num: '25', name: 'Sol', category: 'modern', desc: 'Warm sunlight-infused palettes, vibrant optimism, radiant atmosphere' },
  { id: 'glass-01', num: '26', name: 'Glass', category: 'modern', desc: 'Layered translucent surfaces, refractive optical effects, frosted depth' },
  { id: 'metro-01', num: '27', name: 'Metro', category: 'swiss', desc: 'Wayfinding typography, high-velocity bold signage, subway map precision' },
  { id: 'studio-01', num: '28', name: 'Studio', category: 'creative', desc: 'Creative agency portfolio layout, oversized media hero, client rosters' },
  { id: 'pulse-01', num: '29', name: 'Pulse', category: 'technical', desc: 'Live data signals, subtle activity pulses, responsive status monitors' },
  { id: 'zen-01', num: '30', name: 'Zen', category: 'minimal', desc: 'Extreme reduction, profound silence, singular focal meditation' },
  { id: 'chromatic-01', num: '31', name: 'Chromatic', category: 'creative', desc: 'Color theory explorations, vibrant contrast harmonies' },
  { id: 'offset-01', num: '32', name: 'Offset', category: 'editorial', desc: 'Asymmetric offset cards, staggered column flow, dynamic visual tension' },
  { id: 'monument-01', num: '33', name: 'Monument', category: 'executive', desc: 'Colossal display type, architectural scale, enduring gravitas' },
  { id: 'paperfold-01', num: '34', name: 'Paperfold', category: 'creative', desc: 'Origami-inspired dimensional folds, subtle depth facets' },
  { id: 'signal-01', num: '35', name: 'Signal', category: 'technical', desc: 'Broadcast frequency aesthetics, telemetry dials, crisp radar accents' },
];

export const TemplateRoadmapModal: React.FC<TemplateRoadmapModalProps> = ({
  isOpen,
  onClose,
  registeredTemplates,
}) => {
  if (!isOpen) return null;

  const registeredIds = new Set(registeredTemplates.map((t) => t.config.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/70 dark:bg-black/80 backdrop-blur-xs">
      <div className="relative w-full max-w-4xl max-h-[85vh] flex flex-col bg-white dark:bg-[#1A1A1A] border border-[#1A1A1A]/10 dark:border-white/10 rounded-xs shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A]/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#20201E]">
          <div>
            <h3 className="font-serif italic text-lg font-bold text-[#1A1A1A] dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Planned 35+ Universal Template Library
            </h3>
            <p className="text-[11px] uppercase tracking-wider text-[#1A1A1A]/50 dark:text-white/50 font-mono mt-0.5">
              Isolated, domain-independent visual skins driven by universal PortfolioData
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xs text-[#1A1A1A]/50 hover:text-[#1A1A1A] dark:text-white/50 dark:hover:text-white hover:bg-[#1A1A1A]/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-3 bg-[#EEEEEB] dark:bg-[#262624] border-b border-[#1A1A1A]/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
          <span className="font-semibold text-[#1A1A1A] dark:text-white">
            Registered: {registeredTemplates.length} / {PLANNED_TEMPLATES.length} templates
          </span>
          <span className="text-[#1A1A1A]/60 dark:text-white/60">
            System ready for Template 01 (Minimal)
          </span>
        </div>

        {/* Template Grid */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#F9F9F8] dark:bg-[#151515]">
          {PLANNED_TEMPLATES.map((item) => {
            const isRegistered = registeredIds.has(item.id);

            return (
              <div
                key={item.id}
                className={cn(
                  'p-3.5 rounded-xs border transition-all',
                  isRegistered
                    ? 'border-emerald-500 bg-white dark:bg-[#1A1A1A] shadow-xs'
                    : 'border-[#1A1A1A]/10 dark:border-white/10 bg-white dark:bg-[#1A1A1A] opacity-85 hover:opacity-100 hover:border-[#1A1A1A]/20'
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold px-1.5 py-0.5 rounded-2xs bg-[#EEEEEB] dark:bg-[#2A2A28] text-[#1A1A1A] dark:text-white">
                      {item.num}
                    </span>
                    <h4 className="text-sm font-bold text-[#1A1A1A] dark:text-white">
                      {item.name}
                    </h4>
                    <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-2xs bg-[#EEEEEB] dark:bg-[#2A2A28] text-[#1A1A1A]/60 dark:text-white/60">
                      {item.category}
                    </span>
                  </div>

                  <div>
                    {isRegistered ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Registered
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] text-[#1A1A1A]/40 dark:text-white/40 font-mono uppercase tracking-wider">
                        <Clock className="w-3 h-3" /> Planned
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-2 text-xs text-[#1A1A1A]/70 dark:text-neutral-300 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
