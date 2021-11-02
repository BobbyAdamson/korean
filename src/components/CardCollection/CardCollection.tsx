import { h } from "preact";
import { useState, useEffect } from 'preact/hooks';
import Card from '../Card/Card';
import style from "./style.scss";
import sharedStyles from "../shared.scss";
import KeyDownCharacterCode from "../../utilities/enums/KeyDownCharacterCode";

const CardCollection = (props) => {

  const [cardIndex, setCardIndex] = useState(getRandomCardIndex());

  useEffect(() => {
    window.addEventListener("keydown", ({ key }) => {
      if (key == KeyDownCharacterCode.n) {
        setRandomCard();
      }
    });
  })

  function setRandomCard() { setCardIndex(getRandomCardIndex()) }

  function getRandomCardIndex() {
    return Math.floor(Math.random() * props.translations.length);
  }

  function renderCard() {
    const isCardPresent =
      props.translations[cardIndex] !== undefined;

    return isCardPresent ? (
      <Card
        translation={props.translations[cardIndex]}
        initialLanguage={props.initialLanguage}
      />
    ) : null;
  }

  return (
    <div class={style["card-container"]}>
      {renderCard()}
      <button onClick={setRandomCard} class={sharedStyles.button}>
        Get next card
      </button>
    </div>
  );
}

export default CardCollection;
