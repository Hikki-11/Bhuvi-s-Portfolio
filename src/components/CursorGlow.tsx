import React, { useEffect, useRef, useState } from 'react';

export const CursorGlow: React.FC = () => {
  // Direct mouse positions
  const mouseRef = useRef({ x: -100, y: -100 });
  // Smooth LERP positions for outer ring
  const trailRef = useRef({ x: -100, y: -100 });
  
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseRef.current = { x: clientX, y: clientY };

      // Target element check for interactive spotlight on buttons/links
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest(
          'button, a, input, select, textarea, [role="button"], .glass-card, .btn-glow-interactive'
        );

        if (interactiveEl instanceof HTMLElement) {
          setIsHovering(true);
          const rect = interactiveEl.getBoundingClientRect();
          const relX = clientX - rect.left;
          const relY = clientY - rect.top;

          interactiveEl.style.setProperty('--mouse-x', `${relX}px`);
          interactiveEl.style.setProperty('--mouse-y', `${relY}px`);
        } else {
          setIsHovering(false);
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // High-fps LERP loop for silky trailing motion
    const updateMotion = () => {
      // Direct update for pointer dot
      setDotPos({ x: mouseRef.current.x, y: mouseRef.current.y });

      // LERP outer ring position for smooth inertia
      const dx = mouseRef.current.x - trailRef.current.x;
      const dy = mouseRef.current.y - trailRef.current.y;

      trailRef.current.x += dx * 0.2; // 20% interpolation per frame
      trailRef.current.y += dy * 0.2;

      setTrailPos({ x: trailRef.current.x, y: trailRef.current.y });

      animId = requestAnimationFrame(updateMotion);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    animId = requestAnimationFrame(updateMotion);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* 1. Smooth Trailing Outer Ring & Ambient Dark Glow */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{
          transform: `translate3d(${trailPos.x}px, ${trailPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {/* Soft Radial Ambient Aura */}
        <div
          className={`rounded-full transition-all duration-300 blur-md ${
            isHovering
              ? 'w-20 h-20 bg-[#212529]/15 shadow-[0_0_24px_rgba(33,37,41,0.15)]'
              : 'w-14 h-14 bg-[#212529]/05 blur-md'
          } ${isClicking ? 'scale-75' : ''}`}
        />

        {/* Precision Outer Ring with Hover Expansion */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ${
            isHovering
              ? 'w-10 h-10 border-[#212529] shadow-[0_0_12px_rgba(33,37,41,0.2)] rotate-45 scale-110'
              : 'w-7 h-7 border-[#212529]/40 shadow-[0_0_6px_rgba(33,37,41,0.1)]'
          } ${isClicking ? 'scale-90 border-[#343A40]' : ''}`}
        >
          {/* Subtle spinning accent tick on hover */}
          {isHovering && (
            <div className="absolute inset-0 border-t-2 border-[#212529] rounded-full animate-spin" style={{ animationDuration: '2s' }} />
          )}
        </div>
      </div>

      {/* 2. Instant Core Pointer Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{
          transform: `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full bg-[#212529] shadow-[0_0_8px_rgba(33,37,41,0.3)] transition-all duration-150 ${
            isHovering ? 'w-2.5 h-2.5 bg-[#212529] shadow-[0_0_10px_rgba(33,37,41,0.4)]' : 'w-2 h-2'
          } ${isClicking ? 'scale-150 bg-[#212529]' : ''}`}
        />
      </div>

      {/* Seamless Interactive Button Spotlight Effect */}
      <style>{`
        @media (pointer: fine) {
          html, body, *, button, a, input, select, textarea {
            cursor: none !important;
          }
        }

        button, a, .glass-card, .btn-glow-interactive {
          position: relative;
          overflow: hidden;
        }

        button > *, a > * {
          position: relative;
          z-index: 2;
        }

        button::before, a.btn-glow-interactive::before, .glass-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            180px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(33, 37, 41, 0.08) 0%,
            rgba(52, 58, 64, 0.03) 45%,
            transparent 80%
          );
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.25s ease;
          z-index: 1;
        }

        button:hover::before, a.btn-glow-interactive:hover::before, .glass-card:hover::before {
          opacity: 1;
        }
      `}</style>
    </>
  );
};
