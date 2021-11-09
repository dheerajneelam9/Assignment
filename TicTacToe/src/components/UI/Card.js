import classes from "./Card.module.css";

const Card = (props) => {
  const classes1 = `${props.className} ${classes.card}`;
  return <div className={classes1}>{props.children}</div>;
};

export default Card;
