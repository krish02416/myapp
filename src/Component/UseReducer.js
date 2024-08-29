import React, { useReducer, useState } from "react";

const initialState = { count: 0 };
const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 };
    case ACTION.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
export const UseReducer = () => {
  // const [count,setCount]=useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = () => {
    // setCount(count+1)
    dispatch({ type: ACTION.INCREMENT });
  };
  const decrement = () => {
    // setCount(count-1)
    dispatch({ type: ACTION.DECREMENT });
  };
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
