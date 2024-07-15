import React, { useState, useEffect, TouchEvent } from "react";

const CoinButton: React.FC = () => {
  return (
    <div
      className="touch-area"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button className="coin-button">Coin</button>
      <div className="touch-count">Touch Count: {touchCount}</div>
      {animations}
    </div>
  );
};

export default CoinButton;
