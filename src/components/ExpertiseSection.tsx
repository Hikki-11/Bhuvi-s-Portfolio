import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Cpu, Server, Brain, Database, Terminal, Code2, Zap, Layers, Activity, Radio, 
  Filter, Coffee, Box, Network, Sliders, Monitor, Eye, FileText, BarChart2, 
  Cloud, GitBranch, Package, Send, Binary, Wrench, Code, TrendingUp, Sparkles 
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'framer-motion';

export const ExpertiseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  // Helper to resolve icon name
  const getIconComponent = (iconName: string) => {
    const props = { className: "w-4 h-4 text-[#212529]" };
    switch (iconName) {
      case 'Coffee': return <Coffee {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Network': return <Network {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Code': case 'Code2': return <Code2 {...props} />;
      case 'Sliders': return <Sliders {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Brain': case 'BrainCircuit': return <Brain {...props} />;
      case 'Radio': return <Radio {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'Monitor': return <Monitor {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Eye': return <Eye {...props} />;
      case 'FileText': return <FileText {...props} />;
      case 'BarChart2': return <BarChart2 {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Box': return <Box {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      case 'Filter': return <Filter {...props} />;
      case 'Binary': return <Binary {...props} />;
      case 'GitBranch': return <GitBranch {...props} />;
      case 'Package': return <Package {...props} />;
      case 'Send': return <Send {...props} />;
      default: return <Wrench {...props} />;
    }
  };

  const tabs = ['All', 'Backend', 'IoT', 'AI/ML', 'Database', 'Core'];

  // Flatten skills from all categories
  const allSkills = SKILL_CATEGORIES.flatMap(cat => 
    cat.skills.map(skill => ({
      ...skill,
      categoryTitle: cat.title
    }))
  );

  const filteredSkills = activeTab === 'All'
    ? allSkills
    : allSkills.filter(s => {
        if (activeTab === 'Backend') return s.categoryTag === 'Backend';
        if (activeTab === 'IoT') return s.categoryTag === 'IoT' || s.categoryTag === 'AI/IoT';
        if (activeTab === 'AI/ML') return s.categoryTag === 'AI/ML' || s.categoryTag === 'Vision';
        if (activeTab === 'Database') return s.categoryTag === 'Database' || s.categoryTag === 'Cloud';
        if (activeTab === 'Core') return s.categoryTag === 'Core' || s.categoryTag === 'Tools';
        return true;
      });

  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-[#E9ECEF] border-t border-[rgba(33,37,41,0.08)] overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DEE2E6]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#212529] tracking-tight font-heading">
              Technical Stack & Competencies
            </h2>
            <p className="text-sm sm:text-base text-[#495057] leading-relaxed">
              Alternating interactive timeline of engineering disciplines across Java backend, embedded IoT, AI algorithms, and databases.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer border ${
                    activeTab === tab
                      ? 'bg-[#212529] text-[#FFFFFF] border-[#212529] font-bold shadow-xs'
                      : 'bg-[#DEE2E6] text-[#495057] border-[rgba(33,37,41,0.08)] hover:text-[#212529] hover:bg-[#E9ECEF]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Central Invisible Axis Zig-Zag Layout */}
        <div className="relative max-w-5xl mx-auto py-6">
          
          {/* Subtle Center Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[rgba(33,37,41,0.15)] to-transparent hidden md:block" />

          {/* Alternating Skills Items */}
          <div className="space-y-12 md:space-y-16">
            {filteredSkills.map((skill, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={skill.name + index} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Central Node Marker (Dot on Line) */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#E9ECEF] border-2 border-[#212529] z-20 hidden md:flex items-center justify-center shadow-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#212529]" />
                  </div>

                  {/* Left Column Content */}
                  <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:opacity-0 pointer-events-none hidden md:block'}`}>
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="space-y-2.5 text-left md:text-right"
                      >
                        {/* Header Pills */}
                        <div className="flex items-center space-x-2 md:justify-end flex-wrap gap-y-1">
                          <span className="text-[10px] font-mono font-semibold uppercase text-[#212529] bg-[#DEE2E6] px-2.5 py-0.5 rounded-full border border-[rgba(33,37,41,0.08)]">
                            {skill.categoryTag}
                          </span>
                          <span className="text-[10px] font-mono text-[#6C757D]">
                            {skill.experience}
                          </span>
                        </div>

                        {/* Skill Title & Icon */}
                        <div className="flex items-center space-x-2.5 md:flex-row-reverse md:space-x-reverse">
                          <div className="p-2 rounded-[10px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] shrink-0">
                            {getIconComponent(skill.icon)}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-[#212529] font-heading">
                            {skill.name}
                          </h3>
                        </div>

                        {/* Progress Line */}
                        <div className="space-y-1 max-w-md md:ml-auto">
                          <div className="flex justify-between items-center text-xs font-mono">
                            <span className="text-[#6C757D] text-[11px]">{skill.categoryTitle}</span>
                            <span className="text-[#212529] font-bold">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-[#DEE2E6] rounded-full h-1.5 overflow-hidden border border-[rgba(33,37,41,0.08)]">
                            <motion.div
                              className="h-full bg-gradient-to-r from-[#212529] to-[#495057] rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Column Content */}
                  <div className={`w-full md:w-1/2 ${!isLeft ? 'md:pl-12 md:text-left' : 'md:opacity-0 pointer-events-none hidden md:block'}`}>
                    {!isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="space-y-2.5 text-left"
                      >
                        {/* Header Pills */}
                        <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                          <span className="text-[10px] font-mono font-semibold uppercase text-[#212529] bg-[#DEE2E6] px-2.5 py-0.5 rounded-full border border-[rgba(33,37,41,0.08)]">
                            {skill.categoryTag}
                          </span>
                          <span className="text-[10px] font-mono text-[#6C757D]">
                            {skill.experience}
                          </span>
                        </div>

                        {/* Skill Title & Icon */}
                        <div className="flex items-center space-x-2.5">
                          <div className="p-2 rounded-[10px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] shrink-0">
                            {getIconComponent(skill.icon)}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-[#212529] font-heading">
                            {skill.name}
                          </h3>
                        </div>

                        {/* Progress Line */}
                        <div className="space-y-1 max-w-md">
                          <div className="flex justify-between items-center text-xs font-mono">
                            <span className="text-[#6C757D] text-[11px]">{skill.categoryTitle}</span>
                            <span className="text-[#212529] font-bold">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-[#DEE2E6] rounded-full h-1.5 overflow-hidden border border-[rgba(33,37,41,0.08)]">
                            <motion.div
                              className="h-full bg-gradient-to-r from-[#212529] to-[#495057] rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

