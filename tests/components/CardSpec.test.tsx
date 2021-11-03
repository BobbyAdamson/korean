import { h } from 'preact';
import Card from '../../src/components/Card/Card';
import { shallow } from 'enzyme';
import Languages from '../../src/utilities/enums/Languages';

describe('Card', () => {
  const mockCard = { id: "1", english: "nose", korean: "코" };

  let context;

  beforeAll(() => {
    context = shallow(<Card
      initialLanguage={Languages.Korean}
      cardData={mockCard}
    />);
  });

  test(`displays current language`, () => {
    expect(context.find('.languageLabel').text()).toBe("korean");
  });

  test(`displays word matching current language`, () => {
    expect(context.find('.phrase').text()).toBe(mockCard.korean);
  });

  describe('Turn card button', () => {
    test(`renders`, () => {
      expect(context.find('button').text()).toBe("Show other side");
    });

    test(`switches language`, () => {
      context.find('button').simulate('click');

      expect(context.find('.languageLabel').text()).toBe("english");
      expect(context.find('.phrase').text()).toBe(mockCard.english);
    });
  });
});
