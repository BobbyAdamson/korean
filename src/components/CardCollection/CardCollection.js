import { h, Component } from "preact";
import Card from "../Card/Card";
import style from "./style.scss";

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

  getRandomCardIndex() {
    return Math.floor(Math.random() * this.props.translations.length);
  }

  getCard() {
    return (
      <Card
        translation={this.props.translations[this.state.cardIndex]}
        initialLanguage={this.props.initialLanguage}
      />
    );
  }

  newCard() {
    this.setState({ cardIndex: this.getRandomCardIndex() });
  }

  render() {
    return (
      <div class={style["card-container"]}>
        {this.getCard()}
        <button onClick={this.newCard}>Get next card</button>
      </div>
    );
  }
}

export default CardCollection;
