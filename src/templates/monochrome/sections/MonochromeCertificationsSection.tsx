import React from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { MonochromeSectionHeader } from '../components/MonochromeSectionHeader';

interface MonochromeCertificationsSectionProps {
  data: PortfolioData;
  enabled?: boolean;
}

export const MonochromeCertificationsSection: React.FC<MonochromeCertificationsSectionProps> = ({ data, enabled = true }) => {
  const { certifications } = data;
  const hasData = Array.isArray(certifications) && certifications.length > 0;

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="certifications"
      enabled={enabled}
      hasData={hasData}
      customHeader={<MonochromeSectionHeader title="Certifications" number="07" subtitle="Verified Index" />}
      containerClassName="py-24 md:py-40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
        {certifications.map((cert, idx) => (
          <div key={cert.id || idx} className="border-t border-[#151515] dark:border-[#F2F0E9] pt-6 relative group">
             
             <h3 className="font-heading text-2xl md:text-3xl text-[#151515] dark:text-[#F2F0E9] uppercase tracking-tight mb-2 pr-16 group-hover:text-[#B44A35] dark:group-hover:text-[#D06A52] transition-colors">
               {cert.name}
             </h3>
             
             <p className="font-mono text-[10px] text-[#555555] dark:text-[#B5B3AC] uppercase tracking-widest mb-4">
               {cert.issuer}
             </p>

             {cert.description && (
               <p className="font-body text-sm text-[#555555] dark:text-[#B5B3AC] mb-8 leading-relaxed">
                 {cert.description}
               </p>
             )}

             <div className="flex flex-wrap items-baseline gap-6 font-mono text-[10px] text-[#8A8A84] dark:text-[#777770] uppercase tracking-widest">
                <span>Issued: <span className="text-[#151515] dark:text-[#F2F0E9]">{cert.issueDate}</span></span>
                {cert.credentialId && <span>ID: <span className="text-[#151515] dark:text-[#F2F0E9]">{cert.credentialId}</span></span>}
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
