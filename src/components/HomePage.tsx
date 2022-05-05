import React, { useState } from "react";
import { useAllBears } from "../hooks/useAllBears";
import { IBeer } from "../types";

const HomePage = () => {
  const [counter, setCounter] = useState(1);
  const { data, isLoading, error } = useAllBears(counter);

  return (
    <div>
      {isLoading && !error && <p>Ładowanie..</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && data && (
        <>
          {data.map((beer: IBeer) => (
            <div key={beer.id}>{beer.name}</div>
          ))}
          <button onClick={() => setCounter((prev) => prev + 1)}>{">"}</button>
        </>
      )}
    </div>
  );
};

export default HomePage;
