import { Fragment, useCallback, useEffect, useState } from "react";
import PlayerForm from "../PlayerForm/PlayerForm";
import PlayerNames from "../PlayerForm/PlayerNames";
import classes from "./Board.module.css";
import Square from "./Square";
const initialState = ["", "", "", "", "", "", "", "", "", ""];
const Board = () => {
  const [gameState, setGameState] = useState(initialState);
  const [isAChance, setIsAChance] = useState(false);
  const [isWinner, setIsWinner] = useState(null);
  const [isOk, setIsOk] = useState(true);
  const [formDisp, setFormDisp] = useState(true);
  const [playerAName, setplayerAName] = useState(null);
  const [playerBName, setplayerBName] = useState(null);
  const [count, setCount] = useState(0);
  const onClicked = (value) => {
    let arrayOfState = Array.from(gameState);
    if (isOk && !isWinner) {
      alert("Please enter Player Names!");
      return;
    }
    if (isOk && isWinner) {
      return;
    }
    if (!arrayOfState[value] && isWinner) {
      return;
    }
    // console.log(isFull);
    arrayOfState[value] = isAChance ? "O" : "X";
    setGameState(arrayOfState);
    setIsAChance(!isAChance);
  };
  const squareClasses = `${classes.row} + ${classes.jcCenter}`;
  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      setIsWinner(winner);
      setIsOk(true);
    }
    for (let i = 0; i < gameState.length; i++) {
      if (gameState[i] !== "") {
        setCount(count + 1);
      }
    }

    return () => {};
  }, [gameState]);
  const resetGameHandler = () => {
    setGameState(initialState);
    setIsWinner(null);
    setFormDisp(true);
    setCount(0);
  };
  const resetBoardHandler = () => {
    setGameState(initialState);
    setIsWinner(null);
    setIsOk(false);
    setCount(0);
  };
  const checkWinner = useCallback(() => {
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
    for (let i = 0; i < winnerMoves.length; i++) {
      const [a, b, c] = winnerMoves[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  }, [gameState]);

  const nameAddHandler = (values) => {
    setplayerAName(values.playerAName);
    setplayerBName(values.playerBName);
    if (!values.playerAName || !values.playerBName) {
      alert("Please Enter valid Player names!");
      return;
    }
    setFormDisp(false);
    setIsOk(false);
  };

  return (
    <Fragment>
      <div className={classes.appHeader}>
        {formDisp && <PlayerForm onAddNames={nameAddHandler} />}
        {!formDisp && (
          <PlayerNames
            playerA={playerAName}
            playerB={playerBName}
            chance={isAChance}
            winner={isWinner}
          />
        )}
        <p className={classes.headingText}> Tic Tac Toe</p>
        <div className={squareClasses}>
          <Square
            className={classes.bBottomRight}
            value={gameState[0]}
            onClick={() => onClicked(0)}
          />
          <Square
            className={classes.bBottomRight}
            value={gameState[1]}
            onClick={() => onClicked(1)}
          />
          <Square
            className={classes.bBottom}
            value={gameState[2]}
            onClick={() => onClicked(2)}
          />
        </div>
        <div className={squareClasses}>
          <Square
            className={classes.bBottomRight}
            value={gameState[3]}
            onClick={() => onClicked(3)}
          />
          <Square
            className={classes.bBottomRight}
            value={gameState[4]}
            onClick={() => onClicked(4)}
          />
          <Square
            className={classes.bBottom}
            value={gameState[5]}
            onClick={() => onClicked(5)}
          />
        </div>
        <div className={squareClasses}>
          <Square
            className={classes.bRight}
            value={gameState[6]}
            onClick={() => onClicked(6)}
          />
          <Square
            className={classes.bRight}
            value={gameState[7]}
            onClick={() => onClicked(7)}
          />
          <Square value={gameState[8]} onClick={() => onClicked(8)} />
        </div>
        <p className={classes.headingText}>
          {isWinner &&
            (isWinner
              ? `${isWinner === "X" ? playerAName : playerBName} is the winner!`
              : `Draw`)}
        </p>
        <p className={classes.headingText}>
          {count === 9 && !isWinner ? "Draw" : ""}{" "}
        </p>
        <div>
          <button className={classes.button} onClick={resetBoardHandler}>
            Reset Board
          </button>
          <button className={classes.button} onClick={resetGameHandler}>
            Reset game
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Board;
