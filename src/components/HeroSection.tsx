import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import { MapPin, Code2 } from 'lucide-react';

interface HeroSectionProps {
  onContactClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Connect', href: '#connect' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#connect' && onContactClick) {
      onContactClick();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="h-screen min-h-[640px] flex flex-col justify-between overflow-x-clip relative z-0 bg-[#0C0C0C]"
    >
      {/* Top Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <header className="flex flex-col sm:flex-row justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8 gap-3">
          <div className="flex items-center gap-3">
            <span className="text-[#D7E2EA] font-medium tracking-[0.08em] uppercase text-xs sm:text-sm border border-white/10 px-3.5 py-1.5 rounded-full bg-white/5 flex items-center gap-1.5">
              <Code2 size={14} className="text-[#B600A8]" /> Full-Stack Dev
            </span>
            <span className="text-[#D7E2EA]/70 font-light tracking-[0.06em] uppercase text-xs sm:text-sm flex items-center gap-1">
              <MapPin size={13} className="text-[#B600A8]" /> Hyderabad, IN
            </span>
          </div>

          <nav
            id="hero-navbar"
            aria-label="Main Navigation"
            className="flex justify-between items-center gap-4 sm:gap-6 md:gap-8 text-[#D7E2EA] font-medium uppercase tracking-[0.1em] text-xs sm:text-sm md:text-base lg:text-[1.1rem]"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </header>
      </FadeIn>

      {/* Main Massive Heading */}
      <div className="w-full overflow-hidden z-0 select-none flex items-center justify-center">
        <FadeIn delay={0.15} y={40} className="w-full flex justify-center">
          <h1
            id="hero-main-heading"
            className="hero-heading font-black uppercase tracking-[0.035em] leading-none whitespace-nowrap w-full text-center mt-6 sm:mt-4 md:-mt-5 text-[12.5vw] sm:text-[13.5vw] md:text-[14.5vw] lg:text-[15.5vw]"
          >
            Hi, i&apos;m jayish
          </h1>
        </FadeIn>
      </div>

      {/* Centered Hero Portrait with Magnet */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-auto top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            id="hero-portrait-magnet"
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="cursor-pointer"
          >
            <img
              id="hero-portrait-img"
              src="/hero.png"
              alt="Jayish Choudhary - Full-Stack Developer"
              loading="eager"
              className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[480px] h-auto max-h-[80vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] pointer-events-none select-none"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div
        id="hero-bottom-bar"
        className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 relative w-full"
      >
        <FadeIn delay={0.35} y={20}>
          <p
            id="hero-subtext"
            className="text-[#D7E2EA] font-light uppercase tracking-[0.06em] leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[290px]"
            style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1.35rem)' }}
          >
            A full-stack developer driven by crafting robust web apps &amp; reliable digital experiences
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton
            id="hero-contact-button"
            label="Get in touch"
            onClick={onContactClick}
            href={onContactClick ? undefined : '#connect'}
          />
        </FadeIn>
      </div>
    </section>
  );
};

