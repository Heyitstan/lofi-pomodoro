import './App.css';
import './Components/render-bg-and-music'
import generateNewBackground from "./Components/new-background-button";

function App() {
  return (
    <div id="main">

      <div id="bg">
      </div>

      <button id="random-background-btn" type="button" className="btn" onClick={generateNewBackground}>New background</button>

    </div> 
  );
}

export default App;
