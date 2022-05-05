export interface IBear {
  id: number;
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
}
