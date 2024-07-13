import React, { useState, TouchEvent } from 'react';
// import './CoinButton.css';

const CoinButton: React.FC = () => {
  const [touches, setTouches] = useState<TouchList | null>(null);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouches(event.touches);
    if (event.touches.length === 6) {
      console.log('Six-finger tap detected!');
      // Handle the six-finger tap event here
    }
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    setTouches(event.touches);
  };

  const handleTouchEnd = () => {
    setTouches(null);
  };

  return (
    <div
      className="touch-area"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button className="coin-button">
        Coin
      </button>
    </div>
  );
};

export default CoinButton;
