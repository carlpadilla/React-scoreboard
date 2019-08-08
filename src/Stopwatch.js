import React, { Component } from 'react';

class Stopwatch extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0
  };

  componentDidMount() {
    this.setIntervalID = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.setIntervalID);
  }

  tick = () => {
    // console.log('ticking');
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState(prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
      }));
    }
  };

  handleStopwatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }));
    if (!this.state.isRunning) {
      //   console.log('starting');
      this.setState({ previousTime: Date.now() });
    }
  };

  handleReset = () => {
    this.setState({ elapsedTime: 0 });
  };

  render() {
    const time = Math.floor(this.state.elapsedTime / 1000);
    return (
      <div className='stopwatch'>
        <h2>Stopwatch</h2>
        <span className='stopwatch-time'>{time}</span>

        <button onClick={this.handleStopwatch}>
          {this.state.isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
export default Stopwatch;
