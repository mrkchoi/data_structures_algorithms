import React, { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  
  return width;
}

function Width() {
  const width = useWindowWidth();
  
  return (
    <div>
      <p>Window with is: {width}</p>
    </div>
  )
}

export default Width
