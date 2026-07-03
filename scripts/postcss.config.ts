/**
 * Avoids transforming Arbor stuff.
 */

import assignLayer from 'postcss-assign-layer';

export default {
	plugins: [
		assignLayer([
			{
				include: '**/*.module.css',
				layerName: 'components',
			},
			{
				include: '**/util.css',
				layerName: 'utils',
			},
		]),
	],
};
