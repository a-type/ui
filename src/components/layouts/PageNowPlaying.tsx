import classNames from 'clsx';
import { HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import { GroupScaleReset } from '../../systems/GroupScale.js';
import { useConfig } from '../provider/Provider.js';

export function PageNowPlaying({
	className,
	keepAboveKeyboard,
	disablePortal,
	container = document.body,
	...props
}: HTMLAttributes<HTMLDivElement> & {
	keepAboveKeyboard?: boolean;
	disablePortal?: boolean;
	container?: HTMLElement;
}) {
	const { virtualKeyboardBehavior } = useConfig();

	const content = (
		<GroupScaleReset>
			<div
				{...props}
				className={classNames(
					disablePortal && 'layer-components:z-now-playing',
					'layer-components:(fixed left-0 right-0 flex flex-col items-center gap-2)',
					// on mobile, this must be positioned above any nav bar that's present,
					// or at minimum in the safe area
					'layer-components:bottom-[var(--nav-height,env(safe-area-inset-bottom,0px))]',
					'layer-components:md:(bottom-md left-[var(--content-left,0)] w-[var(--content-width,100%)] items-center p-0 opacity-[var(--content-ready,0)] transition-opacity)',
					'layer-variants:p-2',
					keepAboveKeyboard &&
						virtualKeyboardBehavior === 'overlay' &&
						'layer-variants:lt-md:bottom-[max(var(--mock-virtual-keyboard-height,env(keyboard-inset-height,0px),var(--nav-height,env(safe-area-inset-bottom,0px))))]',
					keepAboveKeyboard &&
						virtualKeyboardBehavior === 'displace' &&
						'layer-variants:lt-md:bottom-[max(var(--mock-virtual-keyboard-height,var(--viewport-bottom-offset,0px)),var(--nav-height,env(safe-area-inset-bottom,0px)))]',
					className,
				)}
			/>
		</GroupScaleReset>
	);

	if (disablePortal) {
		return content;
	}

	return createPortal(content, container);
}
