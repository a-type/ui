import classNames from 'clsx';
import useMergedRef from '../../hooks/useMergedRef.js';
import { useBoundsCssVars } from '../../hooks/useSize.js';
import { Box, BoxProps } from '../box/Box.js';
import cls from './PageContent.module.css';

const bodyRef =
	typeof document !== 'undefined' ? { current: document.body } : undefined;

export function PageContent({ children, className, ref, ...rest }: BoxProps) {
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
			{...rest}
			render={<main />}
			className={classNames(cls.root, className)}
			ref={finalRef}
			{...rest}
		>
			{children}
		</Box>
	);
}
