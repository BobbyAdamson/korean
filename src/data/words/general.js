const general = [
  ["a little", "jogum"],
  ["and", ""],
  ["tree", "나무 (namu)"],
  ["nose", "코 (ko)"],
  ["shoes", "구두"],
  ["cucumber", "오이"],
  ["kid", "아이"],
  ["ouch", ""],
  ["milk", ""],
  ["train", "kija"],
  ["rabbit", "toki"],
  ["grape", "podo"],
  ["tail", "꼬리 (kkoli)"],
  ["rabbit", "토끼 (toki)"],
  ["kiss", "뽀뽀"],
  ["dad", "아빠"],
  ["apartment", "아파트 (apateu)"],
  ["again/in addition", "또 (tto)"],
  ["salty", "짜다 (jjada)"],
  ["chepa", "싸다 (ssada)"],
  ["toast", "싸다"],
  ["coffee", "커피"],
];

export default general.map(([english, korean], index) => {
  return {
    id: `wg${index}`,
    english,
    korean,
  };
});
