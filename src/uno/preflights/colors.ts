import {
	graySaturation,
	highContrastSaturation,
	paletteNames,
	palettes,
} from '../logic/palettes.js';
import { preflight } from './_util.js';

const baseThemeCSS = `
--v-color: ${palettes['high-contrast'].styles.ink};
color: var(--v-color);
--v-bg: ${palettes['gray'].styles.wash};
background-color: var(--v-bg);
`;

export const colorPreflight = preflight({
	getCSS: () => `
:root {
	--p-lemon-hue: 90.8;
	--p-leek-hue: 165.88;
	--p-tomato-hue: 10.51;
	--p-blueberry-hue: 248.14;
	--p-eggplant-hue: 280.21;

	--p-attention-hue: 30;
	--p-success-hue: 140;
}

.theme-lemon, .theme-override-lemon.theme-override-lemon {
	--p-primary-hue: var(--p-lemon-hue);
	--p-accent-hue: var(--p-leek-hue);
	--l-main-hue: var(--p-primary-hue);

	${baseThemeCSS}
}

.theme-leek, .theme-override-leek.theme-override-leek {
	--p-primary-hue: var(--p-leek-hue);
	--p-accent-hue: var(--p-lemon-hue);
	--l-main-hue: var(--p-primary-hue);

	${baseThemeCSS}
}

.theme-tomato, .theme-override-tomato.theme-override-tomato {
	--p-primary-hue: var(--p-tomato-hue);
	--p-accent-hue: var(--p-leek-hue);
	--l-main-hue: var(--p-primary-hue);

	${baseThemeCSS}
}

.theme-blueberry, .theme-override-blueberry.theme-override-blueberry {
	--p-primary-hue: var(--p-blueberry-hue);
	--p-accent-hue: var(--p-leek-hue);
	--l-main-hue: var(--p-primary-hue);

	${baseThemeCSS}
}

.theme-eggplant, .theme-override-eggplant.theme-override-eggplant {
	--p-primary-hue: var(--p-eggplant-hue);
	--p-accent-hue: var(--p-leek-hue);
	--l-main-hue: var(--p-primary-hue);

	${baseThemeCSS}
}

.theme-gray, .theme-salt, .theme-override-gray.theme-override-gray {
	--l-saturation: ${graySaturation};
	${baseThemeCSS}
}

.theme-high-contrast, .theme-override-high-contrast.theme-override-high-contrast {
	--l-saturation: ${highContrastSaturation};
	--l-lightness-spread: 10;
	${baseThemeCSS}
}

${paletteNames
	.filter((n) => n !== 'gray' && n !== 'high-contrast')
	.map(createPaletteClass)
	.join('\n')}
.palette-gray {
	--l-saturation: ${graySaturation};
}
.palette-high-contrast {
	--l-saturation: ${highContrastSaturation};
	--l-lightness-spread: 10;
}

body {
	${baseThemeCSS}
	--l-main-hue: var(--p-primary-hue);
}

@property --v-bg-altered {
	syntax: "*";
	inherits: false;
}

@property --v-color-altered {
	syntax: "*";
	inherits: false;
}

@property --v-border-altered {
	syntax: "*";
	inherits: false;
}

@property --v-ring-altered {
	syntax: "*";
	inherits: false;
}

@property --v-bg-opacity {
	syntax: "<percentage>";
	inherits: false;
}

@property --v-color-opacity {
	syntax: "<percentage>";
	inherits: false;
}

@property --v-border-opacity {
	syntax: "<percentage>";
	inherits: false;
}

@property --v-ring-opacity {
	syntax: "<percentage>";
	inherits: false;
}
`,
});

function createPaletteClass(sourceName: string) {
	return `
.palette-${sourceName} {
	--l-main-hue: var(--p-${sourceName === 'gray' ? 'primary' : sourceName}-hue);
	--l-saturation: 1;
}
`;
}
