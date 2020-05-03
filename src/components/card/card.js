import { h, Component } from "preact";
import style from "./style.scss";
import languages from "../../data/enums/languages";
import sharedStyles from "../shared.scss";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: props.initialLanguage,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleOnKeyPress = this.toggleOnKeyPress.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keypress", this.toggleOnKeyPress, true);
  }

  componentDidUnmount() {
    window.removeEventListener("keypress", this.toggleOnKeyPress, true);
  }

  toggleOnKeyPress({ charCode }) {
    if (charCode == 108) {
      this.toggle();
    }
  }

  toggle() {
    this.setState({
      language:
        this.state.language === languages.korean
          ? languages.english
          : languages.korean,
    });
  }

  render() {
    return (
      <div class={`${style.card} ${this.state.language}`}>
        <p class={`${style.phrase}`}>
          {this.props.translation[this.state.language]}
        </p>
        <button
          onClick={this.toggle}
          class={`${sharedStyles.button} ${sharedStyles.tertiary}`}
        >
          Show other side
        </button>
        <p>
          <span class={style.languageLabel}>{this.state.language}</span>
        </p>
      </div>
    );
  }
}

export default Card;
