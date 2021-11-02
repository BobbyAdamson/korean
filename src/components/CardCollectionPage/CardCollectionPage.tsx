import { h } from "preact";
import { useState } from "preact/hooks";
import CardCollection from "../CardCollection/CardCollection";
import Languages from "../../utilities/enums/Languages";
import CardData from "../../utilities/types/CardData";

interface CardCollectionPageProps {
  allCardData: CardData[];
  grouped: any;
}

const CardCollectionPage = ({ allCardData, grouped }: CardCollectionPageProps) => {
  const categories = Object.keys(grouped);
  const [categoriesToUse, setCategories] = useState(categories);

  function getTranslationData() {
    return categoriesToUse
      ? categoriesToUse.reduce((accumulator, category) => {
          accumulator.push(...grouped[category]);
          return accumulator;
        }, [])
      : allCardData;
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
      <h1>Alphabet</h1>
      {getMenu()}
      <CardCollection
        cardDatas={[...getTranslationData()]}
        initialLanguage={Languages.English}
      />
    </div>
  );
}

export default CardCollectionPage;