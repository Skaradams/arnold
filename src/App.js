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
  startTimer() {
    // while(this.state.timer < this.state.restTime) {
    //   setTimeout(() => {
    //     this.state.timer = this.state.timer + 1;
    //   }, 1000);
    // }
    this.state.timer = this.state.timer + 1;
    this.state = Object.assign({}, this.state, {
      timer: this.state.timer + 1
    })
    console.log("timer", this.state);
  }
  render() {
    return (
      <Exercise name="Blabla" timer={this.state.timer} startTimer={() => this.startTimer()}>

      </Exercise>
    );
  }
}

export default App;
