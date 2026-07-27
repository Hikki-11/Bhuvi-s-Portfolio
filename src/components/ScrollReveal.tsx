import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  once?: boolean;
  blur?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 35,
  duration = 0.6,
  once = false,
  blur = true,
}) => {
  const getInitialOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
        return { x: 0, y: 0 };
      default:
        return { y: distance, x: 0 };
    }
  };

  const initialOffset = getInitialOffset();

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        filter: blur ? 'blur(8px)' : 'blur(0px)', 
        ...initialOffset 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0, 
        filter: 'blur(0px)' 
      }}
      viewport={{ once, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
