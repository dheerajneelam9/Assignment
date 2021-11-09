import { Fragment, useReducer, useState, useEffect } from "react";
import Board from "./Board";
import classes from "./Game.module.css";
const initialState = ["", "", "", "", "", "", "", "", ""];

const reducer = (state, action) => {
  if (action.type === "JUMP") {
    return {
      ...state,
      xIsNext: action.value.step % 2 === 0,
      history: state.history.slice(0, action.value.step + 1),
    };
  }
  if (action.type === "MOVE") {
    return {
      ...state,
      history: state.history.concat({
        squares: action.value.squares,
      }),
      xIsNext: !state.xIsNext,
    };
  }
  return state;
};

const Game = (props) => {
  const [winner, setWinner] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    xIsNext: true,
    history: [
      {
        squares: initialState,
      },
    ],
  });
  const current = state.history[state.history.length - 1];
  const squares = current.squares.slice();
  useEffect(() => {
    setWinner(calculateWinner(squares));
  }, [squares]);

  const squareClickHandler = (value) => {
    if (!props.show) {
      alert("Please enter the names!");
      return;
    }
    if (winner || squares[value]) {
      return;
    }
    squares[value] = state.xIsNext ? "X" : "O";
    dispatch({ type: "MOVE", value: { squares } });
    props.onProvide({
      winner: winner,
      xIsNext: state.xIsNext,
    });
  };
  const jumpHandler = (step) => {
    dispatch({ type: "JUMP", value: { step } });
  };
  const calculateWinner = (squares) => {
    const winnerMoves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let isDraw = true;
    for (let i = 0; i < winnerMoves.length; i++) {
      const [a, b, c] = winnerMoves[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
      if (!squares[a] || !squares[b] || !squares[c]) {
        isDraw = false;
      }
    }
    if (isDraw) return "D";
    return null;
  };
  const status = winner
    ? winner === "D"
      ? "Draw"
      : "Winner is " + winner
    : "";
  const movesList = state.history.map((step, move) => {
    if (move === 9) {
      return;
    }
    const desc = move === 0 ? "Reset Board" : `Go to move # ${move}`;

    return (
      <li className={classes.list} key={move} id={move}>
        <button
          className={classes.button}
          onClick={() => {
            jumpHandler(move);
          }}
        >
          {desc}
        </button>
      </li>
    );
  });
  return (
    <Fragment>
      <div className={classes.align}>
        <Board
          className={classes.board}
          state={current.squares}
          onClicked={squareClickHandler}
        />
        <div className={classes.moves}>{movesList}</div>
      </div>
      <div className={classes.status}>{status}</div>
    </Fragment>
  );
};

export default Game;
