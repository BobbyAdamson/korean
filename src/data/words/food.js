const food = [
  ["food", "음식"],
  ["rice", "밥"],
  ["soup", "국"],
  ["side dish", "반찬"],
  ["Spoon", "숟가락"],
  ["chopsticks", "젓가락"],
  ["utensils", "수저"]
];

export default food.map(([english, korean], index) => {
  return {
    id: `fo${index}`,
    english,
    korean,
  };
});
