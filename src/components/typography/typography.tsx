import { withClassName } from '../../hooks/withClassName.js';

const baseHeadingClass = 'layer-components:my-0';
export const H1 = withClassName(
	'h1',
	baseHeadingClass,
	'layer-components:(font-title text-2xl font-semibold color-inherit color-darken-1)',
);
export const H2 = withClassName(
	'h2',
	baseHeadingClass,
	'layer-components:(text-lg font-title font-bold color-inherit color-lighten-2)',
);
export const H3 = withClassName(
	'h3',
	baseHeadingClass,
	'layer-components:(font-title text-md font-500 color-inherit color-lighten-4)',
);
export const H4 = withClassName(
	'h4',
	baseHeadingClass,
	'layer-components:(text-xs uppercase color-inherit color-lighten-6)',
);
export const H5 = withClassName('h5', baseHeadingClass);

export const P = withClassName('p', 'layer-components:(my-0 leading-normal)');
