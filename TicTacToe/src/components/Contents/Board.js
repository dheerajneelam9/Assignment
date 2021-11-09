import classes from "./Board.module.css";
import Square from "./Square";

const Board = (props) => {
  const squareClasses = `${classes.row} + ${classes.jcCenter}`;
  return (
    <div className={classes.board}>
      <p className={classes.headingText}> Tic Tac Toe</p>
      <div className={squareClasses}>
        <Square
          className={classes.bBottomRight}
          value={props.state[0]}
          onClick={() => props.onClicked(0)}
        />
        <Square
          className={classes.bBottomRight}
          value={props.state[1]}
          onClick={() => props.onClicked(1)}
        />
        <Square
          className={classes.bBottom}
          value={props.state[2]}
          onClick={() => props.onClicked(2)}
        />
      </div>
      <div className={squareClasses}>
        <Square
          className={classes.bBottomRight}
          value={props.state[3]}
          onClick={() => props.onClicked(3)}
        />
        <Square
          className={classes.bBottomRight}
          value={props.state[4]}
          onClick={() => props.onClicked(4)}
        />
        <Square
          className={classes.bBottom}
          value={props.state[5]}
          onClick={() => props.onClicked(5)}
        />
      </div>
      <div className={squareClasses}>
        <Square
          className={classes.bRight}
          value={props.state[6]}
          onClick={() => props.onClicked(6)}
        />
        <Square
          className={classes.bRight}
          value={props.state[7]}
          onClick={() => props.onClicked(7)}
        />
        <Square value={props.state[8]} onClick={() => props.onClicked(8)} />
      </div>
    </div>
  );
};

export default Board;
