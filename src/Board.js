import React from 'react';
import Box from '@material-ui/core/Box';
import './Board.css'
import { Animal, Player, Stone } from './Animal'
import Grid from '@material-ui/core/Grid';
function Square(props) {
    return (
        //<Grid item xs={1}>
        <button className={"square-" + props.row + props.line + " animal-" + Animal[props.value.animal]} onClick={props.onClick}>
            {//Stone[Player[props.value.stone]]
                Stone[-1]
            }
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
    console.log(board)
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
                            row={String.fromCharCode("A".charCodeAt(0) + row_num)}
                            line={line_num + 1}
                            value={value}
                        />
                    )
                }
            </Box>
    )
    console.log(view)


    return (
        <Grid item xs={12} sm={6} alignItems="center" justify="center">
            {/* <span id="board"> */}
            {view}
            {/* </span> */}
        </Grid>
    )
}
