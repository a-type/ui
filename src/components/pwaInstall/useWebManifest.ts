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
		console.debug(
			`Failed to fetch web manifest: ${response.status} ${response.statusText}`,
		);
		return {};
	}

	try {
		const manifest = await response.json();
		return manifest;
	} catch (error) {
		console.debug(`Error parsing web manifest JSON: ${error}`);
		return {};
	}
}

function abortableManifestSync(manifestPath: string) {
	const controller = new AbortController();
	fetchManifest(manifestPath, controller)
		.then((manifest) => {
			if (manifest) {
				manifestState.value = manifest;
			}
		})
		.catch((error) => {
			if (error.name === 'AbortError') {
				return;
			}
			console.debug(
				`Error fetching web manifest in useWebManifest (${manifestPath}): ${error}`,
			);
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
