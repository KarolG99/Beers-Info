import React, { useState } from "react";
import { useAllBears } from "../hooks/useAllBears";
import { IBear } from "../types";

const HomePage = () => {
    const [counter, setCounter] = useState(1);
    const {data, isLoading} = useAllBears(counter);

  return (
    <div>
      {isLoading ? <p>Ładowanie..</p> : ""}
      {!isLoading && data && data.map((beer: IBear) => (
          <div key={beer.id}>{beer.name}</div>
      ))}
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default HomePage;
