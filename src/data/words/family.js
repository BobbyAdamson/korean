import { toCardCollection } from "../utils";

const family = [
  ["Grand father", "할아버지([halaboji]"],
  ["Grand mother", "할머니([halmoni]"],
  ["Father", "아버지([aboji]"],
  ["Mother", "어머니([omoni]"],
  ["older sister", "누나/언니([nuna/onni]"],
  ["older brother", "오빠/형([oppa/hyong]"],
  ["younger sister", "여동생([yodongsaeng]"],
  ["younger brother),남편([nampyon] husband", "남동생([namdongsaeng]"],
  ["wife", "아내([ane]"],
  ["kid", "아이([ai]"],
  ["daughter", "딸([ddal]"],
  ["son", "아들([adeul]"],
];

export default toCardCollection(family);
