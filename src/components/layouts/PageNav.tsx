'use client';

import classNames from 'clsx';
import { HTMLAttributes, useRef } from 'react';
import { useBoundsCssVars } from '../../hooks.js';
import { GroupScaleReset } from '../../systems/GroupScale.js';
import { HideWhileKeyboardOpen } from '../utility/HideWhileKeyboardOpen.js';

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
			className={classNames(
				'layer-components:([grid-area:nav] sticky bottom-0 z-[var(--z-nav)] pb-[calc(0.25rem+env(safe-area-inset-bottom,0px))] bg-inherit)',
				'layer-components:before:(absolute inset-x-4 top-0 h-px content-[""] bg-gray-dark/80)',
				'layer-components:md:([grid-area:nav] sticky bottom-auto left-auto right-auto top-lg h-auto) layer-components:md:before:(hidden)',
				className,
			)}
			ref={ref}
		>
			<GroupScaleReset>{children}</GroupScaleReset>
		</HideWhileKeyboardOpen>
	);
}
