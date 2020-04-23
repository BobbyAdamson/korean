const countries = [
  ["country", "nara"],
  ["america", "miguk"],
  ["japan", ""],
  ["korea", ""],
  ["china", ""],
  ["germany", ""],
  ["australia", "호주 hoju"],
  ["spain", ""],
  ["france", ""],
];

export default countries.map(([english, korean], index) => {
  return {
    id: `wc${index}`,
    english,
    korean,
  };
});
