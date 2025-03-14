import { withClassName } from '../../hooks/withClassName.js';

const baseHeadingClass = 'layer-components:my-0';
export const H1 = withClassName(
	'h1',
	baseHeadingClass,
	'layer-components:(font-title text-2xl font-light)',
);
export const H2 = withClassName(
	'h2',
	baseHeadingClass,
	'layer-components:(text-lg font-title font-bold color-gray-dark color-darken-7)',
);
export const H3 = withClassName(
	'h3',
	baseHeadingClass,
	'layer-components:(font-title text-md font-500 color-gray-dark color-darken-5)',
);
export const H4 = withClassName(
	'h4',
	baseHeadingClass,
	'layer-components:(text-xs uppercase color-gray-dark color-darken-3)',
);
export const H5 = withClassName('h5', baseHeadingClass);

export const P = withClassName('p', 'layer-components:(my-0 leading-normal)');
