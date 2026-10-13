import { WorkExperience, ProjectCaseStudy, SkillCategory, TimelineItem, CertificationItem, DSAStats } from '../types';
import mineRescueRoverImg from '../assets/images/mine_rescue_rover_1790257437713.jpg';
import soundRushImg from '../assets/images/project1_sound_rush.jpg';
import mecaRushImg from '../assets/images/project2_mecarush.jpg';
import voltDropImg from '../assets/images/project3_voltdrop.jpg';
import wipeMotionImg from '../assets/images/project4_wipemotion.jpg';
import buildClubShowcaseImg from '../assets/images/build_club_projects_collage_1791592355801.jpg';

export const WORK_EXPERIENCE_DATA: WorkExperience[] = [
  {
    id: 'qixarc',
    company: 'QixArc',
    role: 'Backend Developer & Software Testing Team Member',
    period: 'Present',
    location: 'Software Engineering',
    badge: 'Industry Experience',
    description: 'Contributing as a Backend Developer and Software Testing team member at QixArc, collaborating with the development team to build reliable backend solutions, test application functionality, identify defects, and improve overall software quality. Gaining hands-on experience in real-world software development, debugging, API testing, and team-based product development.',
    highlights: [
      'Backend Engineering: Collaborating with cross-functional development teams to build reliable, high-performing backend services and business logic.',
      'Software Quality & Testing: Testing application functionality, designing structured test workflows, identifying defects, and conducting rigorous bug regression.',
      'API Testing & Debugging: Validating REST API endpoints, response payloads, error codes, and edge-case payload scenarios for robust system behavior.',
      'Real-World Agile Product Lifecycle: Actively participating in code reviews, bug tracking, debugging sessions, and collaborative product engineering practices.'
    ],
    technologies: ['Backend Development', 'API Testing', 'Software Testing', 'Debugging', 'Quality Assurance', 'REST APIs', 'Agile Collaboration']
  }
];

export const PROFILE_DATA = {
  name: 'BHUVANESAN N',
  role: 'Backend Architect & Embedded AI Engineer',
  tagline: 'Building High-Throughput Java Backends, Real-time IoT Networks & Industrial Predictive AI',
  bio: 'Computer Science engineer with deep expertise in Java, Spring Boot REST APIs, SQL, and Embedded AI. Experienced in designing scalable backend microservices, processing real-time sensor telemetry, and training edge anomaly detection models for industrial safety and automated systems.',
  degree: 'B.E. Computer Science and Engineering (CSE)',
  batch: '2024 – 2028',
  location: 'Tamil Nadu, India',
  email: 'bhuvanesan.n@gmail.com',
  phone: '+91 8754761937',
  github: 'https://github.com/Hikki-11',
  linkedin: 'https://linkedin.com/in/bhuvanesan-n-9a2b86339',
  leetcode: 'https://leetcode.com/u/BHUVANESASN_N/',
  leetcodeCount: 170,
};

export const BUILD_CLUB_PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: 'sound-rush',
    title: 'Sound Rush – Run the Circle!',
    cardTitle: 'Sound Rush – Run the Circle!',
    tagline: 'ESP32-C6 Sound-Level Detection & RGB Visualization',
    category: 'Build Club Projects',
    categoryBadge: 'Embedded Systems & Electronics',
    status: 'Completed',
    featured: true,
    heroImage: soundRushImg,
    tags: ['ESP32-C6', 'Microphone Module', 'RGB LEDs', 'Embedded Systems'],
    problemStatement: 'Developed an interactive sound-level detection system using an ESP32-C6 and microphone module, connected to a 16-LED RGB visualizer. Implemented circular LED animations with color-coded visual feedback representing sound intensity levels from low to very high.',
    solutionApproach: 'Sampled acoustic signal peaks using the microphone sensor module connected to the ESP32-C6 analog-to-digital converter. Engineered an animated circular state machine that dynamically drives 16 individually addressable RGB LEDs with responsive color gradients.',
    architectureDiagram: {
      title: 'Sound Rush ESP32-C6 Acoustic Telemetry & Circular LED Topology',
      nodes: [
        { id: '1', label: 'Microphone Module (Analog Acoustic Sense)', type: 'sensor' },
        { id: '2', label: 'ESP32-C6 ADC & Threshold Discriminator', type: 'hardware' },
        { id: '3', label: 'Dynamic Level Mapping State Engine', type: 'backend' },
        { id: '4', label: '16-LED RGB Circular Visualizer', type: 'ui' },
      ],
      connections: [
        { from: '1', to: '2', label: 'Analog Audio Voltage' },
        { from: '2', to: '3', label: 'Discrete Sound Levels' },
        { from: '3', to: '4', label: 'High-Speed RGB Pixel Bus' },
      ],
    },
    features: [
      'Sound-level detection using a microphone module.',
      '16-LED RGB visualizer.',
      'Circular LED animation.',
      'Color-coded indication of sound intensity.',
    ],
    technicalChallenges: [
      'Calibrating ambient baseline room noise vs. transient acoustic peaks',
      'Maintaining zero-latency LED frame updates without blocking analog sampling',
    ],
    outcomes: [
      'Successfully verified real-time circular sound intensity visualization',
      'Completed functional prototype demonstration for Build Club Showcase',
    ],
  },
  {
    id: 'mecarush',
    title: 'MecaRush – Move Beyond Limits!',
    cardTitle: 'MecaRush – Move Beyond Limits!',
    tagline: 'Four-Wheel Mecanum Robot with Wireless Web Control',
    category: 'Build Club Projects',
    categoryBadge: 'Robotics & Embedded Systems',
    status: 'Completed',
    featured: true,
    heroImage: mecaRushImg,
    tags: ['ESP32-C6', 'Mecanum Wheels', 'L298N', 'DC Motors', 'Web Control'],
    problemStatement: 'Built a four-wheel Mecanum robot powered by an ESP32-C6, two L298N motor drivers, and four DC motors. Implemented wireless control through a custom joystick-style web interface, enabling forward, backward, lateral, diagonal, and rotational movement.',
    solutionApproach: 'Designed a four-wheel omnidirectional chassis with 45-degree angled roller Mecanum wheels. Created an asynchronous web server on the ESP32-C6 that maps 2D vector joystick inputs into independent PWM duty cycles across dual dual-H-bridge L298N motor drivers.',
    architectureDiagram: {
      title: 'MecaRush Kinematic Vector Control & Motor Driver Architecture',
      nodes: [
        { id: '1', label: 'Wireless Joystick Web Interface', type: 'ui' },
        { id: '2', label: 'ESP32-C6 Wi-Fi Access Point & Server', type: 'backend' },
        { id: '3', label: 'Dual L298N Dual H-Bridge Drivers', type: 'hardware' },
        { id: '4', label: '4x DC Motors with Mecanum Wheels', type: 'hardware' },
      ],
      connections: [
        { from: '1', to: '2', label: 'Touch Joystick Packets' },
        { from: '2', to: '3', label: 'PWM Kinematic Direction Signals' },
        { from: '3', to: '4', label: 'High-Current Motor Drive' },
      ],
    },
    features: [
      'Four-wheel Mecanum robot assembly.',
      'Dual L298N motor-driver integration.',
      'Wireless joystick-style web interface.',
      'Forward, backward, lateral, diagonal, and rotational movement.',
    ],
    technicalChallenges: [
      'Configuring proper motor phase polarity for omnidirectional translation vectors',
      'Handling sudden peak current spikes across dual motor drivers under rapid direction changes',
    ],
    outcomes: [
      'Achieved responsive omnidirectional movement (lateral strafe, diagonal crawl, pivot turns)',
      'Delivered seamless wireless control via mobile browser without external apps',
    ],
  },
  {
    id: 'voltdrop',
    title: 'VoltDrop – DC-DC Buck Converter',
    cardTitle: 'VoltDrop – DC-DC Buck Converter',
    tagline: '24V DC to Approximately 12V DC Conversion',
    category: 'Build Club Projects',
    categoryBadge: 'Power Electronics',
    status: 'Completed',
    featured: true,
    heroImage: voltDropImg,
    tags: ['LM2575-ADJ', 'DC-DC Converter', 'Power Electronics', 'Circuit Design'],
    problemStatement: 'Designed and tested a switching buck converter using the LM2575-ADJ regulator to step down a 24V DC input to approximately 12V DC. Verified the output voltage using a digital multimeter and successfully powered a 12V DC motor.',
    solutionApproach: 'Engineered a high-efficiency step-down regulator circuit based on the LM2575-ADJ switching IC. Calculated feedback resistors, selected a fast-recovery Schottky diode and toroidal power inductor, and filtered output ripple with low-ESR capacitors.',
    architectureDiagram: {
      title: 'VoltDrop LM2575-ADJ Step-Down Buck Converter Power Stage',
      nodes: [
        { id: '1', label: '24V DC Bench Power Supply Input', type: 'hardware' },
        { id: '2', label: 'LM2575-ADJ Switching Regulator & Inductor', type: 'hardware' },
        { id: '3', label: 'Schottky Diode & LC Low-Pass Filter', type: 'hardware' },
        { id: '4', label: 'Digital Multimeter & 12V DC Motor Load', type: 'ui' },
      ],
      connections: [
        { from: '1', to: '2', label: '24V DC Raw Rail' },
        { from: '2', to: '3', label: 'High-Frequency Switched Energy' },
        { from: '3', to: '4', label: 'Stabilized ~12V DC Motor Power' },
      ],
    },
    features: [
      'Switching buck-converter design.',
      '24V DC input and approximately 12V DC output.',
      'Output verification using a digital multimeter.',
      'Demonstration using a 12V DC motor.',
    ],
    technicalChallenges: [
      'Selecting optimal inductor inductance and current rating to prevent magnetic core saturation',
      'Minimizing voltage drop and switching ripple during initial motor inrush current',
    ],
    outcomes: [
      'Accurately achieved ~12V DC regulated output verified with digital multimeter',
      'Successfully sustained smooth motor spin under load without overheating',
    ],
  },
  {
    id: 'wipemotion',
    title: 'WipeMotion – Four-Bar Linkage Mechanism',
    cardTitle: 'WipeMotion – Four-Bar Linkage Mechanism',
    tagline: 'Windshield Wiper Mechanism Demonstration',
    category: 'Build Club Projects',
    categoryBadge: 'Mechanical Engineering',
    status: 'Completed',
    featured: true,
    heroImage: wipeMotionImg,
    tags: ['Mechanical Design', 'Four-Bar Linkage', 'Motion Transmission', 'Prototyping'],
    problemStatement: 'Assembled a four-bar linkage mechanism demonstrating the working principle of an automotive windshield wiper. Explored mechanical linkages, pivot joints, motion transmission, and the conversion of rotational input into oscillating output motion.',
    solutionApproach: 'Fabricated and aligned a planar four-bar crank-rocker mechanism. Transmitted continuous rotational power from an input crank arm through a connecting coupler bar to drive an oscillating rocker arm representing a windshield wiper blade assembly.',
    architectureDiagram: {
      title: 'WipeMotion Four-Bar Linkage Kinematic Transmission Model',
      nodes: [
        { id: '1', label: 'Rotary Crank Driver Link (Input)', type: 'hardware' },
        { id: '2', label: 'Connecting Coupler Rod', type: 'hardware' },
        { id: '3', label: 'Oscillating Rocker Pivot Link', type: 'hardware' },
        { id: '4', label: 'Wiper Blade & Sweeping Arc Output', type: 'ui' },
      ],
      connections: [
        { from: '1', to: '2', label: 'Continuous 360° Rotary Input' },
        { from: '2', to: '3', label: 'Dynamic Planar Force Transfer' },
        { from: '3', to: '4', label: 'Reciprocating Wiper Sweep Motion' },
      ],
    },
    features: [
      'Four-bar linkage assembly.',
      'Study of pivot joints and mechanical connections.',
      'Demonstration of rotational-to-oscillating motion.',
      'Exploration of the working principle of a windshield wiper.',
    ],
    technicalChallenges: [
      'Eliminating mechanical binding and dead centers through precise link length ratio calculation',
      'Maintaining low friction and minimal play in custom pivot joint bushings',
    ],
    outcomes: [
      'Demonstrated reliable continuous conversion from rotation to oscillating wiping motion',
      'Clear hands-on demonstration of classical mechanical engineering kinematics',
    ],
  },
];

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: 'digital-ai-twin',
    title: 'Digital AI Twin & Smart Infrastructure',
    tagline: 'IoT-Driven Urban Infrastructure Simulator for Traffic, Energy & Pollution Forecasting',
    category: 'IoT & Embedded AI',
    status: 'Award Winner',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    githubUrl: 'https://github.com/Hikki-11/digital-ai-twin',
    tags: ['IoT', 'Python', 'ESP32', 'AI/ML', 'Digital Twin', 'Energy Metering', 'SDG 7'],
    problemStatement: 'Modern urban municipalities lack real-time digital replicas that synthesize energy consumption, vehicular congestion, and ambient pollution to proactively allocate city power grids and emergency services.',
    solutionApproach: 'Constructed an AI-powered Digital Twin model using ESP32 sensor hardware and Python analytics to mirror real-time city infrastructure parameters, simulating traffic flow density, energy load surges, and air quality indexes.',
    architectureDiagram: {
      title: 'Digital Twin Hardware-to-Cloud Mirror Architecture',
      nodes: [
        { id: '1', label: 'ESP32 Sensor Matrix (Current, Gas, Traffic)', type: 'hardware' },
        { id: '2', label: 'Local LCD Real-Time Display', type: 'ui' },
        { id: '3', label: 'Python Digital Twin State Machine', type: 'ai' },
        { id: '4', label: 'Predictive Energy Demand Model', type: 'ai' },
        { id: '5', label: 'Urban Analytics Command Center', type: 'ui' },
      ],
      connections: [
        { from: '1', to: '2', label: 'I2C / SPI Local Bus' },
        { from: '1', to: '3', label: 'Wi-Fi / Telemetry Stream' },
        { from: '3', to: '4', label: 'Simulated Load Inputs' },
        { from: '4', to: '5', label: 'Grid Optimization Signals' },
      ],
    },
    features: [
      'Integrated Smart Energy Meter measuring current, voltage, active power, and kWh',
      'Real-time simulation of traffic congestion patterns and urban pollution spikes',
      'LCD physical output display paired with web-based 3D digital twin mirror',
      'Energy usage trajectory projection mapped to UN Sustainable Development Goal 7',
    ],
    technicalChallenges: [
      'Calibrating current transformers and ACS712 sensors for precise RMS voltage computation',
      'Synchronizing multi-node hardware state with cloud state variables without telemetry lag',
    ],
    outcomes: [
      'Shortlisted for Internship opportunity & Recognized by Media Wave at HACKXTREME\'26 (24-Hour National Hackathon)',
      'Demonstrated 18% potential energy savings through dynamic city grid load balancing',
    ],
    sdgImpact: 'SDG 7: Affordable and Clean Energy & SDG 11: Sustainable Cities and Communities',
  },
  {
    id: 'smart-energy-meter',
    title: 'ESP32 Smart Energy Meter & LCD Telemetry',
    tagline: 'Embedded IoT Metering System with SDG 7 Clean Energy Metrics',
    category: 'IoT & Embedded AI',
    status: 'Completed',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    githubUrl: 'https://github.com/Hikki-11/smart-energy-meter',
    tags: ['ESP32', 'Embedded Systems', 'IoT', 'Sensors', 'LCD Display', 'C++', 'Energy Efficiency'],
    problemStatement: 'Legacy electric meters fail to provide consumers real-time power draw insights, making it difficult to detect energy leaks or manage household utility budgets.',
    solutionApproach: 'Developed an embedded hardware solution with ESP32 microcontroller, ACS712 current sensors, ZMPT101B voltage modules, and I2C LCD screens to calculate true power, power factor, and total energy consumed.',
    architectureDiagram: {
      title: 'Smart Energy Meter Hardware Architecture',
      nodes: [
        { id: '1', label: 'ZMPT101B Voltage & ACS712 Current Sensors', type: 'sensor' },
        { id: '2', label: 'ESP32 Microcontroller Core', type: 'hardware' },
        { id: '3', label: '16x2 I2C LCD Display', type: 'ui' },
        { id: '4', label: 'Web Socket Telemetry Server', type: 'backend' },
      ],
      connections: [
        { from: '1', to: '2', label: 'Analog Voltage / Current Signals' },
        { from: '2', to: '3', label: 'I2C Bus Protocol' },
        { from: '2', to: '4', label: 'Wi-Fi HTTP / Socket Stream' },
      ],
    },
    features: [
      'Instantaneous RMS Voltage, Current, Power (W), and Energy (kWh) calculation',
      'Clear I2C LCD display with dynamic paging for telemetry parameters',
      'Over-current trip alert relay with configurable wattage limit',
      'Aligned with Sustainable Development Goal 7 (Affordable & Clean Energy)',
    ],
    technicalChallenges: [
      'Sampling 50Hz AC sine wave at precise intervals to prevent phase lag error',
      'Managing hardware interrupts for relay safety cutoffs',
    ],
    outcomes: [
      'Accurate continuous monitoring with <1.5% measurement error against commercial meters',
      'Foundation hardware layer used in the Digital AI Twin hackathon project',
    ],
    sdgImpact: 'SDG 7: Affordable and Clean Energy',
  },
  {
    id: 'course-registration-system',
    title: 'Course Registration System',
    tagline: 'Full-Stack Course Registration Platform using Spring Boot & Hibernate ORM',
    category: 'Backend & Cloud',
    status: 'Completed',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    githubUrl: 'https://github.com/Hikki-11/course-registration-system',
    tags: ['Java', 'Spring Boot', 'Hibernate ORM', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    problemStatement: 'A modern web-based Course Registration System that enables students to browse, register, and manage courses while allowing administrators to efficiently manage course offerings, student records, and registrations. The application follows a layered architecture using Spring Boot, Hibernate ORM, and MySQL for secure, scalable, and efficient data management.',
    solutionApproach: 'Designed and implemented a full-stack web application featuring layered architecture (Controller, Service, Repository) powered by Spring Boot and Hibernate ORM. Provided role-based functionality for students to view course catalogs, check seat availability, register for modules, and drop courses in real time, alongside admin management tools for curriculum and student record control.',
    architectureDiagram: {
      title: 'Course Registration System Layered Architecture',
      nodes: [
        { id: '1', label: 'HTML/CSS/JS Student & Admin Portal', type: 'ui' },
        { id: '2', label: 'Spring Boot MVC REST Controllers', type: 'backend' },
        { id: '3', label: 'Course Registration Service Layer', type: 'backend' },
        { id: '4', label: 'Hibernate ORM / Spring Data JPA', type: 'database' },
        { id: '5', label: 'MySQL Relational Database', type: 'database' },
      ],
      connections: [
        { from: '1', to: '2', label: 'HTTP Form / REST Requests' },
        { from: '2', to: '3', label: 'Service Invocations' },
        { from: '3', to: '4', label: 'Entity Mapping & Persistence' },
        { from: '4', to: '5', label: 'SQL Transaction Execution' },
      ],
    },
    features: [
      'Interactive Student Portal for browsing course catalogs, seat availability, and schedule conflict validation',
      'Administrator Dashboard for managing course offerings, prerequisites, student enrollment limits, and instructor assignments',
      'Hibernate ORM relational mapping with JPA entity lifecycle management and custom repository queries',
      'Transaction-safe registration workflow preventing over-enrollment and duplicate course registration',
    ],
    technicalChallenges: [
      'Handling concurrent course registration requests to prevent race conditions during peak registration windows',
      'Configuring transactional boundaries (@Transactional) and cascade types to maintain database consistency across student-course join tables',
    ],
    outcomes: [
      'Delivered a robust, end-to-end full-stack course registration system with seamless data persistence',
      'Achieved zero double-booking or seat over-allocation under simulated concurrent user traffic',
    ],
  },
  {
    id: 'ai-mine-safety-rescue',
    title: 'AI-Powered Underground Mine Safety, Monitoring & Rescue System',
    cardTitle: 'AI-Powered Underground Mine Safety,\nMonitoring & Rescue System',
    tagline: 'SIH 2026 – SIH26039',
    category: 'AI, IoT & Robotics',
    categoryBadge: 'AI • IoT • Robotics',
    status: 'SIH 2026',
    featured: true,
    heroImage: mineRescueRoverImg,
    githubUrl: 'https://github.com/Hikki-11/ai-mine-safety-rescue',
    tags: [
      'ESP32',
      'L298N',
      'MQ-135',
      'DHT22',
      'HC-SR04',
      'LoRa SX1278',
      'TEG',
      'Li-ion Battery',
      'Supercapacitor',
      'Laser & Radar Sensing',
      'React.js',
      'AI/ML'
    ],
    problemStatement: 'An AI-powered underground mine safety, monitoring, and rescue system developed for Smart India Hackathon 2026 (SIH26039), designed to explore hazardous underground coal mine environments, detect toxic gases and environmental hazards, identify obstacles and potential structural anomalies, and relay live sensor data to a surface control station.',
    solutionApproach: 'Designed and engineered an AI-powered 4-wheel mobile rescue rover chassis integrated with long-range LoRa SX1278 telemetry and TEG energy-harvesting sensor nodes. The system connects multi-gas, climatic, and obstacle sensors to a predictive AI correlation engine and surface control dashboard for proactive disaster mitigation.',
    architectureDiagram: {
      title: 'Underground Mine Safety Rover & IoT Telemetry Architecture',
      nodes: [
        { id: '1', label: '4WD Rover Sensor Suite (MQ-135, DHT22, HC-SR04, Laser/Radar)', type: 'sensor' },
        { id: '2', label: 'ESP32 Rover Edge Controller & L298N Motor Driver', type: 'hardware' },
        { id: '3', label: 'TEG & Supercapacitor Energy-Harvesting Node', type: 'hardware' },
        { id: '4', label: 'LoRa SX1278 Subterranean Gateway', type: 'backend' },
        { id: '5', label: 'Predictive AI Hazard Correlation Engine', type: 'ai' },
        { id: '6', label: 'Surface Control Room Live React Dashboard', type: 'ui' },
      ],
      connections: [
        { from: '1', to: '2', label: 'Telemetry & Distance Bus' },
        { from: '3', to: '2', label: 'Harvested Aux Power' },
        { from: '2', to: '4', label: 'Sub-GHz LoRa Packets' },
        { from: '4', to: '5', label: 'Real-time Data Stream' },
        { from: '5', to: '6', label: 'Live Hazard Map & Siren Alert' },
      ],
    },
    features: [
      'Developed an AI-powered mine rescue rover designed for hazardous underground coal mine environments.',
      'Built and assembled a four-wheel mobile rover chassis.',
      'Integrated ESP32, L298N motor driver, MQ-135 gas sensor, DHT22 temperature/humidity sensor, and HC-SR04 ultrasonic obstacle sensor.',
      'Designed and validated the rover power system using a Li-ion battery pack and motor driver configuration for approximately 3–4 hours of continuous exploration runtime.',
      'Engineered a thermoelectric generator (TEG) based energy-harvesting system combined with hybrid supercapacitor and battery storage.',
      'Designed the energy-harvesting concept for sensor nodes intended for deployment in legacy mine zones without existing electrical infrastructure.',
      'Collaborated on the system architecture connecting rover and sensor-node data to a predictive AI correlation engine and live control-room dashboard.',
      'Developed a working rover hardware prototype for SIH26039.'
    ],
    technicalChallenges: [
      'Overcoming extreme radio attenuation and multipath signal loss in deep subterranean rock corridors',
      'Maintaining thermal and electrical safety inside potentially explosive coal dust atmospheres',
      'Managing tight microcontroller memory and compute resources during high-frequency obstacle scanning'
    ],
    outcomes: [
      'Engineered a working rover hardware prototype for Smart India Hackathon 2026 (SIH26039)',
      'Validated 3–4 hours continuous exploration runtime with autonomous obstacle detection and toxic gas telemetry',
      'Engineered thermoelectric generator (TEG) energy harvesting to power sensor nodes in off-grid legacy mine zones'
    ],
    sdgImpact: 'SDG 3: Good Health and Well-being & SDG 8: Decent Work and Economic Growth & SDG 9: Industry, Innovation, and Infrastructure'
  },
  {
    id: 'scriptguard-ai',
    title: 'ScriptGuard AI - Computer Vision OCR Engine',
    tagline: 'Automated Document Scanning, Perspective Correction & Text Verification Pipeline',
    category: 'Machine Learning',
    status: 'Ongoing',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    githubUrl: 'https://github.com/Hikki-11/scriptguard-ai',
    tags: ['Python', 'Computer Vision', 'OpenCV', 'Tesseract OCR', 'Image Processing', 'Document Verification'],
    problemStatement: 'Manual paper document inspection during university examinations and legal audits is error-prone, slow, and susceptible to fraud or illegible scanning.',
    solutionApproach: 'Built a Computer Vision pipeline using OpenCV and Python to perform automatic document edge detection, perspective warping, contrast thresholding, and OCR text extraction for automated verification.',
    architectureDiagram: {
      title: 'ScriptGuard Vision & Digitization Workflow',
      nodes: [
        { id: '1', label: 'Raw Camera Scan Input', type: 'sensor' },
        { id: '2', label: 'OpenCV Contour & Warp Engine', type: 'ai' },
        { id: '3', label: 'Adaptive Threshold Processor', type: 'ai' },
        { id: '4', label: 'OCR Text Extraction Engine', type: 'ai' },
        { id: '5', label: 'Structured Document DB', type: 'database' },
      ],
      connections: [
        { from: '1', to: '2', label: 'Image Frame' },
        { from: '2', to: '3', label: 'Rectified Quad Polygon' },
        { from: '3', to: '4', label: 'Binarized Text Regions' },
        { from: '4', to: '5', label: 'Extracted Metadata & Text' },
      ],
    },
    features: [
      'Automated 4-point corner detection for skewed paper scans',
      'Adaptive Gaussian thresholding to eliminate shadows and background bleed',
      'Pattern matching and regular expression validation for key document fields',
      'High-throughput bulk document processing queue',
    ],
    technicalChallenges: [
      'Handling low-light camera captures and distorted paper folds',
      'Improving OCR character recognition accuracy on non-standard fonts',
    ],
    outcomes: [
      'Reduced document audit processing time by 80% compared to manual entry',
      'Processed over 500 test examination papers with high OCR confidence scores',
    ],
  },
  {
    id: 'build-club-projects',
    title: 'Build Club Projects – Hands-on Engineering & Innovation',
    cardTitle: 'Build Club Projects –\nHands-on Engineering & Innovation',
    tagline: 'Hands-on Engineering & Innovation • Hardware Prototypes',
    category: 'Build Club Projects',
    categoryBadge: 'Hands-on Engineering',
    status: 'Completed',
    featured: true,
    heroImage: buildClubShowcaseImg,
    subProjects: BUILD_CLUB_PROJECTS_DATA,
    tags: [
      'ESP32-C6',
      'Mecanum Wheels',
      'Buck Converter',
      'Four-Bar Linkage',
      'L298N',
      'LM2575',
      'RGB LEDs',
      'Circuit Design',
      'Robotics',
    ],
    problemStatement: 'A collective hands-on engineering initiative exploring embedded systems, mobile robotics with Mecanum drive, DC-DC power electronics, and mechanical kinematic linkages through practical design, assembly, testing, and prototyping.',
    solutionApproach: 'Designed, assembled, and validated four distinct engineering prototypes: Sound Rush (acoustic LED visualizer), MecaRush (omnidirectional 4WD mobile robot with web control), VoltDrop (24V-to-12V switching buck converter), and WipeMotion (four-bar wiper linkage mechanism).',
    architectureDiagram: {
      title: 'Build Club Multi-Disciplinary Engineering Domain Architecture',
      nodes: [
        { id: '1', label: 'Sound Rush: ESP32-C6 Acoustic & RGB Visualizer', type: 'hardware' },
        { id: '2', label: 'MecaRush: 4WD Mecanum Robot & Web Control', type: 'hardware' },
        { id: '3', label: 'VoltDrop: 24V-to-12V LM2575 Buck Converter', type: 'hardware' },
        { id: '4', label: 'WipeMotion: Four-Bar Wiper Kinematic Model', type: 'hardware' },
        { id: '5', label: 'Build Club Hands-on Engineering Portfolio', type: 'ui' },
      ],
      connections: [
        { from: '1', to: '5', label: 'Embedded Systems' },
        { from: '2', to: '5', label: 'Robotics & Vector Drive' },
        { from: '3', to: '5', label: 'Power Electronics' },
        { from: '4', to: '5', label: 'Kinematic Linkages' },
      ],
    },
    features: [
      'Sound Rush: ESP32-C6 microphone sound-level detection driving 16-LED circular visualizer with color-coded feedback.',
      'MecaRush: Four-wheel Mecanum robot with dual L298N motor drivers and mobile web joystick control for omnidirectional motion.',
      'VoltDrop: Switching DC-DC buck converter stepping 24V down to 12V using LM2575-ADJ, powering a 12V DC motor.',
      'WipeMotion: Precision four-bar mechanical linkage converting rotational input into oscillating automotive wiper motion.',
    ],
    technicalChallenges: [
      'Managing diverse engineering disciplines across microcontrollers, power regulators, and mechanical linkages',
      'Rigorous bench testing and debugging of physical hardware prototypes under active load conditions',
    ],
    outcomes: [
      'Successfully built and demonstrated functional working prototypes for the Build Club showcase',
      'Validated end-to-end hands-on competencies in embedded systems, power electronics, robotics, and kinematics',
    ],
  },
];

export const BUILD_CLUB_SKILLS = [
  'Embedded Systems',
  'ESP32',
  'Robotics',
  'Motor Control',
  'Power Electronics',
  'Circuit Design',
  'Mechanical Assembly',
  'Prototyping',
  'Testing',
  'Troubleshooting',
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend & System Architecture',
    iconName: 'Server',
    description: 'Scalable server-side development with Java ecosystem and REST API design',
    skills: [
      { name: 'Core Java', level: 92, categoryTag: 'Backend', experience: 'Advanced', icon: 'Coffee', highlight: true },
      { name: 'Spring Boot', level: 88, categoryTag: 'Backend', experience: 'Advanced', icon: 'Zap', highlight: true },
      { name: 'Spring MVC & REST APIs', level: 90, categoryTag: 'Backend', experience: 'Advanced', icon: 'Network', highlight: true },
      { name: 'JPA & Hibernate ORM', level: 88, categoryTag: 'Backend', experience: 'Advanced', icon: 'Layers', highlight: true },
      { name: 'Object-Oriented Programming (OOP)', level: 94, categoryTag: 'Core', experience: 'Expert', icon: 'Code', highlight: true },
      { name: 'CRUD & API Design', level: 92, categoryTag: 'Backend', experience: 'Advanced', icon: 'Sliders' },
    ],
  },
  {
    title: 'Embedded AI & IoT Engineering',
    iconName: 'Cpu',
    description: 'Hardware-software integration, microcontrollers, edge sensing & AI slope analysis',
    skills: [
      { name: 'ESP32 Hardware & C++', level: 90, categoryTag: 'IoT', experience: 'Advanced', icon: 'Cpu', highlight: true },
      { name: 'Embedded AI & Edge Computing', level: 86, categoryTag: 'AI/IoT', experience: 'Proficient', icon: 'BrainCircuit', highlight: true },
      { name: 'Sensor Integration (Vibration/Gas/Current)', level: 92, categoryTag: 'IoT', experience: 'Advanced', icon: 'Radio' },
      { name: 'Industrial Anomaly Detection', level: 88, categoryTag: 'AI/IoT', experience: 'Advanced', icon: 'Activity', highlight: true },
    ],
  },
  {
    title: 'AI, Machine Learning & Vision',
    iconName: 'Brain',
    description: 'Predictive modeling, signal processing, computer vision & OCR document scanning',
    skills: [
      { name: 'Python Engineering', level: 90, categoryTag: 'AI/ML', experience: 'Advanced', icon: 'Code2', highlight: true },
      { name: 'Predictive Maintenance ML', level: 88, categoryTag: 'AI/ML', experience: 'Advanced', icon: 'TrendingUp', highlight: true },
      { name: 'OpenCV & Computer Vision', level: 82, categoryTag: 'Vision', experience: 'Proficient', icon: 'Eye' },
      { name: 'Tesseract OCR & Image Processing', level: 84, categoryTag: 'Vision', experience: 'Proficient', icon: 'FileText' },
      { name: 'Statistical Signal Analysis (FFT)', level: 80, categoryTag: 'Core', experience: 'Intermediate', icon: 'BarChart2' },
    ],
  },
  {
    title: 'Databases, Cloud & Analytics',
    iconName: 'Database',
    description: 'Relational & NoSQL database management, query tuning & cloud data warehousing',
    skills: [
      { name: 'MySQL Relational Database', level: 88, categoryTag: 'Database', experience: 'Advanced', icon: 'Database', highlight: true },
      { name: 'MongoDB NoSQL', level: 82, categoryTag: 'Database', experience: 'Proficient', icon: 'Box' },
      { name: 'Snowflake Data Warehousing', level: 78, categoryTag: 'Cloud', experience: 'Intermediate', icon: 'Cloud' },
      { name: 'SQL Query Optimization', level: 86, categoryTag: 'Database', experience: 'Advanced', icon: 'Filter' },
    ],
  },
  {
    title: 'Core CS & Software Engineering Tools',
    iconName: 'Terminal',
    description: 'Data structures, algorithm design, version control & build tools',
    skills: [
      { name: 'Data Structures & Algorithms', level: 90, categoryTag: 'Core', experience: '170+ LeetCode Solved', icon: 'Binary', highlight: true },
      { name: 'Git & GitHub Version Control', level: 92, categoryTag: 'Tools', experience: 'Advanced', icon: 'GitBranch', highlight: true },
      { name: 'Maven Build Tool', level: 84, categoryTag: 'Tools', experience: 'Proficient', icon: 'Package' },
      { name: 'Postman API Testing', level: 88, categoryTag: 'Tools', experience: 'Advanced', icon: 'Send' },
      { name: 'IntelliJ IDEA & VS Code', level: 92, categoryTag: 'Tools', experience: 'Expert', icon: 'Laptop' },
      { name: 'C / C++', level: 82, categoryTag: 'Core', experience: 'Proficient', icon: 'Terminal' },
    ],
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'hackxtreme-26',
    type: 'Hackathon',
    title: 'HACKXTREME\'26 — 24-Hour National-Level Hackathon',
    organization: 'K. Ramakrishnan College of Engineering, Trichy',
    location: 'Trichy, Tamil Nadu',
    date: '2026',
    duration: '24 Hours Non-Stop',
    achievementBadge: 'Recognized by Media Wave & Shortlisted for Internship',
    description: [
      'Built an AI-powered Digital Twin model simulating urban infrastructure from live IoT data for real-time prediction of traffic congestion, energy grid demand, and air pollution levels.',
      'Demonstrated physical hardware integration using ESP32 current sensors and LCD display communicating with Python analytics models.',
      'Recognized by Media Wave panel for outstanding technical performance and shortlisted for an exclusive internship opportunity.',
    ],
    techUsed: ['IoT', 'ESP32', 'Python', 'AI/ML', 'Digital Twin', 'Energy Metering', 'Data Visualization'],
  },
  {
    id: 'sih-hackathon',
    type: 'Hackathon',
    title: 'Smart India Hackathon (SIH)',
    organization: 'Ministry of Education / Government of India',
    location: 'National Competition',
    date: '2025',
    achievementBadge: 'National Hackathon Project',
    description: [
      'Designed an automated pesticide sprinkler system using logic-based control to improve agricultural spraying efficiency.',
      'Developed a functional prototype focused on reducing manual farmer intervention while optimizing chemical pesticide usage and crop safety.',
      'Collaborated closely with cross-functional team members to design an innovative hardware-software solution addressing real-world agricultural challenges.',
    ],
    techUsed: ['Embedded Control', 'Microcontrollers', 'Automation', 'Sensors', 'AgriTech'],
  },
  {
    id: 'msme-presentation',
    type: 'Hackathon',
    title: 'MSME Industrial Safety & Predictive Maintenance Showcase',
    organization: 'Ministry of Micro, Small & Medium Enterprises (MSME)',
    location: 'Regional Showcase',
    date: '2025',
    achievementBadge: 'Industrial Innovation Showcase',
    description: [
      'Presented "Micro Failure Whisperer" and "Digital Smell" as AI-driven industrial safety and predictive maintenance solutions.',
      'Demonstrated practical application of machine learning and IoT gas/vibration sensors for early fault detection and industrial worker safety monitoring.',
    ],
    techUsed: ['Machine Learning', 'Predictive Maintenance', 'Gas Sensors', 'Vibration Telemetry', 'IoT Safety'],
  },
  {
    id: 'snowflake-workshop',
    type: 'Workshop',
    title: 'Snowflake Cloud Data Warehousing Workshop',
    organization: '1-Week Intensive Program',
    location: 'Tamil Nadu',
    date: '2025',
    duration: '1 Week',
    achievementBadge: 'Hands-on Certification',
    description: [
      'Completed hands-on technical training covering Snowflake cloud data architecture, virtual warehouses, and SQL-based data management.',
      'Gained practical exposure to data loading, staging, zero-copy cloning, micro-partition querying, and cloud analytics workflows.',
    ],
    techUsed: ['Snowflake', 'SQL', 'Cloud Data Warehousing', 'ETL', 'Data Analytics'],
  },
  {
    id: 'iot-workshop',
    type: 'Workshop',
    title: 'Embedded Systems & IoT Hardware Workshop',
    organization: '1-Month Practical Training',
    location: 'Tamil Nadu',
    date: '2025',
    duration: '1 Month',
    achievementBadge: 'Hardware Mastery',
    description: [
      'Completed intensive practical training in ESP32 programming, sensor calibration, I2C/SPI communication, and embedded firmware development.',
      'Built real-time IoT applications involving sensor data acquisition, ADC sampling, and hardware-to-cloud communication.',
    ],
    techUsed: ['ESP32', 'Embedded C++', 'Sensors', 'I2C/SPI', 'IoT Networks'],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'java-oracle',
    title: 'Java Programming Certification',
    issuer: 'Oracle',
    date: '2025',
    skillsVerified: ['Core Java', 'OOP Principles', 'Collections Framework', 'Exception Handling', 'Multithreading'],
    badgeColor: 'from-amber-500 to-red-600',
  },
  {
    id: 'sql-oracle',
    title: 'Database & SQL Certification',
    issuer: 'Oracle',
    date: '2025',
    skillsVerified: ['Relational Schema Design', 'Complex SQL Joins', 'Subqueries', 'Indexing', 'DDL & DML'],
    badgeColor: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'ai-ml-dreams',
    title: 'AI / Machine Learning Specialist',
    issuer: 'Dreams AI',
    date: '2025',
    skillsVerified: ['Supervised & Unsupervised Learning', 'Anomaly Detection', 'Feature Extraction', 'Model Training'],
    badgeColor: 'from-cyan-500 to-teal-600',
  },
  {
    id: 'mongodb-ict',
    title: 'MongoDB Database Practitioner',
    issuer: 'ICT Academy',
    date: '2025',
    skillsVerified: ['NoSQL Documents', 'Aggregation Pipelines', 'MongoDB Atlas', 'Indexing & CRUD'],
    badgeColor: 'from-emerald-500 to-green-600',
  },
  {
    id: 'python-kaggle',
    title: 'Python & C/C++ Engineering',
    issuer: 'Kaggle / MyGreatLearning',
    date: '2024',
    skillsVerified: ['Data Structures', 'Algorithm Design', 'NumPy/Pandas', 'Low-level Memory Management'],
    badgeColor: 'from-purple-500 to-violet-600',
  },
  {
    id: 'figma-simplilearn',
    title: 'UI/UX Design Essentials',
    issuer: 'Simplilearn',
    date: '2024',
    skillsVerified: ['Wireframing', 'Prototyping', 'Component Design Systems', 'User Interface Hierarchy'],
    badgeColor: 'from-pink-500 to-rose-600',
  },
];

export const DSA_STATS: DSAStats = {
  totalSolved: 170,
  easyCount: 85,
  mediumCount: 72,
  hardCount: 13,
  topics: [
    { name: 'Arrays & Hashing', count: 48, icon: 'Grid' },
    { name: 'Two Pointers & Sliding Window', count: 32, icon: 'ArrowLeftRight' },
    { name: 'Strings & Pattern Matching', count: 30, icon: 'Type' },
    { name: 'Mathematics & Bit Manipulation', count: 24, icon: 'Calculator' },
    { name: 'Trees, Graphs & Recursion', count: 20, icon: 'GitFork' },
    { name: 'Stack, Queue & Linked Lists', count: 16, icon: 'Layers' },
  ],
  leetcodeProfile: 'https://leetcode.com/u/BHUVANESASN_N/',
};

export const ACHIEVEMENTS_HIGHLIGHTS = [
  {
    title: 'Media Wave Recognition & Internship Shortlist',
    event: 'HACKXTREME\'26 (24-Hour National Hackathon)',
    description: 'Awarded for technical brilliance in constructing an AI Urban Digital Twin with real-time IoT energy and pollution telemetry.',
  },
  {
    title: '170+ LeetCode DSA Problems Solved',
    event: 'Competitive Programming & DSA Mastery',
    description: 'Demonstrated strong analytical problem-solving foundation across Arrays, Strings, Mathematics, and core Data Structures.',
  },
  {
    title: 'Core Systems & Backend Engineering',
    event: 'Software Architecture & Microservices',
    description: 'Consistently maintaining high standards in software architecture, clean code practices, and REST microservices design.',
  },
  {
    title: 'Mathematics Competition Winner',
    event: 'Regional Analytical Thinking Contests',
    description: 'Won regional mathematics competitions, demonstrating high-level quantitative reasoning and logic skills.',
  },
];
