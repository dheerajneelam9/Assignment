import React, { useState } from "react";
import Game from "./components/Contents/Game";
import PlayerForm from "./components/PlayerForm/PlayerForm";
import PlayerNames from "./components/PlayerForm/PlayerNames";
function App() {
  const [names, setNames] = useState({});
  const [status, setStatus] = useState({});
  const [toShow, setToShow] = useState(false);
  const nameAddHandler = (values) => {
    setNames(values);
    if (!values.playerAName || !values.playerBName) {
      alert("Please enter valid names!");
      return;
    }
    if (values.playerAName === values.playerBName) {
      alert("Entered values are same! Please enter different names!");
      return;
    }
    setToShow(true);
  };
  const statusProvideHandler = (status) => {
    setStatus(status);
  };
  return (
    <div>
      {!toShow && <PlayerForm onAddNames={nameAddHandler} />}
      {toShow && <PlayerNames values={names} status={status} />}
      {toShow && <Game show={toShow} onProvide={statusProvideHandler} />}
    </div>
  );
}

export default App;
