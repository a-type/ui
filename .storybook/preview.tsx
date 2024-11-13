import React, { useEffect } from 'react';
import type { Preview } from '@storybook/react';
import 'virtual:uno.css';
import './preview.css';
import { Provider } from '../src/components/provider/Provider.js';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	globalTypes: {
		theme: {
			description: 'Color theme',
			defaultValue: 'lemon',
			toolbar: {
				title: 'Theme',
				icon: 'paintbrush',
				items: ['lemon', 'eggplant', 'leek', 'tomato', 'blueberry'],
				dynamicTitle: true,
			},
		},
		mode: {
			description: 'Device mode',
			defaultValue: 'light',
			toolbar: {
				title: 'Mode',
				icon: 'mirror',
				items: ['light', 'dark'],
				dynamicTitle: true,
			},
		},
	},
	decorators: [
		(Story, ctx) => {
			useEffect(() => {
				document.documentElement.classList.add(`theme-${ctx.globals.theme}`);
				document.documentElement.classList.add(`override-${ctx.globals.mode}`);

				return () => {
					document.documentElement.classList.remove(
						`theme-${ctx.globals.theme}`,
					);
					document.documentElement.classList.remove(
						`override-${ctx.globals.mode}`,
					);
				};
			}, [ctx.globals.mode, ctx.globals.theme]);
			return (
				<Provider>
					<Story />
				</Provider>
			);
		},
	],
};

export default preview;
