import { h } from "preact";
import { useState } from "preact/hooks";
import CardCollection from "../CardCollection/CardCollection";
import Languages from "../../utilities/enums/Languages";
import CardData from "../../utilities/types/CardData";

interface CardCollectionPageProps {
  allCardData: CardData[];
  grouped: any;
  title: string;
}

const CardCollectionPage = ({ allCardData, grouped, title }: CardCollectionPageProps) => {
  const categories = Object.keys(grouped);
  const [categoriesToUse, setCategories] = useState(categories);
  const [randomNext, setRandomNext] = useState(false);

  function getTranslationData() {
    return categoriesToUse
      ? categoriesToUse.reduce((accumulator, category) => {
          accumulator.push(...grouped[category]);
          return accumulator;
        }, [])
      : allCardData;
  }

  function deselectAllCategories() { setCategories([]); }

  function selectAllCategories() { setCategories(categories); }

  function handleCategoryChange({ target }) {
    const categoryToChange = target.name;
    const isChecked = target.checked;

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
      <h1>{title}</h1>
      {renderMenu()}
      <CardCollection
        randomNext={randomNext}
        cardDatas={[...getTranslationData()]}
        initialLanguage={Languages.English}
      />
    </div>
  );

  function renderMenu() {
    function renderCheckboxes() {
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
        <label for='randomNext'>
          Randomly select next card: 
          <input 
            checked={randomNext} 
            type="checkbox" 
            name='randomNext' 
            onChange={() => setRandomNext(!randomNext)} 
          />
        </label>
        <button type='button' onClick={deselectAllCategories}>Deselect all</button>
        <button type='button' onClick={selectAllCategories}>Select all</button>
        <ul>{renderCheckboxes()}</ul>
      </nav>
    );
  }
}

export default CardCollectionPage;