import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

const Modal = ({ isOpen, onClose, children }) => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragStart = useRef({ x: 0, y: 0 });
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  // GSAP animation for modal entrance/exit
  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  const handleMouseDown = (e) => {
    setDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    document.body.style.userSelect = 'none';
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
    document.body.style.userSelect = '';
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
    // eslint-disable-next-line
  }, [dragging]);

  // GSAP hover effect for close button
  const handleBtnMouseEnter = () => {
    gsap.to(closeBtnRef.current, { scale: 1.2, rotate: 15, duration: 0.25, ease: 'power2.out' });
  };
  const handleBtnMouseLeave = () => {
    gsap.to(closeBtnRef.current, { scale: 1, rotate: 0, duration: 0.25, ease: 'power2.out' });
  };

  if (!isOpen) return null;
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center w-full h-full">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-2xl p-6 relative min-w-[320px] max-w-full w-full sm:w-[400px] border border-gray-200 overflow-auto max-h-full cursor-move select-none"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
        onMouseDown={handleMouseDown}
      >
        <button
          ref={closeBtnRef}
          onClick={onClose}
          onMouseEnter={handleBtnMouseEnter}
          onMouseLeave={handleBtnMouseLeave}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none cursor-pointer"
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal; 