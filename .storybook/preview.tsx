import type { Preview } from '@storybook/react';
import React, { useEffect } from 'react';
import 'virtual:uno.css';
import { Provider } from '../src/components/provider/Provider.js';
import './preview.css';

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
				items: ['lemon', 'eggplant', 'leek', 'tomato', 'blueberry', 'salt'],
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
			defaultValue: 20,
			type: 'number',
			toolbar: {
				title: 'Saturation',
				icon: 'dropper',
				items: ['0', '10', '15', '20', '40', '60', '80', '100'],
				dynamicTitle: true,
			},
		},
		spacing: {
			description: 'Spacing scale',
			defaultValue: 1,
			type: 'number',
			toolbar: {
				title: 'Spacing',
				icon: 'grid',
				items: ['0', '0.25', '0.5', '0.75', '1', '1.5', '2'],
				dynamicTitle: true,
			},
		},
		corners: {
			description: 'Corner scale',
			defaultValue: 1,
			type: 'number',
			toolbar: {
				title: 'Corners',
				icon: 'rounded',
				items: ['0', '0.25', '0.5', '1', '1.5', '2', '3'],
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
			useEffect(() => {
				document.documentElement.style.setProperty(
					'--global-saturation',
					`${ctx.globals.saturation / 100}`,
				);
				return () => {
					document.documentElement.style.removeProperty('--global-saturation');
				};
			}, [ctx.globals.saturation]);
			useEffect(() => {
				document.documentElement.style.setProperty(
					'--global-spacing-scale',
					`${ctx.globals.spacing}`,
				);
				return () => {
					document.documentElement.style.removeProperty(
						'--global-spacing-scale',
					);
				};
			}, [ctx.globals.spacing]);
			useEffect(() => {
				document.documentElement.style.setProperty(
					'--global-corner-scale',
					`${ctx.globals.corners}`,
				);
				return () => {
					document.documentElement.style.removeProperty(
						'--global-corner-scale',
					);
				};
			}, [ctx.globals.corners]);
			return (
				<Provider>
					<Story />
				</Provider>
			);
		},
	],
};

export default preview;
