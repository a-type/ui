import { expect, it } from 'vitest';
import { render } from './__tests__/render.js';
import { Default } from './colors.stories.js';

it('colors match snapshot', async () => {
	const result = render(Default.render?.({}, {} as any));
	await expect(result.baseElement).toMatchScreenshot('snapshot');
});
