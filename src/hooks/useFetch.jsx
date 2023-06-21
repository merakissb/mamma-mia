import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  , [url]);

  useEffect(() => {
    getData();
  }
  , [getData]);

  return { data, loading };
}