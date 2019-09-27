import React from 'react'

export default function Warning(props) {
  if (!props.warning) {
    return null;
  } 
  
  return (
    <div>
      <h2>Warning!</h2>
    </div>
  );
}
