const introductions = [
  ["Hello"],
  ["What is your name?"],
  ["How is it going?"],
  ["Any questions?"],
  ["Nice to meet you"],
  ["I am Robert"],
  ["Bye! (you are leaving)", 'kay-say'],
  ["Bye! (other person leaving)", 'kah-say'],
];

export default introductions.map(([english, korean = 'No korean yet lol'], index) => {
  return {
    id: `ci${index}`,
    english,
    korean
  };
});
