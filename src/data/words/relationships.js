import { toCardCollection } from "../utils";

const relationships = [
  ["classmate", "빈친구([banchingu])"],
  ["company colleague", "회사동료([hwesa dongnyo])"],
  ["best friend", "절친/베프([jolchin/bepu])"],
  ["Korean friend", "한국친구([hangug chingu])"],
  ["female friend", "여사친([yosachin])"],
  ["male friend", "남사친([namsachin])"],
  ["Cousin", "사촌([sachon])"],
  ["girl friend", "여친([yochin])"],
  ["boy friend", "남친([namchin])"],
];

export default toCardCollection(relationships);
