import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { fromJS } from 'immutable';
import App from './App';
import './index.css';

function arnoldApp(state = fromJS({
    REST_TIME: 10,
    exercise: {
        timer: 0,
        name: 'test'
    }
}), action) {
  console.log(state);
  let newState = state;
  switch (action.type) {
    case 'START_TIMER':

      if(newState.get('exercise').get('timer') < newState.get('REST_TIME')) {
        newState = newState.set('exercise',
            newState.get('exercise').set('timer',
                newState.get('exercise').get('timer') + 1
            )
        );
        console.log(newState.get('exercise').get('timer'));
        // state.exercise.timer += 1;
      } else {
        // this.setState(
        //   Object.assign({}, this.state, {
        //     timer: 0
        //   })
        // )
      }
  }
  return newState;
}

let store = createStore(arnoldApp);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
