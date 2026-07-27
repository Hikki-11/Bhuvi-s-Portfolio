import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const isManualScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    let animFrameId: number | null = null;

    const computeActiveSection = () => {
      setIsScrolled(window.scrollY > 20);

      // If user initiated a smooth scroll click, keep target section active until scroll completes
      if (isManualScrollingRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );

      // 1. Top of page check
      if (scrollY < 80) {
        setActiveSection('hero');
        return;
      }

      // 2. Bottom of page check
      if (windowHeight + scrollY >= documentHeight - 50) {
        setActiveSection('contact');
        return;
      }

      // 3. Middle sections overlap check
      const sectionIds = ['hero', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const headerOffset = 80;
      const viewportTop = scrollY + headerOffset;
      const viewportBottom = scrollY + windowHeight;

      let maxOverlap = -1;
      let currentActive = 'hero';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const elTop = rect.top + scrollY;
        const elBottom = elTop + rect.height;

        const overlapTop = Math.max(elTop, viewportTop);
        const overlapBottom = Math.min(elBottom, viewportBottom);
        const overlap = Math.max(0, overlapBottom - overlapTop);

        if (overlap > maxOverlap) {
          maxOverlap = overlap;
          currentActive = id;
        }
      }

      if (maxOverlap > 0) {
        setActiveSection((prev) => (prev !== currentActive ? currentActive : prev));
      }
    };

    const handleScrollOrResize = () => {
      if (animFrameId !== null) cancelAnimationFrame(animFrameId);
      animFrameId = requestAnimationFrame(computeActiveSection);
    };

    // User interaction unlocks manual scrolling lock
    const handleUserInteraction = () => {
      if (isManualScrollingRef.current) {
        isManualScrollingRef.current = false;
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      }
    };

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });
    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });

    // Initial calculation
    computeActiveSection();

    // IntersectionObserver as secondary trigger for visibility state changes
    const observerCallback: IntersectionObserverCallback = () => {
      handleScrollOrResize();
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-80px 0px -20% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1.0],
    });

    const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      if (animFrameId !== null) cancelAnimationFrame(animFrameId);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');

    // Set active section immediately on click
    setActiveSection(targetId);

    // Lock automatic scroll detection during smooth scroll animation
    isManualScrollingRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Monitor scroll end to unlock manual scrolling
    let lastScrollY = window.scrollY;
    let sameCount = 0;

    const checkScrollEnded = () => {
      if (window.scrollY === lastScrollY) {
        sameCount++;
        if (sameCount >= 3) {
          isManualScrollingRef.current = false;
          return;
        }
      } else {
        sameCount = 0;
        lastScrollY = window.scrollY;
      }
      scrollTimeoutRef.current = setTimeout(checkScrollEnded, 100);
    };

    scrollTimeoutRef.current = setTimeout(checkScrollEnded, 150);

    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#E9ECEF]/85 backdrop-blur-md border-b border-[#212529]/10 shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center space-x-4 sm:space-x-8 relative">
        
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center group focus:outline-none"
        >
          <motion.div
            className="relative font-mono font-black text-2xl sm:text-3xl tracking-tighter text-[#212529] select-none leading-none drop-shadow-[6px_2px_2px_rgba(33,37,41,0.35)]"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="relative z-10 text-[#212529] font-extrabold tracking-tighter transition-all duration-300 inline-block"
              animate={{
                textShadow: [
                  '6px 2px 3px rgba(33,37,41,0.25)',
                  '8px 3px 8px rgba(33,37,41,0.45)',
                  '6px 2px 3px rgba(33,37,41,0.25)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              BN
            </motion.span>
          </motion.div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 bg-[#DEE2E6]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#212529]/10 shadow-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[#212529] text-[#FFFFFF] font-bold shadow-xs'
                    : 'text-[#495057] hover:text-[#212529] hover:bg-[#E9ECEF]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="absolute right-4 sm:right-6 md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-[12px] bg-[#DEE2E6] border border-[#212529]/10 text-[#212529] hover:bg-[#E9ECEF]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#E9ECEF]/95 backdrop-blur-xl border-b border-[#212529]/10 px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-lg text-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block px-4 py-2.5 rounded-[12px] text-sm font-medium transition-all ${
                activeSection === link.id
                  ? 'bg-[#212529] text-[#FFFFFF] font-bold border border-[#212529]'
                  : 'text-[#495057] hover:bg-[#DEE2E6] hover:text-[#212529]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

