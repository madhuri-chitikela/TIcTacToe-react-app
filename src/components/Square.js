
export function Square({value,onSquareClick}){
    return(
        <div>
            <button className="btn"
             onClick={onSquareClick}>{value}</button>
        </div>
    );
}