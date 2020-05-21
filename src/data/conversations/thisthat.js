const thisthat = [
  ["This fruit", "이 과일"],
  ['That person', '이 사람'],
  ['Give me this thing', '이거 주세요 (not for people)'],

  ['This is a watch', '이게 가방이에요'],
  ['What is this?', '이게 뭐예요?'],
  ['Whose shoes are those?', '이게 / 그게 / 저게 누구 거예요?'],
  ['Where is this?', '이게 어디에 있어요?'],

  ['Thats dad\'s', '이건 / 그건 / 저건 appa 거예요.'],
  //
  ['Its here/there/over there', '여기에 있어요 / 거기에 있어요 / 저기에 있어요']
];

export default thisthat.map(([english, korean], index) => {
  return {
    id: `th${index}`,
    english,
    korean,
  };
});
