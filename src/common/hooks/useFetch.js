import { useState, useEffect } from "react";

const useFetch = (url, requestConfig) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    const settings = {
      method: "POST",
      headers: requestConfig
    };
    try {
      const response = await fetch(url, settings);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, fetchData };
};

export default useFetch;
