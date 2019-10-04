import React, { useState } from 'react';

import UserInput from "./UserInput";
import DataDisplay from './DataDisplay';

function Main() {
  const [completedQuery, setCompletetdQuery] = useState("");

  const handleSubmit = (e, query) => {
    e.preventDefault();
    setCompletetdQuery(query);
  }

  return (
    <div>
      <h2>Weather</h2>
      <UserInput handleSubmit={handleSubmit} />
      <br />
      <br />
      <DataDisplay query={completedQuery}/>
    </div>
  );
}

export default Main;
