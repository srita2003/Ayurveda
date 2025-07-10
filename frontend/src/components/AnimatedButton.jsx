import React, { useRef } from 'react';
import gsap from 'gsap';

const AnimatedButton = ({ children, className = '', ...props }) => {
  const btnRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(btnRef.current, { scale: 1.08, rotate: 2, duration: 0.22, ease: 'power2.out' });
  };
  const handleMouseLeave = () => {
    gsap.to(btnRef.current, { scale: 1, rotate: 0, duration: 0.22, ease: 'power2.out' });
  };

  return (
    <button
      ref={btnRef}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};

export default AnimatedButton; 