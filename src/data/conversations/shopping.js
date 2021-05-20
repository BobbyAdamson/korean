const coursetwofinaltrouble = [
  ["Department store", "백화점[배콰점]"],
  ["Clothing store", "옷가게(옷집)"],
  ["Market", "시장"],
  ["Outlet", "아울렛"],
  ["Is this seat taken?", "(여기) 자리 있어요?"],
  ["What will you buy?", ""],
  ["Check please", ""],
  ["How much for this one?", ""],
  ["Red", ""],
  ["Yellow", ""],
  ["Green", ""],
  ["Blue", ""],
  ["Purple", ""],
  ["Black", ""],
  ["Brown", ""],
  ["White", ""],
  ["Small bag", ""],
  ["Big shoes", ""],
  ["This is short", ""],
  ["This is long", ""],
];

export default coursetwofinaltrouble.map(
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
