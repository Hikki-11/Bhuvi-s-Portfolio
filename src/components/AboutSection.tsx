import React from 'react';
import { Sparkles, Target, Heart } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  const focusAreas = [
    { label: 'Backend Development', icon: '☕' },
    { label: 'Spring Boot', icon: '🌱' },
    { label: 'REST APIs', icon: '🔗' },
    { label: 'Database Design', icon: '🗄️' },
    { label: 'Software Testing', icon: '🧪' },
    { label: 'Problem Solving', icon: '🧩' },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#E9ECEF] border-t border-[rgba(33,37,41,0.08)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#212529] tracking-tight font-heading">
              About Me
            </h2>
            <p className="text-sm sm:text-base text-[#495057] leading-relaxed">
              A brief summary about myself and my career focus.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Content Container */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="glass-card p-6 sm:p-10 rounded-[20px] bg-[rgba(255,255,255,0.65)] border border-[rgba(33,37,41,0.08)] space-y-8 text-left shadow-xs backdrop-blur-md hover:border-[rgba(33,37,41,0.2)] transition-all">
            
            {/* 1. Summary Statement */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2.5 text-[#212529]">
                <Sparkles className="w-5 h-5 text-[#212529]" />
                <h3 className="text-xl font-bold text-[#212529] font-heading">Background & Career Focus</h3>
              </div>
              <p className="text-base sm:text-lg text-[#343A40] leading-relaxed font-normal">
                I'm a backend developer passionate about building reliable, scalable, and efficient applications. I enjoy solving real-world problems through clean code and continuously improving my technical skills.
              </p>
            </div>

            {/* 2. What I Focus On */}
            <div className="pt-6 border-t border-[rgba(33,37,41,0.08)] space-y-4">
              <div className="flex items-center space-x-2.5 text-[#212529]">
                <Target className="w-5 h-5 text-[#212529]" />
                <h3 className="text-lg font-bold text-[#212529] font-heading">What I Focus On</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-[14px] bg-[#DEE2E6]/80 border border-[rgba(33,37,41,0.08)] hover:border-[#212529]/30 flex items-center space-x-2.5 transition-all shadow-2xs group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{area.icon}</span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#212529] tracking-tight">
                      {area.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. What Drives Me */}
            <div className="pt-6 border-t border-[rgba(33,37,41,0.08)] space-y-3">
              <div className="flex items-center space-x-2.5 text-[#212529]">
                <Heart className="w-5 h-5 text-[#212529]" />
                <h3 className="text-lg font-bold text-[#212529] font-heading">What Drives Me</h3>
              </div>
              <p className="text-sm sm:text-base text-[#495057] leading-relaxed">
                I enjoy learning new technologies, improving system performance, and building software that is reliable, maintainable, and user-focused. Every project is an opportunity to grow as a developer.
              </p>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};


