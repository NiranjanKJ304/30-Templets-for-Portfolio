import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperCollageSectionHeader } from '../components/PaperCollageSectionHeader';

interface PaperCollageCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperCollageCertificationsSection: React.FC<PaperCollageCertificationsSectionProps> = ({ data, enabled = true }) => {
  const { certifications } = data;
  const hasData = Array.isArray(certifications) && certifications.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperCollageSectionHeader title="Certifications" number="07" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, idx) => (
          <div key={cert.id || idx} className="relative">
             {/* Certificate Paper slip */}
             <div className="bg-[#FFFDF8] dark:bg-[#242730] border-2 border-[#D4CFC4] dark:border-[#3A3F4C] p-6 shadow-sm relative h-full flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform">
               
               {/* Stamp effect */}
               <div className="absolute top-4 right-4 w-12 h-12 border-2 border-[#F26B5B] rounded-full flex items-center justify-center opacity-30 transform rotate-12">
                 <span className="font-mono text-[8px] uppercase tracking-tighter text-[#F26B5B] text-center leading-tight">Certified<br/>Valid</span>
               </div>

               <h3 className="font-heading font-bold text-lg text-[#171717] dark:text-white mt-8 mb-2">
                 {cert.name}
               </h3>
               
               <p className="font-mono text-sm text-[#315CFF] mb-4">
                 {cert.issuer}
               </p>

               {cert.description && (
                 <p className="font-body text-sm text-[#4A4A4A] dark:text-[#E0E0E0] mb-6 flex-grow">
                   {cert.description}
                 </p>
               )}

               <div className="w-full flex justify-between items-end mt-auto pt-4 border-t border-dashed border-[#D4CFC4] dark:border-[#3A3F4C]">
                 <div className="text-left font-mono text-[10px] text-[#737373] dark:text-[#A0A5B5] uppercase">
                   <div>Date</div>
                   <div className="text-[#171717] dark:text-white font-bold">{cert.issueDate}</div>
                 </div>
                 {cert.credentialId && (
                   <div className="text-right font-mono text-[10px] text-[#737373] dark:text-[#A0A5B5] uppercase">
                     <div>ID</div>
                     <div className="text-[#171717] dark:text-white font-bold">{cert.credentialId}</div>
                   </div>
                 )}
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
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
