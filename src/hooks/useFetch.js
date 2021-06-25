import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, options) => {
  if (url === undefined && options === undefined) return 0;

  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortCtrl = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { data } = await axios(url, {
          signal: abortCtrl.signal,
          ...options,
        });
        setResponse(data);
        setIsLoading(false);
      } catch (e) {
        setError(e);
      }
    };

    fetchData();

    return () => abortCtrl.abort();
  }, [url]);

  return { response, error, isLoading };
};

export default useFetch;
