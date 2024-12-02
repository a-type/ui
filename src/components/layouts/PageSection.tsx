import { withClassName } from '../../hooks/withClassName.js';

export const PageSection = withClassName(
	'div',
	'layer-components:(bg-white rounded-lg border-default p-4 w-full max-w-80vw md:min-w-0)',
);

export const PageSectionGrid = withClassName(
	'div',
	'layer-components:(grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 items-start)',
);
