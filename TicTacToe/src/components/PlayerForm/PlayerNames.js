import classes from "./PlayerNames.module.css";
import Card from "../UI/Card";
const PlayerNames = (props) => {
  const playerAClass = (!props.chance && !props.winner)
    ? `${classes.players} ${classes.chance}`
    : `${classes.players}`;
  const playerBClass = (props.chance  && !props.winner)
    ? `${classes.players} ${classes.chance}`
    : `${classes.players}`;
  return (
    <Card>
      <div className={classes.plu}>
        <p className={playerAClass}>Player A : {props.playerA}</p>
        <p className={classes.players}>Symbol : X</p>
      </div>
      <div className={classes.plu}>
        <p className={playerBClass}>Player B : {props.playerB}</p>
        <p className={classes.players}>Symbol : O</p>
      </div>
    </Card>
  );
};

export default PlayerNames;
