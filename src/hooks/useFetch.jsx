import React,{ useState, useEffect }from"react";
import axios from"axios";

const useFetch = (url,options) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  console.log(url)
  console.log(options)
  useEffect(() => {
    const abortCtrl = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios(url, { signal: abortCtrl.signal,...options });
        const {data} = res.data;
        setResponse((response) => [...response, ...data]);
        setLoading(false);
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