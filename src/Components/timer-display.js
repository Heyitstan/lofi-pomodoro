import React, { useState, useEffect } from 'react';

const TimerDisplay = () => {
  const [duration, setDuration] = useState(1500);
  const [minutes, setMinutes] = useState('25');
  const [seconds, setSeconds] = useState('0');
  const [isActive, setIsActive] = useState(false);  

  function toggle(event) {
    setDuration(event.target.value);
    // hide other buttons
    setIsActive(!isActive);
    
  }

  function reset() {
    setDuration(1500)
    setSeconds('0');
    setMinutes(25);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setDuration(duration => duration - 1);
        setMinutes(parseInt(duration / 60, 10));
        setSeconds(parseInt(duration % 60, 10));
        
      }, 1000);
    } else if (!isActive && duration !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, duration]);

  return (
    <div className="app">
      <div className="time">
      {minutes < 0 ? '0' + minutes : minutes}: {seconds <= 0 ? '0' + seconds : seconds}

      <div id="button-container">
        <button value="1500" className={`btn btn-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>

        <button className="btn" onClick={reset}>
          Reset
        </button>
   
        <button value="600" className="btn" onClick={toggle}>
          10 minutes
        </button>

        <button value="300" className="btn" onClick={toggle}>
          5 minutes
        </button>


      </div>
      </div>
      
    </div>
   
    
  );
}

export default TimerDisplay