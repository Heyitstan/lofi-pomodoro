import React, { useState } from 'react';


const TimerDisplay = () => {
  const [duration, setDuration] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [active, setIsActive] = useState(false);

  const handleTwentyFiveMinutesClick = () => {
      setDuration(1500);
      countdown(1500);
  }

  const countdown = (duration) => {
    setIsActive(true);
  
    setInterval(function() {
      if (duration > 0) {
        duration--;
        setMinutes(parseInt(duration / 60, 10));
        setSeconds(parseInt(duration % 60, 10));
      } else if (duration = 0) {
        clearInterval();
        alert('timer is done');
      } 
    }, 1000);
    
  }

  return (
    <div className="time">
      <p>{minutes}: {seconds}</p>
      <button className="btn time-btns" onClick={!active ?handleTwentyFiveMinutesClick : null}>
        25 minutes
      </button>
    </div>
  );
}

export default TimerDisplay


  // const handleFiveMinutesClick = () => {
  //   setDuration(300);
  //   countdown(300);
  //   toggle();
  // }

  // const handleTenMinutesClick = () => {
  //     setDuration(600);
  //     countdown(600);
  //   }

{/* <button id='five-minutes' className="btn btn-primary time-btns" onClick={handleFiveMinutesClick}>
        5 minutes
      </button>
      <button className="btn time-btns" onClick={handleTenMinutesClick}>
        10 minutes
      </button> */}


{/* <div className="container">
      <div className="time">
        <span className="minute">{minute <= 0 ? minute + '0' : minute}:</span>
        <span className="second">{second <= 0? second + '0' : second}</span>
      </div>
      <div id="button-container">
        <button className="start">{isActive ? 'Stop' : 'Start'}</button>
        <button className="reset">Reset</button>
      </div>
    </div>
       */}

// const [second, setSecond] = useState(0); // will update how many seconds are left
//   const [minute, setMinute] = useState(0); // will update how many minutes are left
//   const [isActive, setIsActive] = useState(false);
//  // nvm i should use state kate said. That timer component is essentially going to have to re-render every second to show the passage of time.


//  const startStopTimer = () => {
//   setIsActive(!isActive)

//     if (!isActive) {
//       const startTimer = setInterval(countdown, 1000);

//       const countdown = () => {
//         // code to countown here
//          // change minute to 25 and convert it to ms
//         // change second to 0 and convert it to ms
//         // function will count down in milliseconds every second by using setInterval() ?
//       };
//     } else {
//       clearInterval(countdown);
//     }
// } 


  // const [second, setSecond] = useState(0); // will update how many seconds are left
  // const [minute, setMinute] = useState(0); // will update how many minutes are left
  // const [isActive, setIsActive] = useState(false); // will track if the timer is active or not active
  // const [duration, setDuration] = useState(0.5*60);


  // const stopTimer = () => {
  //   setIsActive(false); // timer is not active
  //   clearInterval(startTimer);
  // };
  
  // let timer = duration, newMinute, newSecond;

  // const startTimer = setInterval(function() {

  //   // setMinute every second (1000ms)
  //   newMinute = parseInt(timer / 60, 10);
  //   newMinute = newMinute < 10 ? "0" + newMinute : newMinute;

  //   setMinute(newMinute);

  //   newSecond = parseInt(timer % 60, 10);
  //   newSecond = newSecond < 10 ? "0" + newSecond : newSecond;

  //   setSecond(newSecond);

  //     if (timer-- <= 0) {
  //       timer = 0;
  //       // stopTimer();
  //     };
      
  //   }, 1000);
  

  // const resetTimer = () => {
  //   setMinute(25);
  //   setSecond(0);
  //   setDuration(60*25);
  //   startTimer();
  // };

  // const toggle = () => {
  //   setIsActive(!isActive)

  //   if (!isActive) {
  //     setIsActive(true);
  //     startTimer();
  //   } else {
  //     stopTimer();
  //   } 
  // };
 

  





// // start timer function
// const TimerDisplay =  function () {

//   return (
//     <div id="timer">timer loading...</div>
//   )
// };

// const startTimer = (duration) => {
//   let timer = duration;
//   let minutes, seconds;

//   setInterval(function() {
//     minutes = parseInt(timer / 60, 10); // takes duration provided in milliseconds and divides by 60 to get minutes

//     seconds = parseInt(timer % 60, 10); // takes duration provided in milliseconds and modulo 60 to get seconds

//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     let display = document.getElementById('timer');
//     display.textContent = (`${minutes}: ${seconds}`);

//     if (timer-- < 0) {
//       timer = duration;
//     } // if timer which equals 60 * 25 milliseconds is decremented by 1 and that is less than 0, make timer equal to the original duration.
//   }, 1000);
// }

// const twentyFiveMinutes = 60 * 1;
// startTimer(twentyFiveMinutes);



// export default TimerDisplay