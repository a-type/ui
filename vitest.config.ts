import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react(), UnoCSS()],
	test: {
		projects: [
			{
				extends: true,
				test: {
					name: 'unit',
					setupFiles: ['./src/__tests__/setup.ts'],
					include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
					browser: {
						enabled: true,
						headless: true,
						provider: playwright(),
						// https://vitest.dev/guide/browser/playwright
						instances: [{ browser: 'chromium' }],
					},
				},
			},
			{
				extends: true,
				test: {
					name: 'snapshots',
					setupFiles: ['src/__tests__/setup.ts'],
					include: ['src/**/*.snapshots.tsx'],
					browser: {
						enabled: true,
						headless: true,
						ui: false,
						provider: playwright({
							contextOptions: {
								reducedMotion: 'reduce',
							},
						}),
						instances: [
							{ browser: 'chromium', viewport: { width: 1920, height: 1080 } },
						],
						isolate: true,
						screenshotFailures: false,
						expect: {
							toMatchScreenshot: {
								comparatorOptions: {
									includeAA: false,
									alpha: 0.5,
								},
								comparatorName: 'pixelmatch',
							},
						},
					},
				},
			},
		],
	},
});
