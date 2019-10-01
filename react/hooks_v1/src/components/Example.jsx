import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  function updateCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Example: useState</h1>
      <p>Current count: {count}</p>
      <button onClick={updateCount}>+ count</button>
    </div>
  )
}

export default Example;