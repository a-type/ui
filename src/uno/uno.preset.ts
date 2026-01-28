import presetWind3 from '@unocss/preset-wind3';
import { Preset } from 'unocss';
import { presetFunctionCompletion } from 'unocss-preset-completion';
import { defaultPresetHues } from './defaults.js';
import { PreflightConfig, preflights } from './preflights/index.js';
import { rules } from './rules/index.js';
import { shortcuts } from './shortcuts/index.js';
import { makeTheme } from './theme/index.js';
import { variants } from './variants/index.js';

export type PresetOptions = PreflightConfig & {
	noPreflight?: boolean;
};

export default function presetAtype(config: PresetOptions = {}): Preset {
	const theme = makeTheme(config);
	return {
		name: 'atype',
		enforce: 'post',
		theme,
		extendTheme: (baseTheme: any) => {
			// delete all colors that are not defined in the custom theme
			const { colors: _, ...rest } = baseTheme;
			return {
				colors: theme.colors,
				...rest,
			};
		},

		rules,
		variants,
		shortcuts,
		preflights: config.noPreflight
			? []
			: preflights({
					primaryHue: defaultPresetHues.lemon.sourceHue,
					accentHue: defaultPresetHues.leek.sourceHue,
					namedHues: defaultPresetHues,
					interFontLocation:
						'https://resources.biscuits.club/fonts/Inter-VariableFont_slnt,wght.ttf',
					...config,
			  }),

		presets: [
			presetWind3({
				preflight: false,
			}),
			presetFunctionCompletion({
				autocompleteFunctions: [
					'css',
					'clsx',
					'classNames',
					'cx',
					'withClassName',
				],
			}),
		],
	};
}
