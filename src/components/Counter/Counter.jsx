import React, { useContext } from "react";
import { counterContext } from "../../contexts/CounterContextProvider";

const Counter = () => {
  let {
    counter,
    increment,
    decrement,
    increment10,
    decrement10,
    handleValue,
    text,
  } = useContext(counterContext);

  return (
    <div>
      <div align="center">
        <h1>{counter}</h1>
        <button onClick={increment}>PLUS</button>
        <button onClick={decrement}>MINUS</button>
        <button onClick={increment10}>PLUS + 10</button>
        <button onClick={decrement10}>MINUS -10</button>
      </div>

      <div align="center">
        <h2>{text}</h2>
        <input onChange={(e) => handleValue(e.target.value)} type="text" />
      </div>
    </div>
  );
};

export default Counter;
