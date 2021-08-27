import piano from './mp3s/Piano-music.mp3'
import { useEffect } from 'react';

var MusicPlayer = function () {
    // useEffect runs the inner function after render
    useEffect(() => {
      const rain = document.getElementById('audio-rain');
      const piano = document.getElementById('audio-piano')
      
      // If audioNode isn't found, do nothing
      if (!rain || !piano) {
        return;
      }
  
      piano.volume = 0.6;
      rain.volume = 0.4;
    }, []); // Empty array here means "only run it once on page load"

  return (
    <div>
      <p id='piano-title'>Relaxing Piano</p>
      <audio id="audio-piano" controls controlsList='nodownload' loop='true' src={piano} type='audio/mpeg' />
      <p id='rain-title'>Rain</p>
      <audio id="audio-rain" controls controlsList='nodownload' loop='true' src="https://assets.mixkit.co/sfx/preview/mixkit-light-rain-looping-1249.mp3" type='audio/mpeg' />
    </div>
  )
}
// https://www.soundjay.com/nature/sounds/rain-07.mp3
// alternate rain link

export default MusicPlayer