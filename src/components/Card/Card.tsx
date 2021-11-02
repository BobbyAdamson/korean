import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import style from "./style.scss";
import sharedStyles from "../shared.scss";
import KeyDownCharacterCode from '../../utilities/enums/KeyDownCharacterCode';
import Languages from '../../utilities/enums/Languages';
import languages from "../../data/enums/languages";

const Card = (props) => {

  const [language, setLanguage] = useState(props.initialLanguage === languages.english ? Languages.English : Languages.Korean);

  useEffect(() => {
    window.addEventListener("keydown", toggleOnKeyDown, true);

    return function cleanupEventListener() { window.removeEventListener("keydown", toggleOnKeyDown, true); }
  });

  function toggleOnKeyDown({ key }) {
    if (key === KeyDownCharacterCode.l) { toggleLanguage() }
  }

  function toggleLanguage() {
    const nextLanguage = 
      language === Languages.Korean ? Languages.English : Languages.Korean;

    setLanguage(nextLanguage);
  }

  return (
    <div class={`${style.card} ${language}`}>
      <p class={`${style.phrase}`}>
        {props.translation[language]}
      </p>
      <button
        onClick={toggleLanguage}
        class={`${sharedStyles.button} ${sharedStyles.tertiary}`}
      >
        Show other side
      </button>
      <p>
        <span class={style.languageLabel}>{language}</span>
      </p>
    </div>
  );
}

export default Card;