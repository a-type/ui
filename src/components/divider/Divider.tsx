import { Separator as BaseSeparator } from '@base-ui/react/separator';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import cls from './Divider.module.css';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
	compensate?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	padded?: boolean;
}

export const Divider = function Divider({
	ref,
	compensate,
	padded,
	className,
	...props
}: DividerProps & {
	ref?: React.Ref<HTMLDivElement>;
}) {
	return (
		<BaseSeparator
			ref={ref}
			style={{
				left: compensate ? `calc(${compensate} * 0.25rem)` : undefined,
				width: compensate ? `calc(100% - ${compensate} * 0.5rem)` : undefined,
			}}
			{...props}
			data-padded={padded ? '' : undefined}
			className={clsx(cls.root, className)}
		/>
	);
};
