'use client';
import classNames from 'clsx';
import useMergedRef from '../../hooks/useMergedRef.js';
import { useBoundsCssVars } from '../../hooks/useSize.js';
import { Box, BoxProps } from '../box/Box.js';

export function PageContent({
	children,
	className,
	ref,
	p,
	...rest
}: BoxProps) {
	const innerRef = useBoundsCssVars<HTMLDivElement>(200, undefined, {
		left: '--content-left',
		top: '--content-top',
		width: '--content-width',
		height: '--content-height',
		ready: '--content-ready',
	});

	const finalRef = useMergedRef(ref, innerRef);

	return (
		<Box
			col
			layout="stretch start"
			full="width"
			p={
				p || {
					default: 'md',
					sm: 'lg',
				}
			}
			gap="md"
			container="reset"
			className={classNames(
				'[grid-area:content]',
				'layer-components:(max-w-full min-w-0 flex-1-0-auto mx-auto)',
				className,
			)}
			ref={finalRef}
			{...rest}
		>
			{children}
		</Box>
	);
}
