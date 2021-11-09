import classes from "./PlayerNames.module.css";
import Card from "../UI/Card";
const PlayerNames = (props) => {
  const playerAClass =
    !props.status.xIsNext && !props.status.winner
      ? `${classes.players} ${classes.chance}`
      : `${classes.players}`;
  const playerBClass =
    props.status.xIsNext && !props.status.winner
      ? `${classes.players} ${classes.chance}`
      : `${classes.players}`;
  return (
    <Card className={classes.card}>
      <div className={classes.plu}>
        <p className={playerAClass}>Player A : {props.values.playerAName}</p>
        <p className={classes.players}>Symbol : X</p>
      </div>
      <div className={classes.plu}>
        <p className={playerBClass}>Player B : {props.values.playerBName}</p>
        <p className={classes.players}>Symbol : O</p>
      </div>
    </Card>
  );
};

export default PlayerNames;
