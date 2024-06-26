import { HTMLAttributes } from 'react';
import classNames from 'clsx';
import { withClassName } from '../../hooks/withClassName.js';

export function PageSection({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(
				'layer-components:(bg-white rounded-lg border-default p-4 w-full max-w-80vw md:min-w-0)',
				className,
			)}
		/>
	);
}

export const PageSectionGrid = withClassName(
	'div',
	'layer-components:(grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 items-start)',
);
