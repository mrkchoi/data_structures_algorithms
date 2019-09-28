import React from 'react';

function BoilingTemp(props) {
  if (props.temp >= 100) {
    return <p>The water is boiling</p>;
  } else {
    return <p>The water is NOT boiling</p>;
  }
}

export default BoilingTemp;