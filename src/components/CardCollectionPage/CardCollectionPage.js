import { h, Component } from "preact";
import CardCollection from "../../components/CardCollection/CardCollection";
import languages from "../../data/enums/languages";

class CardCollectionPage extends Component {
  constructor(props) {
    super(props);
    this.categories = Object.keys(this.props.translations);
    this.state = {
      categoriesToUse: this.categories,
    };

    this.getTranslationData = this.getTranslationData.bind(this);
    this.getMenu = this.getMenu.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  getTranslationData() {
    return this.state.categoriesToUse
      ? this.state.categoriesToUse.reduce((accumulator, category) => {
          accumulator.push(...this.props.translations[category]);
          return accumulator;
        }, [])
      : Object.values(this.props.translations).flat();
  }

  getMenu() {
    function buildCheckboxes() {
      return this.categories.map((category) => {
        return (
          <li key={`${category}-row`}>
            <label for={`${category}-category`}>
              {category.toUpperCase()}
              <input
                checked={this.state.categoriesToUse.includes(category)}
                type="checkbox"
                name={`${category}`}
                onChange={this.handleCategoryChange}
              />
            </label>
          </li>
        );
      });
    }

    return (
      <nav>
        <ul>{buildCheckboxes()}</ul>
      </nav>
    );
  }

  handleCategoryChange(e) {
    const categoryToChange = e.target.name;
    const isChecked = e.target.checked;

    if (this.state.categoriesToUse.length < 2 && !isChecked) {
      this.setState({ categoriesToUse: this.state.categoriesToUse });
    }

    const newCategories = isChecked
      ? [...this.state.categoriesToUse, categoryToChange]
      : this.state.categoriesToUse.filter(
          (category) => category !== categoryToChange
        );

    this.setState({ categoriesToUse: newCategories });
  }

  render() {
    return (
      <div>
        <h1>Words</h1>
        {this.getMenu()}
        <CardCollection
          translations={[...this.getTranslationData()]}
          initialLanguage={languages.english}
        />
      </div>
    );
  }
}

export default CardCollectionPage;
