import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react(), UnoCSS()],
	test: {
		browser: {
			enabled: true,
			headless: true,
			provider: playwright(),
			// https://vitest.dev/guide/browser/playwright
			instances: [{ browser: 'chromium' }],
		},
		setupFiles: ['./src/__tests__/setup.ts'],
	},
});
