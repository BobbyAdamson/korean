export const toCardCollection = (array, idPrefix) => {
  return array.map(([korean, english], index) => {
    return {
      id: `${idPrefix}${index}`,
      english,
      korean,
    };
  });
};
