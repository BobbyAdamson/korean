const jobs = [
  ["What's your job?", "직업이 뭐예요? (jigobi moayo)"],
  ["Where do you work?", "어디에서 일해요? (odiayso ilheo)"],
  ["I work at ____", "저는 ____에서 일해요 (jonun cardflight-ayso ilheo)"],
  ["I work in new york", "저는 NewYork에서 일해요 (jonun new york-ayso ilheo)"],
  [
    "I am not a police officer",
    "저는 _이/가 아니에요 (jonun geyongchaeli aniyeyo",
  ],
  ["I am a singer", "저는 kasu 예요 (jonun kasuyayo)"],
  ["Are you a [job]?"],
  ["No, I am not a [job]"],
];

export default jobs.map(([english, korean], index) => {
  return {
    id: `cj${index}`,
    english,
    korean,
  };
});
