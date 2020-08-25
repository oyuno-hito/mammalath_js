import React, { useState, useEffect } from 'react';
import './App.css';
import { Board, InitBoard } from './Board';
import Navigator from './Navigator';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Controller from './Controller';
function App() {
  const [stepNumber, setStepNumber] = useState(0)
  const [boardHistory, setBoardHistory] = useState([InitBoard()])
  // console.log(boardHistory)
  const [candidate, setCandidate] = useState(Array(36).fill(0))
  // console.log(candidate)

  return (
    // <Grid container alignItems="center" justify="center">
    <div>
      <div className="title">Mammalath</div>
      <div className="App">
        <Grid container alignItems="center" justify="center">
          <Grid item xs={12} sm={8} className="controller-board">
            <Controller
              boardHistory={boardHistory} setBoardHistory={setBoardHistory}
              stepNumber={stepNumber} setStepNumber={setStepNumber}
              candidate={candidate} setCandidate={setCandidate}
            />
            <Board board={boardHistory[stepNumber]} candidate={candidate} setCandidate={setCandidate} />
          </Grid>
          <Grid item xs={12} sm={4} className="navigator">
            <Navigator />
          </Grid>
          {/* </Grid> */}

        </Grid>
      </div>
    </div>
  );
}

export default App;
