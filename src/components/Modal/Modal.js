import { createPortal } from "react-dom";
import './Modal.scss';
function Modal({ isShowing, hide, winner }) {
    return (
        isShowing ? createPortal(
            <>
                <div className="modal-overlay">
                    <div className="modal-wrapper">
                        <div className="modal d-flex justify-content-center align-items-center flex-column">
                            <div className="modal-header">
                                <h4>{winner === "X" ? "YOU WON!" : "YOU LOOSE!"}</h4>
                            </div>
                            <div className="modal-body">Winner is <span>{winner}</span> !</div>
                            <div className="modal-button">
                                <button type="button" className="modal-button__leave" onClick={hide}><span>QUIT</span></button>
                                <button type="button" className="modal-button__continue" onClick={hide}><span>NEXT ROUND</span></button>
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