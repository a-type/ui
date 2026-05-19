import { presetArbor } from '@arbor-css/classes';
import { Preset } from 'unocss';
import preset from '../arbor/arbor.js';
import { PreflightConfig, preflights } from './preflights/index.js';
import { rules } from './rules/index.js';
import { makeTheme } from './theme/index.js';
import { variants } from './variants/index.js';

export type PresetOptions = PreflightConfig & {
	noPreflight?: boolean;
};

export default function presetAtype(config: PresetOptions = {}): Preset {
	const theme = makeTheme();
	return {
		name: 'atype',
		enforce: 'post',
		preflights: config.noPreflight
			? []
			: preflights({
					interFontLocation:
						'https://resources.biscuits.club/fonts/Inter-VariableFont_slnt,wght.ttf',
					...config,
			  }),

		theme,
		presets: [
			presetArbor(preset, {
				preflight: true,
				theme,
			}),
		],
		rules,
		variants,
	};
}
