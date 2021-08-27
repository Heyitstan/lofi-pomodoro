import './App.css';
import MusicPlayer from "./Components/soundcloud-player";
import Background from './Components/giphy'
import SpotifyPlayer from "./Components/spotify";
// import TimerButtons from './Components/timer-buttons';
import TimerDisplay from './Components/timer-display';

import DateTime from './Components/clock';

function App() {
  return (
    <div id="main">
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
