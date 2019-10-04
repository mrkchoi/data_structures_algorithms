import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = resource => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async resource => {
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );

      setData(data.data);
    })(resource);
  }, [resource]);

  return data;
};

export default useResources;
