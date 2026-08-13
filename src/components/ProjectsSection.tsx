import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectCaseStudy } from '../types';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { Github, Award, CheckCircle2, AlertTriangle, ArrowRight, X, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);

  const categories = ['All', 'IoT & Embedded AI', 'Machine Learning', 'Backend & Cloud'];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  }).sort((a, b) => {
    const isAOngoing = a.status === 'Ongoing';
    const isBOngoing = b.status === 'Ongoing';
    if (!isAOngoing && isBOngoing) return -1;
    if (isAOngoing && !isBOngoing) return 1;
    return 0;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-[#E9ECEF] border-t border-[rgba(33,37,41,0.08)] overflow-hidden">
      {/* Background Grid & Ambient Glows for Glassmorphism Depth */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#CED4DA] to-[#ADB5BD] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#DEE2E6] to-[#ADB5BD] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-r from-[#D0D7DE] via-[#E2E8F0] to-[#CBD5E1] rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#212529] tracking-tight font-heading">
              Projects & Technical Case Studies
            </h2>
            <p className="text-sm sm:text-base text-[#495057] leading-relaxed">
              Real-world software applications spanning Java REST microservices, ESP32 IoT hardware telemetry, and predictive machine learning.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#212529] text-[#FFFFFF] font-bold shadow-xs border border-[#212529]'
                      : 'bg-[rgba(222,226,230,0.85)] text-[#495057] hover:bg-[#E9ECEF] hover:text-[#212529] border border-[rgba(255,255,255,0.8)] backdrop-blur-md'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid - Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              delay={(index % 3) * 0.12}
              className="flex flex-col"
            >
              <div className="project-glass-card p-6 flex flex-col justify-between group h-full text-left">
                {/* Header Image */}
                <div className="relative h-48 w-full overflow-hidden rounded-[14px] bg-[#DEE2E6] border border-[rgba(255,255,255,0.7)] shadow-inner">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                    loading="lazy"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold font-mono shadow-xs backdrop-blur-md ${
                      project.status === 'Award Winner'
                        ? 'bg-[#212529] text-[#FFFFFF] border border-[#212529]'
                        : 'bg-[rgba(255,255,255,0.90)] text-[#212529] border border-[rgba(255,255,255,0.95)]'
                    }`}>
                      {project.status === 'Award Winner' && <Award className="w-3 h-3 inline mr-1 -mt-0.5 text-[#FFFFFF]" />}
                      {project.status}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 text-[11px] font-mono font-bold bg-[rgba(255,255,255,0.90)] text-[#212529] px-2.5 py-1 rounded-full border border-[rgba(255,255,255,0.95)] backdrop-blur-md shadow-xs">
                    {project.category}
                  </div>
                </div>

                {/* Content Body */}
                <div className="pt-5 flex-1 flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-[#212529] group-hover:text-[#000000] transition-colors leading-snug font-heading tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono font-bold text-[#343A40]">
                      {project.tagline}
                    </p>
                    <p className="text-xs font-normal text-[#343A40] line-clamp-3 leading-relaxed pt-1">
                      {project.problemStatement}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.slice(0, 4).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-[10px] text-[10px] font-mono font-bold bg-[rgba(233,236,239,0.85)] text-[#212529] border border-[rgba(255,255,255,0.9)] backdrop-blur-xs shadow-2xs group-hover:bg-[#DEE2E6] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-1 rounded-[10px] text-[10px] font-mono font-bold bg-[rgba(233,236,239,0.75)] text-[#495057] border border-[rgba(255,255,255,0.85)]">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-[rgba(33,37,41,0.08)] flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="w-full py-2.5 px-3 rounded-[12px] bg-[#212529] hover:bg-[#343A40] text-[#FFFFFF] font-bold text-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer border border-[#212529] shadow-xs hover:shadow-md hover:scale-[1.01]"
                    >
                      <span>View Specs & Arch</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FFFFFF]" />
                    </button>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Learn More Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#212529]/60 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-3xl p-6 sm:p-8 rounded-[18px] shadow-2xl my-8 space-y-6 max-h-[90vh] overflow-y-auto bg-[rgba(255,255,255,0.92)] border border-[rgba(33,37,41,0.08)] text-[#212529]">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#DEE2E6] text-[#495057] hover:text-[#212529] hover:bg-[#E9ECEF] transition-colors cursor-pointer border border-[rgba(33,37,41,0.08)]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 text-left pr-8">
              <div className="flex items-center space-x-2 text-xs font-mono font-medium text-[#495057]">
                <span className="px-2.5 py-0.5 rounded-full bg-[#DEE2E6] text-[#212529] border border-[rgba(33,37,41,0.08)]">
                  {activeModalProject.category}
                </span>
                <span>•</span>
                <span className="font-semibold text-[#212529]">{activeModalProject.status}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#212529] font-heading">
                {activeModalProject.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#495057] font-mono">
                {activeModalProject.tagline}
              </p>
            </div>

            {/* Architectural Overview Diagram */}
            <div className="p-4 rounded-[14px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)]">
              <ArchitectureDiagram
                title={activeModalProject.architectureDiagram.title}
                nodes={activeModalProject.architectureDiagram.nodes}
                connections={activeModalProject.architectureDiagram.connections}
              />
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="p-4 rounded-[14px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] space-y-1.5">
                <div className="flex items-center space-x-1.5 text-[#495057] font-bold text-xs uppercase font-mono">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#212529]" />
                  <span>Problem Statement</span>
                </div>
                <p className="text-xs text-[#212529] leading-relaxed">
                  {activeModalProject.problemStatement}
                </p>
              </div>

              <div className="p-4 rounded-[14px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] space-y-1.5">
                <div className="flex items-center space-x-1.5 text-[#212529] font-bold text-xs uppercase font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#212529]" />
                  <span>Solution Architecture</span>
                </div>
                <p className="text-xs text-[#212529] leading-relaxed">
                  {activeModalProject.solutionApproach}
                </p>
              </div>
            </div>

            {/* Features list */}
            <div className="space-y-2 text-left">
              <h4 className="text-xs font-mono font-semibold text-[#495057] uppercase tracking-wider">
                Key System Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeModalProject.features.map((feat, fIdx) => (
                  <div key={fIdx} className="p-2.5 rounded-[12px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] text-xs text-[#212529] flex items-start space-x-2">
                    <span className="text-[#212529] font-bold mt-0.5">•</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="space-y-2 text-left">
              <h4 className="text-xs font-mono font-semibold text-[#495057] uppercase tracking-wider">
                Outcomes & Impact
              </h4>
              <ul className="list-disc list-inside text-xs text-[#212529] space-y-1.5 bg-[#DEE2E6] p-3.5 rounded-[14px] border border-[rgba(33,37,41,0.08)]">
                {activeModalProject.outcomes.map((out, oIdx) => (
                  <li key={oIdx}>{out}</li>
                ))}
              </ul>
            </div>

            {/* Modal Actions Footer */}
            <div className="pt-4 border-t border-[rgba(33,37,41,0.08)] flex items-center justify-between">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-[12px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] text-[#212529] hover:text-[#495057] hover:bg-[#E9ECEF] text-xs font-medium flex items-center space-x-1.5 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
              </a>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2 rounded-[12px] bg-[#212529] hover:bg-[#343A40] text-[#FFFFFF] text-xs font-bold cursor-pointer shadow-xs border border-[#212529]"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

