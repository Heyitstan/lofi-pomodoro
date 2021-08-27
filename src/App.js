import './App.css';
import './Components/render-bg-and-music'
// import generatebackground from "./Components/new-background-button";
import MusicPlayer from "./Components/soundcloud-player";
import Background from './Components/giphy'
import SpotifyPlayer from "./Components/spotify";
// import TimerButtons from './Components/timer-buttons';
import TimerDisplay from './Components/timer-display';
import Countdown from './Components/Countdown';
import DateTime from './Components/clock';

function App() {
  return (
    <div id="main">
      <div id='countdown'><Countdown /></div>
      <MusicPlayer />
      <SpotifyPlayer />

      <TimerDisplay />
      {/* <TimerButtons /> */}

      <DateTime />
      <div id="bg">
        <Background />
      </div>
      
    </div> 
  );
}

export default App;
