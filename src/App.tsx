import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CursorGlow } from './components/CursorGlow';
import { ScrollReveal } from './components/ScrollReveal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen relative text-[#212529] font-sans selection:bg-[#212529]/20 selection:text-[#212529]">
      
      {/* Interactive Cursor Spotlight & Button Glow */}
      <CursorGlow />

      {/* Slim Fixed Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Fixed Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Page Content */}
      <main className="relative z-10 space-y-12 sm:space-y-16">
        {/* Home / Hero */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Me */}
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>

        {/* Professional Experience */}
        <ScrollReveal>
          <ExperienceSection />
        </ScrollReveal>

        {/* Projects */}
        <ScrollReveal>
          <ProjectsSection />
        </ScrollReveal>

        {/* Skills */}
        <ScrollReveal>
          <ExpertiseSection />
        </ScrollReveal>

        {/* Achievements */}
        <ScrollReveal>
          <AchievementsSection />
        </ScrollReveal>

        {/* Contact */}
        <ScrollReveal>
          <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
