import introduction from "./introduction";
import job from "./job";
import origin from "./origin";
import general from "./general";

export default [
  ...general,
  ...introduction,
  ...job,
  ...origin,
  ...general,
  ...introduction,
  ...job,
  ...origin,
];

export const grouped = {
  general,
  introduction,
  job,
  origin,
};
