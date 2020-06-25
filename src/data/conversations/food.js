const food = [
  ["what food do you like", "무슨 음식을 좋아해요"],
  ["I like tteokbokki", "떡볶이를 좋아해요"],
  ['Do you like juice?', '주스를 좋아해요?'],
  ['No I dont like juice', "아니요, 주스를 안좋아해요."],
  ['What food do you eat?', '어떤 음식을 먹어요'],
  ['I eat korean food', '한식을 먹어요'],
  ['Do you drink beer?', "맥주를 마셔요?"],
  ["I drink beer", "맥주를 마셔요"],
  ["No I dont drink beer", "아니요, 맥주를 안 마셔요."],
  ["No I dont REALLY drink beer", "아니요, 맥주를 잘 안 마셔요."],
  ['What do you usually drink?', '보통 뭘 마셔요?'],
  ['Usually I drink water', '보통 물을 마셔요'],
  ['I drank water', '물을 마셨어요'],
  ['Do you eat breakfast', '아침을 먹어요?'],
  ['Yes I eat breakfast', '네, 저는 아침을 먹어요'],
  ['No I dont eat breakfast', '아니요, 저는 아침을 안 먹어요'],
  ['No I dont really eat breakfast', '아니요, 저는 아침을 잘 안 먹어요'],
  ['What do you eat for breakfast?', '아침으로 뭘 먹어요?'],
  ['I usually eat bread for breakfast', '저는보통  빵을 먹어요'],
  ['(after you asked about breakfast) What about lunch?', '점심은요?'],
  ['(after you asked about lunch) What about dinner?', '저녁은요?'],
  ["With whom do you eat?", "누구하고 먹어요?"],
  ["I eat with friend", "친구하고 먹어요."],
  ["I eat by meyself", "혼자 먹어요"],
  ["Bread with coffee", "빵하고 커피"],
  ["With a friend...", "친구하고..."],
  ["Where do you eat?", "어디에서 먹어요?"],
  ["I eat at a restaurant.", "저는 식당에서 먹어요"],
  ["Do you eat out?", "밖에서 먹어요?"],
  ["Yes, I eat out.", "네,(저는) 밖에서 먹어요"],
  ["Yes, I usually eat out", "네,(저는) 주로 밖에서 먹어요."],
  ["No, I usuaully eat at home", "아니요, (저는) (주로) 집에서 먹요."],
  ["WIll you go to a restaurant?", " 식당에 가요"],
  ["Yes I'll go", "네, 가요."],
  ["No, I won't go", "아니요, 안 가요"],
];

export default food.map(([english, korean = "no korean yet"], index) => {
  return {
    id: `fo${index}`,
    english,
    korean,
  };
});





// ["하고(and, with) : 명사(noun) + and. / 명사(noun) + and+  명사", "place +에서  : KFC에서, 회사에서 , 한식당에서`..."]

// (bread with coffee) / (with friend)

// * (where do you eat?) /저는 식당에서 먹어요.( I eat at restaurant.)

// place +에서  : KFC에서, 회사에서 , 한식당에서...

// * 밖에서 먹어요?(=외식해요?) (Do you eat out?)/ 네,(저는) 밖에서 먹어요. (Yes, I eat out) = 네, (저는)외식해요. / 네,(저는) 주로 밖에서 먹어요. (Yes, I usually eat out.)=네, (저는) 주로 외식해요. / 아니요, (저는) (주로) 집에서 먹요. (No, I usually eat at home.)

// * 식당에 가요?(Will you go to a restaurant?) / 네, 가요. / 아니요, 안 가요.
