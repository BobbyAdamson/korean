const frequencies = [
  ['언제나/항상', 'always 100%'],
  ['보통', 'usually 80-90%'],
  ['자주', 'often 70-80%'],
  ['가끔/때때로', 'sometimes 50%'],
  ['거의+안', 'rarely 5-10%'],
  ['절대로 +안~', 'never 0%'],
];

export default frequencies.map(([korean, english], index) => {
  return {
    id: `fr${index}`,
    english,
    korean,
  };
});
