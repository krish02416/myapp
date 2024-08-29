import React, { useEffect, useState } from "react";

function UseFetch(url) {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((val) => setResponse(val));
  }, []);
  return response;
  return <div></div>;
}

export default UseFetch;
