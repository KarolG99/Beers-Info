import React, { useState } from "react";
import { IBeer } from "../../types";
import SingleApiOption from "../SingleApiOption";

const SingleBeer = ({
  name,
  tagline,
  first_brewed,
  description,
  image_url,
  ingredients,
  food_pairing,
  brewers_tips,
  contributed_by,
}: IBeer) => {
  const [showMore, setShowMore] = useState(false);

  const GetIngredientsNames = (ingredients: { name: string }[]) => {
    const result = ingredients.map((ingredient) => {
      return ingredient.name;
    });
    return result;
  };

  const DisplayIngredients = (ingridientType: { name: string }[]) => {
    const result = GetIngredientsNames(ingridientType);
    return result.join(", ");
  };

  return (
    <div className="beer-wrapper">
      <img className=" w-12 m-2" src={image_url} aria-hidden alt="beer's photo" />
      <h2 className="font-bold text-lg">{name}</h2>
      <SingleApiOption name="description" content={description} />
      <SingleApiOption name="tagline" content={tagline} />
      <SingleApiOption name="first brewed" content={first_brewed} />

      {showMore ? (
        <>
          <p>
            <span className="option">malt ingredients: </span>
            {DisplayIngredients(ingredients.malt)}
          </p>
          <p>
            <span className="option">hops ingredients: </span>
            {DisplayIngredients(ingredients.hops)}
          </p>
          <SingleApiOption
            name="food pairing"
            content={food_pairing.join(", ")}
          />
          <SingleApiOption name="brewers tips" content={brewers_tips} />
          <SingleApiOption name="contributed by" content={contributed_by} />
          <button onClick={() => setShowMore(false)}>less</button>
        </>
      ) : (
        <button onClick={() => setShowMore(true)}>more</button>
      )}
    </div>
  );
};

export default SingleBeer;
