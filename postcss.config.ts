import { ArborPlugin } from '@arbor-css/postcss';
import base from './scripts/postcss.config.js';

export default {
	...base,
	plugins: [...base.plugins, ArborPlugin()],
};
