import './Square.scss';

function Square({ value, empty, id, onClick, winner, squareIlluminate }) {
    return (
        <div className={squareIlluminate.includes(id) ? `square symbol${winner} w200 h200` : "square w200 h200"}>
            <button onClick={() => onClick(id)} className="d-flex justify-content-center align-items-center flex-fill w100 h100 btn-square"><span className={value === "X" ? 'symbolX' : 'symbolO'}>{empty ? "" : `${value}`}</span></button>
        </div>
    )
}

export default Square;