
const food = [
  // ["food", "음식"],
  // ["rice", "밥"],
  // ["soup", "국"],
  // ["side dish", "반찬"],
  // ["Spoon", "숟가락"],
  // ["chopsticks", "젓가락"],
  // ["utensils", "수저"],
  // ['food', '음식'],
  // ['korean food', '한식'],
  // ['beer', '맥주'],
  // ['coffee', '커피'],
  // ['milk', '우유'],
  // ['beer', '맥주'],
  // ['cola', '콜라'],
  // ['water', '물'],
  ['Green tea', '녹차'],
  ['alcohol', '술'],
  ['grape juice', '포도주'],
  ['juice', '주스'],
  ['black tea', '홍차'],
  ['morning/breakfast', '아침'],
  ['midday/lunch', '점심'],
  ['evening/dinner', '저녁'],
  ['night', '밤'],
  ['a.m.', '오전'],
  ['p.m.', '오후'],
  ['brunch', '아점 / 브런치'],
  ['snack-between meals', '간식'],
  ['late-night meals', '야식']
];

export default food.map(([english, korean], index) => {
  return {
    id: `fii${index}`,
    english,
    korean,
  };
});
