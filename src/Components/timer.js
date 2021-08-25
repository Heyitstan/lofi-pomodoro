import { useState } from 'react';

const Timer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const toggle = () => setIsPlaying(!isPlaying);



  return (

  <div>
    <div id="timer"></div>

    <div id="button-container">

    <button
      // className={isPlaying ? 'play-btn' : 'pause-btn'}
      className="play-pause-btn"
      onClick={toggle}
    >
      {isPlaying ? 'Play' : 'Pause'}
    </button>

    {/* <Button
      className="reset-btn"
      onClick={reset} 
    ></Button> */}
    
    </div>
    </div>
  );
}



export default Timer;



// var startTimer = (duration, display) => {
//     var timer = duration;
//     var minutes;
//     var seconds;

//     setInterval(function() {
//       minutes = parseInt(timer / 60, 10); // takes duration in milliseconds and divides it by 60 to get minutes
//       seconds = parseInt(timer % 60, 10); // takes duration and modulos 60 to get seconds

//       minutes = minutes < 10 ? "0" + minutes : minutes; // if minutes is less than 10, display 0 and minutes remaining
//       seconds = seconds < 10 ? "0" + seconds : seconds; // if seconds is less than 10, display 0 and seconds remaining

//       display.textContent = (`${minutes}: ${seconds}`);

//       if (--timer < 0) {
//         timer = duration;
//       }
//     }, 1000);
//   }

// var timer = function() {
//   var mainDiv = document.getElementById('main'); // grabs #main

//   var myTimer = document.createElement('div'); // creates a new div element for the timer;
//   myTimer.setAttribute('id', 'timer');
//   myTimer.setAttribute('id', 'timer'); 
 
//   mainDiv.appendChild(myTimer); // appends myTimer div to mainDiv

//   var timerDisplay = document.querySelector('#timer');
//   var twentyFiveMinutes = 60 * 25;
//   var display = timerDisplay;
//   startTimer(twentyFiveMinutes, display);

//   var buttonContainer = document.createElement('div');
//   buttonContainer.setAttribute('id', 'button-container');

//   var pausePlayButton = document.createElement('button');
//   pausePlayButton.setAttribute('type', 'button');
//   pausePlayButton.setAttribute('id', 'pausePlayButton');
//   pausePlayButton.setAttribute('class', 'btn btn-primary');
//   pausePlayButton.innerHTML = 'start';
  

//   var resetButton = document.createElement('button');
//   resetButton.setAttribute('type', 'button');
//   resetButton.setAttribute('id', 'resetButton');
//   resetButton.setAttribute('class', 'btn btn-primary');
//   resetButton.innerHTML = 'reset';

//   buttonContainer.appendChild(pausePlayButton);
//   buttonContainer.appendChild(resetButton);

//   mainDiv.appendChild(buttonContainer);





// }

