'use client';
import classNames from 'clsx';
import { HTMLAttributes } from 'react';
import { useBoundsCssVars } from '../../hooks/useSize.js';

export function PageContent({
	children,
	fullHeight,
	noPadding,
	innerProps,
	className,
	scrollable = true,
	...rest
}: HTMLAttributes<HTMLDivElement> & {
	fullHeight?: boolean;
	noPadding?: boolean;
	innerProps?: HTMLAttributes<HTMLDivElement>;
	scrollable?: boolean;
}) {
	const innerRef = useBoundsCssVars<HTMLDivElement>(200, undefined, {
		left: '--content-left',
		top: '--content-top',
		width: '--content-width',
		height: '--content-height',
		ready: '--content-ready',
	});

	return (
		<div
			className={classNames(
				'layer-components:([grid-area:content] max-w-full min-w-0 w-full flex flex-col items-start relative flex-1 gap-3)',
				{ 'layer-variants:(overflow-y-auto h-full)': scrollable },
				className,
			)}
			{...rest}
		>
			<div
				{...innerProps}
				className={classNames(
					'layer-components:(w-full min-w-0 flex flex-col mb-120px px-4 py-4 flex-1)',
					{
						'layer-variants:(flex-1 mb-auto)': fullHeight,
						'layer-variants:(p-0 sm:p-4)': noPadding,
					},
					innerProps?.className,
				)}
				ref={innerRef}
			>
				{children}
			</div>
		</div>
	);
}
