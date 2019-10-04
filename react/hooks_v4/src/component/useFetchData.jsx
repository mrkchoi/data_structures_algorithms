import {useEffect, useState} from 'react';
import axios from "axios";

function useFetchData(query) {
  const [data, setData] = useState(null);

  async function fetchData() {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=8245a9121b8feedd01026a650bf0f15b`
      ).catch(err => err);

    console.log(res.data);
    setData(res.data);
  }

  useEffect(() => {
    fetchData();
  }, [query]);

  return data;
}

export default useFetchData;
