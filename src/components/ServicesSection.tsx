import React from 'react';
import { FadeIn } from './FadeIn';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  {
    id: 'service-01',
    number: '01',
    title: 'Frontend Engineering',
    description:
      'Building fluid, accessible, and high-performance user interfaces with modern React, TypeScript, Tailwind CSS, and Framer Motion.',
  },
  {
    id: 'service-02',
    number: '02',
    title: 'Backend Systems',
    description:
      'Developing reliable server-side architectures, RESTful & GraphQL APIs, microservices, and secure authentication flows.',
  },
  {
    id: 'service-03',
    number: '03',
    title: 'Full-Stack Solutions',
    description:
      'End-to-end web product development, connecting elegant user experiences with robust, fault-tolerant backend engines.',
  },
  {
    id: 'service-04',
    number: '04',
    title: 'Database & State',
    description:
      'Designing relational and NoSQL schemas, database queries, caching strategies, and persistent data synchronization.',
  },
  {
    id: 'service-05',
    number: '05',
    title: 'Performance & Deployment',
    description:
      'Optimizing web Core Web Vitals, server response latencies, automated testing, and scalable cloud container workflows.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      {/* Services Heading */}
      <FadeIn delay={0} y={40} className="w-full flex justify-center">
        <h2
          id="services-heading"
          className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-[0.04em] mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      {/* Services List */}
      <div id="services-list-container" className="max-w-5xl mx-auto flex flex-col">
        {SERVICES.map((item, index) => (
          <FadeIn
            key={item.id}
            id={item.id}
            delay={index * 0.1}
            y={30}
            className="border-b border-[#0C0C0C]/15 first:border-t"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-8 sm:py-10 md:py-12 gap-4 sm:gap-10 md:gap-16 group hover:pl-2 transition-all duration-300">
              {/* Left: Huge Number */}
              <div
                id={`service-number-${item.number}`}
                className="font-black text-[#0C0C0C] leading-none shrink-0 select-none tracking-[0.02em]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {item.number}
              </div>

              {/* Right: Stacked Title & Description */}
              <div className="flex flex-col justify-center flex-1">
                <h3
                  id={`service-title-${item.number}`}
                  className="font-medium uppercase text-[#0C0C0C] leading-tight mb-2 sm:mb-3 tracking-[0.035em]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {item.title}
                </h3>
                <p
                  id={`service-desc-${item.number}`}
                  className="font-light text-[#0C0C0C]/60 leading-relaxed max-w-2xl tracking-[0.02em]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
