import { expect, it } from 'vitest';
import { render } from './__tests__/render.js';
import { DemoUI } from './themes.stories.js';

it('demo theme ui matches snapshot', async () => {
	const result = render(<DemoUI />);
	await document.fonts.ready;
	await new Promise((r) => setTimeout(r, 100)); // wait for possible animations
	await expect(result.getByTestId('demo')).toMatchScreenshot('snapshot');
});
