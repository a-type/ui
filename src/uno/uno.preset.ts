import presetWind3 from '@unocss/preset-wind3';
import { Preset } from 'unocss';
import { ThemeCustomizationConfig } from './preflights/customization.js';
import { FontsPreflightOptions } from './preflights/fonts.js';
import { preflights } from './preflights/index.js';
import { rules } from './rules/index.js';
import { shortcuts } from './shortcuts/index.js';
import { theme } from './theme/index.js';
import { variants } from './variants/index.js';

export default function presetAtype(
	config: ThemeCustomizationConfig &
		FontsPreflightOptions & {
			noPreflight?: boolean;
		} = {
		interFontLocation:
			'https://resources.biscuits.club/fonts/Inter-VariableFont_slnt,wght.ttf',
	},
): Preset {
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
		preflights: config.noPreflight ? [] : preflights(config),

		presets: [
			presetWind3({
				preflight: false,
			}),
		],
	};
}
