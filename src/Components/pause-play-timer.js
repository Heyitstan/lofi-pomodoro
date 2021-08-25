import timer from './timer';

var pausePlayTimer = () => {
  // keep track of click with state? add class 'pause' or 'play'

  var pausePlayButton = document.getElementById('pausePlayButton');

  if (pausePlayButton.classList.contains('pause')) {
    pausePlayButton.classList.remove('pause');
    pausePlayButton.textContent = 'play';
  } else {
    pausePlayButton.classList.add('pause');
    pausePlayButton.textContent = 'pause';
  }

}

export default pausePlayTimer;