import React, { Component } from 'react';

const Exercise = ({name, timer, startTimer}) => (
  <div>
    <div>
      Exercise {name} : {timer}
    </div>
    <button onClick={() => startTimer()}>
      Start
    </button>
  </div>
)
export default Exercise;
