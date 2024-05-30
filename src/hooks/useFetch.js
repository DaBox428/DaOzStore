import React, { useEffect, useState } from "react";
import makeRequest from "../makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);

        setData(res.data.data);
        setLoading(false);
      } catch (err) {
        setErr(err);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, err };
};

export default useFetch;

/* 
`/products?populate=*&[filters][type][$eq]=${type}` */
