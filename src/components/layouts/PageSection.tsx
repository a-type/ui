import { withClassName } from '../../hooks/withClassName.js';

export const PageSection = withClassName(
	'div',
	'layer-components:border-default layer-components:(max-w-80vw w-full p-4 bg-neutral-paper rd-lg md:min-w-0)',
);

export const PageSectionGrid = withClassName(
	'div',
	'layer-components:(grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-4)',
);
