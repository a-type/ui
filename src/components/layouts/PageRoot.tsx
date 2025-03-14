import { withClassName } from '../../hooks.js';

export const PageRoot = withClassName(
	'div',
	'layer-components:(flex-grow-1 flex-shrink-1 flex-basis-0 min-h-0 h-full bg-wash)',
	'layer-components:(grid grid-areas-[content]-[nav] grid-cols-[1fr] grid-rows-[1fr] items-start justify-center)',
	'sm:layer-responsive:(grid-areas-[gutter1_nav_content_gutter2] grid-cols-[max(1rem,1fr)_auto_min(800px,80vw)_max(1rem,1fr)] min-h-auto bg-wash)',
	'lg:layer-responsive:(grid-cols-[1fr_auto_min(800px,70vw)_1fr])',
);
