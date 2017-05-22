import { connect } from 'react-redux';
import Exercise from '../components/Exercise.js';

const mapStateToProps = (state, ownProps) => {
  console.log(state, state.get('exercise'));
  return {
    timer: state.get('exercise').get('timer'),
    name: state.get('exercise').get('name')
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

export default BaseExercise;
