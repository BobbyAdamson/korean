import { h } from "preact";
import { useState, useEffect } from 'preact/hooks';
import Card from '../Card/Card';
import style from "./style.scss";
import sharedStyles from "../shared.scss";
import KeyDownCharacterCode from "../../utilities/enums/KeyDownCharacterCode";
import CardData from "../../utilities/types/CardData";
import Languages from "../../utilities/enums/Languages";

interface CardCollectionProps {
  cardDatas: CardData[];
  initialLanguage: Languages;
}

const CardCollection = ({ cardDatas, initialLanguage}: CardCollectionProps) => {

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
    return Math.floor(Math.random() * cardDatas.length);
  }

  function renderCard() {
    const isCardPresent =
      cardDatas[cardIndex] !== undefined;

    return isCardPresent ? (
      <Card
        cardData={cardDatas[cardIndex]}
        initialLanguage={initialLanguage}
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
