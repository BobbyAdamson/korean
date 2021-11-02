import vowels from "./vowels";
import tensedAndAspirated from "./tensedAndAspirated";
import complexVowels from "./complexVowels";

export default [
  ...complexVowels,
  ...vowels,
  ...tensedAndAspirated,
];

export const grouped = {
  vowels,
  tensedAndAspirated,
  complexVowels,
};
