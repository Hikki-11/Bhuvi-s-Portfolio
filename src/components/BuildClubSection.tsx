import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Award, CheckCircle2, ArrowRight, X, Wrench, Cpu, Zap, Activity } from 'lucide-react';

interface BuildClubProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: 'Completed';
  heroImage: string;
  description: string;
  tags: string[];
  highlights: string[];
}

const BUILD_CLUB_PROJECTS: BuildClubProject[] = [
  {
    id: 'sound-rush',
    title: 'Sound Rush – Run the Circle!',
    subtitle: 'ESP32-C6 Sound-Level Detection & RGB Visualization',
    category: 'Embedded Systems & Electronics',
    status: 'Completed',
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    description: 'Developed an interactive sound-level detection system using an ESP32-C6 and microphone module, connected to a 16-LED RGB visualizer. Implemented circular LED animations with color-coded visual feedback representing sound intensity levels from low to very high.',
    tags: ['ESP32-C6', 'Microphone Module', 'RGB LEDs', 'Embedded Systems'],
    highlights: [
      'Sound-level detection using a precision microphone module.',
      '16-LED RGB visualizer interface.',
      'Circular LED animation firmware implementation.',
      'Color-coded visual indication of varying sound intensity levels.'
    ]
  },
  {
    id: 'mecarush',
    title: 'MecaRush – Move Beyond Limits!',
    subtitle: 'Four-Wheel Mecanum Robot with Wireless Web Control',
    category: 'Robotics & Embedded Systems',
    status: 'Completed',
    heroImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
    description: 'Built a four-wheel Mecanum robot powered by an ESP32-C6, two L298N motor drivers, and four DC motors. Implemented wireless control through a custom joystick-style web interface, enabling forward, backward, lateral, diagonal, and rotational movement.',
    tags: ['ESP32-C6', 'Mecanum Wheels', 'L298N', 'DC Motors', 'Web Control'],
    highlights: [
      'Four-wheel Mecanum omnidirectional robot mechanical assembly.',
      'Dual L298N motor-driver integration and power distribution.',
      'Wireless joystick-style web control interface over Wi-Fi.',
      'Precise forward, backward, lateral, diagonal, and rotational movement execution.'
    ]
  },
  {
    id: 'voltdrop',
    title: 'VoltDrop – DC-DC Buck Converter',
    subtitle: '24V DC to Approximately 12V DC Conversion',
    category: 'Power Electronics',
    status: 'Completed',
    heroImage: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=1200&auto=format&fit=crop',
    description: 'Designed and tested a switching buck converter using the LM2575-ADJ regulator to step down a 24V DC input to approximately 12V DC. Verified the output voltage using a digital multimeter and successfully powered a 12V DC motor.',
    tags: ['LM2575-ADJ', 'DC-DC Converter', 'Power Electronics', 'Circuit Design'],
    highlights: [
      'Switching buck-converter circuit design and PCB prototyping.',
      '24V DC input step-down conversion to stable ~12V DC output.',
      'Output voltage verification and load testing using digital multimeter.',
      'Successful hardware demonstration powering a 12V DC motor.'
    ]
  },
  {
    id: 'wipemotion',
    title: 'WipeMotion – Four-Bar Linkage Mechanism',
    subtitle: 'Windshield Wiper Mechanism Demonstration',
    category: 'Mechanical Engineering',
    status: 'Completed',
    heroImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop',
    description: 'Assembled a four-bar linkage mechanism demonstrating the working principle of an automotive windshield wiper. Explored mechanical linkages, pivot joints, motion transmission, and the conversion of rotational input into oscillating output motion.',
    tags: ['Mechanical Design', 'Four-Bar Linkage', 'Motion Transmission', 'Prototyping'],
    highlights: [
      'Four-bar linkage physical assembly and joint alignment.',
      'Study of pivot joints and mechanical power transmission.',
      'Demonstration of rotational-to-oscillating motion conversion.',
      'Practical exploration of automotive windshield wiper mechanics.'
    ]
  }
];

const BUILD_CLUB_SKILLS = [
  'Embedded Systems',
  'ESP32',
  'Robotics',
  'Motor Control',
  'Power Electronics',
  'Circuit Design',
  'Mechanical Assembly',
  'Prototyping',
  'Testing',
  'Troubleshooting'
];

export const BuildClubSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<BuildClubProject | null>(null);

  return (
    <section id="build-club" className="py-20 sm:py-28 relative bg-[#E9ECEF] border-t border-[rgba(33,37,41,0.08)] overflow-hidden">
      {/* Background Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#CED4DA] to-[#ADB5BD] rounded-full blur-3xl opacity-35 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#DEE2E6] to-[#CED4DA] rounded-full blur-3xl opacity-35 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] text-xs font-mono font-bold text-[#212529] shadow-2xs">
              <Wrench className="w-3.5 h-3.5 text-[#212529]" />
              <span>Hands-on Engineering & Innovation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#212529] tracking-tight font-heading">
              Build Club Projects
            </h2>
            <p className="text-sm sm:text-base text-[#495057] leading-relaxed">
              A collection of hands-on projects exploring embedded systems, robotics, power electronics, and mechanical engineering through practical design, assembly, testing, and prototyping.
            </p>

            {/* Compact Skills Area */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
              {BUILD_CLUB_SKILLS.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[rgba(255,255,255,0.7)] text-[#212529] border border-[rgba(33,37,41,0.08)] shadow-2xs backdrop-blur-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid - Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
          {BUILD_CLUB_PROJECTS.map((project, index) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              delay={(index % 2) * 0.12}
              className="flex flex-col"
            >
              <div className="project-glass-card p-6 flex flex-col justify-between group h-full text-left">
                {/* Header Image */}
                <div className="relative h-52 w-full overflow-hidden rounded-[14px] bg-[#DEE2E6] border border-[rgba(255,255,255,0.7)] shadow-inner">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                    loading="lazy"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold font-mono shadow-xs backdrop-blur-md bg-[rgba(255,255,255,0.92)] text-[#212529] border border-[rgba(255,255,255,0.95)]">
                      {project.status}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 text-[11px] font-mono font-bold bg-[rgba(255,255,255,0.92)] text-[#212529] px-2.5 py-1 rounded-full border border-[rgba(255,255,255,0.95)] backdrop-blur-md shadow-xs">
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
                      {project.subtitle}
                    </p>
                    <p className="text-xs font-normal text-[#343A40] line-clamp-3 leading-relaxed pt-1">
                      {project.description}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-[10px] text-[10px] font-mono font-bold bg-[rgba(233,236,239,0.85)] text-[#212529] border border-[rgba(255,255,255,0.9)] backdrop-blur-xs shadow-2xs group-hover:bg-[#DEE2E6] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
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

      {/* Modal View */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#212529]/60 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-2xl p-6 sm:p-8 rounded-[18px] shadow-2xl my-8 space-y-6 max-h-[90vh] overflow-y-auto bg-[rgba(255,255,255,0.94)] border border-[rgba(33,37,41,0.08)] text-[#212529]">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#DEE2E6] text-[#495057] hover:text-[#212529] hover:bg-[#E9ECEF] transition-colors cursor-pointer border border-[rgba(33,37,41,0.08)]"
              aria-label="Close modal"
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
                {activeModalProject.subtitle}
              </p>
            </div>

            {/* Overview / Description */}
            <div className="p-4 rounded-[14px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] text-left space-y-1.5">
              <div className="text-xs font-mono font-bold text-[#212529] uppercase tracking-wider">
                Project Overview & Implementation
              </div>
              <p className="text-xs text-[#212529] leading-relaxed">
                {activeModalProject.description}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-2 text-left">
              <h4 className="text-xs font-mono font-semibold text-[#495057] uppercase tracking-wider">
                Key Highlights & Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeModalProject.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="p-3 rounded-[12px] bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] text-xs text-[#212529] flex items-start space-x-2">
                    <span className="text-[#212529] font-bold mt-0.5">•</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className="space-y-2 text-left">
              <h4 className="text-xs font-mono font-semibold text-[#495057] uppercase tracking-wider">
                Technology & Components Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1.5 rounded-[10px] text-xs font-mono font-bold bg-[#DEE2E6] text-[#212529] border border-[rgba(33,37,41,0.08)] shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="pt-4 border-t border-[rgba(33,37,41,0.08)] flex items-center justify-end">
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
