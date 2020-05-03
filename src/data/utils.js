export const toCardCollection = (array, idPrefix) => {
  return array.map(([english, korean], index) => {
    return {
      id: `${idPrefix}${index}`,
      english,
      korean,
    };
  });
};
