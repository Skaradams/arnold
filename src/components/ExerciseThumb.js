import React, { Component } from 'react';

const ExerciseThumb = ({name, charge, reps, rest}) => {
  console.log(name);
  return(
    <div className="exercise-thumb">
      <h3>
        { name }
      </h3>
      <div>
        { charge }kg - { reps } reps
      </div>
      <div>
        rest : { rest }secs
      </div>
    </div>
  )
}

export default ExerciseThumb;
