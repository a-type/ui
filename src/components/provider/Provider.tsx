import { createContext, ReactNode, useContext } from 'react';
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
	disableViewportOffset,
	virtualKeyboardBehavior = 'displace',
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
			<ConfigContext.Provider value={{ virtualKeyboardBehavior }}>
				<TooltipProvider>
					{children}
					{otherStuff}
				</TooltipProvider>
			</ConfigContext.Provider>
		);

	return (
		<ConfigContext.Provider value={{ virtualKeyboardBehavior }}>
			<TooltipProvider>
				<ParticleLayer>
					{children}
					{otherStuff}
				</ParticleLayer>
			</TooltipProvider>
		</ConfigContext.Provider>
	);
}

export const ConfigContext = createContext<{
	virtualKeyboardBehavior: 'overlay' | 'displace';
}>({
	virtualKeyboardBehavior: 'displace',
});

export function useConfig() {
	return useContext(ConfigContext);
}
