import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { PaperfoldSectionHeader } from '../components/PaperfoldSectionHeader';

interface PaperfoldCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const PaperfoldCertificationsSection: React.FC<PaperfoldCertificationsSectionProps> = ({ data, enabled = true }) => {
  const { certifications } = data;
  const hasData = Array.isArray(certifications) && certifications.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      customHeader={<PaperfoldSectionHeader title="Certifications" number="07" subtitle="Verified Credentials" />}
      containerClassName="py-20 md:py-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, idx) => (
          <div key={cert.id || idx} className="bg-[#FFFDF7] dark:bg-[#202326] border border-[#E8E3D8] dark:border-[#202020] p-8 relative flex flex-col h-full shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow group">
             
             {/* Folded seal effect top left */}
             <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden pointer-events-none">
               <div className="absolute top-0 left-0 w-full h-full bg-[#D7B45A] dark:bg-[#D9BD69] transform -rotate-45 -translate-x-4 -translate-y-4 shadow-[2px_2px_4px_rgba(0,0,0,0.1)] border-r border-b border-[#202020]/10"></div>
             </div>

             <div className="pl-6 mb-4">
               <h3 className="font-heading font-normal text-xl text-[#202020] dark:text-[#F3F0E8] leading-tight">
                 {cert.name}
               </h3>
             </div>
             
             <p className="font-mono text-[10px] text-[#66717A] dark:text-[#AAB3B8] uppercase tracking-widest mb-6">
               {cert.issuer}
             </p>

             {cert.description && (
               <p className="font-body font-light text-sm text-[#202020] dark:text-[#F3F0E8] mb-8 flex-grow leading-relaxed">
                 {cert.description}
               </p>
             )}

             <div className="mt-auto pt-6 border-t border-[#E8E3D8] dark:border-[#202020]">
               <div className="flex justify-between items-end">
                 <div>
                   <span className="block font-mono text-[10px] text-[#806879] dark:text-[#A18A9C] uppercase tracking-widest mb-1">Date</span>
                   <span className="font-mono text-xs text-[#202020] dark:text-[#F3F0E8]">{cert.issueDate}</span>
                 </div>
                 {cert.credentialId && (
                   <div className="text-right">
                     <span className="block font-mono text-[10px] text-[#806879] dark:text-[#A18A9C] uppercase tracking-widest mb-1">ID</span>
                     <span className="font-mono text-xs text-[#202020] dark:text-[#F3F0E8]">{cert.credentialId}</span>
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
