import React, { useState } from "react";

import { useAllBears } from "../../hooks/useAllBears";
import SingleBeer from "../SingleBeer/SingleBeer";

const HomePage = () => {
  const BeersPerPage = 20;
  const [counter, setCounter] = useState(1);
  const url = `https://api.punkapi.com/v2/beers?page=${counter}&per_page=${BeersPerPage}`;
  const { data, isLoading, error } = useAllBears(url);

  return (
    <div id="top" className="p-5">
      {isLoading && !error && <p>Ładowanie..</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && data && (
        <>
          <div className="flex flex-wrap justify-center">
            {data.map((beer) => (
              <SingleBeer
                key={beer.id}
                name={beer.name}
                tagline={beer.tagline}
                first_brewed={beer.first_brewed}
                description={beer.description}
                image_url={beer.image_url}
                ingredients={beer.ingredients}
                food_pairing={beer.food_pairing}
                brewers_tips={beer.brewers_tips}
                contributed_by={beer.contributed_by}
              />
            ))}
          </div>

          <div className="flex justify-center">
            {!(counter === 1) && (
              <button
                className="btn-next-prev"
                onClick={() => setCounter((prev) => prev - 1)}
              >
                {"< Prev"}
              </button>
            )}

            {data.length >= BeersPerPage && (
              <a href="#top">
                <button
                  className="btn-next-prev"
                  onClick={() => setCounter((prev) => prev + 1)}
                >
                  {"Next >"}
                </button>
              </a>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
