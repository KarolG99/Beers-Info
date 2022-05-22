export interface IBeer {
  id?: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  ingredients: {
    malt: { name: string }[];
    hops: { name: string }[];
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export interface ISingleApiOption {
  name: string;
  content: string | any;
}

export interface IBeerContext {
  favBeers: IBeer[];
  handleAddDeleteFavBeer: (beer: IBeer) => void;
}

export interface IProviderProps {
  children: JSX.Element;
}
