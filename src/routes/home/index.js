import { h } from "preact";
import style from "./style";
import { useState } from "preact/hooks";
import alphabet, { grouped } from "../../data/alphabet/index";
import CardCollection from "../../components/CardCollection/CardCollection";
import languages from "../../data/enums/languages";

const Home = () => {
  const categories = Object.keys(grouped);
  const [categoriesToUse, setCategories] = useState(categories);

  function getTranslationData() {
    return categoriesToUse
      ? categoriesToUse.reduce((accumulator, category) => {
          accumulator.push(...grouped[category]);
          return accumulator;
        }, [])
      : alphabet;
  }

  function getMenu() {
    function buildCheckboxes() {
      return categories.map((category) => {
        console.log("From inside get menu: ", categoriesToUse);
        console.log("From inside get menu: ", category);

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

    if (categoriesToUse.length < 2 && !isChecked) {
      setCategories(categoriesToUse);
    }

    const newCategories = isChecked
      ? [...categoriesToUse, categoryToChange]
      : categoriesToUse.filter((category) => category !== categoryToChange);

    setCategories(newCategories);
  }

  return (
    <div>
      <h1>Words</h1>
      <h2>It worked!</h2>
      {getMenu()}
      <CardCollection
        translations={[...getTranslationData()]}
        initialLanguage={languages.english}
      />
    </div>
  );
};

export default Home;
