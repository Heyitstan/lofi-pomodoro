var timer = () => {

  var startTimer = (duration, display) => {
      var timer = duration;
      var minutes;
      var seconds;

    setInterval(function() {
      minutes = parseInt(timer / 60, 10); // takes duration in milliseconds and divides it by 60 to get minutes
      seconds = parseInt(timer % 60, 10); // takes duration and modulos 60 to get seconds

      minutes = minutes < 10 ? "0" + minutes : minutes; // if minutes is less than 10, display 0 and minutes remaining
      seconds = seconds < 10 ? "0" + seconds : seconds; // if seconds is less than 10, display 0 and seconds remaining

      display.textContent = (`${minutes}: ${seconds}`);

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  };

  var showTimer = () => {
    var timerDiv = document.getElementById('timer-container'); // grabs #timer-container
    
    var myTimer = document.createElement('div'); // creates a new div element for the timer;
    myTimer.setAttribute('id', 'timer');
  
    timerDiv.appendChild(myTimer); // appends myTimer div to timerDiv

    var timerDisplay = document.querySelector('#timer');
    var twentyFiveMinutes = 60 * 25;
    var display = timerDisplay;
    startTimer(twentyFiveMinutes, display);
  };

showTimer();
}


export default timer
