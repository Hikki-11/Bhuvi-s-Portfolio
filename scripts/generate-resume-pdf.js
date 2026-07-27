import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'pt',
  format: 'a4'
});

// A4 dimensions: 595.28 x 841.89 pt
const pageWidth = 595.28;
const pageHeight = 841.89;
const margin = 36; // 0.5 inch margins
const contentWidth = pageWidth - margin * 2; // 523.28 pt

// Colors
const primaryColor = [0, 0, 0];
const subColor = [60, 64, 67];
const lineDark = [33, 37, 41];

let y = margin;

function checkPageBreak(neededSpace) {
  if (y + neededSpace > pageHeight - margin) {
    doc.addPage();
    y = margin;
    return true;
  }
  return false;
}

function drawSectionHeading(headingText) {
  checkPageBreak(30);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(headingText, margin, y);
  y += 4;
  doc.setDrawColor(33, 37, 41);
  doc.setLineWidth(0.8);
  doc.line(margin, y, margin + contentWidth, y);
  y += 12;
}

function drawBulletPoint(bulletText, indent = 12) {
  const bulletSymbol = '• ';
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(40, 40, 40);

  const bulletWidth = doc.getTextWidth(bulletSymbol);
  const textX = margin + indent + bulletWidth;
  const maxTxtWidth = contentWidth - indent - bulletWidth;

  const lines = doc.splitTextToSize(bulletText, maxTxtWidth);
  const blockHeight = lines.length * 11 + 2;

  checkPageBreak(blockHeight);

  doc.text(bulletSymbol, margin + indent, y);
  doc.text(lines, textX, y);
  y += lines.length * 11 + 2;
}

// --- PAGE 1 HEADER ---
doc.setFont('helvetica', 'bold');
doc.setFontSize(20);
doc.setTextColor(0, 0, 0);
doc.text('BHUVANESAN N', pageWidth / 2, y, { align: 'center' });
y += 16;

doc.setFont('helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(50, 50, 50);
doc.text('Software Developer', pageWidth / 2, y, { align: 'center' });
y += 13;

doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('Java  |  Spring Boot  |  MySQL  |  REST APIs', pageWidth / 2, y, { align: 'center' });
y += 14;

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(60, 60, 60);
const contactLine = 'Phone: 8754761937  |  Email: bhuvanesan.n@gmail.com  |  LinkedIn: linkedin.com/in/bhuvanesan-n-9a2b86339';
doc.text(contactLine, pageWidth / 2, y, { align: 'center' });
y += 12;

doc.text('GitHub: github.com/Hikki-11', pageWidth / 2, y, { align: 'center' });
y += 16;

// --- PROFILE SUMMARY ---
drawSectionHeading('PROFILE SUMMARY');

doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(30, 30, 30);
const summaryText = "Computer Science undergraduate with hands-on experience in Java, Spring Boot, REST APIs, SQL, and MongoDB, gained through academic and personal software development projects. Strong foundation in Object-Oriented Programming, Data Structures & Algorithms, and backend application development, with 170+ LeetCode problems solved. Experienced in building scalable CRUD applications, integrating databases, and developing IoT-enabled solutions. Passionate about designing efficient backend systems, writing clean, maintainable code, and continuously learning modern software engineering technologies.";

const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
doc.text(summaryLines, margin, y);
y += summaryLines.length * 11 + 14;

// --- PROJECTS ---
drawSectionHeading('PROJECTS');

const projects = [
  {
    title: 'Digital AI Twin',
    tags: 'IoT · Python · AI/ML',
    bullets: [
      'Developed a Smart Energy Meter using ESP32 and LCD to monitor and display real-time current, power, and energy consumption.',
      'Processed sensor inputs to calculate electrical parameters and present live readings on the embedded display.',
      'Implemented real-time energy monitoring to demonstrate efficient power usage aligned with Sustainable Development Goal (SDG 7).',
      'Designed an embedded solution capable of continuous energy usage tracking for smart monitoring applications.'
    ]
  },
  {
    title: 'Smart Energy Meter',
    tags: 'ESP32 · LCD · Embedded Systems · IoT',
    bullets: [
      'Developed a Smart Energy Meter using ESP32 and LCD to monitor and display real-time current, power, and energy consumption.',
      'Processed sensor inputs to calculate electrical parameters and present live readings on the embedded display.',
      'Implemented real-time energy monitoring to demonstrate efficient power usage aligned with Sustainable Development Goal (SDG 7).',
      'Designed an embedded solution capable of continuous energy usage tracking for smart monitoring applications.'
    ]
  },
  {
    title: 'Employee Management System',
    tags: 'HTML · CSS · SQL',
    bullets: [
      'Developed an Employee Management System with a responsive web interface for managing employee records.',
      'Implemented CRUD operations to add, update, delete, and retrieve employee information using SQL.',
      'Designed structured input forms for efficient employee data management and validation.',
      'Built a user-friendly interface to simplify employee record management and improve usability.'
    ]
  },
  {
    title: 'Micro Failure Whisperer (Ongoing)',
    tags: 'Python · Machine Learning · Predictive Maintenance',
    bullets: [
      'Developing an AI-powered predictive maintenance system to detect micro-level machine failures using sensor and vibration data.',
      'Applying anomaly detection techniques to identify early signs of equipment degradation before breakdowns occur.',
      'Designing a real-time monitoring pipeline to process sensor data and generate predictive maintenance alerts.',
      'Building a scalable architecture capable of supporting industrial machine health monitoring applications.'
    ]
  },
  {
    title: 'Digital Smell (Ongoing)',
    tags: 'IoT · Gas Sensors · Embedded AI',
    bullets: [
      'Developing an IoT-based gas leakage detection system using high-sensitivity gas sensors and embedded AI.',
      'Implementing real-time monitoring and anomaly detection to identify minute gas leakages accurately.',
      'Designing an intelligent alert system to improve industrial safety through early hazard detection.',
      'Building an embedded solution for continuous environmental monitoring in safety-critical applications.'
    ]
  },
  {
    title: 'ScriptGuard AI (Ongoing)',
    tags: 'Python · Computer Vision · OCR',
    bullets: [
      'Developing an intelligent paper-scanning mechanism for automated document digitization and verification.',
      'Integrating OCR and image-processing techniques to extract, validate, and organize scanned content.'
    ]
  }
];

projects.forEach((proj) => {
  checkPageBreak(40);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(0, 0, 0);
  doc.text(proj.title, margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(80, 80, 80);
  doc.text(proj.tags, margin + contentWidth, y, { align: 'right' });
  y += 12;

  proj.bullets.forEach(b => drawBulletPoint(b, 6));
  y += 4;
});

y += 6;

// --- TECHNICAL SKILLS ---
drawSectionHeading('TECHNICAL SKILLS');

const skills = [
  { label: 'Programming Languages:', val: 'Java, Python, JavaScript, SQL, C++' },
  { label: 'Frontend & Web Technologies:', val: 'HTML5, CSS3, JavaScript, Bootstrap, Responsive Web Design' },
  { label: 'Backend Technologies:', val: 'Core Java, Spring, Spring Boot, Spring MVC, REST APIs, JDBC, Hibernate, JPA, CRUD Operations' },
  { label: 'Databases:', val: 'MySQL, MongoDB' },
  { label: 'Tools & Platforms:', val: 'Git, GitHub, Maven, Postman, IntelliJ IDEA, Eclipse, VS Code' },
  { label: 'Core Concepts:', val: 'OOP, Data Structures & Algorithms, DOM Manipulation, Anomaly Detection' },
  { label: 'Cloud & Data:', val: 'Snowflake' },
  { label: 'IoT & Embedded:', val: 'ESP32, Sensor Integration, Embedded AI, Gas & Vibration Sensors' }
];

skills.forEach(skill => {
  checkPageBreak(14);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(0, 0, 0);
  const lblWidth = doc.getTextWidth(skill.label + ' ');
  doc.text(skill.label, margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(40, 40, 40);
  const valLines = doc.splitTextToSize(skill.val, contentWidth - lblWidth);
  doc.text(valLines[0], margin + lblWidth, y);
  
  if (valLines.length > 1) {
    y += 11;
    doc.text(valLines.slice(1), margin + 10, y);
  }
  y += 12;
});

y += 6;

// --- INTERPERSONAL SKILLS ---
drawSectionHeading('INTERPERSONAL SKILLS');

const interSkills = [
  ['• Communication', '• Problem-Solving', '• Time Management'],
  ['• Presentation', '• Team Player', '• Attention to Detail'],
  ['• Adaptability', '', '']
];

const colWidth = contentWidth / 3;
interSkills.forEach(row => {
  checkPageBreak(12);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 30, 30);
  
  row.forEach((col, idx) => {
    if (col) {
      doc.text(col, margin + idx * colWidth, y);
    }
  });
  y += 12;
});

y += 6;

// --- WORKSHOPS & HACKATHONS ---
drawSectionHeading('WORKSHOPS & HACKATHONS');

const workshops = [
  {
    title: "HACKXTREME'26 — 24-Hour National-Level Hackathon, K. Ramakrishnan College of Engineering, Trichy",
    bullets: [
      'Built an AI-powered Digital Twin model simulating urban infrastructure from IoT data for real-time prediction of traffic congestion, energy demand, and pollution levels.',
      'Recognized by Media Wave for technical performance and shortlisted for an internship opportunity.'
    ]
  },
  {
    title: "Smart India Hackathon (SIH)",
    bullets: [
      'Designed an automated pesticide sprinkler system using logic-based control to improve agricultural efficiency.',
      'Developed a prototype focused on reducing manual intervention while optimizing pesticide spraying.',
      'Collaborated with team members to design an innovative solution addressing real-world agricultural challenges.'
    ]
  },
  {
    title: "MSME",
    bullets: [
      'Presented Micro Failure Whisperer and Digital Smell as AI-driven industrial safety and predictive maintenance solutions.',
      'Demonstrated the application of machine learning and IoT technologies for early fault detection and industrial monitoring.'
    ]
  },
  {
    title: "Snowflake Workshop — 1 Week",
    bullets: [
      'Completed hands-on training covering Snowflake architecture, cloud data warehousing, and SQL-based data management.',
      'Gained practical exposure to data loading, querying, and cloud-based analytics workflows.'
    ]
  },
  {
    title: "IoT Workshop — 1 Month",
    bullets: [
      'Completed practical training in ESP32 programming, sensor integration, and embedded system development.',
      'Built real-time IoT applications involving sensor data acquisition and hardware-software communication.'
    ]
  }
];

workshops.forEach(w => {
  checkPageBreak(25);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(0, 0, 0);
  const wTitleLines = doc.splitTextToSize(w.title, contentWidth);
  doc.text(wTitleLines, margin, y);
  y += wTitleLines.length * 11 + 1;

  w.bullets.forEach(b => drawBulletPoint(b, 6));
  y += 3;
});

y += 6;

// --- CERTIFICATIONS ---
drawSectionHeading('CERTIFICATIONS');

const certs = [
  ['• AI/ML (Dreams AI)', '• SQL (Oracle)', '• Java (Oracle)'],
  ['• MongoDB (ICT Academy)', '• Figma (Simplelearn)', '• Python / C & C++ (Kaggle/mygreatlearning)']
];

certs.forEach(row => {
  checkPageBreak(12);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 30, 30);
  row.forEach((col, idx) => {
    if (col) {
      doc.text(col, margin + idx * colWidth, y);
    }
  });
  y += 12;
});

y += 6;

// --- EDUCATION ---
drawSectionHeading('EDUCATION');

const eduList = [
  {
    deg: 'B.E. Computer Science and Engineering (CSE)',
    col: 'PSNA College of Engineering and Technology, Dindigul',
    year: '2024 – 2028 | CGPA: 8.6'
  },
  {
    deg: 'XII',
    col: "St. John's Matriculation Higher Secondary School, Madurai",
    year: 'May 2024 | 93%'
  },
  {
    deg: 'X',
    col: 'The Nallamani Matriculation Higher Secondary School, Madurai',
    year: 'July 2022 | 92%'
  }
];

eduList.forEach(e => {
  checkPageBreak(14);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(0, 0, 0);
  
  const leftStr = `${e.deg} — ${e.col}`;
  const leftLines = doc.splitTextToSize(leftStr, contentWidth - 110);
  doc.text(leftLines[0], margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(60, 60, 60);
  doc.text(e.year, margin + contentWidth, y, { align: 'right' });
  
  if (leftLines.length > 1) {
    y += 11;
    doc.text(leftLines.slice(1), margin, y);
  }
  y += 13;
});

y += 6;

// --- ACHIEVEMENTS ---
drawSectionHeading('ACHIEVEMENTS');

const achievements = [
  "Recognized by Media Wave at HACKXTREME'26 (24-Hour National-Level Hackathon) for technical performance and shortlisted for an internship opportunity.",
  "Solved 170+ problems on LeetCode across Arrays, Strings, Mathematics, and core DSA topics.",
  "Won mathematics competitions, demonstrating strong analytical thinking and problem-solving abilities."
];

achievements.forEach(a => drawBulletPoint(a, 6));

// Output PDF to public/BHUVANESAN_N_Resume.pdf
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, 'BHUVANESAN_N_Resume.pdf');
const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync(outputPath, pdfBuffer);

console.log('Successfully generated PDF at:', outputPath);
