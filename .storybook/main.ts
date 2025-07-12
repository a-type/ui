import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	viteFinal: async (config) => {
		config.plugins = config.plugins || [];
		const { default: UnoCSS } = await import('unocss/vite');
		config.plugins.push(
			UnoCSS({
				configDeps: [
					'./src/uno/*.ts',
					'./src/uno/**/*.ts',
					'./src/uno/uno.preset.ts',
					'./src/uno/colors.ts',
					'./src/uno/shadows.ts',
				],
			}),
		);
		return config;
	},
};
export default config;
