import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[rgba(33,37,41,0.08)] bg-[#DEE2E6] py-10 relative z-10 text-[#495057]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[rgba(33,37,41,0.08)] pb-6">
          
          {/* Identity */}
          <div className="text-left">
            <div>
              <div className="font-mono font-bold text-[#212529] text-sm font-heading">
                {PROFILE_DATA.name}
              </div>
              <div className="text-xs text-[#495057] font-mono">
                Software & Systems Engineer
              </div>
            </div>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-[12px] bg-[rgba(255,255,255,0.55)] hover:bg-[#E9ECEF] border border-[rgba(33,37,41,0.08)] text-[#212529] hover:text-[#495057] transition-colors cursor-pointer flex items-center space-x-1.5 text-xs font-mono font-medium shadow-xs"
            title="Scroll to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#212529]" />
          </button>

        </div>

        {/* Links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#495057] gap-3 font-mono">
          <div>
            © {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <a href={PROFILE_DATA.github} target="_blank" rel="noreferrer" className="hover:text-[#212529] transition-colors">
              GitHub
            </a>
            <span>•</span>
            <a href={PROFILE_DATA.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#212529] transition-colors">
              LinkedIn
            </a>
            <span>•</span>
            <a href={`mailto:${PROFILE_DATA.email}`} className="hover:text-[#212529] transition-colors">
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

