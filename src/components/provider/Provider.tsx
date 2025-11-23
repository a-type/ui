import { createContext, ReactNode, useContext } from 'react';
import { useThemedTitleBar, useVisualViewportOffset } from '../../hooks.js';
import { useVirtualKeyboardBehavior } from '../../hooks/useVirtualKeyboardBehavior.js';
import { IconSpritesheet } from '../icon/index.js';
import { ParticleLayer } from '../particles/index.js';
import { Toaster } from '../toasts/toasts.js';
import { TooltipProvider } from '../tooltip/index.js';

export interface ProviderProps {
	children?: ReactNode;
	disableParticles?: boolean;
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
	useThemedTitleBar('gray', 'wash', undefined, disableTitleBarColor);
	const otherStuff = (
		<>
			<IconSpritesheet />
			<Toaster />
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
