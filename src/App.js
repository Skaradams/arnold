import React, { Component } from 'react';
import logo from './logo.svg';
import Exercise from './exercise/Exercise.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
      restTime: 10
    }
  }
  startTimer(timer=0) {
    if(timer < this.state.restTime) {
      timer = timer + 1;
      this.setState(
        Object.assign({}, this.state, {
          timer: timer
        })
      )
      setTimeout(() => {
        this.startTimer(timer)
      }, 1000);
    } else {
      this.setState(
        Object.assign({}, this.state, {
          timer: 0
        })
      )
    }
  }
  render() {
    return (
      <Exercise name="Blabla" timer={this.state.timer} startTimer={() => this.startTimer()}>

      </Exercise>
    );
  }
}

export default App;
