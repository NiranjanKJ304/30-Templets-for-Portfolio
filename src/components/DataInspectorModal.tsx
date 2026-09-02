/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * DataInspectorModal - Live JSON Inspector and Universal Contract Validator
 */

import React, { useState } from 'react';
import { X, Copy, Check, ShieldCheck, Database } from 'lucide-react';
import type { FixtureMeta } from '../core/fixtures';

export interface DataInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  fixture: FixtureMeta;
}

export const DataInspectorModal: React.FC<DataInspectorModalProps> = ({
  isOpen,
  onClose,
  fixture,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const jsonString = JSON.stringify(fixture.data, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projectCount = fixture.data.projects?.length || 0;
  const expCount = fixture.data.experience?.length || 0;
  const skillCount = fixture.data.skills?.reduce((acc, g) => acc + (g.skills?.length || 0), 0) || 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/70 dark:bg-black/80 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl max-h-[88vh] flex flex-col bg-white dark:bg-[#1A1A1A] border border-[#1A1A1A]/10 dark:border-white/10 rounded-xs shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A]/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#20201E]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xs bg-[#1A1A1A] text-white dark:bg-white dark:text-[#1A1A1A]">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif italic text-lg font-bold text-[#1A1A1A] dark:text-white flex items-center gap-2">
                PortfolioData Inspector
                <span className="px-2 py-0.5 rounded-xs text-[10px] uppercase font-mono tracking-wider bg-[#EEEEEB] dark:bg-[#2A2A28] text-[#1A1A1A] dark:text-white">
                  {fixture.name}
                </span>
              </h3>
              <p className="text-[11px] uppercase tracking-wider text-[#1A1A1A]/50 dark:text-white/50 font-mono">
                Universal Canonical Contract (PortfolioData)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs border border-[#1A1A1A]/10 dark:border-white/15 text-xs font-semibold text-[#1A1A1A] dark:text-white bg-white dark:bg-[#1A1A1A] hover:bg-[#F9F9F8] dark:hover:bg-[#222220] transition-colors uppercase tracking-wider cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy JSON'}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xs text-[#1A1A1A]/50 hover:text-[#1A1A1A] dark:text-white/50 dark:hover:text-white hover:bg-[#1A1A1A]/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Contract Metric Badges */}
        <div className="grid grid-cols-4 gap-2 px-6 py-3 bg-[#EEEEEB] dark:bg-[#262624] border-b border-[#1A1A1A]/10 dark:border-white/10 text-xs font-mono">
          <div className="text-center">
            <div className="text-[10px] uppercase text-[#1A1A1A]/50 dark:text-white/50">Density</div>
            <div className="font-bold text-[#1A1A1A] dark:text-white uppercase">{fixture.density}</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] uppercase text-[#1A1A1A]/50 dark:text-white/50">Projects</div>
            <div className="font-bold text-[#1A1A1A] dark:text-white">{projectCount} items</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] uppercase text-[#1A1A1A]/50 dark:text-white/50">Experience</div>
            <div className="font-bold text-[#1A1A1A] dark:text-white">{expCount} roles</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] uppercase text-[#1A1A1A]/50 dark:text-white/50">Skills</div>
            <div className="font-bold text-[#1A1A1A] dark:text-white">{skillCount} skills</div>
          </div>
        </div>

        {/* JSON Code Window */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#141414] text-[#E0E0DE] font-mono text-xs leading-relaxed">
          <pre>{jsonString}</pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#F9F9F8] dark:bg-[#20201E] text-[11px] text-[#1A1A1A]/60 dark:text-white/60 flex items-center justify-between font-mono border-t border-[#1A1A1A]/10 dark:border-white/10">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Strict Rule #18: No fabricated data · Domain-independent</span>
          </div>
          <span className="opacity-50">Canonical JSON</span>
        </div>
      </div>
    </div>
  );
};
