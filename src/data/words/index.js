import countries from "./countries";
import occupations from "./occupations";
import general from "./general";
import newwords from "./newwords";
import family from "./family";
import relationships from "./relationships";

export default [
  ...countries,
  ...family,
  ...general,
  ...occupations,
  ...relationships,
  ...newwords,
];

export const grouped = {
  countries,
  family,
  general,
  newwords,
  occupations,
  relationships,
};
