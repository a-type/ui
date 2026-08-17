import classNames from 'clsx';
import { Box, BoxProps } from '../box/Box.js';
import cls from './PageContent.module.css';

export function PageContent({ children, className, ref, ...rest }: BoxProps) {
	return (
		<Box
			{...rest}
			render={<main />}
			className={classNames(cls.root, className)}
			ref={ref}
			{...rest}
		>
			{children}
		</Box>
	);
}
