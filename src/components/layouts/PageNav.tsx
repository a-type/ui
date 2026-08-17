import classNames from 'clsx';
import { HTMLAttributes } from 'react';
import { HideWhileKeyboardOpen } from '../utility/HideWhileKeyboardOpen.js';
import cls from './PageNav.module.css';

export function PageNav({
	className,
	children,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	return (
		<HideWhileKeyboardOpen
			{...props}
			className={classNames(cls.root, className)}
		>
			{children}
		</HideWhileKeyboardOpen>
	);
}
