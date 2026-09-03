import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { BlueprintSectionHeader } from '../components/BlueprintSectionHeader';

interface BlueprintCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const BlueprintCertificationsSection: React.FC<BlueprintCertificationsSectionProps> = ({ data, enabled = true }) => {
  const { certifications } = data;
  const hasData = Array.isArray(certifications) && certifications.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      customHeader={<BlueprintSectionHeader title="Certifications" number="07" description="Validated Technical Credentials" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, idx) => (
          <div key={cert.id || idx} className="bg-[#FAFCFD] dark:bg-[#142333] border-2 border-[#2E6FBB] dark:border-[#5DA9E9] p-6 relative flex flex-col h-full hover:bg-[#2E6FBB]/5 dark:hover:bg-[#5DA9E9]/5 transition-colors group">
             
             {/* Verification Stamp */}
             <div className="absolute top-6 right-6 w-12 h-12 border-2 border-[#3DA9C9] rounded-full flex flex-col items-center justify-center transform rotate-12 opacity-50 group-hover:opacity-100 transition-opacity">
               <span className="font-mono text-[8px] text-[#3DA9C9] uppercase leading-none mb-1">VER</span>
               <span className="font-mono text-[8px] text-[#3DA9C9] uppercase leading-none font-bold">PASS</span>
             </div>

             <h3 className="font-heading font-bold text-lg text-[#173A5E] dark:text-[#EAF2F7] uppercase pr-16 mb-2">
               {cert.name}
             </h3>
             
             <p className="font-mono text-sm text-[#E8893A] dark:text-[#F0A35B] mb-4 uppercase">
               {cert.issuer}
             </p>

             {cert.description && (
               <p className="font-body text-sm text-[#17202A] dark:text-[#EAF2F7] mb-6 flex-grow">
                 {cert.description}
               </p>
             )}

             <div className="mt-auto pt-4 border-t border-dashed border-[#2E6FBB]/30 dark:border-[#5DA9E9]/30">
               <div className="flex justify-between items-end">
                 <div>
                   <span className="block font-mono text-[10px] text-[#73808C] uppercase tracking-widest mb-1">ISSUED</span>
                   <span className="font-mono text-xs text-[#173A5E] dark:text-[#EAF2F7] font-bold">{cert.issueDate}</span>
                 </div>
                 {cert.credentialId && (
                   <div className="text-right">
                     <span className="block font-mono text-[10px] text-[#73808C] uppercase tracking-widest mb-1">REF ID</span>
                     <span className="font-mono text-[10px] text-[#173A5E] dark:text-[#EAF2F7]">{cert.credentialId}</span>
                   </div>
                 )}
               </div>
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
