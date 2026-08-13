import React from 'react';
import { DSA_STATS, PROFILE_DATA } from '../data/portfolioData';
import { Code2, Binary, GitBranch, Terminal, ExternalLink, CheckCircle2, TrendingUp, Grid, Layers } from 'lucide-react';

export const StatsSection: React.FC = () => {
  // Generate simulated GitHub contribution cells for 12 weeks
  const weeks = 20;
  const daysPerWeek = 7;
  const contributionGrid = Array.from({ length: weeks * daysPerWeek }, (_, i) => {
    // Generate organic activity levels (0: none, 1: light, 2: medium, 3: high)
    const seed = (i * 37 + 13) % 100;
    if (seed < 25) return 0;
    if (seed < 55) return 1;
    if (seed < 85) return 2;
    return 3;
  });

  const getCellColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-[#EEEAE5] border-[#D9D6D2]';
      case 1: return 'bg-[#74C69D]/40 border-[#74C69D]';
      case 2: return 'bg-[#74C69D] border-[#2D6A4F]';
      case 3: return 'bg-[#2D6A4F] border-[#1B4332]';
      default: return 'bg-[#EEEAE5]';
    }
  };

  return (
    <section id="stats" className="py-20 relative bg-[#DEE2E6] border-t border-[rgba(33,37,41,0.08)] overflow-hidden">
      {/* Background Ambient Grid & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#CED4DA] to-[#ADB5BD] rounded-full blur-3xl opacity-35 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#E9ECEF] to-[#ADB5BD] rounded-full blur-3xl opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.9)] text-[#212529] font-mono text-xs font-semibold backdrop-blur-md">
            <Binary className="w-4 h-4 text-[#212529]" />
            <span>Competitive Programming & Code Activity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#212529] font-heading tracking-tight">
            Developer Statistics & DSA Mastery
          </h2>
          <p className="text-base text-[#495057] max-w-2xl mx-auto">
            Consistent problem solving on LeetCode with 170+ algorithmic problems solved across fundamental computer science topics.
          </p>
        </div>

        {/* Top Grid: LeetCode Counter + Topic Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: LeetCode Counter Panel */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#D9D6D2] pb-3">
                <div className="flex items-center space-x-2">
                  <Code2 className="w-5 h-5 text-[#2D6A4F]" />
                  <span className="text-sm font-mono font-bold text-[#1F2A24]">LeetCode Metrics</span>
                </div>
                <span className="text-xs font-mono text-[#2D6A4F] bg-[#EEEAE5] px-2.5 py-0.5 rounded-full border border-[#D9D6D2] font-semibold">
                  Active Competitor
                </span>
              </div>

              {/* Huge Total Solved Counter */}
              <div className="text-center py-4 bg-[#EEEAE5] rounded-2xl border border-[#D9D6D2] space-y-1">
                <div className="text-5xl sm:text-6xl font-extrabold font-mono text-[#2D6A4F]">
                  {DSA_STATS.totalSolved}+
                </div>
                <div className="text-xs font-mono text-[#8A948D] uppercase tracking-widest">
                  Algorithmic Problems Solved
                </div>
              </div>

              {/* Easy / Medium / Hard Difficulty Breakdown */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono text-[#1F2A24]">
                    <span className="text-[#2D6A4F] font-bold">Easy ({DSA_STATS.easyCount})</span>
                    <span>50%</span>
                  </div>
                  <div className="w-full bg-[#EEEAE5] rounded-full h-2 overflow-hidden border border-[#D9D6D2]">
                    <div className="bg-[#2D6A4F] h-full rounded-full" style={{ width: '50%' }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono text-[#1F2A24]">
                    <span className="text-[#2D6A4F] font-bold">Medium ({DSA_STATS.mediumCount})</span>
                    <span>42.3%</span>
                  </div>
                  <div className="w-full bg-[#EEEAE5] rounded-full h-2 overflow-hidden border border-[#D9D6D2]">
                    <div className="bg-[#74C69D] h-full rounded-full" style={{ width: '42.3%' }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono text-[#1F2A24]">
                    <span className="text-[#1B4332] font-bold">Hard ({DSA_STATS.hardCount})</span>
                    <span>7.7%</span>
                  </div>
                  <div className="w-full bg-[#EEEAE5] rounded-full h-2 overflow-hidden border border-[#D9D6D2]">
                    <div className="bg-[#1B4332] h-full rounded-full" style={{ width: '7.7%' }} />
                  </div>
                </div>
              </div>
            </div>

            <a
              href={DSA_STATS.leetcodeProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-[#EEEAE5] hover:bg-[#F0ECE8] text-[#2D6A4F] border border-[#D9D6D2] text-xs font-mono font-bold flex items-center justify-center space-x-2 transition-colors cursor-pointer"
            >
              <span>VIEW LEETCODE PROFILE</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Right: DSA Topic Distribution */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 space-y-6 text-left">
            <div className="flex items-center justify-between border-b border-[#D9D6D2] pb-3">
              <div className="flex items-center space-x-2">
                <Layers className="w-5 h-5 text-[#2D6A4F]" />
                <span className="text-sm font-mono font-bold text-[#1F2A24]">Algorithmic Topic Mastery</span>
              </div>
              <span className="text-xs font-mono text-[#8A948D]">Arrays, Math & DSA</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DSA_STATS.topics.map((topic, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#EEEAE5] border border-[#D9D6D2] space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-[#1F2A24]">{topic.name}</span>
                    <span className="text-[#2D6A4F] font-extrabold">{topic.count} Problems</span>
                  </div>
                  <div className="w-full bg-[#FAF8F5] rounded-full h-1.5 overflow-hidden border border-[#D9D6D2]">
                    <div
                      className="bg-[#2D6A4F] h-full rounded-full"
                      style={{ width: `${Math.min(topic.count * 2, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#EEEAE5] border border-[#D9D6D2] text-xs text-[#5F6B63] leading-relaxed">
              <strong className="text-[#2D6A4F] font-mono">Core Philosophy:</strong> Continuous problem solving trains pattern recognition for high-throughput system bottlenecks, optimal memory allocation, and time complexity minimization in backend APIs.
            </div>
          </div>

        </div>

        {/* GitHub Contribution Heatmap Card */}
        <div className="glass-card p-6 sm:p-8 space-y-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#D9D6D2] pb-3 gap-2">
            <div className="flex items-center space-x-2">
              <GitBranch className="w-5 h-5 text-[#2D6A4F]" />
              <span className="text-sm font-mono font-bold text-[#1F2A24]">GitHub Code Contributions & Commit Stream</span>
            </div>
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#2D6A4F] hover:underline flex items-center space-x-1"
            >
              <span>@Hikki-11 on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Grid Representation */}
          <div className="overflow-x-auto pb-2">
            <div className="flex space-x-1.5 min-w-[600px]">
              {Array.from({ length: weeks }).map((_, wIdx) => (
                <div key={wIdx} className="flex flex-col space-y-1.5">
                  {Array.from({ length: daysPerWeek }).map((_, dIdx) => {
                    const idx = wIdx * daysPerWeek + dIdx;
                    const level = contributionGrid[idx];
                    return (
                      <div
                        key={dIdx}
                        className={`w-3.5 h-3.5 rounded-sm border ${getCellColor(level)} transition-all hover:scale-125`}
                        title={`Commit Activity Level: ${level}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-[#5F6B63] pt-2 border-t border-[#D9D6D2]">
            <span>Continuous Java, Spring Boot & IoT Firmware Commits</span>
            <div className="flex items-center space-x-1.5">
              <span>Less</span>
              <div className="w-3 h-3 rounded bg-[#EEEAE5] border border-[#D9D6D2]" />
              <div className="w-3 h-3 rounded bg-[#74C69D]/40 border border-[#74C69D]" />
              <div className="w-3 h-3 rounded bg-[#74C69D] border border-[#2D6A4F]" />
              <div className="w-3 h-3 rounded bg-[#2D6A4F] border border-[#1B4332]" />
              <span>More</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
