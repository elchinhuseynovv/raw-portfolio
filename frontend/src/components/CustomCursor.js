import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId;
    
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth cursor following with lag
    const animateCursor = () => {
      setCursorPosition(prevPosition => {
        const deltaX = mousePosition.x - prevPosition.x;
        const deltaY = mousePosition.y - prevPosition.y;
        
        // Adjust this value to control the lag amount (0.1 = more lag, 0.5 = less lag)
        const lagFactor = 0.15;
        
        return {
          x: prevPosition.x + deltaX * lagFactor,
          y: prevPosition.y + deltaY * lagFactor,
        };
      });
      
      animationFrameId = requestAnimationFrame(animateCursor);
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Start animation loop
    animationFrameId = requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [mousePosition, isVisible]);

  return (
    <>
      {/* Custom circular cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `translate(${cursorPosition.x - 20}px, ${cursorPosition.y - 20}px)`,
        }}
      >
        {/* Outer circle with subtle border */}
        <div className="relative">
          <div className="w-10 h-10 border-2 border-white/40 rounded-full backdrop-blur-sm">
            {/* Inner circle */}
            <div className="w-2 h-2 bg-white/80 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 w-10 h-10 bg-white/10 rounded-full blur-sm"></div>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;