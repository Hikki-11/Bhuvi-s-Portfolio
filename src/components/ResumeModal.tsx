import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { PROFILE_DATA, PROJECTS_DATA, WORK_EXPERIENCE_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `
${PROFILE_DATA.name} - Software Engineer
Phone: ${PROFILE_DATA.phone} | Email: ${PROFILE_DATA.email}
LinkedIn: ${PROFILE_DATA.linkedin} | GitHub: ${PROFILE_DATA.github}

PROFILE SUMMARY
${PROFILE_DATA.bio}

PROFESSIONAL EXPERIENCE
- QixArc — Backend Developer & Software Testing Team Member
  Contributing as a Backend Developer and Software Testing team member at QixArc, collaborating with the development team to build reliable backend solutions, test application functionality, identify defects, and improve overall software quality.

TECHNICAL SKILLS
- Languages: Java, Python, JavaScript, SQL, C++
- Backend: Core Java, Spring, Spring Boot, REST APIs, JDBC, Hibernate, JPA
- IoT & Embedded: ESP32, Sensor Integration, Embedded AI, Gas & Vibration Sensors
- Databases: MySQL, MongoDB, Snowflake
- Core Concepts: OOP, Data Structures & Algorithms (170+ LeetCode Solved)

PROJECTS
1. Digital AI Twin (HACKXTREME'26 Award Winner)
2. Micro Failure Whisperer (Predictive Maintenance AI)
3. Digital Smell (IoT Gas Leakage & Safety)
4. ScriptGuard AI (OpenCV & OCR Digitization)
5. Smart Energy Meter (ESP32 & Real-time Telemetry)
6. Employee Management System (Spring Boot & SQL)
    `;
    navigator.clipboard.writeText(textContent.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#212529]/60 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl glass-card bg-[#E9ECEF] border border-[rgba(33,37,41,0.08)] rounded-[18px] p-6 sm:p-10 shadow-2xl my-8 space-y-6 max-h-[90vh] overflow-y-auto text-[#212529]">
        
        {/* Modal Top Controls */}
        <div className="flex items-center justify-between border-b border-[rgba(33,37,41,0.08)] pb-4">
          <div className="flex items-center space-x-2 text-[#495057] font-mono text-xs font-bold">
            <FileText className="w-4 h-4 text-[#212529]" />
            <span className="text-[#212529]">BHUVANESAN_N_Resume.pdf</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-[10px] bg-[#DEE2E6] hover:bg-[#E9ECEF] text-[#495057] hover:text-[#212529] text-xs font-mono font-medium flex items-center space-x-1 transition-colors cursor-pointer border border-[rgba(33,37,41,0.08)]"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#212529]" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-[10px] bg-[#DEE2E6] hover:bg-[#E9ECEF] text-[#495057] hover:text-[#212529] text-xs font-mono font-medium flex items-center space-x-1 transition-colors cursor-pointer border border-[rgba(33,37,41,0.08)]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#DEE2E6] text-[#495057] hover:text-[#212529] hover:bg-[#E9ECEF] transition-colors cursor-pointer border border-[rgba(33,37,41,0.08)]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div id="printable-resume" className="space-y-6 text-[#212529] text-left">
          
          {/* Header */}
          <div className="text-center space-y-1.5 border-b border-[rgba(33,37,41,0.08)] pb-6">
            <h1 className="text-3xl font-extrabold text-[#212529] tracking-tight font-heading">
              {PROFILE_DATA.name}
            </h1>
            <p className="text-xs font-mono font-semibold text-[#495057]">
              Computer Science Student | Java & Spring Boot | IoT & Embedded AI
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#495057] font-mono pt-1">
              <span className="flex items-center"><Phone className="w-3 h-3 mr-1 text-[#212529]" />{PROFILE_DATA.phone}</span>
              <span>•</span>
              <span className="flex items-center"><Mail className="w-3 h-3 mr-1 text-[#212529]" />{PROFILE_DATA.email}</span>
              <span>•</span>
              <a href={PROFILE_DATA.linkedin} target="_blank" rel="noreferrer" className="flex items-center text-[#495057] hover:text-[#212529]">
                <Linkedin className="w-3 h-3 mr-1 text-[#212529]" />LinkedIn
              </a>
              <span>•</span>
              <a href={PROFILE_DATA.github} target="_blank" rel="noreferrer" className="flex items-center text-[#495057] hover:text-[#212529]">
                <Github className="w-3 h-3 mr-1 text-[#212529]" />GitHub
              </a>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono font-bold text-[#212529] uppercase tracking-wider border-b border-[rgba(33,37,41,0.08)] pb-1">
              PROFILE SUMMARY
            </h2>
            <p className="text-xs text-[#495057] leading-relaxed">
              Software engineer with hands-on experience in Java, Spring Boot, REST APIs, SQL, and MySQL. Strong foundation in Object-Oriented Programming, Data Structures & Algorithms, and backend application development, with <strong className="text-[#212529] font-mono">170+ LeetCode problems solved</strong>. Experienced in building scalable CRUD applications, integrating databases, and developing IoT-enabled embedded AI solutions.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-[#212529] uppercase tracking-wider border-b border-[rgba(33,37,41,0.08)] pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-2 text-xs">
              {WORK_EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex justify-between font-bold text-[#212529]">
                    <span>{exp.company} — <span className="text-[#495057] font-semibold">{exp.role}</span></span>
                    <span className="text-[#6C757D] text-[11px] font-mono">{exp.period}</span>
                  </div>
                  <p className="text-[#495057] text-[11px] leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-[#212529] uppercase tracking-wider border-b border-[rgba(33,37,41,0.08)] pb-1">
              KEY ENGINEERING PROJECTS
            </h2>
            <div className="space-y-2 text-xs">
              {PROJECTS_DATA.map((p) => (
                <div key={p.id} className="space-y-0.5">
                  <div className="flex justify-between font-bold text-[#212529]">
                    <span>{p.title}</span>
                    <span className="text-[#6C757D] text-[11px] font-mono">{p.tags.slice(0, 3).join(' • ')}</span>
                  </div>
                  <p className="text-[#495057] text-[11px]">{p.tagline}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-[#212529] uppercase tracking-wider border-b border-[rgba(33,37,41,0.08)] pb-1">
              TECHNICAL SKILLS SUMMARY
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#495057]">
              <div><strong className="text-[#212529]">Languages:</strong> Java, Python, JavaScript, SQL, C++</div>
              <div><strong className="text-[#212529]">Backend:</strong> Core Java, Spring Boot, REST APIs, Hibernate/JPA, JDBC</div>
              <div><strong className="text-[#212529]">IoT & Embedded:</strong> ESP32, Sensor Integration, Gas/Vibration Sensors</div>
              <div><strong className="text-[#212529]">Databases:</strong> MySQL, MongoDB, Snowflake</div>
              <div><strong className="text-[#212529]">Tools:</strong> Git, GitHub, Maven, Postman, IntelliJ IDEA, VS Code</div>
              <div><strong className="text-[#212529]">DSA Mastery:</strong> 170+ LeetCode Solved (Arrays, Math, Strings, Trees)</div>
            </div>
          </div>

        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-[rgba(33,37,41,0.08)] flex items-center justify-between">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 rounded-[12px] bg-[#212529] hover:bg-[#343A40] text-white font-bold text-xs flex items-center space-x-1.5 transition-all cursor-pointer shadow-xs border border-[#212529]"
          >
            <Download className="w-4 h-4 text-white" />
            <span>Download / Print Resume</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-[10px] bg-[#DEE2E6] text-[#495057] hover:text-[#212529] hover:bg-[#E9ECEF] text-xs font-mono cursor-pointer border border-[rgba(33,37,41,0.08)]"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

