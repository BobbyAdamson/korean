import food from './food';
import introduction from "./introduction";
import job from "./job";
import origin from "./origin";
import general from "./general";
import thisthat from './thisthat';

export default [
  ...general,
  ...introduction,
  ...job,
  ...food,
  ...thisthat,
  ...origin,
  ...general,
  ...introduction,
  ...job,
  ...food,
  ...origin,
  ...thisthat,
];

export const grouped = {
  general,
  food,
  introduction,
  job,
  origin,
  thisthat,
};
