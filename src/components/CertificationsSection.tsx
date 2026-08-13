import React from 'react';
import { CERTIFICATIONS_DATA, ACHIEVEMENTS_HIGHLIGHTS } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2, Trophy } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 sm:py-28 relative bg-[#DEE2E6] border-t border-[rgba(33,37,41,0.08)] overflow-hidden">
      {/* Background Ambient Grid & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#CED4DA] to-[#ADB5BD] rounded-full blur-3xl opacity-35 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#E9ECEF] to-[#ADB5BD] rounded-full blur-3xl opacity-35 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#212529] tracking-tight font-heading">
              Certifications & Training
            </h2>
            <p className="text-sm sm:text-base text-[#495057] leading-relaxed">
              Formal certifications issued by industry leaders including Oracle, ICT Academy, Dreams AI, Kaggle, and Simplilearn.
            </p>
          </div>
        </ScrollReveal>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <ScrollReveal key={cert.id} direction="up" delay={(index % 3) * 0.1}>
              <div
                className="glass-card p-6 flex flex-col justify-between space-y-4 group h-full text-left"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-[12px] bg-[#E9ECEF] border border-[rgba(33,37,41,0.08)] text-[#212529]">
                      <Award className="w-5 h-5 text-[#212529]" />
                    </div>
                    <span className="text-xs font-mono text-[#6C757D] font-medium">
                      Issued {cert.date}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#212529] group-hover:text-[#343A40] transition-colors font-heading">
                      {cert.title}
                    </h3>
                    <div className="text-xs font-mono text-[#212529] font-semibold mt-0.5">
                      {cert.issuer}
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-[rgba(33,37,41,0.08)]">
                    <div className="text-[10px] font-mono text-[#6C757D] uppercase tracking-wider">
                      Verified Competencies
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {cert.skillsVerified.map((sk, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-[6px] text-[10px] font-mono bg-[#E9ECEF] text-[#212529] border border-[rgba(33,37,41,0.08)]"
                        >
                          ✓ {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[rgba(33,37,41,0.08)] flex items-center justify-between text-xs font-mono text-[#212529]">
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#212529]" />
                    <span>Verified Credential</span>
                  </span>
                  <span className="text-[#6C757D] text-[10px]">ID: {cert.credentialId || 'VERIFIED-2025'}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Achievement Spotlight Banner */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="glass-card p-6 sm:p-8 rounded-[18px] border border-[rgba(33,37,41,0.08)] bg-[rgba(255,255,255,0.55)] space-y-6 text-left">
            <div className="flex items-center space-x-3 border-b border-[rgba(33,37,41,0.08)] pb-4">
              <div className="p-2.5 rounded-[12px] bg-[#E9ECEF] border border-[rgba(33,37,41,0.08)] text-[#212529]">
                <Trophy className="w-6 h-6 text-[#212529]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#212529] font-heading">
                  Key Accomplishments & Honors Summary
                </h3>
                <p className="text-xs font-mono text-[#495057]">
                  Recognized across hackathons, academics, coding challenges, and mathematics competitions
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ACHIEVEMENTS_HIGHLIGHTS.map((ach, idx) => (
                <div key={idx} className="p-4 rounded-[14px] bg-[#E9ECEF] border border-[rgba(33,37,41,0.08)] space-y-2">
                  <div className="text-xs font-mono font-bold text-[#212529]">{ach.title}</div>
                  <div className="text-[10px] font-mono text-[#212529]">{ach.event}</div>
                  <p className="text-xs text-[#495057] leading-normal">{ach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};


