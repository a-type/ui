import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export interface PageRootProps extends HTMLAttributes<HTMLDivElement> {}

export function PageRoot({ className, children, ...rest }: PageRootProps) {
	return (
		<div
			className={clsx(
				'layer-components:(flex-grow-1 flex-shrink-1 flex-basis-0 min-h-100dvh bg-wash)',
				'layer-components:(grid grid-areas-[content]-[nav] grid-cols-[1fr] grid-rows-[1fr_auto] items-start justify-center)',
				'md:layer-responsive:(grid-areas-[gutter1_nav_content_gutter2] grid-cols-[1fr_auto_20fr_1fr] min-h-auto h-auto bg-wash)',
				'lg:layer-responsive:(grid-cols-[1fr_auto_min(800px,70vw)_1fr])',
				className,
			)}
			{...rest}
		>
			{children}
		</div>
	);
}
