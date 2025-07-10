import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children }) => {
  const mainRef = useRef(null);

  useEffect(() => {
    // Page transition animation
    gsap.fromTo(
      mainRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
    );
    // Scroll-triggered animation for all direct children
    const elements = mainRef.current ? Array.from(mainRef.current.children) : [];
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#F7F5ED]">
      <main ref={mainRef} className="w-full min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout; 