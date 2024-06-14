import { ReactNode } from 'react';
import { ParticleLayer } from '../particles.js';
import { IconSpritesheet } from '../icon.js';
import { Toaster, ToastPosition } from 'react-hot-toast';
import { Tooltip, TooltipProvider } from '../tooltip.js';

export interface ProviderProps {
	children?: ReactNode;
	disableParticles?: boolean;
	toastPosition?: ToastPosition;
	toastContainerClassName?: string;
}

/**
 * Provides all the stuff for all global junk.
 */
export function Provider({
	children,
	disableParticles,
	toastPosition = 'top-center',
	toastContainerClassName,
}: ProviderProps) {
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
