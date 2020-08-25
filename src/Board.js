import React from 'react';
import Box from '@material-ui/core/Box';
import './Board.css'
import { Animal, Player, Stone } from './Animal'
import Grid from '@material-ui/core/Grid';
function Square(props) {
    const updateCandidate = (num) => {
        let tmp_candidate = props.candidate.slice()
        tmp_candidate[num] = 1 - tmp_candidate[num]
        props.setCandidate(tmp_candidate)
    }
    let classString = "square-" + String.fromCharCode("A".charCodeAt(0) + props.row_num) + (props.line_num + 1) + " animal-" + Animal[props.value.animal]
    const flatten_num = props.row_num * 6 + props.line_num
    if (props.candidate[flatten_num] === 1) { classString += " selected" }

    return (
        //<Grid item xs={1}>
        <button className={classString} onClick={() => updateCandidate(flatten_num)}>
            <Box className="stone" alignItems="center" justify="center">
                {//Stone[Player[props.value.stone]]
                    //Stone[-1]
                    Stone[props.value.stone]
                }
            </Box>
        </button>
        //</Grid>
    );
}

export function InitBoard() {
    const shuffle = ([...array]) => {
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const board_num_sqrt = 6
    let animal_board_flatten = []
    for (let animal in Animal) {
        for (let i = 0; i < board_num_sqrt; i++) {
            if (animal === "EMPTY") continue;
            animal_board_flatten.push(animal)
        }
    }
    const animal_board_flatten_shuffled = shuffle(animal_board_flatten)
    let board = []
    for (let i = 0; i < board_num_sqrt; i++) {
        let tmp_1D = []
        for (let j = 0; j < board_num_sqrt; j++) {
            tmp_1D.push(
                {
                    animal: animal_board_flatten_shuffled[i * board_num_sqrt + j],
                    stone: "EMPTY"
                }
            )
        }
        board.push(tmp_1D)
    }
    return board

}

export function Board(props) {
    //const board_num_sqrt = 6
    //const board_serial = [...Array(board_num_sqrt).keys()]

    /*
    let board = board_serial.map(

        (line_num) => {
            return <div className="board-row">
                {board_serial.map(
                    (row_num) => {
                        let row_name = String.fromCharCode("A".charCodeAt(0) + row_num)
                        return <Square row={row_name} line={line_num + 1} />
                    }
                )}
            </div>

        }
    )
    */
    let view = props.board.map(
        (line_values, line_num) =>
            <Box component="div" className="board-row">
                {
                    line_values.map(
                        (value, row_num) => <Square
                            row_num={row_num}
                            line_num={line_num}
                            value={value}
                            candidate={props.candidate}
                            setCandidate={props.setCandidate}
                        />
                    )
                }
            </Box>
    )
    // console.log(view)


    return (
        <Grid container alignItems="center" justify="center">
            <Grid item xs={12} sm={12} alignItems="center" justify="center" >
                <div id="board">
                    {view}
                </div>
            </Grid>
        </Grid>
    )
}
