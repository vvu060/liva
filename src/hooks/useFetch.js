import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, options) => {
  if (url === undefined && options === undefined) return;

  const [response, setResponse] = useState([]);
  const [isError, setIsError] = useState(null);
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
        setResponse(data.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(error);
      }
    };

    fetchData();

    return () => abortCtrl.abort();
  }, [url]);

  return { response, isError, isLoading };
};

export default useFetch;
