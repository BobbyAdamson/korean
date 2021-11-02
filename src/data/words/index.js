import adjectives from "./adjectives";
import countries from "./countries";
import occupations from "./occupations";
import general from "./general";
import newwords from "./newwords";
import family from "./family";
import relationships from "./relationships";
import food from "./food";
import frequencies from "./frequencies";
import home from './home';

export default [
  ...countries,
  ...family,
  ...general,
  ...adjectives,
  ...home,
  ...occupations,
  ...relationships,
  ...food,
  ...frequencies,
  ...newwords,
];

export const grouped = {
  countries,
  adjectives,
  home,
  family,
  general,
  food,
  newwords,
  frequencies,
  occupations,
  relationships,
};
