const coursetwofinal = [
  ["Department store", "백화점[배콰점]"],
  ["Clothing store", "옷가게(옷집)"],
  ["Market", "시장"],
  ["Outlet", "아울렛"],
  ["Is this seat taken?", "(여기) 자리 있어요?"],
  ["What will you buy?", "무엇을 사요"],
  ["I'll buy bag, I'll buy pants", "가방을 사요. / 바지를 사요."],
  ["WHere do you usually shop?", "어디에서 주로 쇼핑해요?"],
  ["What do you buy there?", "거기에서 뭐 사요?"],
  ["Check please", "청구서 주세요"],
  ["How much for this one?", "이건 얼마예요"],
  ["Welcome to our store", "어서 오세요"],
  ["Color", "색"],
  ["Red", "빨강"],
  ["Yellow", "노랑"],
  ["Green", "녹색"],
  ["Blue", "파랑"],
  ["Purple", "보라"],
  ["Black", "검정"],
  ["Brown", "갈색"],
  ["White", "흰색"],
  ["Small bag", "작은 가방"],
  ["Big shoes", "큰 신발"],
  ["This is short", "이것은 짧아요"],
  ["Good food", "좋은 umsheeg"],
  ["bad food", "나쁜"],
  ["this person is good", "사람이 좋아요."],
  ["this person is bad", "사람이 나빠요."],
  ["hair", "머리"],
  ["This is long", "이것은 길어요"],
  ["100", "백"],
  ["1000", "천"],
  ["10,000", "만"],
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
  ["night", "pam"],
];

// Batchim -> eun
// No batchim -. neun
// L -> replace with eun
// SS -> nun

// 빨간색 (red)
// 노란색 (yellow)
// 오렌지색 (orange)=주황색
// 녹색(green)=초록색
// 파란색(blue)
// 보라색(purple)
// 검은색(black)=까만색=검정색
// 갈색(brown)
// 흰색(white)=하얀색

export default coursetwofinal.map(
  ([english, korean = "no korean yet"], index) => {
    return {
      id: `fo${index}`,
      english,
      korean,
    };
  }
);

// ["하고(and, with) : 명사(noun) + and. / 명사(noun) + and+  명사", "place +에서  : KFC에서, 회사에서 , 한식당에서`..."]

// (bread with coffee) / (with friend)

// * (where do you eat?) /저는 식당에서 먹어요.( I eat at restaurant.)

// place +에서  : KFC에서, 회사에서 , 한식당에서...

// * 밖에서 먹어요?(=외식해요?) (Do you eat out?)/ 네,(저는) 밖에서 먹어요. (Yes, I eat out) = 네, (저는)외식해요. / 네,(저는) 주로 밖에서 먹어요. (Yes, I usually eat out.)=네, (저는) 주로 외식해요. / 아니요, (저는) (주로) 집에서 먹요. (No, I usually eat at home.)

// * 식당에 가요?(Will you go to a restaurant?) / 네, 가요. / 아니요, 안 가요.
