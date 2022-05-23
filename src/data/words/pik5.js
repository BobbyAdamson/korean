import { toCardCollection } from "../utils";

const genre = [
  ["모험 영화", "Adventure"],
  ["전기", "Memoir"],
  ["범죄 영화", "Crime"],
  ["외국 영화", "Foreign"],
  ["역사 영화", "History"],
  ["공포 영화", "Horror"],
  ["단편 영화", "Short film"],
  ["전쟁 영화", "War"],
  ["서부극", "Western"],
  //   []
  //   ["액션 영화", "Action"],
  //   ["애니메이션 (영화)", "Animation"],
  //   ["코미디 영화", "Comedy"],
  //   ["다큐(멘터리)", "Documentary"],
  //   ["가족 영화", "Family"],
  //   ["판타지 (영화)", "Fantasy"],
  //   ["뮤지컬 영화", "Musical"],
  //   ["미스터리 영화", "Mystery"],
  //   ["로맨스(멜로)", "Romance"],
  //   ["스릴러 (영화)", "Thriller"],
  //   ["SF영화(공상과학영화)", "Science Fiction"],
];

const emotions = [
  ["폭력적이다(폭력적인) (pongnyokjjogida)", "Be violent"],
  ["아슬아슬하다(아슬아슬한) / 두근두근하다(두근두근한)", "To be exciting"],
  ["웃기다(웃긴)", "To be funny"],
  ["지루하다(지루한)", "To be boring"],
  ["감동적이다(감동적인)", "To be moving/touching"],
  ["가슴이 따뜻하다(따뜻한)", "heartwarming"],
  ["가슴(마음) 아프다", "Heartbroken"],
  ["생각하게 하다/(생각하게 하는) ", "Make you think"],
  ["심각한 / 무거운", "serious/heavy"],
  ["가며운", "Light"],
  ["기대되다", "look forward to it/anticipate"],
  ["답답하다", "heavy"],
  ["흥미있다", "interesting ???"],
  ["긴장감이 있다", "tense"],
  ["실망하다", "disappointed"],
  ["훈훈하게 하다", "warm up"],
  //   ["x", "x"],
  //   ["무섭다(무서운)", "To be scary"],
  //   ["재미있다(재미있는)", "To be interesting"],
  //   ["즐겁다", "fun/good time"],
];

const phrases = [
  [
    "주말에 시간 되세요?(있어요?/괜찮아요?)",
    "Are you available on the weekend?",
  ],
  [
    "시간 되면 영화나 볼까 하는데 어때요?(=시간 되면 같이 영화 볼까요?)",
    "Why don’t we go to a movie if you‘re free?",
  ],
  [
    "그날은 별일 없어요. / 별다른 계획(약속) 없어요.",
    "I’m free on the day. / I don’t have any plans(appointment).",
  ],
  ["수요일만 빼고 다 좋아요(괜찮아요).", "Any day is fine except Wednesday."],
  ["__씨가 정하세요.(친구 : 니가 정해)", "You decide."],
];

const pik5 = [
  ["영화", "movies"],
  ["배우 / 여배우", "Actor / actress"],
  ["주연배우", "Main actor"],
  ["감독", "Director"],
  ["대본", "Script"],
  ["대사", "Lines/part/speech"],
  ["주인공", "Main character"],
  ["주역", "Main role"],
  ["제목", "title"],
  ["요약", "summary"],
  ["최근(에)", "Recently"],
  ["가난하다(가난한)", "To be poor"],
  ["부잣집(부자+집)", "Rich(family)"],
  ["일어나다(일어나는)", "Happen"],
  ["예고(편)", "Trailer"],
  ["자막", "Subtitles"],
  ["타입", "type"],
  ["가치가 있다", "To be worth"],
  ["초대되다/초대하다", "To be invited/to invite"],
  ["벌써", "already"],
  ["차다", "To be full/to be taken"],
  ["표/티켓", "Ticket"],
  ["자리", "seat"],
  ["프로그램", "Program"],
  ["전문이다", "To be professional"],
  ["연기", "Acting/performance"],
  ["연기(하다)", "To delay"],
  ["연기", "smoke"],
  ["상영(하다)", "screening"],
  ["상영하다", "Play/run"],
  ["신작", "A new work"],
  ["최신", "latest"],
  ["리뷰 / 평", "review"],
  ["영화관", "cinema"],
  ["극장", "theater"],
  ["아카데미 상을 받다", "Win an Academy award"],
  ["들리다 ( *듣다)", "To be heard (*hear)"],
  ["보이다 (*보다)", "To be seen (*see/watch)"],
  ["끊기다 (_끊다)", "To be cut off (_ cut off)"],
  ["밀리다 (*밀다)", "To be pushed (*push)"],
];

export const pik5Words = toCardCollection(pik5);
export const genreWords = toCardCollection(genre);
export const emotionsWords = toCardCollection(emotions);
export const phrasesWords = toCardCollection(phrases);
