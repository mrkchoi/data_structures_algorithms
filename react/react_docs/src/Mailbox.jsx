import React from 'react'

function Mailbox(props) {
  return (
    <div>
      {props.mailCount > 0 && 
        <h2>
          You have {props.mailCount} new messages
        </h2>
      }
    </div>
  )
}

export default Mailbox;