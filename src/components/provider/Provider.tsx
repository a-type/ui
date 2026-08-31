import { ReactNode } from 'react';
import { $ } from '../../arbor/tokens.js';
import { useThemedTitleBar } from '../../hooks/useTitleBarColor.js';
import { useVirtualKeyboardBehavior } from '../../hooks/useVirtualKeyboardBehavior.js';
import {
	useVirtualKeyboardFocusBehavior,
	useVisualViewportOffset,
} from '../../hooks/useVisualViewportOffset.js';
import { ConfigContext } from '../../systems/config.js';
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
	manifestPath?: string | false;
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
	useVirtualKeyboardFocusBehavior();
	const supportedVirtualKeyboardBehavior =
		typeof navigator !== 'undefined' && 'virtualKeyboard' in navigator
			? virtualKeyboardBehavior
			: 'displace';
	useVirtualKeyboardBehavior(supportedVirtualKeyboardBehavior);
	useThemedTitleBar($.mode.tint.paper.name, disableTitleBarColor);
	const otherStuff = (
		<>
			<IconSpritesheet />
			<Toaster />
			{manifestPath === false ? null : (
				<PwaInstall manifestPath={manifestPath} />
			)}
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
