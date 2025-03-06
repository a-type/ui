import { withClassName } from '../../hooks/withClassName.js';

const baseHeadingClass = 'layer-components:my-0';
export const H1 = withClassName(
	'h1',
	baseHeadingClass,
	'layer-components:(font-title text-2xl font-bold)',
);
export const H2 = withClassName(
	'h2',
	baseHeadingClass,
	'layer-components:(text-lg font-title font-bold color-gray-dark)',
);
export const H3 = withClassName(
	'h3',
	baseHeadingClass,
	'layer-components:(font-title text-md)',
);
export const H4 = withClassName('h4', baseHeadingClass);
export const H5 = withClassName('h5', baseHeadingClass);

export const P = withClassName('p', 'layer-components:(my-0 leading-normal)');
