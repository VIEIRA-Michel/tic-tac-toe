import './Square.scss';

function Square({ value, empty, id }) {
    return (
        <div className="square w200 h200">
            <button onClick={() => console.log(id)} className="d-flex flex-fill w100 h100 btn-square">{empty ? "" : `${value}`}</button>
        </div>
    )
}

export default Square;