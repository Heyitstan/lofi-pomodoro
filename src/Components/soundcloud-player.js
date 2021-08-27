import piano from './mp3s/Piano-music.mp3'
import { useEffect } from 'react';


var music = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/325736605&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=&visual=true";

var MusicPlayer = function () {
    // useEffect runs the inner function after render
    useEffect(() => {
      const rain = document.getElementById('audio-rain');
      const piano = document.getElementById('audio-piano')
      // If audioNode isn't found, do nothing
      if (!rain || !piano) {
        return;
      }
  
      piano.volume = 0.2;
      rain.volume = 0.2;
    }, []); // Empty array here means "only run it once on page load"
  return (
    <div>
    {/* <iframe src= {music} title="music" id="music-player" width="220" height="100" scrolling="no" frameBorder="yes" /> */}
    <p id='piano-title'>Relaxing Piano</p>
    <audio id="audio-piano" controls controlsList='nodownload' loop='true' src={piano} type='audio/mpeg' />
    <p id='rain-title'>Rain</p>
    <audio id="audio-rain" controls controlsList='nodownload' loop='true' src="https://www.soundjay.com/nature/sounds/rain-07.mp3" type='audio/mpeg' />
    </div>
  )
}
//   var mainDiv = document.getElementById('main'); // grabs #main
//   var musicPath = music; // initialises string variable musicPath
//   var myPlayer = document.createElement('iframe'); // creates a new iframe element
  
//   // add attributes to myPlayer
//   myPlayer.setAttribute('src', musicPath);
//   myPlayer.setAttribute('title', 'music');
//   myPlayer.setAttribute('id', 'music-player');
//   myPlayer.setAttribute('width', '220');
//   myPlayer.setAttribute('height', '100');
//   myPlayer.setAttribute('scrolling', 'no');
//   myPlayer.setAttribute('frameborder', 'yes');
  
//   mainDiv.appendChild(myPlayer); // adds a child element (myPlayer) to myDiv
// }

export default MusicPlayer