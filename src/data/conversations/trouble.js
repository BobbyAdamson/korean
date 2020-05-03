import introduction from "./introduction";
import job from "./job";
import origin from "./origin";
import general from "./general";

const all = [...introduction, ...origin, ...general];

const trouble = all.filter(({ id }) => {
  return ["co7", "co11", "co12"].includes(id);
});

export default [...trouble, ...job];
