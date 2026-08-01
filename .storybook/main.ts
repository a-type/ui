import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [],

	framework: {
		name: '@storybook/react-vite',
		options: {},
	},

	staticDirs: ['../storybook-public'],
	async viteFinal(baseConfig) {
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
