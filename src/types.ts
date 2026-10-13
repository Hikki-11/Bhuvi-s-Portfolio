export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  badge?: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  cardTitle?: string;
  tagline: string;
  category: 'Backend & Cloud' | 'IoT & Embedded AI' | 'Machine Learning' | 'Web & Fullstack' | 'AI, IoT & Robotics' | string;
  categoryBadge?: string;
  status: 'Completed' | 'Ongoing' | 'Award Winner' | 'SIH 2026' | string;
  featured: boolean;
  heroImage: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  tags: string[];
  problemStatement: string;
  solutionApproach: string;
  architectureDiagram: {
    title: string;
    nodes: { id: string; label: string; type: 'sensor' | 'hardware' | 'ai' | 'backend' | 'database' | 'ui' }[];
    connections: { from: string; to: string; label?: string }[];
  };
  features: string[];
  technicalChallenges: string[];
  outcomes: string[];
  sdgImpact?: string;
  subProjects?: ProjectCaseStudy[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0-100
    categoryTag: string;
    experience: string;
    icon: string;
    highlight?: boolean;
  }[];
}

export interface TimelineItem {
  id: string;
  type: 'Hackathon' | 'Workshop' | 'Education';
  title: string;
  organization: string;
  location: string;
  date: string;
  duration?: string;
  achievementBadge?: string;
  description: string[];
  techUsed: string[];
  link?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  skillsVerified: string[];
  badgeColor: string;
  credentialUrl?: string;
  credentialId?: string;
}

export interface DSAStats {
  totalSolved: number;
  easyCount: number;
  mediumCount: number;
  hardCount: number;
  topics: { name: string; count: number; icon: string }[];
  leetcodeProfile: string;
}

export type ThemeMode = 'cyberpunk' | 'warm-architect' | 'emerald-industrial';
