import React, { useState } from "react";
import { IBeer, IBeerContext, IProviderProps } from "../types";

export const FavBeersContext = React.createContext<IBeerContext>({
  favBeers: [],
  handleAddFavBeer: (): void => {},
});

export const FavBeersProvider = ({ children }: IProviderProps) => {
  const [favBeers, setFavBeers] = useState<IBeer[]>([]);

  const handleAddFavBeer = ({
    id,
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
    const newBeer = {
      id,
      name,
      tagline,
      first_brewed,
      description,
      image_url,
      ingredients,
      food_pairing,
      brewers_tips,
      contributed_by,
    };
    if (!favBeers.find((el) => el.id === newBeer.id)) {
      setFavBeers([newBeer, ...favBeers]);
    }
  };

  return (
    <FavBeersContext.Provider value={{ favBeers, handleAddFavBeer }}>
      {children}
    </FavBeersContext.Provider>
  );
};
