import { useEffect, useState } from "react";

export const useAllBears = (counter: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${counter}&per_page=20`)
      .then((res) => {
        if (!res.ok) {
          setError("Coś poszło nie tak");
          setIsLoading(false);
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setData(data);
      })
      .catch((err) => {
        setError("Coś poszło nie tak");
        console.log(err);
      });
  }, [counter]);

  return {
    isLoading,
    data,
    error,
  };
};
