import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperfoldSectionHeader } from '../components/PaperfoldSectionHeader';
import { ImageWithFallback } from '../../../core/components/ImageWithFallback';

interface PaperfoldTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperfoldTestimonialsSection: React.FC<PaperfoldTestimonialsSectionProps> = ({ data, enabled = true }) => {
  const { testimonials } = data;
  const hasData = Array.isArray(testimonials) && testimonials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperfoldSectionHeader title="Endorsements" number="09" subtitle="Peer References" />}
      containerClassName="py-20 md:py-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {testimonials.map((t, idx) => (
          <div key={t.id || idx} className="relative group">
             
             {/* Offset folded sheet background */}
             <div className="absolute inset-0 bg-[#FAF6EE] dark:bg-[#1A1C1E] border border-[#E8E3D8] dark:border-[#202020] transform -rotate-1 -translate-x-1 translate-y-1 pointer-events-none transition-transform duration-500 group-hover:-rotate-2 group-hover:-translate-x-2 group-hover:translate-y-2"></div>

             <div className="bg-[#FFFDF7] dark:bg-[#202326] border border-[#E8E3D8] dark:border-[#202020] p-10 md:p-12 relative z-10">
                
                {/* Large decorative quote mark */}
                <span className="absolute top-6 left-6 font-heading text-8xl text-[#F3EFE7] dark:text-[#151719] pointer-events-none select-none leading-none opacity-50">
                  "
                </span>

                <div className="relative z-10">
                  <p className="font-heading font-normal text-xl md:text-2xl leading-[1.6] text-[#202020] dark:text-[#F3F0E8] whitespace-pre-wrap mb-10">
                    {t.quote}
                  </p>

                  <div className="flex items-center gap-6 pt-8 border-t border-[#E8E3D8] dark:border-[#202020]">
                    {t.avatarUrl && (
                      <div className="w-14 h-14 overflow-hidden border border-[#E8E3D8] dark:border-[#202020] flex-shrink-0">
                        <ImageWithFallback src={t.avatarUrl} alt={t.author} className="w-full h-full object-cover grayscale" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-heading font-normal text-lg text-[#202020] dark:text-[#F3F0E8] tracking-wide mb-1">
                        {t.author}
                      </h4>
                      <p className="font-mono text-[10px] text-[#66717A] dark:text-[#AAB3B8] uppercase tracking-widest">
                        {t.role} {t.company && `at ${t.company}`}
                      </p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
