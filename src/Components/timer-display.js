// start timer function
const TimerDisplay =  function () {
  return (
    <div id="timer">timer loading...</div>
  )
};

const startTimer = (duration) => {
  let timer = duration;
  let minutes, seconds;

  setInterval(function() {
    minutes = parseInt(timer / 60, 10); // takes duration provided in milliseconds and divides by 60 to get minutes

    seconds = parseInt(timer % 60, 10); // takes duration provided in milliseconds and modulo 60 to get seconds

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let display = document.getElementById('timer');
    display.textContent = (`${minutes}: ${seconds}`);

    if (--timer < 0) {
      timer = duration;
    }

  }, 1000);
}

const twentyFiveMinutes = 60 * 25;
startTimer(twentyFiveMinutes);



export default TimerDisplay