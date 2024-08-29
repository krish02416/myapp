import React, { useRef } from "react";

export const SampleTwo = () => {
  const inputElement = useRef();

  const changeWidth = () => {
    console.log("function called");
    console.log(inputElement.current);
    inputElement.current.style.width = "300px";
    inputElement.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputElement}></input>
      <br></br>
      <button onClick={changeWidth}>Change</button>
    </div>
  );
};
