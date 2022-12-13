import { useState } from "react";
import Square from "./Square";
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

    return (
        <div className="board">
            <div className=" d-flex flex-wrap w600 h600 flex-row">{grid.map((e, index) =>
                <Square key={index} value={e.value} empty={e.empty} />
            )}</div>
        </div>
    )
}

export default Board;