import { h } from "preact";
import { useState } from "preact/hooks";

const Numbers = () => {
  const [selection, updateSelection] = useState(Object.keys(numbers)[0]);

  function getNumber() {
    const maxNumber = selection === "hundreds" ? null : numbers[selection][1];
    return maxNumber ? Math.ceil(Math.random() * maxNumber) : 0;
  }

  return (
    <div>
      <select onChange={(e) => updateSelection(e.target.value)}>
        {Object.entries(numbers).map(([key, [n1, n2]]) => {
          const text = key === "hundreds" ? "100's" : `${n1} - ${n2}`;
          return (
            <option value={key} selected={key === selection}>
              {text}
            </option>
          );
        })}
      </select>
      <p>{getNumber()}</p>
      {/* <button onClick={}>Next number</button> */}
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
