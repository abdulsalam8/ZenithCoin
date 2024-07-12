import { useState, useEffect } from 'react';
import './App.css';
import { FaRegStar, FaTasks, FaRocket, FaChartBar, FaTrophy } from 'react-icons/fa';
import Logo from './assets/logo.png';

const MAX_ENERGY = 3000;
const REFILL_RATE = 50; 
const REFILL_INTERVAL = 1000;

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [energy, setEnergy] = useState<number>(MAX_ENERGY);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((prevEnergy) => Math.min(prevEnergy + REFILL_RATE, MAX_ENERGY));
    }, REFILL_INTERVAL);

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

  return (
    <div className="app">
      <h1 className="counter">{(count)} M</h1>
      <h3 > <FaTrophy className='title' />{""}Elite {">"} </h3>
      
      <img src={Logo} alt="Logo" className="logo" onClick={handleImageClick} />
      <div className="energy-bar">
        <div className="energy" style={{ width: `${(energy / MAX_ENERGY) * 100}%` }}></div>
      </div>
        <b style={{color:"white"}}>{energy}</b>
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
}

export default App;
