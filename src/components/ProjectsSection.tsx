import React, { useState, useEffect } from 'react';
import { PROJECTS_DATA, BUILD_CLUB_PROJECTS_DATA } from '../data/portfolioData';
import { ProjectCaseStudy } from '../types';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { Github, Award, CheckCircle2, AlertTriangle, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);
  const [activeSubIndex, setActiveSubIndex] = useState<number>(0);
  const [customBuildClubImage] = useState<string>(() => {
    return localStorage.getItem('buildClubCustomImage') || '';
  });

  // Preload all project and prototype images immediately so tab switching is 100% instant
  useEffect(() => {
    const imagesToPreload = [
      ...PROJECTS_DATA.map((p) => p.heroImage),
      ...BUILD_CLUB_PROJECTS_DATA.map((sp) => sp.heroImage),
      '/image.png',
      customBuildClubImage
    ].filter(Boolean);

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [customBuildClubImage]);

  const categories = [
    'All',
    'Build Club Projects',
    'AI, IoT & Robotics',
    'IoT & Embedded AI',
    'Machine Learning',
    'Backend & Cloud'
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  // Check if a project is one of the 4 Build Club projects
  const isBuildClubSubproject = (project: ProjectCaseStudy | null) => {
    if (!project) return false;
    return BUILD_CLUB_PROJECTS_DATA.some((sp) => sp.id === project.id);
  };

  const getBuildClubIndex = (project: ProjectCaseStudy | null) => {
    if (!project) return -1;
    return BUILD_CLUB_PROJECTS_DATA.findIndex((sp) => sp.id === project.id);
  };

  const renderProjectCard = (project: ProjectCaseStudy, index: number) => {
    const isBuildClubCard = Boolean(project.subProjects && project.subProjects.length > 0);
    const activeSub = isBuildClubCard && project.subProjects && activeSubIndex >= 0 ? project.subProjects[activeSubIndex] : null;

    const displayImage = activeSub ? activeSub.heroImage : project.heroImage;
    const displayCategoryBadge = activeSub ? activeSub.categoryBadge : (project.categoryBadge || project.category);
    const displayTitle = isBuildClubCard && activeSub ? activeSub.title : (project.cardTitle || project.title);
    const displayTagline = activeSub ? activeSub.tagline : project.tagline;
    const displayProblem = activeSub ? activeSub.problemStatement : project.problemStatement;
    const displayTags = activeSub ? activeSub.tags : project.tags;

    return (
      <ScrollReveal
        key={project.id}
        direction="up"
        delay={(index % 3) * 0.12}
        className="flex flex-col"
      >
        <div className="project-glass-card p-6 flex flex-col justify-between group h-full text-left">
          {/* Header Image - Pre-rendered & layered so switching is 100% instant */}
          <div className="relative h-48 w-full overflow-hidden rounded-[14px] bg-[#DEE2E6] border border-[rgba(255,255,255,0.7)] shadow-inner">
            {isBuildClubCard ? (
              customBuildClubImage ? (
                /* Quadrant-mapped actual image: 0ms instant positioning */
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={customBuildClubImage}
                    alt="Build Club Actual Prototype"
                    className={`absolute object-cover transition-none ${
                      activeSubIndex === -1
                        ? 'w-full h-full inset-0'
                        : activeSubIndex === 0
                        ? 'w-[200%] h-[200%] max-w-none top-0 left-0'
                        : activeSubIndex === 1
                        ? 'w-[200%] h-[200%] max-w-none top-0 right-0'
                        : activeSubIndex === 2
                        ? 'w-[200%] h-[200%] max-w-none bottom-0 left-0'
                        : 'w-[200%] h-[200%] max-w-none bottom-0 right-0'
                    }`}
                  />
                </div>
              ) : (
                /* Pre-rendered layer stack with instant duration-0 opacity for 0ms latency */
                <>
                  <img
                    src={project.heroImage}
                    alt="Build Club All Prototypes"
                    loading="eager"
                    decoding="sync"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-0 ${
                      activeSubIndex === -1 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                    }`}
                  />
                  {project.subProjects?.map((sp, sIdx) => {
                    const isActive = sIdx === activeSubIndex;
                    return (
                      <img
                        key={sp.id}
                        src={sp.heroImage}
                        alt={sp.title}
                        loading="eager"
                        decoding="sync"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-0 ${
                          isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                        }`}
                      />
                    );
                  })}
                </>
              )
            ) : (
              <img
                src={displayImage}
                alt={project.title}
                loading="eager"
                decoding="sync"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
              />
            )}
            
            {/* Status Badge */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-20">
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold font-mono shadow-xs backdrop-blur-md ${
                project.status === 'Award Winner' || project.status === 'SIH 2026' || project.status === 'Completed'
                  ? 'bg-[#212529] text-[#FFFFFF] border border-[#212529]'
                  : 'bg-[rgba(255,255,255,0.90)] text-[#212529] border border-[rgba(255,255,255,0.95)]'
              }`}>
                {project.status === 'Award Winner' && <Award className="w-3 h-3 inline mr-1 -mt-0.5 text-[#FFFFFF]" />}
                {project.status === 'Completed' && <CheckCircle2 className="w-3 h-3 inline mr-1 -mt-0.5 text-[#FFFFFF]" />}
                {project.status}
              </span>
            </div>

            {/* Category Badge */}
            <div className="absolute bottom-3 right-3 text-[11px] font-mono font-bold bg-[rgba(255,255,255,0.90)] text-[#212529] px-2.5 py-1 rounded-full border border-[rgba(255,255,255,0.95)] backdrop-blur-md shadow-xs z-20">
              {displayCategoryBadge}
            </div>
          </div>

          {/* Content Body */}
          <div className="pt-5 flex-1 flex flex-col justify-between space-y-4 text-left">
            <div className="space-y-2">
              <div className="space-y-0.5">
                <h3 className="text-xl font-extrabold text-[#212529] group-hover:text-[#000000] transition-colors leading-snug font-heading tracking-tight whitespace-pre-line">
                  {displayTitle}
                </h3>
                {isBuildClubCard && (
                  <p className="text-xs font-mono font-bold text-[#6C757D]">
                    Hands-on Engineering & Innovation
                  </p>
                )}
              </div>

              {isBuildClubCard && (
                <div className="pt-0.5 pb-0.5">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[rgba(33,37,41,0.06)] text-[#212529] text-[11px] font-mono font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#212529]"></span>
                    <span>
                      {activeSub ? `Active: ${activeSub.title.split('–')[0].trim()}` : 'Active: All 4 Projects Showcase'}
                    </span>
                  </div>
                </div>
              )}

              <p className="text-xs font-mono font-bold text-[#343A40]">
                {displayTagline}
              </p>

              <p className="text-xs font-normal text-[#343A40] line-clamp-2 leading-relaxed pt-0.5">
                {displayProblem}
              </p>

              {/* In-Card Interactive Switcher for the Prototypes */}
              {isBuildClubCard && project.subProjects && (
                <div className="pt-2 pb-1 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#495057] uppercase tracking-wider">
                    <span>Select Prototype:</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSubIndex(-1);
                      }}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded cursor-pointer transition-colors ${
                        activeSubIndex === -1
                          ? 'bg-[#212529] text-white font-bold'
                          : 'text-[#6C757D] hover:text-[#212529] underline'
                      }`}
                    >
                      All (4-in-1)
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {project.subProjects.map((sp, sIdx) => {
                      const isActive = activeSubIndex === sIdx;
                      return (
                        <button
                          key={sp.id}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSubIndex(sIdx);
                          }}
                          className={`px-2 py-1.5 rounded-[10px] text-[10.5px] font-mono text-left truncate transition-all cursor-pointer border ${
                            isActive
                              ? 'bg-[#212529] text-[#FFFFFF] border-[#212529] font-bold shadow-2xs'
                              : 'bg-[rgba(233,236,239,0.85)] text-[#343A40] border-[rgba(255,255,255,0.85)] hover:bg-[#DEE2E6] hover:text-[#212529]'
                          }`}
                        >
                          <span className="font-bold mr-1">{sIdx + 1}.</span> {sp.title.split('–')[0].trim()}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {displayTags.slice(0, 4).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-[10px] text-[10px] font-mono font-bold bg-[rgba(233,236,239,0.85)] text-[#212529] border border-[rgba(255,255,255,0.9)] backdrop-blur-xs shadow-2xs group-hover:bg-[#DEE2E6] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
                {displayTags.length > 4 && (
                  <span className="px-2 py-1 rounded-[10px] text-[10px] font-mono font-bold bg-[rgba(233,236,239,0.75)] text-[#495057] border border-[rgba(255,255,255,0.85)]">
                    +{displayTags.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[rgba(33,37,41,0.08)] flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  if (isBuildClubCard && activeSub) {
                    setActiveModalProject(activeSub);
                  } else {
                    setActiveModalProject(project);
                  }
                }}
                className="w-full py-2.5 px-3 rounded-[12px] bg-[#212529] hover:bg-[#343A40] text-[#FFFFFF] font-bold text-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer border border-[#212529] shadow-xs hover:shadow-md hover:scale-[1.01]"
              >
                <span>View Specs & Arch</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFFFFF]" />
              </button>
            </div>

          </div>
        </div>
      </ScrollReveal>
    );
  };

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-[#E9ECEF] border-t border-[rgba(33,37,41,0.08)] overflow-hidden">
      {/* Background Grid & Ambient Glows for Glassmorphism Depth */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#CED4DA] to-[#ADB5BD] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#DEE2E6] to-[#ADB5BD] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-r from-[#D0D7DE] via-[#E2E8F0] to-[#CBD5E1] rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#212529] tracking-tight font-heading">
              Projects & Technical Case Studies
            </h2>
            <p className="text-sm sm:text-base text-[#495057] leading-relaxed">
              Real-world software applications spanning Java REST microservices, ESP32 IoT hardware telemetry, robotics, and predictive machine learning.
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

        {/* Primary Projects Grid - Unified Glassmorphism Cards */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        ) : (
          <div className="text-center py-12 text-[#6C757D] font-mono text-sm">
            No projects found in this category.
          </div>
        )}

      </div>

      {/* Learn More Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#212529]/60 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-3xl p-6 sm:p-8 rounded-[18px] shadow-2xl my-8 space-y-6 max-h-[90vh] overflow-y-auto bg-[rgba(255,255,255,0.92)] border border-[rgba(33,37,41,0.08)] text-[#212529]">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#DEE2E6] text-[#495057] hover:text-[#212529] hover:bg-[#E9ECEF] transition-colors cursor-pointer border border-[rgba(33,37,41,0.08)] z-30"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Build Club Multi-Project Switcher inside Modal if active project is a Build Club project */}
            {(isBuildClubSubproject(activeModalProject) || activeModalProject.id === 'build-club-projects') && (
              <div className="p-3 rounded-[14px] bg-[#E9ECEF] border border-[rgba(33,37,41,0.08)] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#495057]">
                  <span>BUILD CLUB SHOWCASE</span>
                  <span>
                    {activeModalProject.id === 'build-club-projects'
                      ? 'All 4 Prototypes Overview'
                      : `Prototype ${getBuildClubIndex(activeModalProject) + 1} of ${BUILD_CLUB_PROJECTS_DATA.length}`}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                  <button
                    onClick={() => {
                      const mainCard = PROJECTS_DATA.find((p) => p.id === 'build-club-projects');
                      if (mainCard) setActiveModalProject(mainCard);
                      setActiveSubIndex(-1);
                    }}
                    className={`px-2.5 py-1.5 rounded-[10px] text-xs font-mono truncate transition-all cursor-pointer border text-center ${
                      activeModalProject.id === 'build-club-projects'
                        ? 'bg-[#212529] text-[#FFFFFF] border-[#212529] font-bold shadow-xs'
                        : 'bg-[#DEE2E6] text-[#343A40] border-[rgba(33,37,41,0.08)] hover:bg-[#CED4DA]'
                    }`}
                  >
                    All (4-in-1)
                  </button>
                  {BUILD_CLUB_PROJECTS_DATA.map((sp, idx) => {
                    const isSelected = sp.id === activeModalProject.id;
                    return (
                      <button
                        key={sp.id}
                        onClick={() => {
                          setActiveModalProject(sp);
                          setActiveSubIndex(idx);
                        }}
                        className={`px-2.5 py-1.5 rounded-[10px] text-xs font-mono truncate transition-all cursor-pointer border text-center ${
                          isSelected
                            ? 'bg-[#212529] text-[#FFFFFF] border-[#212529] font-bold shadow-xs'
                            : 'bg-[#DEE2E6] text-[#343A40] border-[rgba(33,37,41,0.08)] hover:bg-[#CED4DA]'
                        }`}
                      >
                        {idx + 1}. {sp.title.split('–')[0].trim()}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Modal Cover Image - Instant switching */}
            <div className="relative h-52 sm:h-60 w-full overflow-hidden rounded-[14px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] shadow-inner">
              {isBuildClubSubproject(activeModalProject) || activeModalProject.id === 'build-club-projects' ? (
                customBuildClubImage ? (
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={customBuildClubImage}
                      alt={activeModalProject.title}
                      className={`absolute object-cover transition-none ${
                        activeModalProject.id === 'build-club-projects'
                          ? 'w-full h-full inset-0'
                          : getBuildClubIndex(activeModalProject) === 0
                          ? 'w-[200%] h-[200%] max-w-none top-0 left-0'
                          : getBuildClubIndex(activeModalProject) === 1
                          ? 'w-[200%] h-[200%] max-w-none top-0 right-0'
                          : getBuildClubIndex(activeModalProject) === 2
                          ? 'w-[200%] h-[200%] max-w-none bottom-0 left-0'
                          : 'w-[200%] h-[200%] max-w-none bottom-0 right-0'
                      }`}
                    />
                  </div>
                ) : (
                  <>
                    {PROJECTS_DATA.filter((p) => p.id === 'build-club-projects').map((bp) => (
                      <img
                        key={bp.id}
                        src={bp.heroImage}
                        alt={bp.title}
                        loading="eager"
                        decoding="sync"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-0 ${
                          activeModalProject.id === bp.id ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                        }`}
                      />
                    ))}
                    {BUILD_CLUB_PROJECTS_DATA.map((sp) => {
                      const isActive = activeModalProject.id === sp.id;
                      return (
                        <img
                          key={sp.id}
                          src={sp.heroImage}
                          alt={sp.title}
                          loading="eager"
                          decoding="sync"
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-0 ${
                            isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                          }`}
                        />
                      );
                    })}
                  </>
                )
              ) : (
                <img
                  src={activeModalProject.heroImage}
                  alt={activeModalProject.title}
                  loading="eager"
                  decoding="sync"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Modal Header */}
            <div className="space-y-2 text-left pr-8">
              <div className="flex items-center space-x-2 text-xs font-mono font-medium text-[#495057]">
                <span className="px-2.5 py-0.5 rounded-full bg-[#DEE2E6] text-[#212529] border border-[rgba(33,37,41,0.08)] font-bold">
                  {activeModalProject.categoryBadge || activeModalProject.category}
                </span>
                <span>•</span>
                <span className="font-bold text-[#212529]">{activeModalProject.status}</span>
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

            {/* Key Highlights */}
            <div className="space-y-2 text-left">
              <h4 className="text-xs font-mono font-semibold text-[#495057] uppercase tracking-wider">
                Key Highlights
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

            {/* Technology Stack Badges */}
            <div className="space-y-2 text-left">
              <h4 className="text-xs font-mono font-semibold text-[#495057] uppercase tracking-wider">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-[10px] text-xs font-mono font-bold bg-[#DEE2E6] text-[#212529] border border-[rgba(33,37,41,0.08)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcomes & Verification */}
            <div className="space-y-2 text-left">
              <h4 className="text-xs font-mono font-semibold text-[#495057] uppercase tracking-wider">
                Outcomes & Verification
              </h4>
              <ul className="list-disc list-inside text-xs text-[#212529] space-y-1.5 bg-[#DEE2E6] p-3.5 rounded-[14px] border border-[rgba(33,37,41,0.08)]">
                {activeModalProject.outcomes.map((out, oIdx) => (
                  <li key={oIdx}>{out}</li>
                ))}
              </ul>
            </div>

            {/* Modal Actions Footer & Next/Prev Controls */}
            <div className="pt-4 border-t border-[rgba(33,37,41,0.08)] flex flex-wrap items-center justify-between gap-3">
              {isBuildClubSubproject(activeModalProject) ? (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      const curIdx = getBuildClubIndex(activeModalProject);
                      const prevIdx = (curIdx - 1 + BUILD_CLUB_PROJECTS_DATA.length) % BUILD_CLUB_PROJECTS_DATA.length;
                      setActiveModalProject(BUILD_CLUB_PROJECTS_DATA[prevIdx]);
                      setActiveSubIndex(prevIdx);
                    }}
                    className="px-3 py-1.5 rounded-[10px] bg-[#DEE2E6] hover:bg-[#CED4DA] text-xs font-mono font-bold text-[#212529] flex items-center space-x-1 cursor-pointer transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Prev Project</span>
                  </button>
                  <button
                    onClick={() => {
                      const curIdx = getBuildClubIndex(activeModalProject);
                      const nextIdx = (curIdx + 1) % BUILD_CLUB_PROJECTS_DATA.length;
                      setActiveModalProject(BUILD_CLUB_PROJECTS_DATA[nextIdx]);
                      setActiveSubIndex(nextIdx);
                    }}
                    className="px-3 py-1.5 rounded-[10px] bg-[#DEE2E6] hover:bg-[#CED4DA] text-xs font-mono font-bold text-[#212529] flex items-center space-x-1 cursor-pointer transition-colors"
                  >
                    <span>Next Project</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ) : activeModalProject.githubUrl ? (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-[10px] bg-[#212529] hover:bg-[#000000] text-xs font-mono font-bold text-[#FFFFFF] flex items-center space-x-1.5 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              ) : (
                <div />
              )}

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-[10px] bg-[#DEE2E6] hover:bg-[#CED4DA] text-xs font-mono text-[#495057] hover:text-[#212529] transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
