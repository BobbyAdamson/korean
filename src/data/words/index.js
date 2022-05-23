import adjectives from "./adjectives";
import countries from "./countries";
import occupations from "./occupations";
import general from "./general";
import family from "./family";
import relationships from "./relationships";
import food from "./food";
import frequencies from "./frequencies";
import home from "./home";
import * as pik5 from "./pik5";

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
];

export const grouped = {
  ...pik5,
  // countries,
  // adjectives,
  // home,
  // family,
  // general,
  // food,
  // frequencies,
  // occupations,
  // relationships,
};
