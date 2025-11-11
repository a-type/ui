import { createContext, ReactNode, useContext } from 'react';
import { Toaster, ToastPosition } from 'react-hot-toast';
import { useThemedTitleBar, useVisualViewportOffset } from '../../hooks.js';
import { useVirtualKeyboardBehavior } from '../../hooks/useVirtualKeyboardBehavior.js';
import { IconSpritesheet } from '../icon/index.js';
import { ParticleLayer } from '../particles/index.js';
import { TooltipProvider } from '../tooltip/index.js';

export interface ProviderProps {
	children?: ReactNode;
	disableParticles?: boolean;
	toastPosition?: ToastPosition;
	toastContainerClassName?: string;
	disableViewportOffset?: boolean;
	virtualKeyboardBehavior?: 'overlay' | 'displace';
	disableTitleBarColor?: boolean;
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
	disableTitleBarColor,
}: ProviderProps) {
	useVisualViewportOffset(disableViewportOffset);
	const supportedVirtualKeyboardBehavior =
		typeof navigator !== 'undefined' && 'virtualKeyboard' in navigator
			? virtualKeyboardBehavior
			: 'displace';
	useVirtualKeyboardBehavior(supportedVirtualKeyboardBehavior);
	useThemedTitleBar('high-contrast', 'wash', undefined, disableTitleBarColor);
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
			<ConfigContext.Provider
				value={{ virtualKeyboardBehavior: supportedVirtualKeyboardBehavior }}
			>
				<TooltipProvider>
					{children}
					{otherStuff}
				</TooltipProvider>
			</ConfigContext.Provider>
		);

	return (
		<ConfigContext.Provider
			value={{ virtualKeyboardBehavior: supportedVirtualKeyboardBehavior }}
		>
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
