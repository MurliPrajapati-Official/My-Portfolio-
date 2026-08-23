import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Sparkles, Layers, Box, Cpu, GitBranch } from 'lucide-react';
import { ProjectItem } from '../types';
import { ContactButton } from './ContactButton';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="project-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="project-modal-dialog"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[32px] sm:rounded-[48px] p-6 sm:p-8 md:p-10 max-w-4xl w-full text-[#D7E2EA] relative shadow-2xl my-8 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            id="close-project-modal"
            onClick={onClose}
            className="absolute top-6 right-6 text-[#D7E2EA]/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-20 cursor-pointer"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-6 border-b border-[#D7E2EA]/15 pb-6">
            <span className="font-black text-[#D7E2EA] text-4xl sm:text-5xl leading-none tracking-[0.02em]">
              {project.number}
            </span>
            <div>
              <span className="text-xs uppercase tracking-[0.1em] text-[#B600A8] font-bold">
                {project.category}
              </span>
              <h3 className="hero-heading font-black text-2xl sm:text-4xl uppercase tracking-[0.04em]">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Image Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#16181d] h-[220px] sm:h-[280px]">
              <img
                src={project.col2Image}
                alt={`${project.title} primary feature`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#16181d] h-[105px] sm:h-[132px]">
                <img
                  src={project.col1Image1}
                  alt={`${project.title} secondary interface`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#16181d] h-[105px] sm:h-[132px]">
                <img
                  src={project.col1Image2}
                  alt={`${project.title} detail view`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Specs & Capabilities */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 bg-[#14161b] p-5 rounded-3xl border border-white/5">
            <div className="flex items-center gap-3">
              <Box className="text-[#B600A8] shrink-0" size={20} />
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/50 font-medium">
                  Frontend Stack
                </div>
                <div className="text-sm font-semibold text-[#D7E2EA]">
                  React &amp; TypeScript
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Layers className="text-[#B600A8] shrink-0" size={20} />
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/50 font-medium">
                  Backend Architecture
                </div>
                <div className="text-sm font-semibold text-[#D7E2EA]">
                  Node &amp; Express APIs
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Cpu className="text-[#B600A8] shrink-0" size={20} />
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/50 font-medium">
                  Data &amp; Scale
                </div>
                <div className="text-sm font-semibold text-[#D7E2EA]">
                  Cloud &amp; Distributed DB
                </div>
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-[#D7E2EA]/70">
              <GitBranch size={15} className="text-[#B600A8]" />
              <span>Full-stack architecture crafted by Jayish Choudhary</span>
            </div>
            <div className="flex gap-3">
              <a
                href={project.githubUrl || 'https://github.com/jayish233'}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full border border-white/20 text-[#D7E2EA] text-xs uppercase tracking-widest font-medium hover:bg-white/10 transition-colors flex items-center gap-1.5"
              >
                GitHub <ExternalLink size={13} />
              </a>
              <ContactButton
                id="modal-request-similar-btn"
                label="Discuss Project"
                onClick={() => {
                  onClose();
                  onInquire();
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
