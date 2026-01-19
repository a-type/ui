import { proxy } from 'valtio';

export const inputInfo = proxy({
	lastPointerDown: null as number | null,
});

if (typeof window !== 'undefined') {
	window.addEventListener('pointerdown', () => {
		inputInfo.lastPointerDown = Date.now();
	});
}
