import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

function Master() {
  const [resource, setResource] = useState('posts');
  
  return (
    <div>
      <h1>{resource}</h1>
      <UserList />
      <div>
        <button onClick={() => setResource("posts")} name="Posts">
          Posts
        </button>
        <button onClick={() => setResource("todos")} name="Todos">
          Todos
        </button>
      </div>

      <ul>
        <ResourceList resource={resource} />
      </ul>
    </div>
  );
}

export default Master;
