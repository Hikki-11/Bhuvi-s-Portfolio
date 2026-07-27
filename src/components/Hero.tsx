import React, { useState, useEffect } from 'react';
import { FileText, Mail, Github, Linkedin, ArrowRight, Server } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import heroVectorImg from '../assets/images/centered_engineer_card_1785134211741.jpg';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const nameToType = PROFILE_DATA.name;
  const [typedName, setTypedName] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && typedName === nameToType) {
      // Fully typed out: pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && typedName === '') {
      // Fully erased: pause briefly before re-typing
      timer = setTimeout(() => setIsDeleting(false), 500);
    } else {
      const nextLength = isDeleting ? typedName.length - 1 : typedName.length + 1;
      const speed = isDeleting ? 65 : 120;

      timer = setTimeout(() => {
        setTypedName(nameToType.substring(0, nextLength));
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [typedName, isDeleting, nameToType]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="pt-32 sm:pt-40 pb-20 sm:pb-28 relative overflow-hidden bg-grid-pattern">
      
      {/* Muted Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-[#ADB5BD]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Column: Introduction & CTAs */}
        <div className="flex-1 text-left space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#DEE2E6] border border-[#212529]/10 text-[#495057] text-xs font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-[#212529] animate-pulse" />
            <span>Available for Software Engineering Roles</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#212529] tracking-tight leading-tight font-heading min-h-[1.25em] flex items-center">
              <span>{typedName}</span>
              <span className="inline-block ml-1.5 sm:ml-2.5 w-[3px] sm:w-[6px] h-[0.75em] bg-[#212529] animate-pulse rounded-full align-middle" />
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-[#495057] tracking-tight font-heading">
              Backend Developer
            </p>
          </div>

          <p className="text-base sm:text-lg text-[#495057] leading-relaxed font-normal max-w-2xl">
            {PROFILE_DATA.bio}
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenResume}
              className="px-6 py-3.5 rounded-[18px] bg-[#212529] hover:bg-[#343A40] text-[#FFFFFF] font-semibold text-sm transition-all shadow-sm cursor-pointer flex items-center space-x-2 border border-[#212529]"
            >
              <FileText className="w-4 h-4 text-[#FFFFFF]" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3.5 rounded-[18px] bg-[rgba(255,255,255,0.55)] hover:bg-[#E9ECEF] text-[#212529] font-semibold text-sm flex items-center space-x-2 border border-[rgba(33,37,41,0.08)] transition-all cursor-pointer hover:border-[rgba(33,37,41,0.2)]"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 text-[#212529]" />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 pt-4">
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-[14px] bg-[rgba(255,255,255,0.55)] border border-[rgba(33,37,41,0.08)] text-[#495057] hover:text-[#212529] hover:border-[rgba(33,37,41,0.2)] transition-colors cursor-pointer"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-[14px] bg-[rgba(255,255,255,0.55)] border border-[rgba(33,37,41,0.08)] text-[#495057] hover:text-[#212529] hover:border-[rgba(33,37,41,0.2)] transition-colors cursor-pointer"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="p-3 rounded-[14px] bg-[rgba(255,255,255,0.55)] border border-[rgba(33,37,41,0.08)] text-[#495057] hover:text-[#212529] hover:border-[rgba(33,37,41,0.2)] transition-colors cursor-pointer"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Right Column: Profile Avatar / Card */}
        <div className="relative shrink-0 w-72 sm:w-80">
          <div className="relative rounded-[18px] p-2 bg-gradient-to-b from-black/5 to-black/2 border border-[rgba(33,37,41,0.08)] shadow-xl backdrop-blur-xl group hover:border-[rgba(33,37,41,0.2)] transition-all duration-300">
            {/* Soft Warm Glow Behind Avatar */}
            <div className="absolute -inset-1 rounded-[22px] bg-[#DEE2E6]/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Profile Avatar Container */}
            <div className="relative rounded-[16px] overflow-hidden bg-white/60 aspect-square flex items-center justify-center border border-[rgba(33,37,41,0.08)] p-1.5 shadow-inner">
              <img
                src={heroVectorImg}
                alt="Software engineer working at laptop centered in card"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center rounded-[12px] transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-30 pointer-events-none rounded-[16px]" />
              
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-[12px] bg-[rgba(255,255,255,0.92)] backdrop-blur-md border border-[rgba(33,37,41,0.1)] flex items-center space-x-3 text-left shadow-sm">
                <div className="p-2 rounded-[8px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] text-[#212529] shrink-0">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#212529] font-heading leading-tight">Java & Spring Boot</div>
                  <div className="text-[10px] font-mono text-[#6C757D]">Backend Architecture</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

