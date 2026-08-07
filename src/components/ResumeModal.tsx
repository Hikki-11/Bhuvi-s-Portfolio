import React, { useState, useEffect } from 'react';
import { X, Download, Copy, Check, FileText, ExternalLink, Phone, Mail, Linkedin, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const resumePdfUrl = '/BHUVANESAN_N_Resume.pdf';

  const handleOpenPdfNewTab = () => {
    window.open(resumePdfUrl, '_blank', 'noopener,noreferrer');
  };

  const generateFullResumeText = () => {
    return `================================================================================
                               BHUVANESAN N
                            Software Developer
                  Java | Spring Boot | MySQL | REST APIs
================================================================================
Phone: 8754761937 | Email: bhuvanesan.n@gmail.com
LinkedIn: linkedin.com/in/bhuvanesan-n-9a2b86339
GitHub: github.com/Hikki-11

--------------------------------------------------------------------------------
PROFILE SUMMARY
--------------------------------------------------------------------------------
Computer Science undergraduate with hands-on experience in Java, Spring Boot, 
REST APIs, SQL, and MongoDB, gained through academic and personal software 
development projects. Strong foundation in Object-Oriented Programming, Data 
Structures & Algorithms, and backend application development, with 170+ LeetCode 
problems solved. Experienced in building scalable CRUD applications, integrating 
databases, and developing IoT-enabled solutions. Passionate about designing 
efficient backend systems, writing clean, maintainable code, and continuously 
learning modern software engineering technologies.

--------------------------------------------------------------------------------
PROJECTS
--------------------------------------------------------------------------------
Digital AI Twin                                      IoT · Python · AI/ML
• Developed a Smart Energy Meter using ESP32 and LCD to monitor and display 
  real-time current, power, and energy consumption.
• Processed sensor inputs to calculate electrical parameters and present live 
  readings on the embedded display.
• Implemented real-time energy monitoring to demonstrate efficient power usage 
  aligned with Sustainable Development Goal (SDG 7).
• Designed an embedded solution capable of continuous energy usage tracking 
  for smart monitoring applications.

Smart Energy Meter                          ESP32 · LCD · Embedded Systems · IoT
• Developed a Smart Energy Meter using ESP32 and LCD to monitor and display 
  real-time current, power, and energy consumption.
• Processed sensor inputs to calculate electrical parameters and present live 
  readings on the embedded display.
• Implemented real-time energy monitoring to demonstrate efficient power usage 
  aligned with Sustainable Development Goal (SDG 7).
• Designed an embedded solution capable of continuous energy usage tracking 
  for smart monitoring applications.

Course Registration System                       Java · Spring Boot · Hibernate ORM · MySQL
• Developed a Course Registration System enabling students to browse, register, and manage courses while enabling admin control.
• Implemented a layered architecture using Spring Boot, Hibernate ORM, and MySQL for secure, efficient data persistence.
• Built student registration workflows and administrator course management capabilities with dynamic seat tracking.
• Designed structured user interfaces and form validation for seamless course enrollment and record management.

Micro Failure Whisperer (Ongoing)           Python · Machine Learning · Predictive Maintenance
• Developing an AI-powered predictive maintenance system to detect micro-level 
  machine failures using sensor and vibration data.
• Applying anomaly detection techniques to identify early signs of equipment 
  degradation before breakdowns occur.
• Designing a real-time monitoring pipeline to process sensor data and generate 
  predictive maintenance alerts.
• Building a scalable architecture capable of supporting industrial machine 
  health monitoring applications.

Digital Smell (Ongoing)                            IoT · Gas Sensors · Embedded AI
• Developing an IoT-based gas leakage detection system using high-sensitivity 
  gas sensors and embedded AI.
• Implementing real-time monitoring and anomaly detection to identify minute gas 
  leakages accurately.
• Designing an intelligent alert system to improve industrial safety through early 
  hazard detection.
• Building an embedded solution for continuous environmental monitoring in 
  safety-critical applications.

ScriptGuard AI (Ongoing)                           Python · Computer Vision · OCR
• Developing an intelligent paper-scanning mechanism for automated document 
  digitization and verification.
• Integrating OCR and image-processing techniques to extract, validate, and 
  organize scanned content.

--------------------------------------------------------------------------------
TECHNICAL SKILLS
--------------------------------------------------------------------------------
Programming Languages: Java, Python, JavaScript, SQL, C++
Frontend & Web Technologies: HTML5, CSS3, JavaScript, Bootstrap, Responsive Web Design
Backend Technologies: Core Java, Spring, Spring Boot, Spring MVC, REST APIs, JDBC, Hibernate, JPA, CRUD Operations
Databases: MySQL, MongoDB
Tools & Platforms: Git, GitHub, Maven, Postman, IntelliJ IDEA, Eclipse, VS Code
Core Concepts: OOP, Data Structures & Algorithms, DOM Manipulation, Anomaly Detection
Cloud & Data: Snowflake
IoT & Embedded: ESP32, Sensor Integration, Embedded AI, Gas & Vibration Sensors

--------------------------------------------------------------------------------
INTERPERSONAL SKILLS
--------------------------------------------------------------------------------
• Communication        • Problem-Solving      • Time Management
• Presentation         • Team Player          • Attention to Detail
• Adaptability

--------------------------------------------------------------------------------
WORKSHOPS & HACKATHONS
--------------------------------------------------------------------------------
HACKXTREME'26 — 24-Hour National-Level Hackathon, K. Ramakrishnan College of Engineering, Trichy
• Built an AI-powered Digital Twin model simulating urban infrastructure from 
  IoT data for real-time prediction of traffic congestion, energy demand, and pollution levels.
• Recognized by Media Wave for technical performance and shortlisted for an 
  internship opportunity.

Smart India Hackathon (SIH)
• Designed an automated pesticide sprinkler system using logic-based control 
  to improve agricultural efficiency.
• Developed a prototype focused on reducing manual intervention while optimizing pesticide spraying.
• Collaborated with team members to design an innovative solution addressing 
  real-world agricultural challenges.

MSME
• Presented Micro Failure Whisperer and Digital Smell as AI-driven industrial 
  safety and predictive maintenance solutions.
• Demonstrated the application of machine learning and IoT technologies for 
  early fault detection and industrial monitoring.

Snowflake Workshop — 1 Week
• Completed hands-on training covering Snowflake architecture, cloud data 
  warehousing, and SQL-based data management.
• Gained practical exposure to data loading, querying, and cloud-based analytics workflows.

IoT Workshop — 1 Month
• Completed practical training in ESP32 programming, sensor integration, and 
  embedded system development.
• Built real-time IoT applications involving sensor data acquisition and 
  hardware-software communication.

--------------------------------------------------------------------------------
CERTIFICATIONS
--------------------------------------------------------------------------------
• AI/ML (Dreams AI)                        • SQL (Oracle)
• Java (Oracle)                            • MongoDB (ICT Academy)
• Figma (Simplelearn)                      • Python / C & C++ (Kaggle/mygreatlearning)

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
B.E. Computer Science and Engineering (CSE) — PSNA College of Engineering and Technology, Dindigul
2024 – 2028 | CGPA: 8.6

XII — St. John's Matriculation Higher Secondary School, Madurai
May 2024 | 93%

X — The Nallamani Matriculation Higher Secondary School, Madurai
July 2022 | 92%

--------------------------------------------------------------------------------
ACHIEVEMENTS
--------------------------------------------------------------------------------
• Recognized by Media Wave at HACKXTREME'26 (24-Hour National-Level Hackathon) 
  for technical performance and shortlisted for an internship opportunity.
• Solved 170+ problems on LeetCode across Arrays, Strings, Mathematics, and core DSA topics.
• Won mathematics competitions, demonstrating strong analytical thinking and problem-solving abilities.
================================================================================`;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generateFullResumeText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#212529]/75 backdrop-blur-md overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl glass-card bg-[#E9ECEF] border border-[rgba(33,37,41,0.12)] rounded-[18px] p-4 sm:p-6 shadow-2xl my-4 sm:my-6 space-y-4 max-h-[92vh] flex flex-col text-[#212529]"
          >
            
            {/* Modal Header Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(33,37,41,0.1)] pb-3 shrink-0">
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-[#495057] font-mono text-xs font-bold">
                  <FileText className="w-4 h-4 text-[#212529]" />
                  <span className="text-[#212529]">BHUVANESAN_N_Resume.pdf</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                
                {/* Open PDF in New Tab */}
                <button
                  onClick={handleOpenPdfNewTab}
                  className="px-3 py-1.5 rounded-[10px] bg-[#212529] hover:bg-[#343A40] text-white text-xs font-mono font-bold flex items-center space-x-1.5 transition-colors cursor-pointer border border-[#212529] shadow-xs"
                  title="Open PDF in a new browser tab"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
                  <span className="hidden sm:inline">Open in New Tab</span>
                </button>

                {/* Download PDF Direct */}
                <a
                  href={resumePdfUrl}
                  download="BHUVANESAN_N_Resume.pdf"
                  className="px-3 py-1.5 rounded-[10px] bg-[#DEE2E6] hover:bg-[#CED4DA] text-[#212529] text-xs font-mono font-bold flex items-center space-x-1 transition-colors cursor-pointer border border-[rgba(33,37,41,0.1)]"
                  title="Download PDF file directly"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download PDF</span>
                </a>

                <button
                  onClick={handleCopyText}
                  className="px-2.5 py-1.5 rounded-[10px] bg-[#DEE2E6] hover:bg-[#E9ECEF] text-[#495057] hover:text-[#212529] text-xs font-mono font-medium flex items-center space-x-1 transition-colors cursor-pointer border border-[rgba(33,37,41,0.08)]"
                  title="Copy formatted resume text"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#212529]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="hidden md:inline">{copied ? 'Copied' : 'Copy Text'}</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full bg-[#DEE2E6] text-[#495057] hover:text-[#212529] hover:bg-[#E9ECEF] transition-colors cursor-pointer border border-[rgba(33,37,41,0.08)]"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

        {/* Modal Main Area */}
        <div className="flex-1 overflow-y-auto min-h-0 space-y-4">
          
          {/* Printable Document View */}
          <div id="printable-resume" className="space-y-5 text-[#212529] text-left bg-white p-6 sm:p-10 rounded-[12px] border border-[#212529]/15 shadow-sm font-sans">
              
              {/* Header */}
              <div className="text-center space-y-1.5 border-b border-[#212529]/20 pb-4">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#212529] tracking-tight font-heading uppercase">
                  BHUVANESAN N
                </h1>
                <p className="text-sm font-semibold text-[#212529]">
                  Software Developer
                </p>
                <p className="text-xs font-mono font-semibold text-[#495057]">
                  Java | Spring Boot | MySQL | REST APIs
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-[#495057] font-mono pt-1">
                  <span className="flex items-center"><Phone className="w-3 h-3 mr-1 text-[#212529]" />Phone: 8754761937</span>
                  <span>|</span>
                  <span className="flex items-center"><Mail className="w-3 h-3 mr-1 text-[#212529]" />Email: bhuvanesan.n@gmail.com</span>
                  <span>|</span>
                  <a href="https://linkedin.com/in/bhuvanesan-n-9a2b86339" target="_blank" rel="noreferrer" className="flex items-center text-[#212529] hover:underline">
                    <Linkedin className="w-3 h-3 mr-1 text-[#212529]" />LinkedIn: linkedin.com/in/bhuvanesan-n-9a2b86339
                  </a>
                  <span>|</span>
                  <a href="https://github.com/Hikki-11" target="_blank" rel="noreferrer" className="flex items-center text-[#212529] hover:underline">
                    <Github className="w-3 h-3 mr-1 text-[#212529]" />GitHub: github.com/Hikki-11
                  </a>
                </div>
              </div>

              {/* Profile Summary */}
              <div className="space-y-1">
                <h2 className="text-xs font-mono font-bold text-[#212529] uppercase tracking-wider border-b border-[#212529]/20 pb-1">
                  PROFILE SUMMARY
                </h2>
                <p className="text-xs sm:text-sm text-[#212529] leading-relaxed">
                  Computer Science undergraduate with hands-on experience in Java, Spring Boot, REST APIs, SQL, and MongoDB, gained through academic and personal software development projects. Strong foundation in Object-Oriented Programming, Data Structures & Algorithms, and backend application development, with 170+ LeetCode problems solved. Experienced in building scalable CRUD applications, integrating databases, and developing IoT-enabled solutions. Passionate about designing efficient backend systems, writing clean, maintainable code, and continuously learning modern software engineering technologies.
                </p>
              </div>

              {/* Projects */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono font-bold text-[#212529] uppercase tracking-wider border-b border-[#212529]/20 pb-1">
                  PROJECTS
                </h2>
                
                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <div className="flex justify-between items-baseline font-bold text-[#212529]">
                      <span>Digital AI Twin</span>
                      <span className="text-xs font-mono text-[#6C757D] font-normal">IoT · Python · AI/ML</span>
                    </div>
                    <ul className="list-disc list-outside pl-4 text-xs text-[#343A40] space-y-0.5 mt-1">
                      <li>Developed a Smart Energy Meter using ESP32 and LCD to monitor and display real-time current, power, and energy consumption.</li>
                      <li>Processed sensor inputs to calculate electrical parameters and present live readings on the embedded display.</li>
                      <li>Implemented real-time energy monitoring to demonstrate efficient power usage aligned with Sustainable Development Goal (SDG 7).</li>
                      <li>Designed an embedded solution capable of continuous energy usage tracking for smart monitoring applications.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline font-bold text-[#212529]">
                      <span>Smart Energy Meter</span>
                      <span className="text-xs font-mono text-[#6C757D] font-normal">ESP32 · LCD · Embedded Systems · IoT</span>
                    </div>
                    <ul className="list-disc list-outside pl-4 text-xs text-[#343A40] space-y-0.5 mt-1">
                      <li>Developed a Smart Energy Meter using ESP32 and LCD to monitor and display real-time current, power, and energy consumption.</li>
                      <li>Processed sensor inputs to calculate electrical parameters and present live readings on the embedded display.</li>
                      <li>Implemented real-time energy monitoring to demonstrate efficient power usage aligned with Sustainable Development Goal (SDG 7).</li>
                      <li>Designed an embedded solution capable of continuous energy usage tracking for smart monitoring applications.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline font-bold text-[#212529]">
                      <span>Course Registration System</span>
                      <span className="text-xs font-mono text-[#6C757D] font-normal">Java · Spring Boot · Hibernate ORM · MySQL</span>
                    </div>
                    <ul className="list-disc list-outside pl-4 text-xs text-[#343A40] space-y-0.5 mt-1">
                      <li>Developed a Course Registration System enabling students to browse, register, and manage courses while enabling admin control.</li>
                      <li>Implemented a layered architecture using Spring Boot, Hibernate ORM, and MySQL for secure, efficient data management.</li>
                      <li>Designed student registration workflows and administrator course offering controls.</li>
                      <li>Built user-friendly interfaces with input validation for seamless course enrollment.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline font-bold text-[#212529]">
                      <span>Micro Failure Whisperer <span className="font-normal text-xs text-[#6C757D]">(Ongoing)</span></span>
                      <span className="text-xs font-mono text-[#6C757D] font-normal">Python · Machine Learning · Predictive Maintenance</span>
                    </div>
                    <ul className="list-disc list-outside pl-4 text-xs text-[#343A40] space-y-0.5 mt-1">
                      <li>Developing an AI-powered predictive maintenance system to detect micro-level machine failures using sensor and vibration data.</li>
                      <li>Applying anomaly detection techniques to identify early signs of equipment degradation before breakdowns occur.</li>
                      <li>Designing a real-time monitoring pipeline to process sensor data and generate predictive maintenance alerts.</li>
                      <li>Building a scalable architecture capable of supporting industrial machine health monitoring applications.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline font-bold text-[#212529]">
                      <span>Digital Smell <span className="font-normal text-xs text-[#6C757D]">(Ongoing)</span></span>
                      <span className="text-xs font-mono text-[#6C757D] font-normal">IoT · Gas Sensors · Embedded AI</span>
                    </div>
                    <ul className="list-disc list-outside pl-4 text-xs text-[#343A40] space-y-0.5 mt-1">
                      <li>Developing an IoT-based gas leakage detection system using high-sensitivity gas sensors and embedded AI.</li>
                      <li>Implementing real-time monitoring and anomaly detection to identify minute gas leakages accurately.</li>
                      <li>Designing an intelligent alert system to improve industrial safety through early hazard detection.</li>
                      <li>Building an embedded solution for continuous environmental monitoring in safety-critical applications.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline font-bold text-[#212529]">
                      <span>ScriptGuard AI <span className="font-normal text-xs text-[#6C757D]">(Ongoing)</span></span>
                      <span className="text-xs font-mono text-[#6C757D] font-normal">Python · Computer Vision · OCR</span>
                    </div>
                    <ul className="list-disc list-outside pl-4 text-xs text-[#343A40] space-y-0.5 mt-1">
                      <li>Developing an intelligent paper-scanning mechanism for automated document digitization and verification.</li>
                      <li>Integrating OCR and image-processing techniques to extract, validate, and organize scanned content.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-1.5">
                <h2 className="text-xs font-mono font-bold text-[#212529] uppercase tracking-wider border-b border-[#212529]/20 pb-1">
                  TECHNICAL SKILLS
                </h2>
                <div className="space-y-1 text-xs text-[#212529]">
                  <p><strong className="font-bold">Programming Languages:</strong> Java, Python, JavaScript, SQL, C++</p>
                  <p><strong className="font-bold">Frontend & Web Technologies:</strong> HTML5, CSS3, JavaScript, Bootstrap, Responsive Web Design</p>
                  <p><strong className="font-bold">Backend Technologies:</strong> Core Java, Spring, Spring Boot, Spring MVC, REST APIs, JDBC, Hibernate, JPA, CRUD Operations</p>
                  <p><strong className="font-bold">Databases:</strong> MySQL, MongoDB</p>
                  <p><strong className="font-bold">Tools & Platforms:</strong> Git, GitHub, Maven, Postman, IntelliJ IDEA, Eclipse, VS Code</p>
                  <p><strong className="font-bold">Core Concepts:</strong> OOP, Data Structures & Algorithms, DOM Manipulation, Anomaly Detection</p>
                  <p><strong className="font-bold">Cloud & Data:</strong> Snowflake</p>
                  <p><strong className="font-bold">IoT & Embedded:</strong> ESP32, Sensor Integration, Embedded AI, Gas & Vibration Sensors</p>
                </div>
              </div>

              {/* Interpersonal Skills */}
              <div className="space-y-1.5">
                <h2 className="text-xs font-mono font-bold text-[#212529] uppercase tracking-wider border-b border-[#212529]/20 pb-1">
                  INTERPERSONAL SKILLS
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-xs text-[#212529]">
                  <div>• Communication</div>
                  <div>• Problem-Solving</div>
                  <div>• Time Management</div>
                  <div>• Presentation</div>
                  <div>• Team Player</div>
                  <div>• Attention to Detail</div>
                  <div>• Adaptability</div>
                </div>
              </div>

              {/* Workshops & Hackathons */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold text-[#212529] uppercase tracking-wider border-b border-[#212529]/20 pb-1">
                  WORKSHOPS & HACKATHONS
                </h2>
                <div className="space-y-2 text-xs text-[#212529]">
                  <div>
                    <p className="font-bold">HACKXTREME'26 — 24-Hour National-Level Hackathon, K. Ramakrishnan College of Engineering, Trichy</p>
                    <ul className="list-disc list-outside pl-4 text-xs text-[#343A40] space-y-0.5 mt-0.5">
                      <li>Built an AI-powered Digital Twin model simulating urban infrastructure from IoT data for real-time prediction of traffic congestion, energy demand, and pollution levels.</li>
                      <li>Recognized by Media Wave for technical performance and shortlisted for an internship opportunity.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold">Smart India Hackathon (SIH)</p>
                    <ul className="list-disc list-outside pl-4 text-xs text-[#343A40] space-y-0.5 mt-0.5">
                      <li>Designed an automated pesticide sprinkler system using logic-based control to improve agricultural efficiency.</li>
                      <li>Developed a prototype focused on reducing manual intervention while optimizing pesticide spraying.</li>
                      <li>Collaborated with team members to design an innovative solution addressing real-world agricultural challenges.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold">MSME</p>
                    <ul className="list-disc list-outside pl-4 text-xs text-[#343A40] space-y-0.5 mt-0.5">
                      <li>Presented Micro Failure Whisperer and Digital Smell as AI-driven industrial safety and predictive maintenance solutions.</li>
                      <li>Demonstrated the application of machine learning and IoT technologies for early fault detection and industrial monitoring.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold">Snowflake Workshop — 1 Week</p>
                    <ul className="list-disc list-outside pl-4 text-xs text-[#343A40] space-y-0.5 mt-0.5">
                      <li>Completed hands-on training covering Snowflake architecture, cloud data warehousing, and SQL-based data management.</li>
                      <li>Gained practical exposure to data loading, querying, and cloud-based analytics workflows.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold">IoT Workshop — 1 Month</p>
                    <ul className="list-disc list-outside pl-4 text-xs text-[#343A40] space-y-0.5 mt-0.5">
                      <li>Completed practical training in ESP32 programming, sensor integration, and embedded system development.</li>
                      <li>Built real-time IoT applications involving sensor data acquisition and hardware-software communication.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-1.5">
                <h2 className="text-xs font-mono font-bold text-[#212529] uppercase tracking-wider border-b border-[#212529]/20 pb-1">
                  CERTIFICATIONS
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-xs text-[#212529]">
                  <div>• AI/ML (Dreams AI)</div>
                  <div>• SQL (Oracle)</div>
                  <div>• Java (Oracle)</div>
                  <div>• MongoDB (ICT Academy)</div>
                  <div>• Figma (Simplelearn)</div>
                  <div>• Python / C & C++ (Kaggle/mygreatlearning)</div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold text-[#212529] uppercase tracking-wider border-b border-[#212529]/20 pb-1">
                  EDUCATION
                </h2>
                <div className="space-y-1.5 text-xs text-[#212529]">
                  <div className="flex justify-between items-baseline font-bold">
                    <span>B.E. Computer Science and Engineering (CSE) — <span className="font-normal text-[#495057]">PSNA College of Engineering and Technology, Dindigul</span></span>
                    <span className="font-mono text-xs font-semibold shrink-0 ml-2">2024 – 2028 | CGPA: 8.6</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span><strong className="font-bold">XII</strong> — St. John's Matriculation Higher Secondary School, Madurai</span>
                    <span className="font-mono text-xs text-[#495057] shrink-0 ml-2">May 2024 | 93%</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span><strong className="font-bold">X</strong> — The Nallamani Matriculation Higher Secondary School, Madurai</span>
                    <span className="font-mono text-xs text-[#495057] shrink-0 ml-2">July 2022 | 92%</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-1.5">
                <h2 className="text-xs font-mono font-bold text-[#212529] uppercase tracking-wider border-b border-[#212529]/20 pb-1">
                  ACHIEVEMENTS
                </h2>
                <ul className="list-disc list-outside pl-4 text-xs text-[#343A40] space-y-1">
                  <li>Recognized by Media Wave at HACKXTREME'26 (24-Hour National-Level Hackathon) for technical performance and shortlisted for an internship opportunity.</li>
                  <li>Solved 170+ problems on LeetCode across Arrays, Strings, Mathematics, and core DSA topics.</li>
                  <li>Won mathematics competitions, demonstrating strong analytical thinking and problem-solving abilities.</li>
                </ul>
              </div>

            </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="pt-3 border-t border-[rgba(33,37,41,0.08)] flex items-center justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-[10px] bg-[#DEE2E6] text-[#495057] hover:text-[#212529] hover:bg-[#E9ECEF] text-xs font-mono cursor-pointer border border-[rgba(33,37,41,0.08)]"
          >
            Close
          </button>
        </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
