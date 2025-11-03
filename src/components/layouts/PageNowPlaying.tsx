'use client';

import classNames from 'clsx';
import { HTMLAttributes } from 'react';
import { BoxContext } from '../box/Box.js';
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
		<BoxContext.Provider value={{ spacingScale: 1 }}>
			<div
				{...props}
				className={classNames(
					'layer-components:(fixed left-0 right-0 z-[var(--z-now-playing)] flex flex-col gap-2 items-end)',
					// on mobile, this must be positioned above any nav bar that's present,
					// or at minimum in the safe area
					'layer-components:bottom-[var(--nav-height,env(safe-area-inset-bottom,0px))]',
					'layer-components:transition-bottom',
					'layer-components:md:(fixed bottom-3 left-[var(--content-left,20%)] transition-opacity top-auto items-end w-[var(--content-width,100%)] max-w-80vw p-0 opacity-[var(--content-ready,0)])',
					unstyled
						? 'layer-variants:p-2'
						: 'layer-components:(bg-wash p-2px rounded-xl border-light shadow-md min-w-32px items-center justify-center m-2 w-auto)',
					keepAboveKeyboard &&
						virtualKeyboardBehavior === 'overlay' &&
						'layer-variants:lt-md:bottom-[max(var(--mock-virtual-keyboard-height,env(keyboard-inset-height,0px),var(--nav-height,env(safe-area-inset-bottom,0px))))]',
					keepAboveKeyboard &&
						virtualKeyboardBehavior === 'displace' &&
						'layer-variants:lt-md:bottom-[max(var(--viewport-bottom-offset,0px),var(--nav-height,env(safe-area-inset-bottom,0px)))]',
					className,
				)}
			/>
		</BoxContext.Provider>
	);
}
