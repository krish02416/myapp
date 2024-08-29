import React, { useEffect, useRef, useState } from "react";

export const SampleThree = () => {
  const [name, setName] = useState("");
  const count = useRef(0);
  console.log(count.current);
  // const[count,setCount]=useState(0);

  // useEffect(()=>{
  //     setCount(prev=>prev+1)
  // })

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <h1>NAME:{name}</h1>
      <h2>Count: {count.current}</h2>
    </div>
  );
};
