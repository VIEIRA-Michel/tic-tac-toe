import Square from "../Square/Square";
import './Board.scss';
import O from '../../assets/icons/o.svg';
import X from '../../assets/icons/x.svg';
import { Link } from "react-router-dom";
function Board({ squares, turn, squareIlluminate, winner, onClick, clearGrid, playerOneScore, playerTwoScore, noWinner }) {
    return (
        <div className="container central-container d-flex justify-content-sb align-items-center flex-column">
            <div className="top-board d-flex justify-content-sb">
                <Link to={'/'} className="icon-symbol d-flex flex-row">
                    <div className="icon-symbol__x">
                        <img src={X} alt="symbol-X" />
                    </div>
                    <div className="icon-symbol__o">
                        <img src={O} alt="symbol-O" />
                    </div>
                </Link>
                <div className="turn-information d-flex justify-content-center align-items-center">
                    <div className="turn-information__shadow">
                        <div className="turn-information__shadow__top-layer">
                            {
                                winner ? (
                                    <span>FINISH</span>
                                ) :
                                    (<>
                                        <img src={turn % 2 === 1 ? O : X} alt={turn % 2 === 1 ? "symbol-O" : "symbol-X"} />
                                        <span>TURN</span>
                                    </>)
                            }
                        </div>
                    </div>
                </div>
                <div className="clear-board">
                    <button onClick={clearGrid}>
                        <span>
                            RESET GRID
                        </span>
                    </button>
                </div>
            </div>
            <div className="board d-flex justify-content-center align-items-center">
                <div className="board-container d-flex justify-content-center flex-wrap flex-row">
                    {squares.map((e, index) =>
                        <Square key={index} value={e.value} empty={e.empty} id={index} onClick={() => onClick(index)} winner={winner} squareIlluminate={squareIlluminate} />
                    )}
                </div>
            </div>
            <div className="score-board d-flex">
                <div className="win d-flex flex-column">
                    <div className="win-info">
                        X (YOU)
                    </div>
                    <div className="win-score">{playerOneScore}</div>
                </div>
                <div className="draw d-flex flex-column">
                    <div className="draw-info">
                        DRAW
                    </div>
                    <div className="draw-score">{noWinner}</div>
                </div>
                <div className="loose d-flex flex-column">
                    <div className="loose-info">
                        O (CPU)
                    </div>
                    <div className="loose-score">{playerTwoScore}</div>
                </div>
            </div>
        </div>
    )
}

export default Board;