import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import type { SectionConfig } from '../../../core/types/section';
import { isSectionVisible } from '../../../core/utils/sectionVisibility';
import { ResumeButton } from '../../../core/components/ResumeButton';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface DuplexHeroProps {
  data: PortfolioData;
  sectionsConfig: SectionConfig[];
}

export const DuplexHero: React.FC<DuplexHeroProps> = ({ data, sectionsConfig }) => {
  const { profile, socials } = data;

  const configMap = sectionsConfig.reduce((acc, s) => {
    acc[s.id] = s.enabled;
    return acc;
  }, {} as Record<string, boolean>);

  const navItems = sectionsConfig.filter(s => isSectionVisible(s.id, configMap, data) && s.id !== 'profile');

  return (
    <div className="bg-[#181818] dark:bg-[#E8E2D7] text-[#F5F1E9] dark:text-[#171717] pt-24 lg:pt-0 lg:h-screen lg:fixed lg:left-0 lg:top-0 lg:w-[35%] xl:w-[40%] flex flex-col border-b lg:border-b-0 lg:border-r border-[#B7B0A5] dark:border-[#414542]">
      
      {/* Scrollable Container within the fixed sidebar on Desktop */}
      <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-12 lg:py-20 flex flex-col">
        
        {/* Profile Header */}
        <div className="mb-12">
          {profile.avatarUrl && (
            <div className="mb-8 relative w-24 h-24 lg:w-32 lg:h-32">
              <ImageWithFallback
                src={profile.avatarUrl}
                alt={profile.name}
                className="w-full h-full object-cover rounded-full border-2 border-[#D35F43] dark:border-[#E0795D]"
              />
              {profile.availableForHire && (
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#587A72] dark:bg-[#76A69C] rounded-full border-2 border-[#181818] dark:border-[#E8E2D7]"></div>
              )}
            </div>
          )}
          
          <h1 className="font-heading font-bold text-4xl lg:text-5xl xl:text-6xl tracking-tight uppercase leading-[0.9] mb-4">
            {profile.name}
          </h1>
          
          {(profile.role || profile.headline) && (
            <div className="space-y-2 mt-6">
              {profile.role && (
                <p className="font-mono text-sm text-[#D35F43] dark:text-[#E0795D] uppercase tracking-widest font-bold">
                  {profile.role}
                </p>
              )}
              {profile.headline && (
                <p className="font-body text-base lg:text-lg text-[#B7B0A5] dark:text-[#5F625F] leading-relaxed">
                  {profile.headline}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Status / Metadata */}
        <div className="flex flex-col gap-4 mb-16 font-mono text-xs uppercase tracking-widest text-[#B7B0A5] dark:text-[#5F625F]">
          {profile.location && (
            <div className="flex items-center gap-3">
              <span className="w-16 shrink-0 text-[#F5F1E9] dark:text-[#171717] opacity-50">Loc</span>
              <span>{profile.location}</span>
            </div>
          )}
          {profile.pronouns && (
            <div className="flex items-center gap-3">
              <span className="w-16 shrink-0 text-[#F5F1E9] dark:text-[#171717] opacity-50">Pro</span>
              <span>{profile.pronouns}</span>
            </div>
          )}
          {profile.statusBadge && (
            <div className="flex items-center gap-3">
              <span className="w-16 shrink-0 text-[#F5F1E9] dark:text-[#171717] opacity-50">Stat</span>
              <span className="text-[#D35F43] dark:text-[#E0795D] font-bold">{profile.statusBadge}</span>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-col gap-5 mt-auto mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B7B0A5] dark:text-[#5F625F] mb-2">Index</span>
          {navItems.map((item, idx) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-heading text-xl uppercase tracking-tighter hover:text-[#D35F43] dark:hover:text-[#E0795D] transition-colors flex items-center gap-4 group"
            >
              <span className="font-mono text-[10px] text-[#587A72] dark:text-[#76A69C] w-6 motion-safe:group-hover:pl-2 transition-all">
                {(idx + 1).toString().padStart(2, '0')}
              </span>
              {item.id}
            </a>
          ))}
        </nav>

        {/* Actions & Social */}
        <div className="mt-auto pt-8 border-t border-[#333] dark:border-[#CCC] flex flex-col gap-6">
          <div className="flex flex-wrap gap-4">
            {profile.contactEmail && (
              <a 
                href={`mailto:${profile.contactEmail}`}
                className="px-6 py-3 bg-[#F5F1E9] text-[#181818] dark:bg-[#171717] dark:text-[#E8E2D7] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#D35F43] hover:text-white dark:hover:bg-[#E0795D] dark:hover:text-white transition-colors"
              >
                Contact
              </a>
            )}
            {profile.resumeUrl && (
              <ResumeButton 
                resumeUrl={profile.resumeUrl}
                className="px-6 py-3 border border-[#B7B0A5] dark:border-[#5F625F] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#F5F1E9] hover:text-[#181818] dark:hover:bg-[#171717] dark:hover:text-[#E8E2D7] transition-colors rounded-none"
              />
            )}
          </div>

          {socials && socials.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-2">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-widest text-[#B7B0A5] dark:text-[#5F625F] hover:text-[#F5F1E9] dark:hover:text-[#171717] transition-colors"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
