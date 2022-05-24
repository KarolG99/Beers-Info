import React, { useContext, useState } from "react";

import { IBeer } from "../../types";
import SingleApiOption from "../SingleApiOption";
import { ReactComponent as Bookmark } from "../../assets/icons/bookmark.svg";
import { ReactComponent as BookmarkSolid } from "../../assets/icons/bookmark-solid.svg";
import { FavBeersContext } from "../../Providers/FavBeersProvider";

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
  onClick,
}: IBeer) => {
  const [showMore, setShowMore] = useState(false);
  const { favBeers } = useContext(FavBeersContext);

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
    <div className="beer-wrapper relative" data-testid="beer">
      <button className=" absolute right-2" onClick={onClick}>
        {favBeers.find((el) => el.name === name) ? (
          <BookmarkSolid className=" fill-blue-500" />
        ) : (
          <Bookmark className=" fill-blue-500" />
        )}
      </button>
      <img
        className=" w-12 m-2"
        src={image_url}
        aria-hidden
        alt="beer's photo"
      />
      <h2 className="font-bold text-lg">{name}</h2>
      <SingleApiOption name="description" content={description} />
      <SingleApiOption name="tagline" content={tagline} />
      <SingleApiOption name="first brewed" content={first_brewed} />

      {showMore ? (
        <>
          <p className="option-wrapper">
            <span className="option">malt ingredients: </span>
            {DisplayIngredients(ingredients.malt)}
          </p>
          <p className="option-wrapper">
            <span className="option">hops ingredients: </span>
            {DisplayIngredients(ingredients.hops)}
          </p>
          <SingleApiOption
            name="food pairing"
            content={food_pairing.join(", ")}
          />
          <SingleApiOption name="brewers tips" content={brewers_tips} />
          <SingleApiOption name="contributed by" content={contributed_by} />
          <button className="more-less-btn" onClick={() => setShowMore(false)}>
            - less
          </button>
        </>
      ) : (
        <button className="more-less-btn" onClick={() => setShowMore(true)}>
          + more
        </button>
      )}
    </div>
  );
};

export default SingleBeer;
