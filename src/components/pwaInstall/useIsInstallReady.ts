import { proxy, useSnapshot } from 'valtio';
import { getIsPWAInstalled } from '../../platform.js';

let deferredPrompt: BeforeInstallPromptEvent | null = null;
const installState = proxy({
	installReady: false,
	installed: getIsPWAInstalled(),
});

if (typeof window !== 'undefined') {
	window.addEventListener('beforeinstallprompt', (e) => {
		// Prevent the mini-infobar from appearing on mobile
		e.preventDefault();
		e.stopImmediatePropagation();
		e.stopPropagation();
		// Stash the event so it can be triggered later.
		deferredPrompt = e;
		// Update UI notify the user they can install the PWA
		installState.installReady = true;
		// Optionally, send analytics event that PWA install promo was shown.
		console.log(`Ready to show custom install prompt`);
	});
}

export function useIsInstallReady() {
	return useSnapshot(installState).installReady;
}

export function useIsInstalled() {
	return useSnapshot(installState).installed;
}

export function triggerDeferredInstall() {
	if (!deferredPrompt) {
		return false;
	}
	// Show the install prompt
	deferredPrompt.prompt();
	// Wait for the user to respond to the prompt
	deferredPrompt.userChoice.then((choiceResult) => {
		if (choiceResult.outcome === 'accepted') {
			console.log('User accepted the install prompt');
			installState.installed = true;
		} else {
			console.log('User dismissed the install prompt');
		}
		// Clear the deferredPrompt so it can only be used once.
		deferredPrompt = null;
		installState.installReady = false;
	});
	return true;
}
