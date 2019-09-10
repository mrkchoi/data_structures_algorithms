import React, { useState, useEffect } from 'react';

const app = (props) => {

  let [count, setCount] = useState(0);

  useEffect(() => {
    
  });


  // let state = useState(0); // => []
  // let count = state[0];
  // let setCount = state[1];

  // this.state = {
  //   count: 0
  // }

  return (
    <div>
      <h1>Hello World!</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

