import React, { createContext, useReducer } from "react";

export const counterContext = createContext();

const INIT_STATE = {
  counter: 0,
  text: "",
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: action.payload };

    case "DECREMENT":
      return { ...state, counter: action.payload };

    case "INCREMENT +10":
      return { ...state, counter: action.payload };

    case "DECREMENT -10":
      return { ...state, counter: action.payload };

    case "INPUT":
      return { ...state, text: action.payload };

    default:
      return state;
  }
}

const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function increment() {
    dispatch({ type: "INCREMENT", payload: state.counter + 1 });
  }

  function decrement() {
    dispatch({ type: "DECREMENT", payload: state.counter - 1 });
  }

  function increment10() {
    dispatch({ type: "INCREMENT", payload: state.counter + 10 });
  }

  function decrement10() {
    dispatch({ type: "INCREMENT", payload: state.counter - 10 });
  }

  function handleValue(event) {
    dispatch({ type: "INPUT", payload: (state.text = event) });
  }

  let values = {
    text: state.text,
    handleValue,
    counter: state.counter,
    increment,
    decrement,
    increment10,
    decrement10,
  };
  return (
    <counterContext.Provider value={values}>{children}</counterContext.Provider>
  );
};

export default CounterContextProvider;
