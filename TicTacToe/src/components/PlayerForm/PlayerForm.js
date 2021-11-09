import { Fragment, useRef } from "react";
import classes from "./PlayerForm.module.css";
const PlayerForm = (props) => {
  const playerARef = useRef();
  const playerBRef = useRef();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const playerAName = playerARef.current.value;
    const playerBName = playerBRef.current.value;
    props.onAddNames({
      playerAName,
      playerBName,
    });
  };

  return (
    <Fragment>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="PlayerA">Player A name:</label>
          <input type="text" ref={playerARef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="PlayerA">Player B name:</label>
          <input type="text" ref={playerBRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};

export default PlayerForm;
