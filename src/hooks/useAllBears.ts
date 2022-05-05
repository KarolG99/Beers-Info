import { useEffect, useState } from "react";

export const useAllBears = (counter: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${counter}&per_page=20`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, [counter]);

  return {
    isLoading,
    data
  };
};
