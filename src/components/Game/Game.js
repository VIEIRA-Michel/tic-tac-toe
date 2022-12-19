import { useState, useEffect } from "react";
import Board from '../Board/Board';
import useModal from "../../hooks/useModal";
import Modal from "../Modal/Modal";
import { useLocation } from 'react-router-dom';

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

    const { isShowing, toggle } = useModal();
    const [winner, setWinner] = useState(initialState.winner);
    const [squareIlluminate, setSquareIlluminate] = useState(initialState.squareIlluminate);
    const [squareX, setSquareX] = useState(initialState.squareX);
    const [squareO, setSquareO] = useState(initialState.squareO);
    const [turn, setTurn] = useState(initialState.turn);
    const [grid, setGrid] = useState(initialState.grid);
    const [playerOneScore, setPlayerOneScore] = useState(initialState.playerOneScore);
    const [playerTwoScore, setPlayerTwoScore] = useState(initialState.playerTwoScore);
    const [noWinner, setNoWinner] = useState(initialState.noWinner);

    const location = useLocation();
    const { symbolPlayer, symbolOpponent, playWithCpu } = location.state;
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
        if (playWithCpu && !winner) {
            console.log("play with cpu")
            if (turn === grid.length && calculateWinner("O", squareO) === false & calculateWinner("X", squareX) === false) {
                setWinner("NOBODY");
                toggle()
            } else {
                if (symbolOpponent === "O") {
                    if (isOdd(turn) === 0 && calculateWinner("X", squareX) === false) {
                        if (turn === 0) {
                            let random = Math.floor(Math.random() * 9);
                            nextTurn(random);
                        } else {
                            let idToPlay = analyze(symbolPlayer);
                            setTimeout(() => {
                                nextTurn(idToPlay);
                            }
                                , 500)
                        }
                    }
                } else {
                    if (isOdd(turn) === 1 && calculateWinner("O", squareO) === false) {
                        let idToPlay = analyze(symbolPlayer);
                        setTimeout(() => {
                            nextTurn(idToPlay);
                        }
                            , 500)
                    }
                }
            }
        }
        // eslint-disable-next-line
    }, [winner, turn, squareO, squareX])

    function calculateWinner(player, checkingArray) {
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

    // let arr = [
    //     { id: 0, count: 0 },
    //     { id: 1, count: 0 },
    //     { id: 2, count: 0 },
    //     { id: 3, count: 0 },
    //     { id: 4, count: 0 },
    //     { id: 5, count: 0 },
    //     { id: 6, count: 0 },
    //     { id: 7, count: 0 },
    //     { id: 8, count: 0 }
    // ]

    function analyze(symbolPlayer) {
        let arrayToAnalyze;
        let arrayCpu;
        let idToPlay;
        if (symbolPlayer === "X") {
            arrayToAnalyze = squareX;
            arrayCpu = squareO;
        } else {
            arrayToAnalyze = squareO;
            arrayCpu = squareX;
        }

        for (let i = 0; i < linesWinning.length; i++) {
            const [a, b, c] = linesWinning[i];

            if (arrayToAnalyze.includes(a) && arrayToAnalyze.includes(b) && grid.find((element, index) => index === c && element.value === null)) {
                idToPlay = c;
            } else if (arrayToAnalyze.includes(a) && arrayToAnalyze.includes(c) && grid.find((element, index) => index === b && element.value === null)) {
                idToPlay = b;
            } else if (arrayToAnalyze.includes(b) && arrayToAnalyze.includes(c) && grid.find((element, index) => index === a && element.value === null)) {
                idToPlay = a;
            } else if (arrayToAnalyze.includes(a) && grid.find((element, index) => index === b && element.value === null)) {
                idToPlay = b;
            } else if (arrayToAnalyze.includes(a) && grid.find((element, index) => index === c && element.value === null)) {
                idToPlay = c;
            } else if (arrayToAnalyze.includes(b) && grid.find((element, index) => index === a && element.value === null)) {
                idToPlay = a;
            } else if (arrayToAnalyze.includes(b) && grid.find((element, index) => index === c && element.value === null)) {
                idToPlay = c;
            } else if (arrayToAnalyze.includes(c) && grid.find((element, index) => index === a && element.value === null)) {
                idToPlay = a;
            } else if (arrayToAnalyze.includes(c) && grid.find((element, index) => index === b && element.value === null)) {
                idToPlay = b;
            }
        }
        return idToPlay;
    }



    // for (let i = 0; i < linesWinning.length; i++) {
    //     for (let j = 0; j < linesWinning[i].length; j++) {
    //         arr[linesWinning[i][j]].count++
    //     }
    // }

    // function compare(a, b) {
    //     let indexOfA = arr.indexOf(a);
    //     let indexOfB = arr.indexOf(b);

    //     if (a.count < b.count) {
    //         if (indexOfA < indexOfB) {
    //             arr.splice(indexOfB, 1);
    //             arr.splice(indexOfA, 0, b)
    //         }
    //     }
    //     if (a.count > b.count) {
    //         if (indexOfA > indexOfB) {
    //             arr.splice(indexOfA, 1);
    //             arr.splice(indexOfB, 0, a)
    //         }
    //     }
    // }

    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = arr.length - 1; j > 0; j--) {
    //         compare(arr[i], arr[j])
    //     }
    // }
    return (
        <>
            <Board squares={grid} turn={turn} squareIlluminate={squareIlluminate} winner={winner} onClick={nextTurn} clearGrid={clearGrid} playerOneScore={playerOneScore} playerTwoScore={playerTwoScore} noWinner={noWinner} />
            <Modal isShowing={isShowing} hide={toggle} winner={winner} continuePlaying={nextRound} />
        </>
    )
}

export default Game;