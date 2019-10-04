import React, { useState } from 'react';

function UserInput({handleSubmit}) {
  const [query, setQuery] = useState("");

  return (
    <form onSubmit={e => handleSubmit(e, query)}>
      <label htmlFor="cityQuery">
        <input
          type="text"
          id="cityQuery"
          name="city"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </label>
      <br />
      <br />
      <input type="submit" value="submit" />
    </form>
  );
}

export default UserInput
