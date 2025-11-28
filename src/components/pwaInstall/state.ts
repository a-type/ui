import { proxy } from 'valtio';

export const pwaInstallerState = proxy({
	open: false,
});

export function showPwaInstall() {
	pwaInstallerState.open = true;
}
