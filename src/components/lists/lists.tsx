import { withClassName } from '../../hooks.js';

const OlBase = withClassName(
	'ol',
	'list-decimal list-inside m-0 p-0 flex flex-col gap-sm',
);
const OlItem = withClassName('li', 'ml-sm');

export const Ol = Object.assign(OlBase, {
	Item: OlItem,
});

const UlBase = withClassName(
	'ul',
	'list-disc list-inside m-0 p-0 flex flex-col gap-sm',
);
const UlItem = withClassName('li', 'ml-sm');

export const Ul = Object.assign(UlBase, {
	Item: UlItem,
});
