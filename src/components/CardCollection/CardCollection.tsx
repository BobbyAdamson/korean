import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import Card from "../Card/Card";
import style from "./style.scss";
import sharedStyles from "../shared.scss";
import KeyDownCharacterCode from "../../utilities/enums/KeyDownCharacterCode";
import CardData from "../../utilities/types/CardData";
import Languages from "../../utilities/enums/Languages";

interface CardCollectionProps {
  randomNext: boolean;
  cardDatas: CardData[];
  initialLanguage: Languages;
}

const CardCollection = ({
  randomNext,
  cardDatas,
  initialLanguage,
}: CardCollectionProps) => {
  const [cardIndex, setCardIndex] = useState(getRandomCardIndex());

  function setCardCallback({ key }) {
    if (key == KeyDownCharacterCode.n) {
      setRandomCard();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", setCardCallback);

    return () => {
      window.removeEventListener("keydown", setCardCallback);
    };
  });

  function setNextCard() {
    randomNext ? setRandomCard() : setNextCardInSequence()
  }

  function setNextCardInSequence() {
    const nextCardIndex = cardIndex === cardDatas.length - 1 ? 0 : cardIndex + 1
    setCardIndex(nextCardIndex)
  }

  function setRandomCard() {
    setCardIndex(getRandomCardIndex());
  }

  function getRandomCardIndex() {
    return Math.floor(Math.random() * cardDatas.length);
  }

  function renderCard() {
    const isCardPresent = cardDatas[cardIndex] !== undefined;

    return isCardPresent ? (
      <Card cardData={cardDatas[cardIndex]} initialLanguage={initialLanguage} />
    ) : null;
  }

  return (
    <div class={style["card-container"]}>
      {renderCard()}
      <button onClick={setNextCard} class={sharedStyles.button}>
        Get next card
      </button>
    </div>
  );
};

export default CardCollection;
