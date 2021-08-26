import { useState } from 'react';

const TimerButtons = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const toggle = () => setIsPlaying(!isPlaying);

  return (

  <div>
    <div id="button-container">

    <button
      className={isPlaying ? 'play-btn' : 'pause-btn'}
      className="play-pause-btn btn"
      onClick={toggle}
    >
      {isPlaying ? 'play' : 'pause'}
    </button>

    <button
      className="reset-btn btn"
      // onClick={reset} 
    >reset</button>
    
    </div>
    </div>
  );
}

export default TimerButtons;

