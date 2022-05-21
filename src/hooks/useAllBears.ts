import { useEffect, useState } from "react";

import { IBeer } from "../types";

export const useAllBears = (url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<IBeer[]>([]);

  useEffect(() => {
    if (url) {
      fetch(url)
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
    }
  }, [url]);

  return {
    isLoading,
    data,
    error,
  };
};
