import { createContext, ReactNode, useContext } from 'react';
import { useThemedTitleBar, useVisualViewportOffset } from '../../hooks.js';
import { useVirtualKeyboardBehavior } from '../../hooks/useVirtualKeyboardBehavior.js';
import { IconSpritesheet } from '../icon/index.js';
import { ParticleLayer } from '../particles/index.js';
import { PwaInstall } from '../pwaInstall/PwaInstall.js';
import { DefaultToastProvider, Toaster } from '../toasts/toasts.js';
import { TooltipProvider } from '../tooltip/index.js';

export interface ProviderProps {
	children?: ReactNode;
	disableParticles?: boolean;
	disableViewportOffset?: boolean;
	virtualKeyboardBehavior?: 'overlay' | 'displace';
	disableTitleBarColor?: boolean;
	manifestPath?: string;
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
	manifestPath,
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
			<PwaInstall manifestPath={manifestPath} />
		</>
	);

	if (disableParticles)
		return (
			<ConfigContext.Provider
				value={{ virtualKeyboardBehavior: supportedVirtualKeyboardBehavior }}
			>
				<DefaultToastProvider>
					<TooltipProvider>
						{children}
						{otherStuff}
					</TooltipProvider>
				</DefaultToastProvider>
			</ConfigContext.Provider>
		);

	return (
		<ConfigContext.Provider
			value={{ virtualKeyboardBehavior: supportedVirtualKeyboardBehavior }}
		>
			<DefaultToastProvider>
				<TooltipProvider>
					<ParticleLayer>
						{children}
						{otherStuff}
					</ParticleLayer>
				</TooltipProvider>
			</DefaultToastProvider>
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
