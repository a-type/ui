import { withClassName } from '../../hooks/withClassName.js';

const baseHeadingClass = 'layer-components:my-0';
export const H1 = withClassName(
	'h1',
	baseHeadingClass,
	'layer-components:font-title layer-components:font-semibold layer-components:(color-inherit color-darken-1 text-primary)',
);
export const H2 = withClassName(
	'h2',
	baseHeadingClass,
	'layer-components:font-title layer-components:font-bold layer-components:(color-inherit color-lighten-1 text-primary)',
);
export const H3 = withClassName(
	'h3',
	baseHeadingClass,
	'layer-components:font-title layer-components:(font-500 color-inherit color-lighten-2 text-secondary)',
);
export const H4 = withClassName(
	'h4',
	baseHeadingClass,
	'layer-components:uppercase layer-components:(color-inherit color-lighten-2 text-ambient)',
);
export const H5 = withClassName('h5', baseHeadingClass);

export const P = withClassName('p', 'layer-components:(my-0 leading-normal)');
