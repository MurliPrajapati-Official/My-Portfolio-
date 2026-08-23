import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ProjectItem } from '../types';
import { LiveProjectButton } from './LiveProjectButton';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onLiveClick?: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onLiveClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      id={`project-card-container-${project.number}`}
      className="h-[85vh] min-h-[680px] sm:min-h-[740px] md:min-h-[800px] flex items-start justify-center sticky top-20 sm:top-24 md:top-28 w-full"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        id={project.id}
        style={{
          scale,
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl origin-top"
      >
        {/* Top Row */}
        <div
          id={`project-top-row-${project.number}`}
          className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-4 border-b border-[#D7E2EA]/20"
        >
          <div className="flex items-baseline gap-3 sm:gap-6 flex-wrap">
            {/* Number */}
            <span
              id={`project-number-${project.number}`}
              className="font-black text-[#D7E2EA] leading-none select-none tracking-[0.02em]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              {project.number}
            </span>

            {/* Category */}
            <span
              id={`project-category-${project.number}`}
              className="text-[#D7E2EA]/60 uppercase tracking-[0.12em] font-light text-xs sm:text-sm"
            >
              {project.category}
            </span>

            {/* Project Name */}
            <h3
              id={`project-title-${project.number}`}
              className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl tracking-[0.04em]"
            >
              {project.title}
            </h3>
          </div>

          {/* Right: Live Project Button */}
          <div className="shrink-0 self-start sm:self-center">
            <LiveProjectButton
              id={`live-btn-${project.number}`}
              onClick={() => onLiveClick?.(project)}
            />
          </div>
        </div>

        {/* Bottom Row: 2-Column Image Grid (40% vs 60%) */}
        <div
          id={`project-image-grid-${project.number}`}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 pt-6"
        >
          {/* Left Column: 40% (5 cols of 12) with 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6 justify-between">
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#16181d] border border-white/5"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Image1}
                alt={`${project.title} detail 1`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 select-none"
              />
            </div>
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#16181d] border border-white/5"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Image2}
                alt={`${project.title} detail 2`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 select-none"
              />
            </div>
          </div>

          {/* Right Column: 60% (7 cols of 12) with 1 tall image */}
          <div className="md:col-span-7 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#16181d] border border-white/5 h-[300px] sm:h-[380px] md:h-auto min-h-[300px]">
            <img
              src={project.col2Image}
              alt={`${project.title} hero feature`}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 select-none"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
