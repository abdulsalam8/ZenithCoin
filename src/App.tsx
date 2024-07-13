import React, { useState, useEffect } from 'react';
import './App.css';
import { FaRegStar, FaTasks, FaRocket, FaChartBar, FaTrophy } from 'react-icons/fa';
import Logo from './assets/logo.png';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import CoinButton from './CoinButton';

const MAX_ENERGY = 3000;
const REFILL_RATE = 50; 
const REFILL_INTERVAL = 1000;

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [energy, setEnergy] = useState<number>(MAX_ENERGY);
  const [loading, setLoading] = useState<boolean>(true);
  const disableScroll = () => {
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
  };

  const enableScroll = () => {
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((prevEnergy) => Math.min(prevEnergy + REFILL_RATE, MAX_ENERGY));
    }, REFILL_INTERVAL);

    // Simulate loading delay
    setTimeout(() => setLoading(false), 2000);

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = () => {
    if (energy > 0) {
      setCount((prevCount) => prevCount + 100);
      setEnergy((prevEnergy) => Math.max(prevEnergy - 100, 0));
      const imageElement = document.querySelector('.logo');
      if (imageElement) {
        imageElement.classList.add('pop');
        setTimeout(() => {
          imageElement.classList.remove('pop');
        }, 300);
      }
    }
  };

  useEffect(() => {
    return () => {
      enableScroll();
    };
  }, []);


  return (
    <div className="app">
      {/* <h1 className="counter">{loading ? <Skeleton width={100} /> : `${count} M`}</h1> */}
      {/* <h3>
        <FaTrophy className="title" /> Elite {">"}
      </h3> */}
      
      <CoinButton />
      {/* <div className="energy-bar">
        <div className="energy" style={{ width: `${(energy / MAX_ENERGY) * 100}%` }}></div>
      </div> */}
      {/* <b style={{ color: "white" }}>{loading ? <Skeleton width={50} /> : energy}</b> */}
      <nav className="bottom-nav">
        <div className="nav-item active">
          <FaRegStar size={24} />
          <span>Ref</span>
        </div>
        <div className="nav-item">
          <FaTasks size={24} />
          <span>Task</span>
        </div>
        <div className="nav-item">
          <FaRocket size={24} />
          <span>Boost</span>
        </div>
        <div className="nav-item">
          <FaChartBar size={24} />
          <span>Stats</span>
        </div>
      </nav>
    </div>
  );
};

export default App;
