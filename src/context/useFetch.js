import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(url);
        console.log(response);
        setData(response.data.default);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
        setIsLoading(false);
      }
    })();
  }, []);
  return { isLoading, data, isError };
};

export default useFetch;
