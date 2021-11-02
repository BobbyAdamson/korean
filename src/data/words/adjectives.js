const adjectives = [
  ["Cheap", "싸다 -> 싸+ㄴ -> 싼"],
  ["Expensive", "비싸다 -> -> 비싼"],
  ["Quiet", "조용하다  -> 조용하+ㄴ -> 조용한"],
  ["Noisy", "시끄럽다 -> 시끄럽+은 -> 시끄러운"],
  ["Delicious", "맛있다 [마싣따] -> 맛있+는 -> 맛있는[마신는]"],
  ["Not delicious", "맛없다 [마덥따] -> 맛없+는 -> 맛없는[마덤는]"],
  ["Fast", "빠르다  -> 빠르+ㄴ -> 빠른"],
  ["Slow", "느리다  -> 느리+ㄴ -> 느린"],
  ["Clean", "깨끗하다  -> 깨끗하+ㄴ -> 깨끗한[깨끄탄]"],
  ["Kind", "친절하다  -> 친절하+ㄴ -> 친절한"],
];

export default adjectives.map(([english, korean], index) => {
  return {
    id: `adj${index}`,
    english,
    korean,
  };
});
