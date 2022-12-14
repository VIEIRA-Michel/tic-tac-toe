import { createPortal } from "react-dom";
import './Modal.scss';
import O from '../../assets/icons/o.svg';
import X from '../../assets/icons/x.svg';
import { Link } from 'react-router-dom';

function Modal({ isShowing, hide, winner, continuePlaying, symbolPlayer, symbolOpponent, playWithCpu }) {
    function nextRound() {
        hide();
        continuePlaying();
    };

    return (
        isShowing ? createPortal(
            <>
                <div className="modal-overlay">
                    <div className="modal-wrapper">
                        <div className="modal d-flex justify-content-center align-items-center flex-column">
                            <div className="modal-header">
                                <h4>{winner === symbolPlayer ? "YOU WON!" : winner === symbolOpponent && playWithCpu ? "YOU LOOSE!" : winner === symbolOpponent && !playWithCpu ? "PLAYER 2 WIN" : "DRAW"}</h4>
                            </div>
                            <div className={`modal-body d-flex justify-content-center align-items-center ${winner}`}>
                                {winner === "O" || winner === "X" ?
                                    (
                                        <img src={winner === "X" ? X : O} alt={winner === "X" ? "symbol-x" : "symbol-o"} />
                                    ) : "NOBODY"
                                }
                                <span>TAKES THE ROUND</span></div>
                            <div className="modal-button">
                                <button type="button" className="modal-button__leave"><Link to={'/'}><span>QUIT</span></Link></button>
                                <button type="button" className="modal-button__continue" onClick={nextRound}><span>NEXT ROUND</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </>,
            document.body
        )
            : null

    )
}

export default Modal;