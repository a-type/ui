import { ReactNode } from 'react';
import { ParticleLayer } from '../particles.js';
import { IconSpritesheet } from '../icon.js';
import { Toaster, ToastPosition } from 'react-hot-toast';
import { TooltipProvider } from '../tooltip.js';
import { useVisualViewportOffset } from '../../hooks.js';
import { useVirtualKeyboardBehavior } from '../../hooks/useVirtualKeyboardBehavior.js';

export interface ProviderProps {
	children?: ReactNode;
	disableParticles?: boolean;
	toastPosition?: ToastPosition;
	toastContainerClassName?: string;
	disableViewportOffset?: boolean;
	virtualKeyboardBehavior?: 'overlay' | 'displace';
}

/**
 * Provides all the stuff for all global junk.
 */
export function Provider({
	children,
	disableParticles,
	toastPosition = 'top-center',
	toastContainerClassName,
	disableViewportOffset = true,
	virtualKeyboardBehavior = 'overlay',
}: ProviderProps) {
	useVisualViewportOffset(disableViewportOffset);
	useVirtualKeyboardBehavior(virtualKeyboardBehavior);

	const otherStuff = (
		<>
			<IconSpritesheet />
			<Toaster
				position={toastPosition}
				containerClassName={toastContainerClassName}
			/>
		</>
	);

	if (disableParticles)
		return (
			<TooltipProvider>
				{children}
				{otherStuff}
			</TooltipProvider>
		);

	return (
		<TooltipProvider>
			<ParticleLayer>
				{children}
				{otherStuff}
			</ParticleLayer>
		</TooltipProvider>
	);
}
