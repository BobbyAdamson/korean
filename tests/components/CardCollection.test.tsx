import { h } from 'preact';
import { shallow } from 'enzyme';
import Languages from '../../src/utilities/enums/Languages';
import CardCollection from '../../src/components/CardCollection/CardCollection';

describe('CardCollection', () => {
  const mockCardData = [
    { id: "1", english: "nose", korean: "코" },
    { id: "2", english: "dog", korean: "개" },
  ];

  let context;

  beforeAll(() => {
    context = shallow(<CardCollection
      initialLanguage={Languages.Korean}
      cardDatas={mockCardData}
    />);
  });

  test(`displays a card`, () => {
    expect(context.find('Card').length).toBe(1);
  });

  describe('button to get another card', () => {
    test(`renders`, () => {
      expect(context.find('button').text()).toBe('Get next card');
    });
  });
});
