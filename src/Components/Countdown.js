import React from "react";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsElapsed: 3 //time in seconds
    };
  }

  getHours() {
    return ("0" + Math.floor(this.state.secondsElapsed / 3600)).slice(-2);
  }

  getMinutes() {
    return ("0" + Math.floor((this.state.secondsElapsed % 3600) / 60)).slice(-2);
  }

  getSeconds() { 
    this.stopTime()
    return ("0" + (this.state.secondsElapsed % 60)).slice(-2);
  }

  startTime() {
    if (this.state.secondsElapsed!==0) {
      var _this = this;
      this.countdown = setInterval(function() {
        _this.setState({ secondsElapsed: _this.state.secondsElapsed - 1 });
      }, 1000);
    }
  }

  resetTime() {
    this.reset = this.setState({
      secondsElapsed: (this.state.secondsElapsed = 1500)
    });
  }

  pauseTime() {
    clearInterval(this.countdown);
  }


  stopTime() {
    if (this.state.secondsElapsed===0) {
      this.pauseTime()
      const alarm = document.getElementById('alarm')
      alarm.volume = 0.3
      alarm.play()
    }
  }

  
  

  render() {
    return (
      <div className="countdownTimer">
        <h1>
          {this.getHours()}:{this.getMinutes()}:{this.getSeconds()}
        </h1>
        <audio id='alarm' src="https://onlineclock.net/audio/options/default.mp3" type='audio/mpeg'/>

        <button id="countdown-buttons" onClick={() => this.startTime()}>Start</button>
        <button id="countdown-buttons" onClick={() => this.pauseTime()}>Pause</button>
        <button id="countdown-buttons" onClick={() => this.resetTime()}>Reset</button>
      </div>
    );
  }
}