import { useState } from "react";
import Square from "../Square/Square";
import './Board.scss';
function Board() {

    const [grid, setGrid] = useState([
        { value: null, empty: true },
        { value: null, empty: true },
        { value: null, empty: true },
        { value: null, empty: true },
        { value: null, empty: true },
        { value: null, empty: true },
        { value: null, empty: true },
        { value: null, empty: true },
        { value: null, empty: true }
    ]);
    function isOdd(num) { return num % 2; }
    for (let i = 0; i < 30; i++) {
        console.log(`${i} is ` + isOdd(i));
    }
    return (
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <div className="top-board d-flex justify-content-sb">
                <div className="icon-symbol d-flex flex-row">
                    <div className="symbol x">X</div>
                    <div className="symbol y">O</div>
                </div>
                <div className="turn-information d-flex justify-content-center align-items-center">
                    <div>X turn</div>
                </div>
                <div className="clear-board">
                    <button>
                        <i className="fa-solid fa-rotate-left"></i>
                    </button>
                </div>
            </div>
            <div className="board d-flex justify-content-center align-items-center">
                <div className="board-container d-flex flex-wrap flex-row">{grid.map((e, index) =>
                    <Square key={index} value={e.value} empty={e.empty} id={index} />
                )}</div>
            </div>
            <div className="score-board d-flex flex-fill justify-content-sb">
                <div className="win d-flex flex-column p-10">
                    <div className="win-info mb-10">
                        X (YOU)
                    </div>
                    <div className="win-score">0</div>
                </div>
                <div className="draw d-flex flex-column p-10">
                    <div className="draw-info mb-10">
                        DRAW
                    </div>
                    <div className="draw-score">0</div>
                </div>
                <div className="loose d-flex flex-column p-10">
                    <div className="loose-info mb-10">
                        O (CPU)
                    </div>
                    <div className="loose-score">0</div>
                </div>
            </div>
        </div>
    )
}

export default Board;