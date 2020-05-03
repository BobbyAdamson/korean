import { h } from 'preact';
import Header from '../src/components/header';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Initial Test of the Header', () => {
  const navItems = [
    'Home',
    'Lesson Notes',
    'Conversations',
    'Words',
    'Numbers'
  ];

	test(`Header renders ${navItems.length} nav items`, () => {
		const context = shallow(<Header />);
		expect(context.find('Link').length).toBe(navItems.length);
	});
});
