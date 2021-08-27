import React, { useState, useEffect } from 'react';

const TimerDisplay = () => {
  const [duration, setDuration] = useState(1500);
  const [minutes, setMinutes] = useState('25');
  const [seconds, setSeconds] = useState('0');
  const [isActive, setIsActive] = useState(false);  


  function dropdown() {
    document.getElementById('myDropdown').classList.toggle('show');
  }

  function toggle(event) {
    // if (isActive) {
    //   setDuration(event.target.value);
    // } else {
    //   setIsActive(!isActive)
    // }
    setDuration(event.target.value)
    setIsActive(!isActive)
    document.getElementById('myDropdown').classList.remove('show');
  }

  function toggleStart() {
    setIsActive(!isActive);
    document.getElementById('myDropdown').classList.remove('show');
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
        if (duration >= 0) {
          setDuration(duration => duration - 1);
          setMinutes(parseInt(duration / 60, 10));
          setSeconds(parseInt(duration % 60, 10));
        } else if (duration <= 0) {
          const alarm = document.getElementById('alarm');
          alarm.volume = 0.3;
          alarm.currentTime = 17;
          alarm.play();
          console.log(alarm.duration);
          setIsActive(false);
          clearInterval(interval);
        }
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
      <audio id='alarm' src='https://onlineclock.net/audio/options/applause.mp3' type='audio/mpeg'/>


      <div id="button-container">
        <button className={`btn btn-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggleStart}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>

        <div class="dropdown">
          <button id="dropdown-button" className="btn" onClick={dropdown}>Timer Options</button>
          <div id="myDropdown" class="dropdown-content">
            <button value="1500" className="btn" onClick={toggle}>
              25 minutes
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
      </div>
    </div>
  );
}

export default TimerDisplay