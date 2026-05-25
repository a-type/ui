// @ts-ignore
import '../src/css/main.css';
import './preview.css';

import type { Preview } from '@storybook/react-vite';
import { useEffect } from 'react';
import { setColorMode } from '../src/colorMode.js';
import { Provider } from '../src/components/provider/Provider.js';

import { connect } from '@arbor-css/core/runtime';
import preset from '../src/arbor/arbor.js';

connect(preset);

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			codePanel: true,
		},
	},
	globalTypes: {
		theme: {
			description: 'Color theme',
			defaultValue: 'lemon',
			toolbar: {
				title: 'Theme',
				icon: 'paintbrush',
				items: [
					'lemon',
					'eggplant',
					'leek',
					'tomato',
					'blueberry',
					'gray',
					'high-contrast',
				],
				dynamicTitle: true,
			},
		},
		mode: {
			description: 'Device mode',
			defaultValue: 'system',
			toolbar: {
				title: 'Mode',
				icon: 'mirror',
				items: ['light', 'dark', 'system'],
				dynamicTitle: true,
			},
		},
		saturation: {
			description: 'Color saturation',
			defaultValue: '50',
			type: 'number',
			toolbar: {
				title: 'Saturation',
				icon: 'contrast',
				items: ['0', '10', '25', '50', '75', '100'],
				dynamicTitle: true,
			},
		},
		spacing: {
			description: 'Spacing scale',
			defaultValue: '1',
			type: 'number',
			toolbar: {
				title: 'Spacing',
				icon: 'ruler',
				items: ['0', '0.25', '0.5', '0.75', '1', '1.5', '2'],
				dynamicTitle: true,
			},
		},
		corners: {
			description: 'Corner scale',
			defaultValue: '1',
			type: 'number',
			toolbar: {
				title: 'Corners',
				icon: 'grow',
				items: ['0', '0.25', '0.5', '1', '1.5', '2', '3'],
				dynamicTitle: true,
			},
		},
		shadows: {
			description: 'Hard shadows',
			defaultValue: true,
			type: 'boolean',
			toolbar: {
				title: 'Shadows',
				icon: 'bottombar',
				items: [
					{ value: false, title: 'Soft' },
					{ value: true, title: 'Hard' },
				],
				dynamicTitle: true,
			},
		},
	},
	decorators: [
		(Story, ctx) => {
			useEffect(() => {
				setColorMode(ctx.globals.mode);
				document.documentElement.classList.add(`@mode-${ctx.globals.theme}`);
				document.documentElement.classList.add(`@scheme-${ctx.globals.mode}`);

				return () => {
					document.documentElement.classList.remove(
						`@mode-${ctx.globals.theme}`,
					);
					document.documentElement.classList.remove(
						`@scheme-${ctx.globals.mode}`,
					);
				};
			}, [ctx.globals.mode, ctx.globals.theme]);
			return (
				<Provider>
					<Story />
					<arbor-globals-editor />
				</Provider>
			);
		},
	],
};

export default preview;
