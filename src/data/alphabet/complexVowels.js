import { toCardCollection } from "../utils";

// const complexVowels = [
//   ["ㅐ", "ae"],
//   ["ㅔ", "ei"],
//   ["ㅟ", "ㅜ + ㅣ (wi)"],
//   ["ㅝ", "ㅜ + ㅓ (wo)"],
//   ["ㅚ", "ㅗ + ㅣ (oe: sounds like “way”)"],
//   ["ㅘ", "ㅗ + ㅏ (wa)"],
//   ["ㅢ", "ㅡ + ㅣ"],
//   ["ㅖ", "yeh"],
//   [
//     "ㅙ",
//     "wae (the most common of the three, it is most commonly seen in the word 왜 – meaning “why”).",
//   ],
//   [
//     "ㅒ",
//     "yae (most commonly seen in the word “얘기하다” – meaning “to talk with”)",
//   ],
//   ["ㅞ", "we (probably the most uncommon letter in Korean"],
// ].map((arr) => arr.reverse());

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
