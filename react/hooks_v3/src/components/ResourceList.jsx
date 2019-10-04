import React from 'react';
import useResources from './useResources'

function ResourceList({resource}) {
  const data = useResources(resource);
  if (data.length === 0) return <div>Loading...</div>;

  return (
    <React.Fragment>
      {data.length === 0
        ? null
        : data.map(datum => {
            return <li key={datum.id}>{datum["title"]}</li>;
          })}
    </React.Fragment>
  );
}

export default ResourceList;
