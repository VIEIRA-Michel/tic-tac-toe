import './Square.scss';
import O from '../../assets/icons/o.svg';
import X from '../../assets/icons/x.svg';
function Square({ value, empty, id, onClick, winner, squareIlluminate }) {
    return (
        <div className={squareIlluminate.includes(id) ? `square symbol${winner}` : "square"}>
            <button onClick={() => onClick(id)} className="d-flex justify-content-center align-items-center flex-fill w100 h100 btn-square">
                {empty ? "" : (<img
                    src={value === "X" ? X : value === "O" ? O : ""}
                    className={squareIlluminate.includes(id) ? "" : value === "X" ? "X" : value === "O" ? "O" : ""}
                    alt={value === "X" ? "symbol-X" : value === "O" ? "symbol-O" : "empty"} />)}
            </button>
        </div>
    )
}

export default Square;