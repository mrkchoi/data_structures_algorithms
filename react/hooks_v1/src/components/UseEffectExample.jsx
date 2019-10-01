import React, { useState, useEffect } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const square = document.querySelector(".square");
    square.addEventListener("click", updateSquare);
    return () =>
      square.removeEventListener("click", updateSquare);
  });

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="use-effect">
      <div className="square" onClick={handleClick}>
        Click count: {count}
      </div>
    </div>
  );
}

function updateSquare(count, setCount) {
  const square = document.querySelector(".square");
  const colors = ["redorange", "pink", "lightblue", "purple"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  square.setAttribute("style", `background-color: ${randomColor}`);
  console.log(`color set to: ${randomColor}`);
}

export default UseEffectExample;
