import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { Code2, Server, MapPin, GitBranch, Users } from 'lucide-react';

interface AboutSectionProps {
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const aboutBioText =
    "I’m Jayish Choudhary, a Full-Stack Developer focused on building robust web applications, scalable backend systems, and reliable digital experiences across the modern web stack. Based in Hyderabad, India. Let's build something incredible together!";

  const quickStats = [
    { label: 'Role', value: 'Full-Stack Developer', icon: Code2 },
    { label: 'Focus', value: 'Web & Systems', icon: Server },
    { label: 'Location', value: 'Hyderabad, India', icon: MapPin },
    { label: 'GitHub Repos', value: '26 Repositories', icon: GitBranch },
    { label: 'Network', value: '161+ Connections', icon: Users },
  ];

  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden"
    >
      {/* Decorative 3D Elements */}
      {/* Top Left: Moon Icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-10">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            id="decor-moon-icon"
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Element"
            loading="lazy"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] animate-pulse duration-[4000ms]"
          />
        </FadeIn>
      </div>

      {/* Bottom Left: 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-10">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            id="decor-3d-object"
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Geometric element"
            loading="lazy"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          />
        </FadeIn>
      </div>

      {/* Top Right: Lego Icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-10">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            id="decor-lego-icon"
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Element"
            loading="lazy"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] animate-pulse duration-[3500ms]"
          />
        </FadeIn>
      </div>

      {/* Bottom Right: 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-10">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            id="decor-3d-group"
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Composition element"
            loading="lazy"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          />
        </FadeIn>
      </div>

      {/* Center Content Stack */}
      <div className="flex flex-col items-center justify-center text-center z-20 max-w-3xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full flex justify-center">
          <h2
            id="about-heading"
            className="hero-heading font-black uppercase leading-none tracking-[0.04em] text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Spacing between heading & animated text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="mt-10 sm:mt-14 md:mt-16 w-full flex justify-center px-4">
          <AnimatedText text={aboutBioText} id="about-bio-text" />
        </div>

        {/* Profile highlight badges */}
        <FadeIn delay={0.3} y={20} className="w-full mt-8 sm:mt-10">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
            {quickStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-[#D7E2EA]/90 tracking-[0.03em]"
                >
                  <Icon size={14} className="text-[#B600A8]" />
                  <span className="text-[#D7E2EA]/50 uppercase text-[10px] tracking-[0.08em]">
                    {stat.label}:
                  </span>
                  <span className="font-medium text-[#D7E2EA]">{stat.value}</span>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* Spacing between text & contact button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <FadeIn delay={0.4} y={20}>
            <ContactButton
              id="about-contact-button"
              label="Contact Jayish"
              onClick={onContactClick}
              href={onContactClick ? undefined : '#connect'}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};


