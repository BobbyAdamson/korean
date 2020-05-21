import introduction from "./introduction";
import job from "./job";
import origin from "./origin";
import general from "./general";
import thisthat from './thisthat';

export default [
  ...general,
  ...introduction,
  ...job,
  ...thisthat,
  ...origin,
  ...general,
  ...introduction,
  ...job,
  ...origin,
  ...thisthat,
];

export const grouped = {
  general,
  introduction,
  job,
  origin,
  thisthat,
};
