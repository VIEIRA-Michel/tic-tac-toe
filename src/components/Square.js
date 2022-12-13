function Square({ value, empty }) {
    return (
        <div className="square b1 w200 h200">
            <button className="d-flex flex-fill w100 h100">{empty ? "" : `${value}`}</button>
        </div>
    )
}

export default Square;