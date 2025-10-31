import { preflight } from './_util.js';

export interface ThemeCustomizationConfig {
	primaryHue?: number;
	accentHue?: number;
	saturation?: number;
	scale?: number;
	borderScale?: number;
	cornerScale?: number;
	hardShadows?: boolean;
}

export const customizationPreflight = ({
	saturation = 50,
	primaryHue = 90.8,
	accentHue = 165.88,
	scale = 1,
	borderScale = 1,
	cornerScale = 1,
	hardShadows = false,
}: ThemeCustomizationConfig) =>
	preflight({
		getCSS: () => {
			return `
@layer preflightBase {
	:root {
		--global-saturation: ${saturation}%;
		--global-corner-scale: ${cornerScale};
		--global-spacing-scale: ${scale};
		--global-border-scale: ${borderScale};
		--global-shadow-spread: ${hardShadows ? 0 : 1};

		--p-primary-hue: ${primaryHue};
		--p-accent-hue: ${accentHue};
	}
}

@property --local-corner-scale {
	syntax: "*";
	inherits: false;
}
`;
		},
	});
