import React from 'react';
import type { Preview } from '@storybook/react';
import 'virtual:uno.css';
import { IconSpritesheet } from '../src/components/icon/index.js';

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
	decorators: [
		(Story) => (
			<>
				<Story />
				<IconSpritesheet />
			</>
		),
	],
};

export default preview;
