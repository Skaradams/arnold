import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExerciseThumb from './components/ExerciseThumb';
import exercises from './test_data/exercises';

const App = () => {
  const exerciseComponents = exercises.map((exercise, index) => {
    return <ExerciseThumb key={ index } {...exercise} />
  });
  return (
    <div className="app" >
      <div className="container">
        <div className="exercise-list row">
          { exerciseComponents }
        </div>
      </div>
    </div>
  )
};
export default App;
