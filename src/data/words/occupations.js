const occupations = [
  ["chef", "요리사"],
  ["doctor", ""],
  ["singer", "가수"],
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
  ["accountant", "회계사"],
  ["professor", "교수"],
  ["technician", "기술자"],
  ["scientist", "과학자"],
  ["hairdresser", "미용사"],
  ["mail carrier/postman", "우체부"],
  ["firefighter", "소방관"],
  ["businessman", "사업가 (sa-eobga)"],
];

export default occupations.map(([english, korean], index) => {
  return {
    id: `wo${index}`,
    english,
    korean,
  };
});
