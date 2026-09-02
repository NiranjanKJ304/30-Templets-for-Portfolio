/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SectionTogglePanel - Interactive Section Visibility Manager
 * Validates Rule #6 (Section Visibility) and Rule #7 (Empty Data Handling).
 */

import React from 'react';
import { X, Check, Eye, EyeOff, Lock, AlertCircle } from 'lucide-react';
import type { PortfolioData } from '../core/types/portfolio';
import type { SectionId } from '../core/types/section';
import { ALL_SECTIONS_META } from '../core/types/section';
import { hasSectionData, isSectionVisible } from '../core/utils/sectionVisibility';
import { cn } from '../core/utils/cn';

export interface SectionTogglePanelProps {
  isOpen: boolean;
  onClose: () => void;
  sectionsConfig: Record<SectionId, boolean>;
  onToggleSection: (id: SectionId) => void;
  onSetAllSections: (enabled: boolean) => void;
  data: PortfolioData;
}

function getDataSummary(id: SectionId, data: PortfolioData): string {
  switch (id) {
    case 'profile':
      return data.profile?.name ? `Name: ${data.profile.name}` : 'No profile data';
    case 'about':
      return data.profile?.bio || data.profile?.summary ? 'Bio / Summary available' : 'No bio / summary';
    case 'work':
      return `${data.projects?.length || 0} project${(data.projects?.length || 0) === 1 ? '' : 's'}`;
    case 'experience':
      return `${data.experience?.length || 0} role${(data.experience?.length || 0) === 1 ? '' : 's'}`;
    case 'skills':
      return `${data.skills?.length || 0} category group${(data.skills?.length || 0) === 1 ? '' : 's'}`;
    case 'education':
      return `${data.education?.length || 0} degree${(data.education?.length || 0) === 1 ? '' : 's'}`;
    case 'achievements':
      return `${data.achievements?.length || 0} achievement${(data.achievements?.length || 0) === 1 ? '' : 's'}`;
    case 'certifications':
      return `${data.certifications?.length || 0} credential${(data.certifications?.length || 0) === 1 ? '' : 's'}`;
    case 'services':
      return `${data.services?.length || 0} service${(data.services?.length || 0) === 1 ? '' : 's'}`;
    case 'testimonials':
      return `${data.testimonials?.length || 0} testimonial${(data.testimonials?.length || 0) === 1 ? '' : 's'}`;
    case 'connect':
      return `${data.socials?.length || 0} social link${(data.socials?.length || 0) === 1 ? '' : 's'}`;
    case 'contact':
      return data.contact?.email ? `Email: ${data.contact.email}` : 'No contact channels';
    default:
      return '';
  }
}

export const SectionTogglePanel: React.FC<SectionTogglePanelProps> = ({
  isOpen,
  onClose,
  sectionsConfig,
  onToggleSection,
  onSetAllSections,
  data,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/70 dark:bg-black/80 backdrop-blur-xs">
      <div className="relative w-full max-w-xl max-h-[85vh] flex flex-col bg-white dark:bg-[#1A1A1A] border border-[#1A1A1A]/10 dark:border-white/10 rounded-xs shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A]/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#20201E]">
          <div>
            <h3 className="font-serif italic text-lg font-bold text-[#1A1A1A] dark:text-white">
              Section Visibility Manager
            </h3>
            <p className="text-[11px] uppercase tracking-wider text-[#1A1A1A]/50 dark:text-white/50 font-mono mt-0.5">
              Rule #6 (Visibility) & Rule #7 (Zero-Orphan Empty Handling)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-xs text-[#1A1A1A]/50 hover:text-[#1A1A1A] dark:text-white/50 dark:hover:text-white hover:bg-[#1A1A1A]/5 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Batch Controls */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-[#EEEEEB] dark:bg-[#262624] border-b border-[#1A1A1A]/10 dark:border-white/10 text-xs">
          <span className="text-[10px] uppercase tracking-wider font-bold text-[#1A1A1A]/60 dark:text-white/60">
            Presets:
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onSetAllSections(true)}
              className="px-2.5 py-1 rounded-xs bg-white dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-white border border-[#1A1A1A]/10 dark:border-white/15 text-[11px] font-semibold hover:bg-[#F9F9F8] dark:hover:bg-[#222220] transition-colors"
            >
              Enable All
            </button>
            <button
              onClick={() => onSetAllSections(false)}
              className="px-2.5 py-1 rounded-xs bg-white dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-white border border-[#1A1A1A]/10 dark:border-white/15 text-[11px] font-semibold hover:bg-[#F9F9F8] dark:hover:bg-[#222220] transition-colors"
            >
              Disable All (Except Profile)
            </button>
          </div>
        </div>

        {/* Section List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2 divide-y divide-[#1A1A1A]/5 dark:divide-white/5">
          {ALL_SECTIONS_META.map((meta) => {
            const isEnabled = sectionsConfig[meta.id] !== false;
            const dataExists = hasSectionData(meta.id, data);
            const willRender = isSectionVisible(meta.id, sectionsConfig, data);
            const summary = getDataSummary(meta.id, data);

            return (
              <div key={meta.id} className="pt-2.5 first:pt-0 flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#1A1A1A] dark:text-white">
                      {meta.label}
                    </span>
                    {meta.isCore && (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-2xs text-[9px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 dark:bg-amber-900/50 dark:text-amber-200">
                        <Lock className="w-2.5 h-2.5" />
                        Required
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5 text-xs text-[#1A1A1A]/60 dark:text-white/60">
                    <span>{summary}</span>
                    <span>•</span>
                    <span className={cn(dataExists ? 'text-emerald-600 dark:text-emerald-400 font-medium' : 'text-neutral-400 dark:text-neutral-500 italic')}>
                      {dataExists ? 'Data present' : 'Data absent'}
                    </span>
                  </div>
                </div>

                {/* Render Status Badge + Toggle */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="hidden sm:block text-right">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1 px-2 py-0.5 rounded-xs text-[10px] uppercase tracking-wider font-semibold font-mono',
                        willRender
                          ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-300'
                          : 'bg-[#EEEEEB] text-[#1A1A1A]/50 dark:bg-neutral-800 dark:text-neutral-400'
                      )}
                    >
                      {willRender ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                      {willRender ? 'Renders' : 'Hidden'}
                    </span>
                  </div>

                  <button
                    onClick={() => !meta.isCore && onToggleSection(meta.id)}
                    disabled={meta.isCore}
                    className={cn(
                      'w-8 h-4 rounded-full relative p-0.5 transition-colors cursor-pointer',
                      isEnabled ? 'bg-emerald-500' : 'bg-neutral-300 dark:bg-neutral-700',
                      meta.isCore && 'opacity-70 cursor-not-allowed'
                    )}
                    role="switch"
                    aria-checked={isEnabled}
                    aria-label={`Toggle ${meta.label}`}
                  >
                    <div
                      className={cn(
                        'w-3 h-3 rounded-full bg-white transition-transform',
                        isEnabled ? 'ml-auto' : 'ml-0'
                      )}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rule Reminder Footer */}
        <div className="p-4 bg-[#F9F9F8] dark:bg-[#20201E] border-t border-[#1A1A1A]/10 dark:border-white/10 text-[11px] text-[#1A1A1A]/60 dark:text-white/60 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-[#1A1A1A]/40 dark:text-white/40 shrink-0" />
          <span>
            A section renders <strong>only</strong> when enabled = true AND relevant data exists. Profile is strictly mandatory.
          </span>
        </div>
      </div>
    </div>
  );
};
