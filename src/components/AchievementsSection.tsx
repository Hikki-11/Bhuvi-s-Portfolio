import React from 'react';
import { 
  Code2, Star, ExternalLink, Trophy, 
  Award, Sparkles, Target 
} from 'lucide-react';
import { DSA_STATS } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'framer-motion';

export const AchievementsSection: React.FC = () => {
  const achievementsList = [
    {
      id: 'hackxtreme',
      title: "HACKXTREME'26 Award Winner & Media Wave Feature",
      category: 'National Hackathon',
      date: '2026',
      badge: 'Recognized & Shortlisted for Internship',
      description: 'Built an AI-powered Digital Twin model simulating urban traffic, energy demand, and air pollution from real-time ESP32 IoT sensor telemetry. Awarded by Media Wave panel and shortlisted for an exclusive internship opportunity.',
      impact: 'Demonstrated 18% potential city energy savings through smart grid load balancing.',
      icon: Trophy
    },
    {
      id: 'leetcode',
      title: '170+ LeetCode Algorithmic Milestone',
      category: 'Competitive Programming',
      date: 'Active Competitor',
      badge: 'DSA Mastery',
      description: 'Consistent algorithmic problem solving across fundamental computer science topics including Arrays, Two Pointers, Strings, Mathematics, Trees, and Recursion.',
      impact: '85 Easy, 72 Medium, and 13 Hard problems solved.',
      icon: Code2
    },
    {
      id: 'msme',
      title: 'MSME Industrial Safety Showcase Presenter',
      category: 'Government Innovation Showcase',
      date: '2025',
      badge: 'Industrial Innovation',
      description: 'Presented "Micro Failure Whisperer" (Predictive Maintenance AI) and "Digital Smell" (Gas Leakage Safety Unit) at the MSME regional industrial showcase.',
      impact: 'Selected for demonstrating low-cost edge AI safety solutions for manufacturing facilities.',
      icon: Award
    },
    {
      id: 'sih',
      title: 'Smart India Hackathon (SIH) Participant',
      category: 'National Competition',
      date: '2025',
      badge: 'National Finalist Project',
      description: 'Designed an automated pesticide sprinkler system with microcontroller logic to reduce chemical pesticide wastage and improve crop safety.',
      impact: 'Collaborated on hardware control logic addressing real-world agricultural problems.',
      icon: Target
    },
    {
      id: 'snowflake',
      title: 'Snowflake Cloud Data Warehousing Certification',
      category: 'Technical Certification',
      date: '2025',
      badge: 'Cloud Analytics',
      description: 'Completed 1-week intensive practical training in Snowflake cloud data architecture, SQL micro-partitioning, and zero-copy cloning workflows.',
      impact: 'Gained practical expertise in cloud data staging and query execution.',
      icon: Sparkles
    },
    {
      id: 'math',
      title: 'Regional Mathematics Competition Winner',
      category: 'Academic Honor',
      date: 'Academic Distinction',
      badge: 'Quantitative Reasoning',
      description: 'Secured first place in regional analytical reasoning and mathematics competitions, demonstrating high-level quantitative logic.',
      impact: 'Demonstrated high-level quantitative and analytical problem-solving skills.',
      icon: Star
    }
  ];

  return (
    <section id="achievements" className="py-20 sm:py-28 relative bg-[#E9ECEF] border-t border-[rgba(33,37,41,0.08)] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#DEE2E6]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#212529] tracking-tight font-heading">
              Achievements & Competitions
            </h2>
            <p className="text-sm sm:text-base text-[#495057] leading-relaxed">
              Honors, hackathon awards, competitive coding milestones, and technical showcase presentations.
            </p>
          </div>
        </ScrollReveal>

        {/* LeetCode Quick Stats Spotlight */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="glass-card p-8 rounded-[18px] space-y-6 bg-[rgba(255,255,255,0.55)] border border-[rgba(33,37,41,0.08)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[rgba(33,37,41,0.08)] pb-5 gap-4 text-left">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-[#495057]">
                  <Code2 className="w-4 h-4 text-[#212529]" />
                  <span>Competitive Coding Milestone</span>
                </div>
                <h3 className="text-xl font-bold text-[#212529] font-heading">
                  LeetCode Algorithmic Problem Solving
                </h3>
              </div>

              <div className="flex items-center space-x-2">
                <a
                  href={DSA_STATS.leetcodeProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-[12px] bg-[#DEE2E6] hover:bg-[#E9ECEF] text-[#212529] hover:text-[#495057] border border-[rgba(33,37,41,0.08)] text-xs font-mono font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <span>View LeetCode Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
              <div className="space-y-1">
                <div className="text-3xl font-mono font-extrabold text-[#212529]">
                  {DSA_STATS.totalSolved}+
                </div>
                <div className="text-xs font-mono text-[#6C757D]">Total Solved</div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl font-mono font-extrabold text-[#212529]">
                  {DSA_STATS.easyCount}
                </div>
                <div className="text-xs font-mono text-[#6C757D]">Easy Level</div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl font-mono font-extrabold text-[#212529]">
                  {DSA_STATS.mediumCount}
                </div>
                <div className="text-xs font-mono text-[#6C757D]">Medium Level</div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl font-mono font-extrabold text-[#343A40]">
                  {DSA_STATS.hardCount}
                </div>
                <div className="text-xs font-mono text-[#6C757D]">Hard Level</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 1-by-1 Staggered Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsList.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="p-6 rounded-[18px] bg-[rgba(255,255,255,0.75)] glass-card border border-[rgba(33,37,41,0.08)] space-y-4 text-left shadow-xs hover:border-[rgba(33,37,41,0.2)] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Header Badge & Date */}
                  <div className="flex items-center justify-between border-b border-[rgba(33,37,41,0.08)] pb-3.5 gap-2">
                    <div className="flex items-center space-x-2 min-w-0">
                      <div className="p-2 rounded-[10px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] text-[#212529] shrink-0">
                        <Icon className="w-4 h-4 text-[#212529]" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-[#212529] bg-[#DEE2E6] px-2.5 py-1 rounded-full border border-[rgba(33,37,41,0.08)] truncate">
                        {item.badge}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#6C757D] bg-[#DEE2E6] px-2 py-0.5 rounded-md border border-[rgba(33,37,41,0.08)] shrink-0">
                      {item.date}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#212529] tracking-tight font-heading leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#495057] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Impact Footer */}
                <div className="pt-3.5 border-t border-[rgba(33,37,41,0.08)] text-xs font-mono text-[#495057] flex items-start space-x-2 mt-2">
                  <Star className="w-3.5 h-3.5 text-[#212529] shrink-0 mt-0.5" />
                  <span className="text-[#212529] font-medium leading-snug">{item.impact}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
