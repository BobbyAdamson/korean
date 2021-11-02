import { toCardCollection } from "../utils";

const complexVowels = [
  ["ㅐ", "ae"],
  ["와", "wa"],
  ["워", "wə"],
  ["위", "wi"],
  ["웨", "we"],
  ["왜", "we"],
  ["의", "ui"],
  ["외", "we"],
].map((arr) => arr.reverse());

export default toCardCollection(complexVowels, "cw");
