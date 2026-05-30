import classNames from 'clsx';
import { HTMLAttributes, useRef } from 'react';
import { useBoundsCssVars } from '../../hooks.js';
import { HideWhileKeyboardOpen } from '../utility/HideWhileKeyboardOpen.js';
import cls from './PageNav.module.css';

export function PageNav({
	className,
	children,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	const bodyRef = useRef(
		typeof document === 'undefined' ? null : document.documentElement,
	);
	const ref = useBoundsCssVars<HTMLDivElement>(undefined, bodyRef, {
		left: '--nav-left',
		top: '--nav-top',
		width: '--nav-width',
		height: '--nav-height',
		ready: '--nav-ready',
	});

	return (
		<HideWhileKeyboardOpen
			{...props}
			className={classNames(cls.root, className)}
			ref={ref}
		>
			{children}
		</HideWhileKeyboardOpen>
	);
}
