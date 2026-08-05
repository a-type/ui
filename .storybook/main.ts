import type { StorybookConfig } from '@storybook/react-vite';
import { createLogger } from 'vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [],

	framework: {
		name: '@storybook/react-vite',
		options: {},
	},

	staticDirs: ['../storybook-public'],
	core: {
		allowedHosts: ['localhost', 'blacktop-wsl.sardine-census.ts.net'],
	},
	async viteFinal(baseConfig) {
		const logger = createLogger();
		const baseWarn = logger.warn;
		logger.warn = (msg, options) => {
			if (msg.includes('use client')) return;
			baseWarn(msg, options);
		};
		baseConfig.customLogger = logger;

		const rawBasePath = process.env.STORYBOOK_BASE_PATH;
		if (!rawBasePath) {
			return baseConfig;
		}

		const normalizedBasePath = rawBasePath.startsWith('/')
			? rawBasePath
			: `/${rawBasePath}`;

		return {
			...baseConfig,
			base: normalizedBasePath.endsWith('/')
				? normalizedBasePath
				: `${normalizedBasePath}/`,
		};
	},
};
export default config;
