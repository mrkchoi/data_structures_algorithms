import React from 'react'

function ListItem(props) {
  return <li>{props.data}</li>
}

export default function Number(props) {
  return (
    <div>
      <ul>
        {props.numbers.map((el, idx) => 
          <ListItem 
            key={idx} 
            data={el}/>
        )}
      </ul>
    </div>
  )
}
