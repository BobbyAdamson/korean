import countries from "./countries";
import occupations from "./occupations";
import general from "./general";
import newwords from "./newwords";
import family from "./family";
import relationships from "./relationships";
import food from './food';
import frequencies from './frequencies';

export default [
  ...countries,
  ...family,
  ...general,
  ...occupations,
  ...relationships,
  ...food,
  ...frequencies,
  ...newwords,
];

export const grouped = {
  countries,
  family,
  general,
  food,
  newwords,
  frequencies,
  occupations,
  relationships,
};
