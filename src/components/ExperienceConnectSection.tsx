import React from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import {
  Briefcase,
  GraduationCap,
  GitBranch,
  Linkedin,
  Github,
  Instagram,
  MapPin,
  ExternalLink,
  Sparkles,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

interface ExperienceConnectSectionProps {
  onContactClick?: () => void;
}

export const ExperienceConnectSection: React.FC<ExperienceConnectSectionProps> = ({
  onContactClick,
}) => {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 sm:py-28 relative z-10 border-t border-white/10"
    >
      {/* Section Heading */}
      <FadeIn delay={0} y={40} className="w-full flex justify-center mb-16 sm:mb-20">
        <h2
          id="experience-heading"
          className="hero-heading font-black uppercase text-center leading-none tracking-[0.04em]"
          style={{ fontSize: 'clamp(2.8rem, 10vw, 130px)' }}
        >
          Experience &amp; Connect
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Experience & Education (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Work Experience Card */}
          <FadeIn delay={0.1} y={30}>
            <div
              id="experience-card-hoollow"
              className="rounded-[36px] bg-[#14161B] border border-white/10 p-6 sm:p-8 hover:border-[#B600A8]/50 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#B600A8]/15 border border-[#B600A8]/30 flex items-center justify-center text-[#B600A8]">
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.08em] text-[#B600A8] font-bold">
                      Work Experience
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-[0.03em] text-white">
                      Full-Stack Developer
                    </h3>
                  </div>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-[#D7E2EA] font-medium uppercase tracking-[0.08em]">
                  Hoollow
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#D7E2EA]/60 mb-4 pb-4 border-b border-white/10 tracking-[0.04em]">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#B600A8]" /> Hyderabad, India
                </span>
                <span>•</span>
                <span>Full-Stack Engineering</span>
              </div>

              <p className="text-sm sm:text-base font-light text-[#D7E2EA]/80 leading-relaxed tracking-[0.02em]">
                Worked as a Full-Stack Developer at Hoollow, developing web applications and working across the technology stack to engineer robust digital features and scalable systems.
              </p>
            </div>
          </FadeIn>

          {/* Education Card */}
          <FadeIn delay={0.2} y={30}>
            <div
              id="education-card"
              className="rounded-[36px] bg-[#14161B] border border-white/10 p-6 sm:p-8 hover:border-[#B600A8]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D7E2EA]">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.08em] text-[#D7E2EA]/50 font-bold">
                    Education
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-[0.03em] text-white">
                    Indus Universal School
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[#D7E2EA]/75 font-light leading-relaxed tracking-[0.02em]">
                Academic education at Indus Universal School. Cultivated foundational engineering, mathematical problem-solving, and computer science foundations.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: GitHub & Socials (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6" id="connect">
          {/* GitHub Spotlight */}
          <FadeIn delay={0.25} y={30}>
            <a
              href="https://github.com/jayish233"
              target="_blank"
              rel="noreferrer"
              id="github-spotlight-card"
              className="rounded-[36px] bg-gradient-to-br from-[#181a20] to-[#121318] border border-white/10 p-6 sm:p-8 hover:border-white/30 transition-all duration-300 block group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                    <Github size={24} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.08em] text-[#D7E2EA]/60 font-bold">
                      Open Source
                    </span>
                    <h3 className="text-xl font-bold uppercase tracking-[0.03em] text-white group-hover:text-[#B600A8] transition-colors flex items-center gap-1.5">
                      github.com/jayish233
                      <ArrowUpRight size={18} />
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#D7E2EA]/80 font-light mb-6 tracking-[0.02em]">
                Active on GitHub building, experimenting with, and releasing software tools and full-stack web applications.
              </p>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-black/40 border border-white/5">
                <div className="flex items-center gap-2">
                  <GitBranch size={16} className="text-[#B600A8]" />
                  <span className="text-xs uppercase tracking-[0.08em] text-[#D7E2EA]/70">
                    Repositories
                  </span>
                </div>
                <span className="text-base font-black text-white px-3 py-0.5 rounded-full bg-[#B600A8]/20 border border-[#B600A8]/40 tracking-[0.04em]">
                  26 Repos
                </span>
              </div>
            </a>
          </FadeIn>

          {/* Social Profiles Grid */}
          <FadeIn delay={0.35} y={30}>
            <div className="rounded-[36px] bg-[#14161B] border border-white/10 p-6 sm:p-8 flex flex-col gap-4">
              <span className="text-xs uppercase tracking-[0.08em] text-[#D7E2EA]/50 font-bold">
                Direct Channels
              </span>

              <div className="flex flex-col gap-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/jayish-choudhary-913970398/"
                  target="_blank"
                  rel="noreferrer"
                  id="social-link-linkedin"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-[#0077B5] hover:bg-[#0077B5]/10 transition-all text-sm group tracking-[0.02em]"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin size={18} className="text-[#0077B5]" />
                    <div>
                      <div className="font-semibold text-white tracking-[0.03em]">LinkedIn</div>
                      <div className="text-[11px] text-[#D7E2EA]/50 tracking-[0.04em]">161 Connections</div>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-[#D7E2EA]/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/jayish2083/"
                  target="_blank"
                  rel="noreferrer"
                  id="social-link-instagram"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-[#E1306C] hover:bg-[#E1306C]/10 transition-all text-sm group tracking-[0.02em]"
                >
                  <div className="flex items-center gap-3">
                    <Instagram size={18} className="text-[#E1306C]" />
                    <div>
                      <div className="font-semibold text-white tracking-[0.03em]">Instagram</div>
                      <div className="text-[11px] text-[#D7E2EA]/50 tracking-[0.04em]">@jayish2083</div>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-[#D7E2EA]/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>

              <div className="pt-2">
                <ContactButton
                  id="experience-contact-btn"
                  label="Message Jayish"
                  onClick={onContactClick}
                  className="w-full"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Copyright & Location Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7E2EA]/50 font-light tracking-[0.04em]">
        <div>
          &copy; {new Date().getFullYear()} Jayish Choudhary. Full-Stack Developer.
        </div>
        <div className="flex items-center gap-4">
          <span>Hyderabad, India</span>
          <span>•</span>
          <a
            href="https://github.com/jayish233"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            26 Repositories
          </a>
        </div>
      </div>
    </section>
  );
};
