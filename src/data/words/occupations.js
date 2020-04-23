const occupations = [
  ["chef", "요리사"],
  ["doctor", ""],
  ["singer", ""],
  ["reporter", "기자"],
  ["teacher", ""],
  ["student", ""],
  ["bank clerk", "은행원 (eunhaeng-won)"],
  ["teacher", ""],
  ["researcher", "연구원 (yeonguwon)"],
  ["salary employee", "회사원 (hoesawon)"],
  ["actor", "배우 baeu"],
  ["police", "경찰 (gyeongchal)"],
  ["model", ""],
  ["lawyer", "변호사 byeonhosa"],
  ["nurse", "간호사 ganhosa"],
  ["housewife", ""],
];

export default occupations.map(([english, korean], index) => {
  return {
    id: `wo${index}`,
    english,
    korean,
  };
});
