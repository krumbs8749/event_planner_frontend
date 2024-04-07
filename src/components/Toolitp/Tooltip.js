import React, { useState } from 'react';
import styles from './Tooltip.module.scss';

const Tooltip = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Determine viewport width
    const viewportWidth = window.innerWidth;
    // Determine if cursor is on the left or right half of the screen
    const cursorOnLeftSide = e.clientX < viewportWidth / 2;

    setPosition({
      // Place tooltip to the right of the cursor if on left side, otherwise to the left.
      // Adjust X position to avoid tooltip directly under the cursor
      x: cursorOnLeftSide ? e.clientX + 10 : e.clientX - 10,
      y: e.clientY
    });
  };

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div 
      onMouseMove={handleMouseMove} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      className={styles.tooltipContainer}
    >
      {children}
      {isVisible && (
        <div 
          className={styles.tooltipText} 
          style={{ 
            left: `${position.x}px`, 
            top: `${position.y}px`,
            transform: `translateY(10%) ${position.x < window.innerWidth / 2 ? 'translateX(0)' : 'translateX(-100%)'}`
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
