import {
	render as baseRender,
	RenderOptions,
	RenderResult,
} from '@testing-library/react';
import { ReactElement } from 'react';
import { IconSpritesheet, Provider } from '../components/index.js';

export const render = (
	ui: ReactElement,
	options?: RenderOptions,
): RenderResult => {
	return baseRender(ui, {
		wrapper: ({ children }) => (
			<Provider disableParticles>
				{children}
				<IconSpritesheet />
			</Provider>
		),
		...options,
	});
};
