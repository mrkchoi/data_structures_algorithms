import React from 'react'

export default function Boxes({count}) {
  let boxes;

  for (let i = 1; i <= count; i++) {
    boxes = (
      <div className="box">
        <p>{i}</p>
        {boxes}
      </div>
    );
  }
  return (
    <div>
      {boxes}    
    </div>
  )
}
