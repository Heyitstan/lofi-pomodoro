import './App.css';
import './Components/initial-render'
import generateNewBackground from "./Components/new-background-button";
import pausePlayTimer from "./Components/pause-play-timer";
import resetTimer from "./Components/reset-timer";


function App() {
  return (
    <div id="main">
      <MusicPlayer />
      <SpotifyPlayer />

      <div id="timer-container">
      <div id="button-container">
        <button id="pausePlayButton" className="btn pause" onClick={pausePlayTimer}>pause</button>
        <button id="resetButton" className="btn" onClick={resetTimer}>reset</button>
      </div>
    </div>

    <div id="timer-container">
      <div id="button-container">
        <button id="pausePlayButton" className="btn pause" onClick={pausePlayTimer}>pause</button>
        <button id="resetButton" className="btn" onClick={resetTimer}>reset</button>
      </div>
    </div>

      <button id="random-background-btn" type="button" className="btn" onClick={generateNewBackground}>New background</button>

    </div> 
  );
}

export default App;
