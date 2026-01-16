import { HTMLAttributes } from 'react';
import classNames from 'clsx';

export function PageFixedArea({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(
				'layer-components:(sticky top-0 z-nav w-full flex flex-col items-stretch gap-2 bg-wash)',
				className,
			)}
		/>
	);
}
