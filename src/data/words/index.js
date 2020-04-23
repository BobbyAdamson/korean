import countries from "./countries";
import occupations from "./occupations";
import general from "./general";

export default [...countries, ...general, ...occupations];

export const grouped = {
  countries,
  general,
  occupations,
};
