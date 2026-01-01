import { Separator as BaseSeparator } from '@base-ui/react/separator';
import classNames from 'clsx';
import { HTMLAttributes } from 'react';
import { withClassName } from '../../hooks/withClassName.js';

const DividerBase = withClassName(
	BaseSeparator,
	'w-full h-1px bg-black relative',
);

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
		<DividerBase
			ref={ref}
			style={{
				left: compensate ? `calc(${compensate} * 0.25rem)` : undefined,
				width: compensate ? `calc(100% - ${compensate} * 0.5rem)` : undefined,
			}}
			{...props}
			className={classNames(padded && 'my-4', className)}
		/>
	);
};
