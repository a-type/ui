import type { StorybookConfig } from '@storybook/react-vite';
import UnoCSS from 'unocss/vite';

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
	viteFinal: (config) => {
		config.plugins = config.plugins || [];
		config.plugins.push(UnoCSS());
		return config;
	},
};
export default config;
