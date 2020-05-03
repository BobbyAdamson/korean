import { h, Component } from "preact";
import Card from "../Card/Card";
import style from "./style.scss";
import sharedStyles from "../shared.scss";

class CardCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardIndex: this.getRandomCardIndex(),
    };

    this.getRandomCardIndex = this.getRandomCardIndex.bind(this);
    this.newCard = this.newCard.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keypress", ({ charCode }) => {
      if (charCode == 110) {
        this.newCard();
      }
    });
  }

  componentDidUpdate(previousProps) {
    if (previousProps.translations !== this.props.translations) {
      this.newCard();
    }
  }

  getRandomCardIndex() {
    return Math.floor(Math.random() * this.props.translations.length);
  }

  getCard() {
    const isCardPresent =
      this.props.translations[this.state.cardIndex] !== undefined;

    return isCardPresent ? (
      <Card
        translation={this.props.translations[this.state.cardIndex]}
        initialLanguage={this.props.initialLanguage}
      />
    ) : null;
  }

  newCard() {
    this.setState({ cardIndex: this.getRandomCardIndex() });
  }

  render() {
    return (
      <div class={style["card-container"]}>
        {this.getCard()}
        <button onClick={this.newCard} class={sharedStyles.button}>
          Get next card
        </button>
      </div>
    );
  }
}

export default CardCollection;
