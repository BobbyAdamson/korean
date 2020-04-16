import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./style.scss";

const languages = { korean: style.korean, english: style.english };
const displayLanguages = {
  [languages.korean]: "Korean",
  [languages.english]: "English",
};

const Card = (translation) => {
  const [language, setLanguage] = useState(languages.korean);

  function toggle() {
    setLanguage(
      language === languages.korean ? languages.english : languages.korean
    );
  }

  return (
    <div class={`${style.card} ${language}`}>
      <p class={`${languages.english} ${style.phrase}`}>
        {translation.english}
      </p>
      <p class={`${languages.korean} ${style.phrase}`}>{translation.korean}</p>
      <button onClick={toggle}>Show other side</button>
      <p>
        <span class={style.languageLabel}>{displayLanguages[language]}</span>
      </p>
    </div>
  );
};

export default Card;
