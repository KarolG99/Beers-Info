import React, { useState } from "react";
import { useAllBears } from "../hooks/useAllBears";
import SingleBeer from "./SingleBeer/SingleBeer";

const BeersPerName = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const { data, isLoading, error } = useAllBears(url);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSearchBeer = () => {
    setUrl(`https://api.punkapi.com/v2/beers?beer_name=${name}`);
  };

  return (
    <div className="p-5 flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <label htmlFor="name" className=" mb-2">
          Wprowadź nazwę piwa, które chcesz wyszukać
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="p-[4px] border-[1px] border-black max-w-[200px] rounded-md"
          value={name}
          onChange={handleInputChange}
        />
        <button
          className={
            name
              ? `my-4 bg-blue-600 text-white p-1 rounded-md`
              : `my-4 bg-blue-400 text-white p-1 rounded-md`
          }
          disabled={name ? false : true}
          onClick={handleSearchBeer}
        >
          Szukaj
        </button>
      </div>

      <div>
        {isLoading && !error && url && <p className="loading">Ładowanie..</p>}

        {error && !data && <p>{error}</p>}

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
          </>
        )}
      </div>
    </div>
  );
};

export default BeersPerName;
