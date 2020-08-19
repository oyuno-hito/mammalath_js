import React from 'react';
import './Board.css'
function Square(props) {
    return (
        <button className={"square-" + props.row + props.line} onClick={props.onClick}>
            {props.line}-{props.row}
        </button>
    );
}
function Board() {
    const board_num_sqrt = 6
    const board_serial = [...Array(board_num_sqrt).keys()]

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
    console.log(board)


    return <div className="App">
        <header className="App-header-none">
            Mammalath
        </header>
        {board}
    </div>
}

export default Board;