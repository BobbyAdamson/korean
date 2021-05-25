const time = [
  ["6:00pm", "6:00pm"],
  ["두시 삼십분", "2:30"],
  ["두시 반", "2 and a half"],
  ["오후", "pm"],
  ["오전", "am"],
  ["지금 몇 시예요", "what time is it now"],
  ["지금 두시예요", "now its 2:30"],
  ["수업이 몇 시에 시작해요?", "what time will class start"],
  ["오전10시 30분에 시작해요", "It will start at 10:30"],
  ["그럼, 몇 시에 끝나요?", "then what time will it end?"],
  ["12시에 끝나요", "It will end at 12:00"],
  [
    "그럼, 점심 시간이 몇 시부터 몇 시까지예요?",
    "lunch time is from what time until that time",
  ],
  ["12시 부터 1시 까지예요", "starts at 12 ends at 1"],
  ["몇 시에 집에 가요?", "What time will you go home?"],
  ["몇 시에 회사에 가요?", "What time will you go to work?"],
  ["몇 시에 학교에 가요?", "What time will you go to school?"],
  ["저녁 식사 후에 뭐 해요?", "What do you do after dinner?"],
  ["수업 후에 뭐 해요?", "what do you do after class?"],
  ["점심 식사 후에 뭐 해요?", "what do you do after lunch?"],
  ["두 시간", "2 hours"],
  ["다섯 시간", "5 hours"],
  ["다섯 시간 반/삼십분", "5 hours and a half/30 minutes"],
];

const dailyRoutine = [
  ["몇 시에 자요?", "What time do you go to bed?"],
  ["저는  보통 12시쯤 자요.", "I usually go to bed at 12 o’clock."],
  ["몇 시에 일어나요?", "What time do you get up?"],
  ["하루에 보통 얼마나 일해요?", "About how long do you work per day?"],
  ["하루에 보통 얼마나 공부해요?", "About how long do you study per day?"],
  ["저는 보통 2시간쯤 공부해요.", "I usually study for about 2 hours."],
  ["오늘은 무슨 요일이에요?", "What day is it today?"],
  ["무슨 요일에 한국어 수업이 있어요?", "What day do you have Korean classes?"],
];

const dates = [
  ["삼월", "march (3rd month)"],
  ["십이월", "december"],
  ["지금 몇 월이에요? / 지금 무슨 달이에요?", "what month is it now?"],
  ["9월이에요.", "september"],
  [("지금  몇 년이에요?", "what year is it?")],
  ["오늘은 몇 월 며칠이에요?", "what month and date is it?"],
  ["10월 1일이에요", "its october 1st"],
  ["크리스마스가 언제예요?", "when is Christmas?"],
  ["생일이 언제예요?", "When is your birthday?"],
  ["십일월 이십칠일이에요", "November 27th"],
  ["이천이십년 고월 일일 목요일이에요", "It's thursday october first, 2020"],
];

const relativeDaysVocab = [
  ["그저께", "Day before yesterday"],
  ["어제", "yesterday"],
  ["오늘", "today"],
  ["내일", "tomorrow"],
  ["내일 모레", "Day after tomorrow"],
  ["지지난 주", "2 weeks ago"],
  ["지난 주", "last week"],
  ["이번 주", "this week"],
  ["다음 주", "next week"],
  ["다음 다음 주(=다다음 주=2주 후)", "2 weeks from now"],
  ["주중 / 평일", "Weekday"],
  ["주말", "weekend"],
  ["작년 (장년)", "last year"],
  ["올해", "this year"],
  ["내년", "next year"],
  ["매일", "every day"],
  ["자주", "frequently"],
  ["보통", "usually"],
  ["가끔", "sometimes"],
  ["거의", "rarely"],
  ["전혀", "never"],
];

const doingThangs = [
  ["한국어 얼마나 배웠어요?", "How long have learned Korean?) "],
  ["저는 5달쯤 배웠어요.", "I’ve learned for about 5months.)"],
  ["회사에 가요.", "I’m going to work.)"],
  ["한국 드라마를 봐요.", "I watch K-drama)"],
  ["운동을 해요.", "I’m working out.)"],
  ["한국어 공부를 해요.", "I study Korean.)"],
  ["저는 가끔 달리기를 해요.", "I sometimes run.)"],
  ["저는 기타를 쳐요.", "I play guitar.)"],
  ["이번 주말에 뭐 해요?", "What will you do this weekend?)"],
  ["숙제가 있지만, 친구를 만나요.", "I have homework, but I meet friends.)"],
  ["직장에 가요", "go to work"],
  ["친구와 먹으러 나가요", "Go out to eat with a friend"],
  ["집에 있어요", "I am at home"],
  ["운동을 해요", "Exercise"],
  ["요리를 해요", "Cook"],
  ["텔레비전을 봐요", "watch television"],
  ["책을 읽어요", "Read a book"],
  ["전화를 해요", "talk on the phone"],
  ["친구와 시간을 보내요 (아이들과 가족과)", "spend time with friends"],
  ["쇼핑해요", ""],
  ["빨래해요", "laundry"],
  ["청소해요", "clean"],
  ["공원에 가요", "go to the park"],
  ["미술 박물관에 가요", "go to art museum"],
  ["매일", "every day"],
  ["자주", "frequently"],
  ["보통", "usually"],
  ["가끔", "sometimes"],
  ["거의", "rarely"],
  ["전혀", "never"],
];

const wantingStuff = [
  [
    "이번 토요일에 저는 약속이 있어요.",
    "(This Saturday I have an appointment)",
  ],
  ["내일 뭐 하고 싶어요?", "(What do you want to do tomorrow?)"],
  ["친구를 만나고 싶어요.", "(I want to meet friends.)"],
  ["쇼핑을 가고 싶어요.", "(I want to go shopping.)"],
  ["지난 주 금요일에 뭐 했어요?", "(What did you do last Friday?)"],
  ["친구를 만났어요.", "(I met a friend.)"],
  ["한국어를 공부했어요.", "(I studied Korean.)"],
  ["쉬는 날에 뭐 해요?", "(What do you do when you have a day off?)"],
  ["가족과 시간을 보내요.", "(I spend time with my family.)"],
  ["지금 뭐 하고 있어요?", "(What are you doing now?)"],
  ["친구를 기다리고 있어요.", "(I’m waiting for my friend.)"],
];

const howAreThingsNotDoingThings = [
  ["1. 파티(는/은) 어땠어요?", "How was the party?"],
  ["안 먹어요 / 먹지 않아요.", "I dont eat"],
  ["파티에 왜 안 갔어요?", "why didnt you go to the party?"],
  ["바빠서 안 갔어요", "I'm busy so I didnt go"],
  ["가방이 비싸서 안 사요", "The bread is expensive so I dont buy it"],
  ["같이 식사 할까요? / 같이 밥을 먹을까요?", "Shall we eat?"],
  [
    "네, 좋아요. 같이 먹어요 / 같이 식사해요.",
    "Yeah that sounds good lets eat",
  ],
  ["미안해요. 오늘 시간이 없어요", "Sorry today I dont have time"],
  ["놀까요", "shall we play"],
  ["들을까요", "Shall we listen"],
  ["같이 마셔요", "Lets drink"],
  ["파티에 오세요", "Please come to the party"],
  [
    "친구를 데리고 와도 괜찮아요 / 친구하고 와도 돼요",
    "Can I bring my friends?",
  ],
  ["아니요, (미안하지만) 안돼요.", "No they cant"],
  ["언제가 좋아요?", "When is good?"],
  ["미안해요. 바빠요/ ___(은/는) 어때요?", "Sorry, I'm busy, how is ____?"],
  ["어때요?", "How about?"],
  ["날씨가 어때요", "HOw is the weather?"],
];

const whichNumbers = [
  ["january", "일월"],
  ["october", "시월"],
  ["november", "십일월"],
  ["september", "구월"],
  ["30 minutes", "삼십분"],
  ["2 hours", "두 시간"],
];

const troubleVocab = [
  ["약속이", "appointment"],
  ["숙제", "homework"],
  ["달리기", "running"],
  ["보내요", "spend"],
];

const coursethreefinal = [
  ...time,
  ...dailyRoutine,
  ...dates,
  ...relativeDaysVocab,
  ...doingThangs,
  ...wantingStuff,
  ...howAreThingsNotDoingThings,
];

const questions = [
  ["지금 몇 시예요", "what time is it now"],
  ["수업이 몇 시에 시작해요?", "what time will class start"],
  ["그럼, 몇 시에 끝나요?", "then what time will it end?"],
  [
    "그럼, 점심 시간이 몇 시부터 몇 시까지예요?",
    "lunch time is from what time until that time",
  ],
  ["몇 시에 집에 가요?", "What time will you go home?"],
  ["몇 시에 회사에 가요?", "What time will you go to work?"],
  ["몇 시에 학교에 가요?", "What time will you go to school?"],
  ["저녁 식사 후에 뭐 해요?", "What do you do after dinner?"],
  ["수업 후에 뭐 해요?", "what do you do after class?"],
  ["점심 식사 후에 뭐 해요?", "what do you do after lunch?"],
  ["몇 시에 자요?", "What time do you go to bed?"],
  ["몇 시에 일어나요?", "What time do you get up?"],
  ["하루에 보통 얼마나 일해요?", "About how long do you work per day?"],
  ["하루에 보통 얼마나 공부해요?", "About how long do you study per day?"],
  ["오늘은 무슨 요일이에요?", "What day is it today?"],
  ["무슨 요일에 한국어 수업이 있어요?", "What day do you have Korean classes?"],
  ["지금 몇 월이에요? / 지금 무슨 달이에요?", "what month is it now?"],
  [("지금  몇 년이에요?", "what year is it?")],
  ["오늘은 몇 월 며칠이에요?", "what month and date is it?"],
  ["크리스마스가 언제예요?", "when is Christmas?"],
  ["생일이 언제예요?", "When is your birthday?"],
  ["한국어 얼마나 배웠어요?", "How long have learned Korean?) "],
  ["이번 주말에 뭐 해요?", "What will you do this weekend?)"],
  ["내일 뭐 하고 싶어요?", "(What do you want to do tomorrow?)"],
  ["지난 주 금요일에 뭐 했어요?", "(What did you do last Friday?)"],
  ["쉬는 날에 뭐 해요?", "(What do you do when you have a day off?)"],
  ["지금 뭐 하고 있어요?", "(What are you doing now?)"],
  ["1. 파티(는/은) 어땠어요?", "How was the party?"],
  ["파티에 왜 안 갔어요?", "why didnt you go to the party?"],
  ["같이 식사 할까요? / 같이 밥을 먹을까요?", "Shall we eat?"],
  ["파티에 오세요", "Please come to the party"],
  [
    "친구를 데리고 와도 괜찮아요 / 친구하고 와도 돼요",
    "Can I bring my friends?",
  ],
  ["언제가 좋아요?", "When is good?"],
  ["어때요?", "How about?"],
  ["날씨가 어때요", "HOw is the weather?"],
];

export default questions.map(([english, korean = "no korean yet"], index) => {
  return {
    id: `fo${index}`,
    english,
    korean,
  };
});

/* Verb conjugation:

1. Regular forms: 
2. Past tense: 
3. I want to ___: 
4. I dont: 먹지 않아요.
5. (something) so (something): 바빠서 안 갔어요
4. Should we ___: 우리 같이 갈까요

*/