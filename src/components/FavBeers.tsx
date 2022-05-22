import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavBeersContext } from "../Providers/FavBeersProvider";
import SingleBeer from "./SingleBeer/SingleBeer";

const FavBeers = () => {
  const { favBeers, handleAddDeleteFavBeer } = useContext(FavBeersContext);

  return (
    <div className="p-5 flex flex-col justify-center">
      <Link to="/" className=" font-bold text-blue-500">
        {"<"} Cofnij
      </Link>
      <h1 className=" text-center m-4 text-2xl font-bold">Ulubione</h1>
      <div className="flex flex-wrap justify-center">
        {favBeers.length ? (
          favBeers.map((beer) => (
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
              onClick={() => handleAddDeleteFavBeer(beer)}
            />
          ))
        ) : (
          <h2 className=" my-20 italic">Nic jeszcze nie dodałeś/aś</h2>
        )}
      </div>
    </div>
  );
};

export default FavBeers;
