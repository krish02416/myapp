import React, { useEffect, useState } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);

  useEffect(() => {
    document.title = newCount;
  }, [count, newCount]);
  const [time, setTime] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    console.log("useEffect", count);
    return () => {
      console.log("clean up:", count);
    };
  }, [count]);
  return (
    <div>
      <h2>Count value: {time}</h2>
      <button></button>
      <h2>Count value:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* <h2>new count : {newCount}</h2> */}
    </div>
  );
}

export default UseEffectDemo;
