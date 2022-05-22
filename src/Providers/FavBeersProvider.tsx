import React, { useState } from "react";
import { IBeer, IBeerContext, IProviderProps } from "../types";

export const FavBeersContext = React.createContext<IBeerContext>({
  favBeers: [],
  handleAddDeleteFavBeer: (): void => {},
});

export const FavBeersProvider = ({ children }: IProviderProps) => {
  const [favBeers, setFavBeers] = useState<IBeer[]>([]);

  const handleAddDeleteFavBeer = ({
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
    } else {
      const newFavBeers = favBeers.filter((el) => el.id !== id);
      setFavBeers([...newFavBeers]);
    }
  };

  return (
    <FavBeersContext.Provider value={{ favBeers, handleAddDeleteFavBeer }}>
      {children}
    </FavBeersContext.Provider>
  );
};
