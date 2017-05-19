import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.css';

function arnoldApp(state = {
    REST_TIME: 10,
    exercise: {
        timer: 0,
        name: 'test'
    }
}, action) {
  switch (action.type) {
    case 'START_TIMER':
      if(state.exercise.timer < state.REST_TIME) {
        state.exercise.timer += 1;
      } else {
        // this.setState(
        //   Object.assign({}, this.state, {
        //     timer: 0
        //   })
        // )
      }
  }
  return state;
}

let store = createStore(arnoldApp);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
