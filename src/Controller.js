import React from 'react';
import Box from '@material-ui/core/Box';
import './Controller.css'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { Animal, Player, Stone } from './Animal'
import { Paper } from '@material-ui/core';

export default function Controller(props) {
    const resetState = (target, value) => {
        // TODO 未選択の場合は何もしない
        let tmp_board_history = JSON.parse(JSON.stringify(props.boardHistory))
        // TODO shallow コピーになっているので履歴も書き換えられている
        let tmp_board = JSON.parse(JSON.stringify(tmp_board_history[props.stepNumber]))
        // TODO 行列の修正
        for (let line = 0; line < 6; line++) {
            for (let row = 0; row < 6; row++) {
                if (props.candidate[row * 6 + line] !== 1) continue;
                tmp_board[line][row][target] = value
            }
        }
        tmp_board_history.push(tmp_board)
        props.setStepNumber(props.stepNumber + 1)
        props.setBoardHistory(tmp_board_history)
        props.setCandidate(Array(36).fill(0))
    }

    const setWhiteStones = () => {
        resetState("stone", Player.WHITE)
    }
    const setBlackStones = () => {
        resetState("stone", Player.BLACK)
    }
    const releaseAnimals = () => {
        resetState("animal", "EMPTY")
    }

    return (
        <Box className="controller">

            <Grid container alignItems="center" justify="center" >
                <Grid item sm={1} xs={3}>
                    <Button variant="contained" color="primary" onClick={() => releaseAnimals()}>
                        開放
                    </Button>
                </Grid>
                <Grid item sm={1} xs={3}>
                    <Button variant="contained" color="secondary" onClick={() => setBlackStones()}>
                        {Stone[Player.BLACK]}
                    </Button>
                </Grid>
                <Grid item sm={1} xs={3}>
                    <Button variant="contained" color="secondary" onClick={() => setWhiteStones()}>
                        {Stone[Player.WHITE]}
                    </Button>
                </Grid>
                <Grid item sm={1} xs={3}>
                    <Button variant="contained" color="inherit">
                        一手戻る
                    </Button>
                </Grid>
            </Grid>

        </Box>
    );
}