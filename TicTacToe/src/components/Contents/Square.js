import classes from "./Square.module.css";
const Square = (props) => {
  const squareClasses = `${props.className} ${classes.square}`;
  return <span className={squareClasses} onClick={props.onClick}>
    {props.value}
  </span>
};

export default Square;