const thisthat = [
  ["This fruit", "이 과일"],
  ['That person', '그 사람'],
  ['Give me that thing', '저거 주세요 (not for people)'],
  ['What is this?', '이게 뭐예요?'],
  ['This is a watch', '이게 가방이에요'],
  ['Whose shoes are those?', '이게 / 그게 / 저게 누구 거예요?'],
  ['Thats dad\'s', '이건 / 그건 / 저건 appa 거예요.'],
  ['Where is this?', '이게 어디에 있어요?'],
  ['Its here/there/over there', '여기에 있어요 / 거기에 있어요 / 저기에 있어요']
];

export default thisthat.map(([english, korean], index) => {
  return {
    id: `th${index}`,
    english,
    korean,
  };
});
