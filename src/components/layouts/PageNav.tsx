'use client';

import classNames from 'clsx';
import { HTMLAttributes, useRef } from 'react';
import { useBoundsCssVars } from '../../hooks.js';
import { BoxContext } from '../box/Box.js';
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
				'layer-components:([grid-area:nav] sticky bottom-0 bg-inherit z-[var(--z-nav)] pb-[calc(0.25rem+env(safe-area-inset-bottom,0px))])',
				'layer-components:before:(content-[""] absolute inset-x-4 top-0 h-px bg-dark-blend)',
				'layer-components:md:([grid-area:nav] sticky top-lg h-auto bottom-auto left-auto right-auto) layer-components:md:before:(hidden)',
				className,
			)}
			ref={ref}
		>
			<BoxContext.Provider value={{ spacingScale: 1 }}>
				{children}
			</BoxContext.Provider>
		</HideWhileKeyboardOpen>
	);
}
