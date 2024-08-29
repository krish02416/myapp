import React, { useState } from "react";

function UseStateDemo() {
  // const array=useState(0);
  // const count=array[0];
  // const setCount=array[1];
  // console.log(array);

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  // function reset(){
  //     setCount(count=0)
  // }
  const [name, setName] = useState("");
  const [details, setDetails] = useState({
    countValue: 0,
    empName: "Hari",
  });
  function changeDetails() {
    setDetails({
      countValue: details.countValue + 1,
      empName: (details.empName = "Priya"),
    });
  }
  console.log(details);

  return (
    <div>
      <input
        type="text"
        onChange={(v) => {
          // console.log(v);
          console.log(v.target.value);
          setName(v.target.value);
        }}
      ></input>
      <h1>{name}</h1>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>

      {/* <button onClick={reset}>reset</button> */}
      {/* <button onClick={decrement}>decrement</button> */}
      <h1>
        {details.empName} {details.countValue}
      </h1>
      <button onClick={changeDetails}>Click here to change name</button>
    </div>
  );
}

export default UseStateDemo;
