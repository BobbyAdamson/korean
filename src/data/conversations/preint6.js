export const describeDevice = [
    ['어떤 스마트폰 써?', ''],
    ['그 스마트폰 쓴 지 얼마나 됐어?', '이 스마트폰 쓴 지 삼년쯤 됐어요'],
    ['보통 스마트폰으로 (주로) 뭐 해?', '은행업무, 유투브 보기, 길 찾기예요'],
    ['보통 어떤 앱 사용해?', 'twitch, twitter, youtube'],
    ['나에게 추천하고 싶은 앱이 있어? 뭐야?', 
     'dark sky. 가장 정확한 날씨를 있어요'
    ],
    ['만약 다시 스마트폰을 사면, 어떤 거 사고 싶어?', ''],
    ['왜 그 스마트폰을 사고 싶어?', '이미 사용하는 알아요'],
    ['하루에 보통 얼마나 스마트폰을 봐?', 
     '하루에 아마 한 시간쯤 사용해요.',
     '하지만 저는 제가 많이 사용하는 아이패드가 있어요. 하루 종일 써요. '],
    ['컴퓨터를 산 지 얼마나 됐어?', 'how long has it been since you bought your computer?',
     '(산 지 9년쯤 됐어요. 노트북은 오래되었어요) '],
    ['컴퓨터로 주로 뭐 해?', ''],
    ['새 컴퓨터를 사고 싶은데 뭐가 좋을까? 왜?', '여행 갈 때, 가지고 갈 수 있어요'],
]

내가 살던 서울은 옛날보다 더 차가 많아졌습니다 - Seoul, where I lived, has more cars than before

export const technicalIssueQuestions = [
    ['스마트폰이나 노트북에 문제가 생긴 적 있어요?', 'Have you ever had a problem with your smartphone or laptop?'],
    ['어떤 문제가 있었어요?', 'what was the problem', 
        ['제 천화 화면에 금이 가요', 'thers a crack in my screen'],
    ],
    [
        '그 문제 때문에 일이나 생활(life)에서 곤란한 적 있었어요?', 
        'Have you ever had trouble with work or life because of that? (곤란하다 : be hard)'
    ],
    ['그래서 문제가 생겼을 때 어떻게 했어요?', 'what did you do when you had a hard problem'],
]

export const serviceCenterConversation = [
    ['왜요? 뭐가 이상해요?', ''],
    ['충전했어요? (* 충전하다 :charge battery)', '네, 충전했는데(도) 그래요.'],
    ['진짜요? 빨리 서비스 센터에 가 봐요.', '그래야겠어요'],
    ['그럼, 다시 한번 껐다 켜 보세요', 
        'Try turning the power off and on again. 그렇게 했는데(도) 안 돼요. '
    ],
    ['무엇을 도와 드릴까요?', '(computer/phone/battery)가(/이) 다 된 것 같아요'],
    ['아, 손님. 죄송합니다. 수리 예약을 하시겠어요?', 'would you like to repair?', 
        '수리비 얼마나 들어요?? 얼마나 걸여요? 네, 부탁드려요', '- how much is the service? how long will it take?
        ['돈이 많이 생각보다 들어요', 'it costs a lot more than I thought'],
        ['커피가 20 달러나 해요?', 'it actually costs 20 dollars?? (its too much)']
    ],
]

export const technicalProblems = [
    ['제 천화 화면에 금이 가요', 'thers a crack in my screen'],
    ['배터리가 다 됐어요', '(The battery has died)'],
    ['배터리가 빨리 닳아요', '(The battery runs out so fast)'],
    ['액정이 나갔어요.', '(cellphone screen is frozen.)'],
    ['버튼이 안 눌러져요.', '(keypads got stuck.)'],
    ['작동을 안 해요. ', '(stop working) '],
    ['인터넷 연결이 안 돼요.', '(I can’t get on the internet.)'],
    ['화면이 안 나와요.', '(The screen is not on.)'],
    ['이상한 소리가 나요.', '(It makes strange sound.)'],
    ['인터넷이 너무 느려요.', '(The internet is so slow.)'],
    ['키보드가 안 먹어', '=작동 안 해요)', '(The keyboard is not working'],
]

export const dailyRoutineChanges = [
    ['코로나 때문에 생활이 많이 변했어요?', ''],
    ['어떻게 변했어요?', 
        ['머리가 짧았는데, 지븜은 긴 머리를 있게 됐어요', 'hair was short, now long'],
        ['코로나 전에 사무실에 갔는데, 지금은 집에 일해쳤어요', 'i used to go to office'],
        ['코로나 전에 기타를 칠 시간이 없었는데', 'before corona i didnt have time to practice guitar'],
        ['코로나 동안 시간이 많이 있었는데, 기타 연습 많이 했기 때문에, 지금은 다시 잘 치게 됐어요', 'during corona i had a lot of time so i practiced a  lot nd now im good again'],
        ['코로나 전에 우리는 항상 집에 없었어서', 
         '개를 원하지 않았는데, 지금은 항상 집에 있어서, 개를 있게 됐어요']
    ],
    ['개인적으로 이런 변화가 어때요? - personally how was this change?', [
        '이 변화가 조금 무서웠지만 괜찮았어요', "this change was kind of scary but itw as ok"
    ]],
    ['코로나 때문에 생긴 좋은 변화와 나쁜 변화를 말해 주세요.', '- good and bad things', [
        '체육관은 닫쳤어요', 'the gyms were closed',
        '내 친구들은 뉴욕시에서 이사와쳤어요', 'my friends moved away from new york',
        ['코로나 전에 기타를 칠 시간이 없었는데', 'before corona i didnt have time to practice guitar'],
        ['코로나 동안 시간이 많이 있었어서',
         '기타 연습 많이 했기 때문에', 
         '지금은 다시 기타 잘 치게 됐어요', 'during corona i had a lot of time so i practiced a  lot nd now im good again'],
        ['코로나 전에는 통근시간이 길었는데, 지금은 그냥 집에서 일해쳤어요', 'used ot have long commute'],
    ]],
    [
        '처음 한국어 공부했을 때 뭐가 재일 힘들었어요?', 
        'when you first started learning korean what was the most difficult?', 
        '발음 어려워서 힘들었어요'
    ],
    ['지금 어때요?', '연습 많이 해서, 지금은 발음 좀 더 잘 하게 됐어요']
]

export const recollecting = [
    ['내가 자주 가던 식당이에요.' , 'It is the restaurant that I used to visit often.'],
    ['아까 내가 마시던 커피 어디에 있어요?' , 'Where’s the coffee I was drinking earlier?'],
    ['이 차는 아빠가 타던 거예요.' , 'This car is what my father used to drive.'],
]

export const otherImportantPhrases = [
    ['한 시간이 걸려요', 'it takes an hour'],
    ['돈이 많이 생각보다 들어요', 'it costs a lot more than I thought'],
    ['커피가 20 달러나 해요?', 'it actually costs 20 dollars?? (its too much)'],
    ['오십 원 들어요', 'it costs 50 won'],
    ['배터리가 다 된 것 같아요', 'battery is expired']
    ['날씨가 따뜻해졌어요.', 'the weatehr has gotten warmer'],
    ['한국어를 잘 하게 됐어요', 'i have toggten better at korean'],
    ['기타 잘 하게 됐어요', 'i have gotten better at guitar'],
    ['이거 아니고 그거 줘', 'not this one, give me that one'],
    ['동생하고 비교하면 내가 더 커', 'compared to my sibling im bigger'],
    ['다섯 잔이나 마셨어요', 'i drank 5 (a lot)']
]

// 3. 어떤 스마트폰 써? (or 어떤 스마트폰이야?)
// 4. 안드로이드하고 아이폰 중에 뭐가 더 좋아?
// 5. 그 스마트폰 쓴 지 얼마나 됐어?