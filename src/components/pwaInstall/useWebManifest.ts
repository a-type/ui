import { useEffect } from 'react';
import { proxy, useSnapshot } from 'valtio';
import { WebAppManifest } from 'web-app-manifest';

async function fetchManifest(
	manifestPath: string = '/manifest.json',
	controller?: AbortController,
): Promise<WebAppManifest | undefined> {
	const response = await fetch(manifestPath, {
		signal: controller?.signal,
	});
	if (!response.ok) {
		console.error(
			`Failed to fetch web manifest: ${response.status} ${response.statusText}`,
		);
		return {};
	}

	const manifest = await response.json();
	return manifest;
}

function abortableManifestSync(manifestPath: string) {
	const controller = new AbortController();
	fetchManifest(manifestPath, controller).then((manifest) => {
		if (manifest) {
			manifestState.value = manifest;
		}
	});
	return controller;
}

const manifestState = proxy({
	value: {} as WebAppManifest,
});
let abortController: AbortController | null = null;

export function useWebManifest(
	manifestPath = '/manifest.json',
): WebAppManifest {
	useEffect(() => {
		if (abortController) {
			abortController.abort('Component unmounted');
		}
		abortController = abortableManifestSync(manifestPath);

		return () => {
			if (abortController) {
				abortController.abort('Component unmounted');
			}
		};
	}, [manifestPath]);

	return useSnapshot(manifestState).value as WebAppManifest;
}
