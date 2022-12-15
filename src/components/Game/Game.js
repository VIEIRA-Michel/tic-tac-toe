import { useState, useEffect } from "react";
import Board from '../Board/Board';
import useModal from "../../hooks/useModal";
import Modal from "../Modal/Modal";
function Game() {
    const initialState = {
        winner: "",
        squareIlluminate: [],
        squareX: [],
        squareO: [],
        turn: 0,
        grid: [
            { value: null, empty: true },
            { value: null, empty: true },
            { value: null, empty: true },
            { value: null, empty: true },
            { value: null, empty: true },
            { value: null, empty: true },
            { value: null, empty: true },
            { value: null, empty: true },
            { value: null, empty: true }
        ],
        playerOneScore: 0,
        playerTwoScore: 0,
        noWinner: 0,
    }

    const { isShowing, toggle } = useModal();
    const [winner, setWinner] = useState(initialState.winner);
    const [squareIlluminate, setSquareIlluminate] = useState(initialState.squareIlluminate);
    const [squareX, setSquareX] = useState(initialState.squareX);
    const [squareO, setSquareO] = useState(initialState.squareO);
    const [turn, setTurn] = useState(initialState.turn);
    const [grid, setGrid] = useState(initialState.grid);
    const [playerOneScore, setPlayerOneScore] = useState(initialState.playerOneScore)
    const [playerTwoScore, setPlayerTwoScore] = useState(initialState.playerTwoScore)
    const [noWinner, setNoWinner] = useState(initialState.noWinner)

    function isOdd(num) { return num % 2; }

    function nextTurn(id) {
        let tmpGrid = grid;
        if (tmpGrid[id].value === null) {
            tmpGrid.map((element, index) => {
                if (id === index) {
                    if (isOdd(turn) === 1) {
                        element.value = "X";
                        setSquareX([...squareX, id]);
                    } else {
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
    };

    function nextRound() {
        if (winner === "X") {
            setPlayerOneScore(playerOneScore + 1);
        } else if (winner === "O") {
            setPlayerTwoScore(playerTwoScore + 1);
        } else {
            setNoWinner(noWinner + 1);
        }
        setGrid(initialState.grid);
        setSquareO(initialState.squareO);
        setSquareX(initialState.squareX);
        setTurn(initialState.turn);
        setSquareIlluminate(initialState.squareIlluminate);
        setWinner(initialState.winner);
    };

    function clearGrid() {
        setGrid(initialState.grid);
        setSquareO(initialState.squareO);
        setSquareX(initialState.squareX);
        setTurn(initialState.turn);
    }

    useEffect(() => {
        console.log(turn);
        if (squareX.length >= 3 || squareO.length >= 3) {
            if (isOdd(turn) === 1) {
                calculateWinner("O", squareO);
            } else {
                calculateWinner("X", squareX);
            }
            if (turn === grid.length && calculateWinner("O", squareO) === false & calculateWinner("X", squareX) === false) {
                setWinner("NOBODY");
                toggle()
            }
        }
        // eslint-disable-next-line
    }, [turn, squareO, squareX])

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
                setSquareIlluminate([a, b, c]);
                setWinner(player);
                toggle();
                return true;
            }
        }
        return false;
    }
    return (
        <>
            <Board squares={grid} turn={turn} squareIlluminate={squareIlluminate} winner={winner} onClick={nextTurn} clearGrid={clearGrid} playerOneScore={playerOneScore} playerTwoScore={playerTwoScore} noWinner={noWinner} />
            <Modal isShowing={isShowing} hide={toggle} winner={winner} continuePlaying={nextRound} />
        </>
    )
}

export default Game;