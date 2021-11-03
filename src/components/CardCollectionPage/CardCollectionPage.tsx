import { h } from "preact";
import { useState } from "preact/hooks";
import CardCollection from "../CardCollection/CardCollection";
import Languages from "../../utilities/enums/Languages";
import CardData from "../../utilities/types/CardData";

interface GroupedCardData {
  [name: string]: CardData[];
}
interface CardCollectionPageProps {
  grouped: GroupedCardData;
  title: string;
}

const CardCollectionPage = ({ grouped, title }: CardCollectionPageProps) => {
  const categories = Object.keys(grouped);
  const [categoriesToUse, setCategories] = useState(categories);

  function getTranslationData() {
    return categoriesToUse
      ? categoriesToUse.reduce((accumulator, category) => {
          accumulator.push(...grouped[category]);
          return accumulator;
        }, [])
      : getAllCardData();
  }

  function getAllCardData() {
    return Object
      .values(grouped)
      .reduce((accumulator: CardData[], val: CardData[]) => { 
        accumulator.push(...val);
        return accumulator;
      }, []);
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
        cardDatas={[...getTranslationData()]}
        initialLanguage={Languages.English}
      />
    </div>
  );

  function renderMenu() {
    return (
      <nav>
        <button type='button' onClick={deselectAllCategories}>Deselect all</button>
        <button type='button' onClick={selectAllCategories}>Select all</button>
        <ul>{renderCheckboxes()}</ul>
      </nav>
    );
  }

  function renderCheckboxes() {
    return categories.map((category) => (
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
    ));
  }
}

export default CardCollectionPage;