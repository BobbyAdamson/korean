const consonants = [
  ["k (aspirated)", "ㅋ"],
  ["t (aspirated)", "ㅌ"],
  ["p (aspirated)", "ㅍ"],
  ["ch (aspirated)", "ㅊ"],
  ["kk (tensed)", "ㄲ"],
  ["dd (tensed)", "ㄸ"],
  ["bb (tensed", "ㅃ"],
  ["ss (tensed)", "ㅆ"],
  ["jj (tensed)", "ㅉ"],
];

export default consonants.map(([english, korean], index) => {
  return {
    id: `ac${index}`,
    english,
    korean,
  };
});
