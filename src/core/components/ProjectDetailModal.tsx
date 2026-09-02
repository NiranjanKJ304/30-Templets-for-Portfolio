/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ProjectDetailModal - Accessible, interactive modal for deep project case studies
 */

import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, ExternalLink, Github, Calendar, User, Tag, Sparkles, Building } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { ImageWithFallback } from './ImageWithFallback';
import { cn } from '../utils/cn';

export interface ProjectDetailModalProps {
  project?: Project | null;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  className = '',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle ESC key and focus management
  useEffect(() => {
    if (!isOpen || !project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Auto-focus close button for keyboard accessibility
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, [isOpen, project, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-title-${project.id}`}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1A1A]/70 dark:bg-black/80 backdrop-blur-xs"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.98, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 12 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'relative z-10 w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-[#1A1A1A] border border-[#1A1A1A]/10 dark:border-white/10 rounded-xs shadow-2xl overflow-hidden',
            className
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A]/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#20201E] shrink-0">
            <div className="flex items-center gap-2">
              {project.category && (
                <span className="px-2 py-0.5 rounded-xs text-[10px] font-bold uppercase tracking-widest bg-[#EEEEEB] dark:bg-[#2A2A28] text-[#1A1A1A] dark:text-white font-mono">
                  {project.category}
                </span>
              )}
              {project.year && (
                <span className="text-xs text-[#1A1A1A]/50 dark:text-white/50 flex items-center gap-1 font-mono">
                  <Calendar className="w-3 h-3" />
                  {project.year}
                </span>
              )}
            </div>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-1 rounded-xs text-[#1A1A1A]/50 hover:text-[#1A1A1A] dark:text-white/50 dark:hover:text-white hover:bg-[#1A1A1A]/5 dark:hover:bg-white/10 transition-colors focus-visible:outline-none cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-6">
            {/* Title & Tagline */}
            <div>
              <div className="w-10 h-[2px] bg-[#1A1A1A] dark:bg-white mb-3" />
              <h2
                id={`project-title-${project.id}`}
                className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] dark:text-white"
              >
                {project.title}
              </h2>
              {project.tagline && (
                <p className="mt-2 text-sm sm:text-base text-[#1A1A1A]/60 dark:text-neutral-300 font-medium">
                  {project.tagline}
                </p>
              )}
            </div>

            {/* Thumbnail / Hero Image */}
            {project.thumbnailUrl && (
              <div className="rounded-xs overflow-hidden border border-[#1A1A1A]/10 dark:border-white/10">
                <ImageWithFallback
                  src={project.thumbnailUrl}
                  alt={project.title}
                  aspectRatioClass="aspect-video"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Metadata Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xs bg-[#F9F9F8] dark:bg-[#20201E] border border-[#1A1A1A]/10 dark:border-white/10 text-xs">
              {project.role && (
                <div className="flex items-center gap-2 text-[#1A1A1A]/80 dark:text-neutral-300">
                  <User className="w-3.5 h-3.5 text-[#1A1A1A]/40 dark:text-white/40 shrink-0" />
                  <span className="font-semibold text-[#1A1A1A]/50 dark:text-white/50 uppercase tracking-wider text-[10px]">
                    Role:
                  </span>
                  <span>{project.role}</span>
                </div>
              )}
              {project.client && (
                <div className="flex items-center gap-2 text-[#1A1A1A]/80 dark:text-neutral-300">
                  <Building className="w-3.5 h-3.5 text-[#1A1A1A]/40 dark:text-white/40 shrink-0" />
                  <span className="font-semibold text-[#1A1A1A]/50 dark:text-white/50 uppercase tracking-wider text-[10px]">
                    Client:
                  </span>
                  <span>{project.client}</span>
                </div>
              )}
              {project.startDate && (
                <div className="flex items-center gap-2 text-[#1A1A1A]/80 dark:text-neutral-300">
                  <Calendar className="w-3.5 h-3.5 text-[#1A1A1A]/40 dark:text-white/40 shrink-0" />
                  <span className="font-semibold text-[#1A1A1A]/50 dark:text-white/50 uppercase tracking-wider text-[10px]">
                    Timeline:
                  </span>
                  <span>
                    {project.startDate} {project.endDate ? `— ${project.endDate}` : ''}
                  </span>
                </div>
              )}
            </div>

            {/* Main Description */}
            {project.description && (
              <div className="text-sm text-[#1A1A1A]/80 dark:text-neutral-200 leading-relaxed font-sans">
                <p className="whitespace-pre-line">{project.description}</p>
              </div>
            )}

            {/* Detailed Markdown Content if provided */}
            {project.detailedMarkdown && (
              <div className="p-4 rounded-xs bg-[#F9F9F8] dark:bg-[#20201E] border border-[#1A1A1A]/10 dark:border-white/10 text-[#1A1A1A]/80 dark:text-neutral-300 leading-relaxed text-xs whitespace-pre-line font-mono">
                {project.detailedMarkdown}
              </div>
            )}

            {/* Key Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-2.5">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A]/60 dark:text-white/60 flex items-center gap-2 border-b border-[#1A1A1A]/10 dark:border-white/10 pb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Key Highlights & Outcomes
                </h4>
                <ul className="space-y-2 text-xs text-[#1A1A1A]/80 dark:text-neutral-300">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-2xs bg-[#1A1A1A]/40 dark:bg-white/40 mt-1.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Metrics if present */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xs border border-[#1A1A1A]/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#20201E] text-center"
                  >
                    <div className="text-xl font-bold font-serif text-[#1A1A1A] dark:text-white">
                      {metric.value}
                    </div>
                    <div className="text-[10px] text-[#1A1A1A]/50 dark:text-white/50 uppercase tracking-wider font-mono mt-0.5">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Gallery Media */}
            {project.media && project.media.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A]/60 dark:text-white/60 border-b border-[#1A1A1A]/10 dark:border-white/10 pb-1.5">
                  Media & Gallery
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.media.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xs overflow-hidden border border-[#1A1A1A]/10 dark:border-white/10 bg-[#EEEEEB] dark:bg-[#20201E]"
                    >
                      <ImageWithFallback
                        src={item.url}
                        alt={item.alt || `${project.title} screenshot ${idx + 1}`}
                        aspectRatioClass="aspect-video"
                        className="w-full h-full object-cover"
                      />
                      {item.caption && (
                        <p className="p-2 text-[10px] text-[#1A1A1A]/60 dark:text-neutral-400 text-center font-mono">
                          {item.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies & Tags */}
            {((project.technologies && project.technologies.length > 0) ||
              (project.tags && project.tags.length > 0)) && (
              <div className="space-y-2 pt-2 border-t border-[#1A1A1A]/10 dark:border-white/10">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A]/50 dark:text-white/50 flex items-center gap-1.5">
                  <Tag className="w-3 h-3" />
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {(project.technologies || project.tags || []).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-2xs text-[11px] font-mono bg-[#EEEEEB] dark:bg-[#2A2A28] text-[#1A1A1A] dark:text-white border border-[#1A1A1A]/5 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {(project.liveUrl || project.sourceUrl || project.caseStudyUrl) && (
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-[#1A1A1A]/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#20201E]">
              <div className="flex items-center gap-3">
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xs border border-[#1A1A1A]/15 dark:border-white/15 text-[#1A1A1A] dark:text-white hover:bg-white dark:hover:bg-[#1A1A1A] transition-colors uppercase tracking-wider font-mono"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Source
                  </a>
                )}
                {project.caseStudyUrl && (
                  <a
                    href={project.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xs text-[#1A1A1A]/80 dark:text-neutral-300 hover:underline uppercase tracking-wider font-mono"
                  >
                    Case Study
                  </a>
                )}
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold rounded-xs bg-[#1A1A1A] text-white dark:bg-white dark:text-[#1A1A1A] hover:opacity-90 transition-opacity uppercase tracking-wider"
                >
                  Visit Live
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
