import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { IndexRow } from '../components/IndexRow';

interface IndexTestimonialsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const IndexTestimonialsSection: React.FC<IndexTestimonialsSectionProps> = ({ data, enabled = true }) => {
  const { testimonials } = data;
  const hasData = Array.isArray(testimonials) && testimonials.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="testimonials"
      enabled={enabled}
      hasData={hasData}
      className="py-12"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col">
        <IndexRow
          isHeader
          index="ID"
          title="ENDORSEMENTS"
          metadata="ROLE / RELATIONSHIP"
          description="STATEMENT"
        />
        
        <div className="flex flex-col">
          {testimonials.map((t, idx) => {
            const index = (idx + 1).toString().padStart(3, '0');
            
            return (
              <IndexRow
                key={t.id}
                index={index}
                title={t.author}
                metadata={
                  <div className="flex flex-col gap-1 text-[#696C67] dark:text-[#A8ABA4]">
                    {(t.role || t.company) && (
                      <span>
                        {t.role}{t.role && t.company && ' at '}{t.company}
                      </span>
                    )}
                    {t.relationship && <span className="text-[#365F58] dark:text-[#80A99E] mt-1">{t.relationship}</span>}
                  </div>
                }
                description={
                  <blockquote className="font-heading font-bold text-lg lg:text-xl text-[#181A19] dark:text-[#F2F1EA] leading-snug">
                    "{t.quote}"
                  </blockquote>
                }
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
