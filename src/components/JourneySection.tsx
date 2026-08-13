import React from 'react';
import { TIMELINE_DATA } from '../data/portfolioData';
import { Award, GraduationCap, Sparkles, MapPin, Trophy } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section id="workshops-hackathons" className="py-16 sm:py-24 relative bg-[#DEE2E6] border-t border-[rgba(33,37,41,0.08)] overflow-hidden">
      {/* Background Ambient Grid & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#CED4DA] to-[#ADB5BD] rounded-full blur-3xl opacity-35 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#E9ECEF] to-[#ADB5BD] rounded-full blur-3xl opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.9)] text-[#212529] font-mono text-xs font-semibold backdrop-blur-md">
            <Trophy className="w-3.5 h-3.5 text-[#212529]" />
            <span>Hackathons & Bootcamps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] font-heading tracking-tight">
            Workshops & Hackathons
          </h2>
          <p className="text-sm sm:text-base text-[#495057] leading-relaxed">
            National hackathon competitions, industrial showcases, and technical engineering bootcamps.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-[#2D6A4F]/40 ml-4 sm:ml-32 space-y-12 text-left">
          {TIMELINE_DATA.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#FAF8F5] border-2 border-[#2D6A4F] flex items-center justify-center text-[#2D6A4F] group-hover:scale-110 group-hover:bg-[#2D6A4F] group-hover:text-white transition-all duration-300 shadow-sm">
                {item.type === 'Hackathon' ? (
                  <Award className="w-4 h-4" />
                ) : item.type === 'Workshop' ? (
                  <Sparkles className="w-4 h-4" />
                ) : (
                  <GraduationCap className="w-4 h-4" />
                )}
              </div>

              {/* Date Label (visible on left on desktop) */}
              <div className="hidden sm:block absolute -left-36 top-2 text-right w-28">
                <span className="text-xs font-mono font-bold text-[#2D6A4F] block">{item.date}</span>
                {item.duration && (
                  <span className="text-[10px] font-mono text-[#8A948D] block">{item.duration}</span>
                )}
              </div>

              {/* Timeline Card */}
              <div className="glass-card p-6 space-y-4">
                
                {/* Card Top Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D9D6D2] pb-3">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="sm:hidden text-xs font-mono text-[#2D6A4F] font-bold">{item.date} •</span>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#EEEAE5] text-[#2D6A4F] border border-[#D9D6D2]">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#1F2A24] font-heading mt-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-[#5F6B63] flex items-center space-x-1 mt-0.5">
                      <span>{item.organization}</span>
                      <span>•</span>
                      <span className="flex items-center"><MapPin className="w-3 h-3 inline mr-0.5 text-[#2D6A4F]" />{item.location}</span>
                    </p>
                  </div>

                  {item.achievementBadge && (
                    <div className="px-3 py-1 rounded-full bg-[#EEEAE5] border border-[#D9D6D2] text-[#2D6A4F] font-mono text-xs font-semibold shrink-0 w-fit">
                      🏆 {item.achievementBadge}
                    </div>
                  )}
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2 text-xs text-[#5F6B63] leading-relaxed">
                  {item.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-2">
                      <span className="text-[#2D6A4F] font-bold mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.techUsed.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#EEEAE5] text-[#1F2A24] border border-[#D9D6D2]"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

