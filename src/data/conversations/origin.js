const origins = [
  ["Which country are you from?", "어느 나라 사람이에요?"],
  ["Where do you live?", "어디에 살아요"],
  ["Can you speak english?", "한국어를  해요"],
  ["Do you know korean?", "한국어를 알아요 (hangug-eoleul al-ayo)"],
  ["Do you know chinese?", "중국어를 알아요 (chungug-eoleul al-ayo)"],
  ["I know english", "영어를 알아요"],
  [
    "I know a little of korean",
    "한국어를 조금 알아요 (hangug-eoleul jo-gum al-ayo)",
  ],
  ["I dont know chinese", "아니 중국를 몰라요"],
  ["I speak english", "영어를 해요"],
  ["I dont speak chinese", "아니 중국를 못해요"],
  ["I speak korean a little bit", "한국어를 조금 해요"],
  [
    "How do you say tree in korean?",
    "나무는 한국어로 뭐예요? (namuneun hangug-eolo mwoyeyo) --- namuyeyo",
  ],
  ["I'm not Korean", "aniyo, jonun hanguk salami aniyeyo"],
  ["How do you say 아야 in english?", "아야는 영어로 뭐예요?"],
  ["I'm also american", "jodu miguk salamieyo"],
  ["I'm American", "저는 미국 사람이에요"],
  ["I live in New York", "저는 NewYork에 살아요"],
];

export default origins.map(([english, korean = "no korean yet"], index) => {
  return {
    id: `co${index}`,
    english,
    korean,
  };
});
