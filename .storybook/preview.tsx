// @ts-ignore
import '../src/css/main.css';
import './preview.css';

import { connect } from '@arbor-css/core/runtime';
import type { Preview } from '@storybook/react-vite';
import { useEffect } from 'react';
import createPreset from '../src/arbor/arbor.js';
import { setColorMode } from '../src/colorMode.js';
import { Provider } from '../src/components/provider/Provider.js';

const preset = createPreset();
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
				items: ['lemon', 'eggplant', 'leek', 'tomato', 'blueberry', 'neutral'],
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
			defaultValue: '1',
			type: 'number',
			toolbar: {
				title: 'Saturation',
				icon: 'contrast',
				items: ['0', '0.125', '0.25', '0.5', '1', '1.25', '1.5'],
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
				items: ['0', '0.25', '0.5', '1', '1.25', '1.5', '2'],
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
		lineWidth: {
			description: 'Line width scale',
			defaultValue: '1',
			type: 'number',
			toolbar: {
				title: 'Line width',
				icon: 'box',
				items: ['0', '0.25', '0.5', '1', '1.5', '2'],
				dynamicTitle: true,
			},
		},
		shadows: {
			description: 'Hard shadows',
			defaultValue: 'hard',
			toolbar: {
				title: 'Shadows',
				icon: 'bottombar',
				items: [
					{ value: 'soft', title: 'Soft' },
					{ value: 'hard', title: 'Hard' },
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
				document.documentElement.classList.add(`@mode-${ctx.globals.mode}`);

				document.documentElement.style.setProperty(
					preset.$.mode.global.color.saturation.name,
					`${ctx.globals.saturation * 0.5}`,
				);
				document.documentElement.style.setProperty(
					preset.$.mode.global.spacing.baseSize.name,
					`${ctx.globals.spacing / 2}rem`,
				);
				document.documentElement.style.setProperty(
					preset.$.mode.global.shape.roundness.name,
					`${ctx.globals.corners}`,
				);
				document.documentElement.style.setProperty(
					preset.$.mode.global.shadow.blur.name,
					ctx.globals.shadows === 'hard' ? '0' : '0.5',
				);
				document.documentElement.style.setProperty(
					preset.$.mode.global.shadow.spread.name,
					ctx.globals.shadows === 'hard' ? '1.5' : '1',
				);
				document.documentElement.style.setProperty(
					preset.$.mode.global.shape.lineWidth.name,
					`${ctx.globals.lineWidth}`,
				);

				return () => {
					document.documentElement.classList.remove(
						`@mode-${ctx.globals.theme}`,
					);
					document.documentElement.classList.remove(
						`@mode-${ctx.globals.mode}`,
					);
					document.documentElement.style.removeProperty(
						preset.$.mode.global.color.saturation.name,
					);
					document.documentElement.style.removeProperty(
						preset.$.mode.global.spacing.baseSize.name,
					);
					document.documentElement.style.removeProperty(
						preset.$.mode.global.shape.roundness.name,
					);
					document.documentElement.style.removeProperty(
						preset.$.mode.global.shadow.blur.name,
					);
					document.documentElement.style.removeProperty(
						preset.$.mode.global.shadow.spread.name,
					);
					document.documentElement.style.removeProperty(
						preset.$.mode.global.shape.lineWidth.name,
					);
				};
			}, [
				ctx.globals.mode,
				ctx.globals.theme,
				ctx.globals.saturation,
				ctx.globals.spacing,
				ctx.globals.corners,
				ctx.globals.shadows,
				ctx.globals.lineWidth,
			]);
			return (
				<Provider>
					<Story />
					{/* <arbor-globals-editor /> */}
				</Provider>
			);
		},
	],
};

export default preview;
