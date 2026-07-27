import React from 'react';
import { Award, Sparkles, GraduationCap, Compass, Code2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#E9ECEF] border-t border-[rgba(33,37,41,0.08)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#212529] tracking-tight font-heading">
              About Me
            </h2>
            <p className="text-sm sm:text-base text-[#495057] leading-relaxed">
              Software engineer & CS undergraduate specializing in backend architecture, embedded IoT systems, and applied machine learning.
            </p>
          </div>
        </ScrollReveal>

        {/* Clean Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch text-left">
          
          {/* Column 1: Short Intro & Career Objective */}
          <ScrollReveal direction="left" delay={0.15}>
            <div className="glass-card p-8 rounded-[18px] h-full space-y-6 flex flex-col justify-between hover:border-[rgba(33,37,41,0.2)] transition-all bg-[rgba(255,255,255,0.55)] border border-[rgba(33,37,41,0.08)]">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-[#212529]">
                  <Sparkles className="w-5 h-5 text-[#212529]" />
                  <h3 className="text-xl font-bold text-[#212529] font-heading">Short Introduction</h3>
                </div>

                <p className="text-sm sm:text-base text-[#495057] leading-relaxed">
                  I am a Computer Science engineer focused on constructing robust backend applications, IoT firmware integration, and machine learning solutions.
                </p>

                <p className="text-sm sm:text-base text-[#495057] leading-relaxed">
                  My technical foundation relies on <strong className="text-[#212529]">Java & Spring Boot backend systems</strong>, <strong className="text-[#212529]">REST APIs, SQL databases</strong>, and <strong className="text-[#212529]">Embedded IoT telemetry</strong>. I enjoy engineering scalable REST microservices and solving algorithmic challenges with <strong className="text-[#212529] font-mono">{PROFILE_DATA.leetcodeCount}+ LeetCode solutions</strong>.
                </p>
              </div>

              {/* Career Objective */}
              <div className="pt-6 border-t border-[rgba(33,37,41,0.08)] space-y-2">
                <div className="flex items-center space-x-2 text-[#212529] text-xs font-mono font-semibold uppercase">
                  <Compass className="w-4 h-4 text-[#212529]" />
                  <span>Career Objective</span>
                </div>
                <p className="text-xs sm:text-sm text-[#495057] leading-relaxed">
                  To leverage my expertise in Java, Spring Boot, and systems engineering to build reliable, scalable backend architectures and real-world embedded software solutions in high-impact engineering teams.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Column 2: Education & Professional Interests */}
          <ScrollReveal direction="right" delay={0.25}>
            <div className="glass-card p-8 rounded-[18px] h-full space-y-6 flex flex-col justify-between hover:border-[rgba(33,37,41,0.2)] transition-all bg-[rgba(255,255,255,0.55)] border border-[rgba(33,37,41,0.08)]">
              
              {/* Education Summary */}
              <div id="education" className="space-y-4">
                <div className="flex items-center space-x-3 text-[#212529]">
                  <GraduationCap className="w-5 h-5 text-[#212529]" />
                  <h3 className="text-xl font-bold text-[#212529] font-heading">Education Summary</h3>
                </div>

                <div className="p-4 rounded-[14px] bg-[#DEE2E6]/60 border border-[rgba(33,37,41,0.08)] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-[#212529] px-2.5 py-0.5 rounded-full bg-[#212529]/10 border border-[#212529]/20">
                      Degree
                    </span>
                    <span className="text-xs font-mono text-[#6C757D]">{PROFILE_DATA.batch}</span>
                  </div>
                  <h4 className="text-base font-bold text-[#212529] font-heading">{PROFILE_DATA.degree}</h4>
                  <p className="text-xs text-[#495057]">{PROFILE_DATA.location}</p>
                </div>
              </div>

              {/* Professional Interests */}
              <div className="pt-6 border-t border-[rgba(33,37,41,0.08)] space-y-3">
                <div className="flex items-center space-x-2 text-[#212529] text-xs font-mono font-semibold uppercase">
                  <Code2 className="w-4 h-4 text-[#212529]" />
                  <span>Professional Interests</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Backend Architecture',
                    'Spring Boot Microservices',
                    'RESTful API Design',
                    'Relational Database Tuning',
                    'Embedded Systems & IoT',
                    'Machine Learning & Anomaly Detection',
                    'Algorithms & DSA'
                  ].map((interest, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1.5 rounded-[12px] bg-[#DEE2E6] text-[#212529] border border-[rgba(33,37,41,0.08)] hover:border-[rgba(33,37,41,0.2)] hover:text-[#212529] transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};

