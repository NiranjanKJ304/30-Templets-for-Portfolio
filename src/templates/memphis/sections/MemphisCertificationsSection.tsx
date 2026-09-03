import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MemphisSectionHeader } from '../components/MemphisSectionHeader';

interface MemphisCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MemphisCertificationsSection: React.FC<MemphisCertificationsSectionProps> = ({ data, enabled = true }) => {
  const { certifications } = data;
  const hasData = Array.isArray(certifications) && certifications.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MemphisSectionHeader title="Certifications" number="07" />}
      containerClassName="py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <div 
            key={cert.id}
            className="group relative bg-white dark:bg-neutral-800 border-4 border-neutral-900 dark:border-white p-6 hover:-translate-y-1 hover:translate-x-1 transition-transform"
            style={{ boxShadow: '4px 4px 0 0 #34D399' }}
          >
             <div className="absolute top-4 right-4 text-[#34D399] opacity-50 group-hover:opacity-100 transition-opacity">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
               </svg>
             </div>
             
             <h3 className="font-heading font-black text-xl uppercase text-neutral-900 dark:text-white mb-2 pr-8">
               {cert.name}
             </h3>
             <h4 className="font-body font-bold text-neutral-600 dark:text-neutral-400 mb-4">
               {cert.issuer}
             </h4>
             
             {cert.description && (
               <p className="text-sm text-neutral-700 dark:text-neutral-300 font-bold mb-4 line-clamp-3">
                 {cert.description}
               </p>
             )}

             <div className="pt-4 border-t-2 border-neutral-900 dark:border-white flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white mt-auto">
               {cert.issueDate && <span>Issued: {cert.issueDate}</span>}
             </div>

             {cert.credentialUrl && (
               <a 
                 href={cert.credentialUrl} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="mt-4 inline-block bg-[#FACC15] text-neutral-900 font-heading font-black uppercase text-sm border-2 border-neutral-900 px-4 py-2 hover:bg-[#34D399] transition-colors"
               >
                 Verify Credential
               </a>
             )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
