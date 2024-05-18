import React, { useState } from "react";
import "./index.css";

function CounterApp() {
  const [counter, setCounter] = useState(0);

  let style = {color:'white', textAlign:'center' };
  function Increment() {
    setCounter(counter + 1);
  }
  function Reset() {
    setCounter((counter = ""));
  }
  function Decrement() {
    setCounter(counter - 1);
  }
  return (
    <>
       
        <h2 style={style}>Counter App</h2>
        <h1 style={style}>{counter}</h1>
        <button onClick={Increment} >Increment</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Decrement}>Decrement</button>
      
    </>
  );
}
export default CounterApp;
