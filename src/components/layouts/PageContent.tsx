import classNames from 'clsx';
import useMergedRef from '../../hooks/useMergedRef.js';
import { useBoundsCssVars } from '../../hooks/useSize.js';
import { Box, BoxProps } from '../box/Box.js';

const bodyRef =
	typeof document !== 'undefined' ? { current: document.body } : undefined;

export function PageContent({
	children,
	className,
	ref,
	p,
	...rest
}: BoxProps) {
	const innerRef = useBoundsCssVars<HTMLDivElement>(200, bodyRef, {
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
				'layer-components:flex-1-0-auto layer-components:(mx-auto max-w-full min-w-0)',
				className,
			)}
			ref={finalRef}
			{...rest}
		>
			{children}
		</Box>
	);
}
