const introductions = [
  ["Hello"],
  ["What is your name?"],
  ["How is it going?"],
  ["Any questions?"],
  ["Nice to meet you"],
  ["I am Robert"],
  ["Bye! (you are leaving)"],
  ["Bye! (other person leaving)"],
];

export default introductions.map(([english], index) => {
  return {
    id: `ci${index}`,
    english,
    korean: "No korean yet lol",
  };
});
