const wordsImHavingTroubleWith = [
  ["reporter", "기자"],
  ["researcher", "연구원 (yeonguwon)"],
  ["accountant", "회계사 (hoegyesa)"],
  ["professor", "교수 (gyosu)"],
  ["technician", "기술자 (gisulja"],
  ["scientist", "과학자 (gwahagja)"],
  ["hairdresser", "미용사 (miyongsa)"],
  ["mail carrier/postman", "우체부 (uchebu)"],
  ["firefighter", "소방관 (sobang-gwan)"],
  ["businessman", "사업가 (sa-eobga)"],
  ["nose", "코 (kho)"],
  ["shoes", "구두"],
  ["cucumber", "오이"],
  ["kid", "아이"],
  ["baby", "아기"],
  ["ouch", ""],
  ["milk", ""],
  ["train", "기차"],
  ["rabbit", "toki"],
  ["grape", "podo"],
  ["tail", "꼬리 (kkoli)"],
  ["rabbit", "토끼 (toki)"],
  ["kiss", "뽀뽀"],
  ["dad", "아빠"],
  ["apartment", "아파트 (apateu)"],
  ["again/in addition", "또 (tto)"],
  ["salty", "짜다 (jjada)"],
  ["cheap", "싸다 (ssada)"],
  ["toast", "토스트"],
  ["coffee", "커피"],
  ["lake", "호수"],
  ["furniture", "가구"],
  ["pants", "바지"],
  ["fox", "여우"],
  ["write", "쓰다"],
  ["ostrich", "타조"],
  ["headband", "머리띠"],
  ["magpie", "까치"],
];

export default wordsImHavingTroubleWith.map(([english, korean], index) => {
  return {
    id: `wo${index}`,
    english,
    korean,
  };
});
