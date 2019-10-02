import React, { useState, useEffect } from 'react'

function Lifecycle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Counter: ${count}`;
  });

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <div className="square" onClick={handleClick}>clicked: {count}</div>
    </div>
  )
}

export default Lifecycle;
