import React from 'react';
import { Briefcase, Building2, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { WORK_EXPERIENCE_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 relative bg-[#DEE2E6] border-t border-[rgba(33,37,41,0.08)] overflow-hidden">
      {/* Background Ambient Grid & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#CED4DA] to-[#ADB5BD] rounded-full blur-3xl opacity-35 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#E9ECEF] to-[#ADB5BD] rounded-full blur-3xl opacity-35 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#212529] tracking-tight font-heading">
              Professional Experience
            </h2>
            <p className="text-sm sm:text-base text-[#495057] leading-relaxed">
              Real-world engineering contributions in backend service architecture, application testing, API verification, and quality assurance.
            </p>
          </div>
        </ScrollReveal>

        {/* Experience List - Clean SaaS Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {WORK_EXPERIENCE_DATA.map((exp, index) => (
            <ScrollReveal key={exp.id} direction="up" delay={index * 0.15}>
              <div className="glass-card p-8 space-y-6 text-left">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(33,37,41,0.08)] pb-5">
                  
                  {/* Company & Role */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-[14px] bg-[#E9ECEF] border border-[rgba(33,37,41,0.08)] flex items-center justify-center text-[#212529] shrink-0">
                      <Building2 className="w-6 h-6 text-[#212529]" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-3 flex-wrap gap-y-1">
                        <h3 className="text-2xl font-bold text-[#212529] tracking-tight font-heading">
                          {exp.company}
                        </h3>
                        {exp.badge && (
                          <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-[#212529] text-[#FFFFFF]">
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-base font-semibold text-[#495057]">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  {/* Period & Location Badge */}
                  <div className="flex flex-col sm:items-end space-y-1 shrink-0 font-mono text-xs text-[#6C757D]">
                    <span className="px-3 py-1 rounded-full bg-[#E9ECEF] border border-[rgba(33,37,41,0.08)] text-[#212529] font-semibold text-xs inline-block">
                      ● {exp.period}
                    </span>
                    {exp.location && (
                      <span className="text-xs text-[#6C757D]">
                        {exp.location}
                      </span>
                    )}
                  </div>

                </div>

                {/* Role Overview */}
                <p className="text-sm sm:text-base text-[#495057] leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono font-semibold text-[#212529] uppercase tracking-wider flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-[#212529]" />
                    <span>Key Engineering Responsibilities & Impact</span>
                  </h4>

                  <div className="grid grid-cols-1 gap-2.5">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start space-x-3 text-left"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#212529] shrink-0 mt-1" />
                        <span className="text-sm text-[#495057] leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="pt-4 border-t border-[rgba(33,37,41,0.08)] space-y-2">
                  <span className="text-xs font-mono font-semibold text-[#6C757D] uppercase tracking-wider block">
                    Technologies & Quality Engineering Stack
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono px-3 py-1 rounded-[12px] bg-[#E9ECEF] text-[#212529] border border-[rgba(33,37,41,0.08)] flex items-center space-x-1.5"
                      >
                        <Terminal className="w-3 h-3 text-[#212529]" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

