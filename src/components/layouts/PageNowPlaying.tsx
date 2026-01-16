'use client';

import classNames from 'clsx';
import { HTMLAttributes } from 'react';
import { GroupScaleReset } from '../../systems/GroupScale.js';
import { useConfig } from '../provider/Provider.js';

export function PageNowPlaying({
	className,
	unstyled,
	keepAboveKeyboard,
	...props
}: HTMLAttributes<HTMLDivElement> & {
	unstyled?: boolean;
	keepAboveKeyboard?: boolean;
}) {
	const { virtualKeyboardBehavior } = useConfig();

	return (
		<GroupScaleReset>
			<div
				{...props}
				className={classNames(
					'layer-components:(fixed left-0 right-0 z-[var(--z-now-playing)] flex flex-col items-end gap-2)',
					// on mobile, this must be positioned above any nav bar that's present,
					// or at minimum in the safe area
					'layer-components:bottom-[var(--nav-height,env(safe-area-inset-bottom,0px))]',
					'layer-components:transition-bottom',
					'layer-components:md:(fixed bottom-3 left-[var(--content-left,20%)] top-auto w-[var(--content-width,100%)] items-end p-0 opacity-[var(--content-ready,0)] transition-opacity)',
					unstyled
						? 'layer-variants:p-2'
						: 'layer-components:(m-2 min-w-32px w-auto items-center justify-center border-light rounded-xl p-2px shadow-md bg-wash)',
					keepAboveKeyboard &&
						virtualKeyboardBehavior === 'overlay' &&
						'layer-variants:lt-md:bottom-[max(var(--mock-virtual-keyboard-height,env(keyboard-inset-height,0px),var(--nav-height,env(safe-area-inset-bottom,0px))))]',
					keepAboveKeyboard &&
						virtualKeyboardBehavior === 'displace' &&
						'layer-variants:lt-md:bottom-[max(var(--viewport-bottom-offset,0px),var(--nav-height,env(safe-area-inset-bottom,0px)))]',
					className,
				)}
			/>
		</GroupScaleReset>
	);
}
