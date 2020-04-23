import { h } from "preact";
import { useState } from "preact/hooks";
import CardCollection from "../../components/CardCollection/CardCollection";
import conversations, { grouped } from "../../data/conversations/index";
import languages from "../../data/enums/languages";

const Conversations = () => {
  const categories = ["jobs", "origin"];
  const [categoriesToUse, setCategories] = useState(categories);

  function getTranslationData() {
    return categoriesToUse
      ? categoriesToUse.reduce((accumulator, category) => {
          accumulator.push(...grouped[category]);
          return accumulator;
        }, [])
      : conversations;
  }

  function getMenu() {
    function buildCheckboxes() {
      return categories.map((category) => {
        return (
          <li key={`${category}-row`}>
            <label for={`${category}-category`}>
              {category.toUpperCase()}
              <input
                checked={categoriesToUse.includes(category)}
                type="checkbox"
                name={`${category}`}
                onChange={handleCategoryChange}
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

  function handleCategoryChange(e) {
    const categoryToChange = e.target.name;
    const isChecked = e.target.checked;

    if (categoriesToUse.length < 2) {
      return;
    }

    const newCategories = isChecked
      ? [...categoriesToUse, categoryToChange]
      : categoriesToUse.filter((category) => category !== categoryToChange);

    setCategories(newCategories);
  }

  return (
    <div>
      <h1>Conversations</h1>
      {getMenu()}
      <CardCollection
        translations={[...getTranslationData()]}
        initialLanguage={languages.english}
      />
    </div>
  );
};

export default Conversations;
