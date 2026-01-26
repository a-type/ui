import { defaultPresetHues } from '../defaults.js';
import { PROPS } from '../logic/properties.js';
import { preflight } from './_util.js';

export interface UserPreflightOptions {
	primaryHue?: number;
	accentHue?: number;
	namedHues?: {
		[name: string]: {
			sourceHue: number;
			saturation?: number;
		};
	};
	saturation?: number;
	spacingScale?: number;
	borderScale?: number;
	cornerScale?: number;
	shadowSpread?: number;
	fontSize?: number;
}

export const userPreflight = ({
	saturation = 50,
	primaryHue = defaultPresetHues.lemon.sourceHue,
	accentHue = defaultPresetHues.leek.sourceHue,
	spacingScale = 1,
	borderScale = 1,
	cornerScale = 1,
	shadowSpread = 1,
	namedHues,
	fontSize = 16,
}: UserPreflightOptions) =>
	preflight({
		getCSS: () => {
			return `
@layer preflightBase {
	:root {
		${PROPS.USER.SATURATION}: ${saturation / 100};
		${PROPS.USER.CORNER_SCALE}: ${cornerScale};
		${PROPS.USER.SPACING_SCALE}: ${spacingScale};
		${PROPS.USER.BORDER_SCALE}: ${borderScale};
		${PROPS.USER.SHADOW_SPREAD}: ${shadowSpread};

		${PROPS.USER.COLOR.PRIMARY_HUE}: ${primaryHue};
		${PROPS.USER.COLOR.ACCENT_HUE}: ${accentHue};
		${
			namedHues
				? Object.entries(namedHues)
						.map(
							([name, config]) =>
								`${PROPS.USER.COLOR.NAMED_HUE(name)}: ${config.sourceHue};`,
						)
						.join('\n')
				: ''
		}
	}

	body, :host {
		font-size: ${fontSize}px;
	}
}
`;
		},
	});
