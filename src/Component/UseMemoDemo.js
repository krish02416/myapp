import React, { useState } from "react";

export function UseMemoDemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const calculation = expensiveFunction(number);
  return (
    <div>
      <input
        type="number"
        onChange={(v) => {
          setNumber(v.target.value);
        }}
      ></input>
      <h2>{number}</h2>
      <h2>Calcuation: {calculation}</h2>
      <button onClick={() => setDark(!dark)}></button>
    </div>
  );
}

export default UseMemoDemo;
function expensiveFunction(num) {
  console.log("loop executed");
  for (let i = 0; i < 10000000; i++) {}
  return num;
}
