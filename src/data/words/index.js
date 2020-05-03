import countries from "./countries";
import occupations from "./occupations";
import general from "./general";
import newwords from "./newwords";

export default [...countries, ...general, ...occupations, ...newwords];

export const grouped = {
  countries,
  general,
  newwords,
  occupations,
};
