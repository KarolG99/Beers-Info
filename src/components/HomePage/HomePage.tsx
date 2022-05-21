import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { useAllBears } from "../../hooks/useAllBears";
import { FavBeersContext } from "../../Providers/FavBeersProvider";
import SingleBeer from "../SingleBeer/SingleBeer";

const HomePage = () => {
  const BeersPerPage = 20;
  const [counter, setCounter] = useState(1);
  const url = `https://api.punkapi.com/v2/beers?page=${counter}&per_page=${BeersPerPage}`;
  const { data, isLoading, error } = useAllBears(url);
  const { handleAddFavBeer } = useContext(FavBeersContext);

  return (
    <div id="top" className="p-5">
      <div className=" flex justify-center items-center">
        <Link
          className="m-4 bg-blue-600 text-white px-2 py-1 rounded-md"
          to="/beers-per-name"
        >
          Wyszukaj
        </Link>
        <Link
          className="m-4 bg-blue-600 text-white px-2 py-1 rounded-md"
          to="/fav-beers"
        >
          Ulubione
        </Link>
      </div>
      {isLoading && !error && <p className="loading">Ładowanie..</p>}

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
                onClick={() => {
                  handleAddFavBeer(beer)

                }}
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
