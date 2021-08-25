import './App.css';
import './Components/render-bg-and-music'
// import generatebackground from "./Components/new-background-button";
import MusicPlayer from "./Components/soundcloud-player";
import Background from './Components/giphy'
import SpotifyPlayer from "./Components/spotify";
// import Timer from './Components/timer';

function App() {
  return (
    <div id="main">
      <MusicPlayer />
      <SpotifyPlayer />
      {/* <Timer /> */}

      <div id="bg">
        <Background />
      </div>
      
    </div> 
  );
}

export default App;
