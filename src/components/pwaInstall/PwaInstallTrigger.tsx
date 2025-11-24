import { DialogTriggerProps } from '@radix-ui/react-dialog';
import { useState } from 'react';
import {
	getIsMobile,
	getIsSafari,
	getOS,
	getSupportsPWAInstallPrompt,
} from '../../platform.js';
import { Box } from '../box/Box.js';
import { Button } from '../button/Button.js';
import { Dialog } from '../dialog/Dialog.js';
import { Icon } from '../icon/Icon.js';
import { Lightbox } from '../lightbox/Lightbox.js';
import { Ol } from '../lists/lists.js';
import { P } from '../typography/typography.js';
import {
	AndroidAddToHomeIcon,
	SafariAddToDockIcon,
	SafariIcon,
	SafariPlusSquareIcon,
	SafariShareIcon,
} from './PlatformIcons.js';
import {
	triggerDeferredInstall,
	useIsInstalled,
	useIsInstallReady,
} from './useIsInstallReady.js';
import { useWebManifest } from './useWebManifest.js';

export interface PwaInstallTriggerProps extends DialogTriggerProps {
	manifestPath?: string;
}

export function PwaInstallTrigger({
	children,
	manifestPath,
	asChild: _,
	...rest
}: PwaInstallTriggerProps) {
	const installed = useIsInstalled();
	const manifest = useWebManifest(manifestPath);

	const [showInstructions, setShowInstructions] = useState(false);

	if (installed) {
		return null;
	}

	const primaryIcon = manifest?.icons?.[0];

	return (
		<Dialog>
			<Dialog.Trigger {...rest} asChild>
				{children ?? (
					<Button color="primary" emphasis="light">
						<Icon name="star" /> Install
					</Button>
				)}
			</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Title className="flex flex-row gap-md items-center">
					{primaryIcon && (
						<img
							src={primaryIcon.src}
							alt={
								primaryIcon.label ??
								manifest?.short_name ??
								manifest?.name ??
								'App Icon'
							}
							className="inline-block w-1em h-1em rounded"
						/>
					)}
					Install {manifest?.short_name ?? manifest?.name ?? 'App'}
				</Dialog.Title>
				{showInstructions ? (
					<>
						<Dialog.Description>
							Follow the instructions below to install this app on your device.
						</Dialog.Description>
						<InstallInstructions />
						<Dialog.Actions>
							<Dialog.Close asChild>
								<Button emphasis="ghost">Close</Button>
							</Dialog.Close>
							<Button onClick={() => setShowInstructions(false)}>
								<Icon name="arrowLeft" /> Back
							</Button>
						</Dialog.Actions>
					</>
				) : (
					<>
						<Dialog.Description>
							This site is also an app. You can install it right now for easier
							access and more features.
						</Dialog.Description>
						{manifest?.description && (
							<P className="mb-sm">{manifest.description}</P>
						)}
						<ManifestImageGallery manifestPath={manifestPath} />
						<Dialog.Actions>
							<Dialog.Close asChild>
								<Button emphasis="ghost">Close</Button>
							</Dialog.Close>
							<InstallDeviceActions
								showInstructions={() => setShowInstructions(true)}
							/>
						</Dialog.Actions>
					</>
				)}
			</Dialog.Content>
		</Dialog>
	);
}

const supportsDirectInstall = getSupportsPWAInstallPrompt();

function InstallInstructions() {
	if (getOS() === 'iOS') {
		if (getIsSafari()) {
			if (getIsMobile()) {
				return (
					<Ol>
						<Ol.Item>
							<SafariShareIcon /> Tap the Share button in the toolbar.
						</Ol.Item>
						<Ol.Item>
							<SafariPlusSquareIcon /> Scroll down and tap "Add to Home Screen".
						</Ol.Item>
					</Ol>
				);
			} else {
				return (
					<Ol>
						<Ol.Item>
							<SafariShareIcon /> Tap the Share button in the toolbar.
						</Ol.Item>
						<Ol.Item>
							<SafariAddToDockIcon /> Tap "Add to Dock".
						</Ol.Item>
					</Ol>
				);
			}
		} else {
			return (
				<Ol>
					<Ol.Item>
						<SafariIcon /> Open this site in Safari to continue.
					</Ol.Item>
				</Ol>
			);
		}
	}

	return (
		<Ol>
			<Ol.Item>
				<Icon name="dots" className="rotate-90" /> Tap the menu button in the
				toolbar.
			</Ol.Item>
			<Ol.Item>
				<AndroidAddToHomeIcon /> Tap "Add to Home Screen."
			</Ol.Item>
		</Ol>
	);
}

function ManifestImageGallery({ manifestPath }: { manifestPath?: string }) {
	const manifest = useWebManifest(manifestPath);

	if (!manifest?.screenshots?.length) {
		return null;
	}

	return (
		<Box overflow="auto-x" p="sm" gap className="h-240px">
			{manifest.screenshots?.map((screenshot, index) => (
				<Lightbox.Root key={screenshot.src}>
					<Lightbox.Trigger asChild>
						<Lightbox.Image
							tabIndex={0}
							key={index}
							src={screenshot.src}
							alt={screenshot.label || `Screenshot ${index + 1}`}
						/>
					</Lightbox.Trigger>
					<Lightbox.Portal>
						<Lightbox.Overlay className="z-10000" />
						<Lightbox.Content className="z-10001">
							<Lightbox.Image
								src={screenshot.src}
								alt={screenshot.label || `Screenshot ${index + 1}`}
							/>
						</Lightbox.Content>
					</Lightbox.Portal>
				</Lightbox.Root>
			))}
		</Box>
	);
}

function InstallDeviceActions({
	showInstructions,
}: {
	showInstructions: () => void;
}) {
	const ready = useIsInstallReady();
	if (supportsDirectInstall && ready) {
		return (
			<Button onClick={() => triggerDeferredInstall()} emphasis="primary">
				<Icon name="download" /> Install now
			</Button>
		);
	}

	return (
		<Button onClick={() => showInstructions()} emphasis="primary">
			<Icon name="arrowRight" /> Add to Home
		</Button>
	);
}
