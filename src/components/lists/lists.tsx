import { withClassName } from '../../hooks.js';
import cls from './lists.module.css';

const OlBase = withClassName('ol', cls.ol);
const OlItem = withClassName('li');

export const Ol = Object.assign(OlBase, {
	Item: OlItem,
});

const UlBase = withClassName('ul', cls.ul);
const UlItem = withClassName('li');

export const Ul = Object.assign(UlBase, {
	Item: UlItem,
});
