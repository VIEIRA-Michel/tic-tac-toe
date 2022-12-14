// import { useState, useEffect } from "react";
import { useState } from "react";
import Board from '../Board/Board';
import useModal from "../../hooks/useModal";
import Modal from "../Modal/Modal";
function Game() {
    const { isShowing, toggle } = useModal();
    const [winner, setWinner] = useState("");
    const [squareIlluminate, setSquareIlluminate] = useState([]);
    const [squareX, setSquareX] = useState([]);
    const [squareO, setSquareO] = useState([]);
    const [turn, setTurn] = useState(0);
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

    function nextTurn(id) {
        let tmpGrid = grid;
        tmpGrid.map((element, index) => {
            if (id === index) {
                if (isOdd(turn) === 1) {
                    if (squareO.length >= 3) {
                        calculateWinner("O", squareO);
                    }
                    element.value = "X";
                    setSquareX([...squareX, id]);
                } else {
                    // console.log(squareX.length)
                    if (squareX.length >= 3) {
                        calculateWinner("X", squareX);
                    }
                    element.value = "O";
                    setSquareO([...squareO, id]);
                }
                element.empty = false;
            }
            return element;
        })
        setGrid(tmpGrid);
        setTurn(turn + 1);
    }

    // useEffect(() => {
    //     if (squareX.length >= 3 || squareO.length >= 3) {
    //         if (isOdd(turn) === 1) {
    //             calculateWinner("O", squareO);
    //         } else {
    //             calculateWinner("X", squareX);
    //         }
    //     }
    // }, [turn, squareO, squareX])

    function calculateWinner(player, checkingArray) {
        const linesWinning = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < linesWinning.length; i++) {
            const [a, b, c] = linesWinning[i];
            if (checkingArray.includes(a) && checkingArray.includes(b) && checkingArray.includes(c)) {
                // console.log(player);
                setSquareIlluminate([a, b, c]);
                setWinner(player);
                toggle();
                return;
            }
        }
        return;
    }
    return (
        <>
            <Board squares={grid} turn={turn} squareIlluminate={squareIlluminate} winner={winner} onClick={nextTurn} />
            <Modal isShowing={isShowing} hide={toggle} winner={winner} />
        </>
    )
}

export default Game;