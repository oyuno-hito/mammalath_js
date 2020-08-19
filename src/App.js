import React, { useState, useEffect } from 'react';
import './App.css';
import { Board, InitBoard } from './Board';
import Navigator from './Navigator';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
function App() {
  const [stepNumber, setStepNumber] = useState(0)
  const [boardHistory, setBoardHistory] = useState([InitBoard()])
  console.log(stepNumber)
  return (
    // <Grid container alignItems="center" justify="center">
    <div className="App">
      <Grid container alignItems="center" justify="center">
        {/* <Grid container justify="center"> */}
        {/* <Grid item xs={12}> */}
        {/* 
          <div>
          <button onClick={() => setStepNumber(stepNumber + 1)}>{stepNumber}</button>
          </div> 
            */}
        <Board board={boardHistory[0]} />
        <Navigator />
        {/* </Grid> */}

      </Grid>
    </div>
  );
}

export default App;
