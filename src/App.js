import { createStore } from 'redux'
import React, { Component } from 'react';
import logo from './logo.svg';
import BaseExercise from './containers/BaseExercise.js';
import './App.css';

// function arnold(state = {
//     REST_TIME: 10,
//     exercise: {
//         timer: 0
//     }
// }, action) {
//   switch (action.type) {
//   'INCREMENT_TIMER':
//     if(state.timer < state.REST_TIME) {
//       return state.timer + 1;
//     } else {
//       this.setState(
//         Object.assign({}, this.state, {
//           timer: 0
//         })
//       )
//     }
//   default:
//     return state
//   }
// }
// let store = createStore(arnold)
// store.subscribe(() =>
//   console.log(store.getState())
// )
//
// store.dispatch({ type: 'START_TIMER' })

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       timer: 0,
//       restTime: 10
//     }
//   }
//   startTimer(timer=0) {
//     if(timer < this.state.restTime) {
//       timer = timer + 1;
//       this.setState(
//         Object.assign({}, this.state, {
//           timer: timer
//         })
//       )
//       setTimeout(() => {
//         this.startTimer(timer)
//       }, 1000);
//     } else {
//       this.setState(
//         Object.assign({}, this.state, {
//           timer: 0
//         })
//       )
//     }
//   }
//   render() {
//     return (
//       <Exercise name="Blabla" timer={this.state.timer} startTimer={() => this.startTimer()}>
//
//       </Exercise>
//     );
//   }
// }
const App = () => (
  <div>
    <BaseExercise>
    </BaseExercise>
  </div>
)
export default App;
