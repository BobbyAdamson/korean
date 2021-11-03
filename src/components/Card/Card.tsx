import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import style from "./style.scss";
import sharedStyles from "../shared.scss";
import KeyDownCharacterCode from '../../utilities/enums/KeyDownCharacterCode';
import Languages from '../../utilities/enums/Languages';
import CardData from "../../utilities/types/CardData";

interface CardProps {
  initialLanguage: Languages;
  cardData: CardData;
}

const Card = ({ initialLanguage, cardData}: CardProps) => {
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    window.addEventListener("keydown", toggleOnKeyDown, true);

    return function cleanupKeydownEventListener() {
      window.removeEventListener("keydown", toggleOnKeyDown, true);
    }
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
      <p class={`${style.phrase}`}>{cardData[language]}</p>

      <button
        onClick={toggleLanguage}
        class={`${sharedStyles.button} ${sharedStyles.tertiary}`}
      >
        Show other side
      </button>

      <p><span class={style.languageLabel}>{language}</span></p>
    </div>
  );
}

export default Card;