import { h } from "preact";
import { useState } from "preact/hooks";
import style from './style.scss';

const Numbers = () => {
  const initialSelection = Object.keys(numbers)[0];
  const [numberAndSelection, setNumberAndSelection] = useState({
    number: getNumber(initialSelection),
    selection: initialSelection
  });

  function getNumber(selection) {
    const maxNumber = selection === "hundreds" ? null : numbers[selection][1];
    return maxNumber ? Math.ceil(Math.random() * maxNumber) : 0;
  }

  function setNewNumber() {
    setNumberAndSelection({
      ...numberAndSelection,
      number: getNumber(numberAndSelection.selection)
    });
  }

  function setSelection(selection) {
    setNumberAndSelection({
      number: getNumber(selection),
      selection,
    });
  }

  return (
    <div class={style.centered}>
      <select onChange={(e) => setSelection(e.target.value)}>
        {Object.entries(numbers).map(([key, [n1, n2]]) => {
          const text = key === "hundreds" ? "100's" : `${n1} - ${n2}`;
          return (
            <option value={key} selected={key === numberAndSelection.selection}>
              {text}
            </option>
          );
        })}
      </select>
      <p class={style.number}>{numberAndSelection.number}</p>
      <button onClick={setNewNumber}>Next number</button>
    </div>
  );
};

const numbers = {
  all: [1, 100000],
  oneToTen: [1, 10],
  oneToOneHundred: [1, 100],
  oneToOneThousand: [1, 1000],
  oneToTenThousand: [1, 10000],
  // hundreds: [100, 200, 300, 400, 500, 600, 700, 800, 900],
};

export default Numbers;
