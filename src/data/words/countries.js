const countries = [
  ["country", "나라"],
  ["america", "미국"],
  ["japan", "일본"],
  ["korea", "한국"],
  ["china", "춘국"],
  ["australia", "호주 hoju"],
  ["spain", "스패인어"],
  ["france", "프란스"],
];

export default countries.map(([english, korean], index) => {
  return {
    id: `wc${index}`,
    english,
    korean,
  };
});
