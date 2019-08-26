import React from 'react'

function ResultItem(props) {
  return (
    <div>
      <img src={props.url} alt="" className="result__img"/>
    </div>
  )
}

export default ResultItem;