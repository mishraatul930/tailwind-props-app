import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0); //setCounter is a function whenever it is called,
  //it changes the vale of counter
  const addValue = () => {
    console.log("Value added", Math.random());
    setCounter(counter + 1);
  };

  const decValue = () => {
    console.log("Value added", Math.random());
    setCounter(counter - 1);
  };

  const delValue = () => {
    setCounter(0);
  };
  return (
    <>
      <div className="primary_div">
        <h1>This is a react app</h1>
        <h2>Counter Value : {counter}</h2>
        <button id="add_value_btn" onClick={addValue}>
          Add Value : {counter}
        </button>
        <br />
        <button id="dec_value_btn" onClick={decValue}>
          Decrease Value : {counter}
        </button>
        <br />
        <button id="dec_value_btn" onClick={delValue}>
          Delete Value : {counter}
        </button>
      </div>
    </>
  );
}

export default App;
