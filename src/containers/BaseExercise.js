import { connect } from 'react-redux';
import Exercise from '../components/Exercise.js';

const mapStateToProps = (state, ownProps) => {
  return {
    timer: state.exercise.timer,
    name: state.exercise.name
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    startTimer: () => {
      dispatch({type: 'START_TIMER'});
    }
  }
}

const BaseExercise = connect(
  mapStateToProps,
  mapDispatchToProps
)(Exercise);
