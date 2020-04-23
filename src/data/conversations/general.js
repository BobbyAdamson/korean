const general = [
  ["I'm sorry (informal)", "mianeyo"],
  ["I'm sorry (formal)", "jesonghamnida"],
  ["How is it going?", "ottoke jinessoyo?"],
  ["Any questions?", "jilmun itssoyo?"],
  ["See you next week", "다음주에 만나요 (da-eumjue mannayo)"],
];

export default general.map(([english], index) => {
  return {
    id: `cg${index}`,
    english,
    korean: "No korean yet lol",
  };
});
