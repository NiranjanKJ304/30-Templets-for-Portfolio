import React, { useState, useMemo } from 'react';
import type { PortfolioData } from '../../../core/types/portfolio';
import { SectionWrapper } from '../../../core/components/SectionWrapper';
import { IndexRow } from '../components/IndexRow';
import { IndexFilter } from '../components/IndexFilter';

interface IndexWorkSectionProps {
  data: PortfolioData;
  enabled?: boolean;
  onOpenModal?: (id: string) => void;
}

export const IndexWorkSection: React.FC<IndexWorkSectionProps> = ({ data, enabled = true, onOpenModal }) => {
  const { projects } = data;
  const hasData = Array.isArray(projects) && projects.length > 0;
  
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = useMemo(() => {
    if (!hasData) return [];
    const cats = projects.map(p => p.category).filter(Boolean) as string[];
    return Array.from(new Set(cats)).sort();
  }, [projects, hasData]);

  const visibleProjects = useMemo(() => {
    if (!hasData) return [];
    if (activeCategory === 'ALL') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [projects, activeCategory, hasData]);

  if (!hasData || !enabled) return null;

  return (
    <SectionWrapper
      id="work"
      enabled={enabled}
      hasData={hasData}
      className="py-12"
      containerClassName="px-0"
    >
      <div className="w-full flex flex-col">
        {categories.length > 1 && (
          <IndexFilter 
            categories={categories} 
            activeCategory={activeCategory} 
            onSelectCategory={setActiveCategory} 
          />
        )}
        
        <IndexRow
          isHeader
          index="ID"
          title="WORK DIRECTORY"
          metadata="CATEGORY / YEAR"
          description="OVERVIEW"
        />
        
        <div className="flex flex-col">
          {visibleProjects.map((project, idx) => {
            const index = (idx + 1).toString().padStart(3, '0');
            
            return (
              <IndexRow
                key={project.id}
                index={index}
                title={project.title}
                metadata={
                  <div className="flex flex-col gap-1">
                    {project.category && <span>{project.category}</span>}
                    {project.year && <span className="text-[#B9C8C3] dark:text-[#5E716C]">{project.year}</span>}
                  </div>
                }
                description={project.description}
                tags={
                  project.tags && project.tags.length > 0 
                    ? project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="font-mono text-[10px] uppercase tracking-widest bg-[#F6F5F1] dark:bg-[#1A1E1C] px-2 py-1 border border-[#D5D6D0] dark:border-[#404440] text-[#696C67] dark:text-[#A8ABA4]">
                          {tag}
                        </span>
                      ))
                    : undefined
                }
                onClick={onOpenModal ? () => onOpenModal(project.id) : undefined}
              />
            );
          })}
          
          {visibleProjects.length === 0 && (
            <div className="py-12 text-center border-b border-[#D5D6D0] dark:border-[#404440]">
              <span className="font-mono text-sm uppercase tracking-widest text-[#696C67] dark:text-[#A8ABA4]">
                NO RECORDS FOUND FOR FILTER
              </span>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};
