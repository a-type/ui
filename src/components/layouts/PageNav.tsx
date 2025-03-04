'use client';

import classNames from 'clsx';
import { HTMLAttributes, useRef } from 'react';
import { useBoundsCssVars } from '../../hooks.js';
import { HideWhileKeyboardOpen } from '../utility/HideWhileKeyboardOpen.js';

export function PageNav({
	className,
	children,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	const bodyRef = useRef(document.documentElement);
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
			className={classNames(
				'layer-components:([grid-area:nav] relative z-nav pb-[calc(0.25rem+env(safe-area-inset-bottom,0px))])',
				'layer-components:before:(content-[""] absolute inset-x-4 top-0 h-px bg-darkBlend)',
				'layer-components:sm:([grid-area:nav] sticky top-0 h-auto bottom-auto left-auto right-auto) layer-components:sm:before:(hidden)',
				className,
			)}
			ref={ref}
		>
			{children}
		</HideWhileKeyboardOpen>
	);
}
