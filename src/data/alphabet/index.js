import consonants from "./consonants";
import vowels from "./vowels";
import tensedAndAspirated from "./tensedAndAspirated";
import complexVowels from "./complexVowels";

export default [
  ...complexVowels,
  ...consonants,
  ...vowels,
  ...tensedAndAspirated,
];

export const grouped = {
  consonants,
  vowels,
  tensedAndAspirated,
  complexVowels,
};
