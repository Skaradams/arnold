import React, { Component } from 'react';

export default class Exercise extends React.Component {
  render() {
    return(
      <div>
        <div>
        Exercise : {this.props.timer}
        </div>
        <button onClick={() => this.props.startTimer()}>
        Start
        </button>
      </div>
    );
  }
}
