import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { OrbitalSectionHeader } from '../components/OrbitalSectionHeader';

interface OrbitalCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const OrbitalCertificationsSection: React.FC<OrbitalCertificationsSectionProps> = ({ data, enabled = true }) => {
  const { certifications } = data;
  const hasData = Array.isArray(certifications) && certifications.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      customHeader={<OrbitalSectionHeader title="Certifications" />}
      containerClassName="py-20 md:py-32 relative z-10"
    >
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {certifications.map((cert, idx) => (
          <div key={cert.id || idx} className="bg-[#FFFFFF] dark:bg-[#182221] border border-[#B9C9C6]/50 dark:border-[#40504D]/50 rounded-[2rem] p-8 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] relative group hover:border-[#2F7C73]/50 dark:hover:border-[#66B8A9]/50 transition-colors shadow-sm flex flex-col">
             
             <div className="w-12 h-12 rounded-full bg-[#EEF2F1] dark:bg-[#101819] flex items-center justify-center mb-6">
                <div className="w-4 h-4 rounded-full border-2 border-[#2F7C73] dark:border-[#66B8A9]"></div>
             </div>

             <h3 className="font-heading font-bold text-xl text-[#172326] dark:text-[#F0F4F1] mb-2 leading-tight">
               {cert.name}
             </h3>
             
             <p className="font-mono text-[10px] text-[#526467] dark:text-[#AABAB7] uppercase tracking-widest mb-4">
               {cert.issuer}
             </p>

             {cert.description && (
               <p className="font-body text-sm text-[#526467] dark:text-[#AABAB7] leading-relaxed mb-6 flex-grow">
                 {cert.description}
               </p>
             )}

             <div className="mt-auto pt-6 border-t border-[#B9C9C6]/30 dark:border-[#40504D]/30 flex flex-col gap-1">
                <span className="font-mono text-[9px] text-[#9BAAA9] dark:text-[#40504D] uppercase tracking-widest">Issued</span>
                <span className="font-mono text-xs text-[#172326] dark:text-[#F0F4F1] uppercase">{cert.issueDate}</span>
             </div>

             {cert.credentialUrl && (
               <a 
                 href={cert.credentialUrl} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="absolute inset-0 z-10"
                 aria-label={`View credential for ${cert.name}`}
               ></a>
             )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
