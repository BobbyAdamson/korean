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

const homework = [
  ["A monkey has a red butt", "원숭이 엉덩이는 빨개"],
  ["Whats red is an apple.", "빨가면 사과 "],
  ["Apples are very tasty", "사과는 맛있어"],
  ["Whats tasty is a banana", "맛있으면 바나나 "],
  ["Bananas are very long", "바나나는 길어"],
  ["Whats long is a train", "길면 기차 "],
  ["Trains are very fast", "기차는 빨라 "],
  ["Whats fast is a airplane", "빠르면 비행기"],
  ["Airplanes are very high", "비행기는 높아 "],
  ["Whats high is Bak Du mountain", "높으면 백두산 "],
];

const conversations = [
  ["Which restaurant(store) will you go to?", "어떤 식당(가게)에 가요?"],
  ["I'll go to the cheap restaurant", "저는 싼 식당에 식당(가게)에 가요"],
  ["Do they have alcohol?", "술 있어요?"],
  ["Yes they have alcohol", "네, (술이) 있어요"],
  ["No they dont have alcohol", "아니요,(술이) 없어요"],
];

const words = [
  ["monkey", "원숭"],
  ["butt", "엉덩이"],
  ["red", "빨가"],
  ["apple", "사과"],
  ["if", "면"],
  ["train", "기차"],
  ["long", "길어"],
  ["fast", "빨라"],
  ["airplane", "비행기"],
  ["high", "높아"],
  ["mountain", "산"],
];

export default homework.map(([english, korean = "no korean yet"], index) => {
  return {
    id: `homework4${index}`,
    english,
    korean,
  };
});
