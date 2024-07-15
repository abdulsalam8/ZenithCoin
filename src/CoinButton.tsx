import React, { useState, useEffect, TouchEvent } from 'react';
// import './CoinButton.css';

const CoinButton: React.FC = () => {
  const [touches, setTouches] = useState<TouchList | null>(null);
  const [touchCount, setTouchCount] = useState(0);
  const [animations, setAnimations] = useState<JSX.Element[]>([]);

  const disableScroll = () => {
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
  };

  const enableScroll = () => {
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouches(event.touches);
    setTouchCount((prevCount) => prevCount + 1);

    // Get touch coordinates
    const touch = event.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;

    // Create an animation element
    const animationId = Math.random().toString(36).substr(2, 9);
    const newAnimation = (
      <div
        key={animationId}
        className="touch-animation"
        style={{ left: x, top: y }}
        onAnimationEnd={() => removeAnimation(animationId)}
      >
        +1
      </div>
    );

    setAnimations((prevAnimations) => [...prevAnimations, newAnimation]);

    if (event.touches.length === 6) {
      console.log('Six-finger tap detected!');
      disableScroll();
    }
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    setTouches(event.touches);
  };

  const handleTouchEnd = () => {
    setTouches(null);
    enableScroll();
  };

  const removeAnimation = (id: string) => {
    setAnimations((prevAnimations) => prevAnimations.filter((anim) => anim.key !== id));
  };

  useEffect(() => {
    return () => {
      enableScroll();
    };
  }, []);

  return (
    <div
      className="touch-area"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button className="coin-button">
      QuantumBit
      </button>
      <div className="touch-count">
        Touch Count: {touchCount}
      </div>
      {animations}
    </div>
  );
};

export default CoinButton;
