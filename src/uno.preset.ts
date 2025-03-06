import { DynamicRule, entriesToCss, toArray } from '@unocss/core';
import { bgColors as bgColorsRules } from '@unocss/preset-mini/rules';
import presetWind3 from '@unocss/preset-wind3';
import { PreflightContext, Preset } from 'unocss';

const baseBgRule = bgColorsRules[0] as unknown as DynamicRule;

const spacing = {
	sm: 0.125,
	md: 0.25,
	lg: 0.33333,
};
const roundedScaling = {
	sm: 1,
	md: 1,
	lg: 1.25,
};

export default function presetAglio({
	scale = 'md',
	interFontLocation = 'https://resources.biscuits.club/fonts/Inter-VariableFont_slnt,wght.ttf',
	colorRanges = {
		light: [90, 40],
		dark: [0, 60],
	},
	borderScale = 1,
	roundedness = 1,
	saturation = 10,
}: {
	scale?: 'sm' | 'md' | 'lg';
	interFontLocation?: string;
	colorRanges?: {
		light: [number, number];
		dark: [number, number];
	};
	borderScale?: number;
	roundedness?: number;
	saturation?: number;
} = {}): Preset {
	const saturationPercent = saturation / 100;
	const spacingIncrement = spacing[scale];
	roundedness *= roundedScaling[scale];
	const lightColors = generateColors(...colorRanges.light);
	const darkColors = generateColors(...colorRanges.dark);

	const darkModeSaturationTweak = 1;
	const lightModeSaturationTweak = 3;

	return {
		name: 'atype',
		enforce: 'post',
		theme: {
			colors: {
				none: '',
				black: 'var(--color-black)',
				white: 'var(--color-white)',
				wash: 'var(--color-wash)',
				attentionLight: 'var(--color-attention-light)',
				'attention-light': 'var(--color-attention-light)',
				attentionDark: 'var(--color-attention-dark)',
				'attention-dark': 'var(--color-attention-dark)',
				'attention-wash': 'var(--color-attention-wash)',
				attention: {
					DEFAULT: 'var(--color-attention)',
					light: 'var(--color-attention-light)',
					dark: 'var(--color-attention-dark)',
					wash: 'var(--color-attention-wash)',
				},
				accent: {
					DEFAULT: 'var(--color-accent)',
					light: 'var(--color-accent-light)',
					dark: 'var(--color-accent-dark)',
					wash: 'var(--color-accent-wash)',
				},
				accentWash: 'var(--color-accent-wash)',
				'accent-wash': 'var(--color-accent-wash)',
				accentLight: 'var(--color-accent-light)',
				'accent-light': 'var(--color-accent-light)',
				accentDark: 'var(--color-accent-dark)',
				'accent-dark': 'var(--color-accent-dark)',
				primary: {
					DEFAULT: 'var(--color-primary)',
					light: 'var(--color-primary-light)',
					dark: 'var(--color-primary-dark)',
					wash: 'var(--color-primary-wash)',
				},
				primaryLight: 'var(--color-primary-light)',
				'primary-light': 'var(--color-primary-light)',
				primaryDark: 'var(--color-primary-dark)',
				'primary-dark': 'var(--color-primary-dark)',
				primaryWash: 'var(--color-primary-wash)',
				'primary-wash': 'var(--color-primary-wash)',
				gray: {
					DEFAULT: 'var(--color-gray)',
					wash: 'var(--color-gray-wash)',
					light: 'var(--color-gray-light)',
					dark: 'var(--color-gray-dark)',
					blend: 'var(--color-gray-blend)',
				},
				grayBlend: 'var(--color-gray-blend)',
				'gray-blend': 'var(--color-gray-blend)',
				grayDarkBlend: 'var(--color-gray-dark-blend)',
				'gray-dark-blend': 'var(--color-gray-dark-blend)',
				darkBlend: 'var(--color-dark-blend)',
				'dark-blend': 'var(--color-dark-blend)',
				lightBlend: 'var(--color-light-blend)',
				'light-blend': 'var(--color-light-blend)',
				overlay: 'var(--color-overlay)',
			},
			fontFamily: {
				sans: '"Inter", sans-serif',
				serif: '"Domine", serif',
				title: '"Inter", sans-serif',
			},
			fontSize: {
				xxs: ['0.625rem', '0.75rem'],
				xs: ['0.75rem', '1rem'],
				sm: ['1rem', '1.25rem'],
				md: ['1.125rem', '1.5rem'],
				lg: ['1.25rem', '1.75rem'],
				xl: ['1.5rem', '2rem'],
				'2xl': ['1.75rem', '2.25rem'],
				'3xl': ['2rem', '2.5rem'],
				'4xl': ['2.5rem', '3rem'],
				'5xl': ['3rem', '3.5rem'],
				'6xl': ['4rem', '4.5rem'],
				'7xl': ['5rem', '5.5rem'],
				'8xl': ['6rem', '6.5rem'],
				'9xl': ['7rem', '7.5rem'],
			},
			spacing: makeSpacing(spacingIncrement),
			borderRadius: {
				xs: `${0.25 * roundedness}rem`,
				sm: `${0.5 * roundedness}rem`,
				md: `${roundedness}rem`,
				lg: `${roundedness * 1.25}rem`,
				xl: `${roundedness * 1.5}rem`,
				full: roundedness === 0 ? '0px' : '9999px',
			},
			lineWidth: {
				DEFAULT: `${borderScale}px`,
				none: '0',
				thick: `${2 * borderScale}px`,
			},
			width: {
				content: '700px',
				full: '100%',
				'min-content': 'min-content',
				'max-content': 'max-content',
			},
			height: {
				'min-content': 'min-content',
				'max-content': 'max-content',
			},
			boxShadow: {
				sm: '0 1px 2px 0 var(--color-shadow-2), 0 0 1px 0 var(--color-shadow-2)',
				'sm-inset':
					'inset 0 1px 2px 0 var(--color-shadow-2), inset 0 0 1px 0 var(--color-shadow-2)',
				md: '0 4px 6px -1px var(--color-shadow-1), 0 2px 4px -1px var(--color-shadow-2)',
				'md-inset':
					'inset 0 4px 6px -1px var(--color-shadow-1), inset 0 2px 4px -1px var(--color-shadow-2)',
				lg: '0 10px 15px -3px var(--color-shadow-1), 0 4px 6px -2px var(--color-shadow-2)',
				'lg-inset':
					'inset 0 10px 15px -3px var(--color-shadow-1), inset 0 4px 6px -2px var(--color-shadow-2)',
				xl: '0 20px 25px -5px var(--color-shadow-1), 0 10px 10px -5px var(--color-shadow-2)',
				'xl-inset':
					'inset 0 20px 25px -5px var(--color-shadow-1), inset 0 10px 10px -5px var(--color-shadow-2)',
				'sm-up':
					'0 -1px 2px 0 var(--color-shadow-2), 0 0 1px 0 var(--color-shadow-2)',
				'md-up':
					'0 -4px 6px -1px var(--color-shadow-1), 0 -2px 4px -1px var(--color-shadow-2)',
				'lg-up':
					'0 -10px 15px -3px var(--color-shadow-1), 0 -4px 6px -2px var(--color-shadow-2)',
				'xl-up':
					'0 -20px 25px -5px var(--color-shadow-1), 0 -10px 10px -5px var(--color-shadow-2)',

				// focus outlines
				focus: `0 0 0 3px var(--color-primary-light)`,
			},
			easing: {
				springy: 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
				default: 'ease',
				linear: 'linear',
			},
			animation: {
				keyframes: {
					'progress-bar': `{0% { width: 0% } 100% { width: 100% }}`,
					'pop-up': `{from { opacity: 0; transform: translateY(30px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); }}`,
					// TODO: move this out to app
					'item-disappear': `{
					0% {opacity:1;transform:translateY(0);height:var(--height);}
					25% {opacity:1;transform:translateY(0);height:var(--height);}
					100% {opacity:0;transform:translateY(30px);height:0;margin-top:0;}
				}`,
					'expand-scale-x': `{
					from { transform: scaleX(0) }
					to { transform: scaleX(1) }
				}`,
					pop: `{
					0% {
						transform: translate(-50%, -50%) scale(0);
						opacity: 1;
					}
					25% {
						transform: translate(-50%, -50%) scale(1);
						opacity: 1;
					}
					100% {
						transform: translate(-50%, -50%) scale(1);
						opacity: 0;
					}
				}`,
					'scan-line': `{
					0% { top: 0% }
					30% { top: 100% }
					70% { top: 100% }
					100% { top: 0% }
				}`,
					'pop-in-from-half': `{
					0% { opacity: 0; transform: scale(0.5) }
					100% { opacity: 1; transform: scale(1) }
				}`,
					'radix-collapsible-open-vertical': `{
            from { height: 0 }
            to { height: var(--radix-collapsible-content-height) }
          }`,
					'radix-collapsible-close-vertical': `{
            from { height: var(--radix-collapsible-content-height) }
            to { height: 0 }
          }`,
					'radix-collapsible-open-horizontal': `{
            from { width: 0 }
            to { width: var(--radix-collapsible-content-width) }
          }`,
					'radix-collapsible-close-horizontal': `{
            from { width: var(--radix-collapsible-content-width) }
            to { width: 0 }
          }`,
					'radix-collapsible-open-both': `{
						from { width: 0; height: 0 }
						to { width: var(--radix-collapsible-content-width); height: var(--radix-collapsible-content-height) }
					}`,
					'radix-collapsible-close-both': `{
						from { width: var(--radix-collapsible-content-width); height: var(--radix-collapsible-content-height) }
						to { width: 0; height: 0 }
					}`,
					'peek-close': `{
						from { height: calc(var(--collapsible-height) + 80px); max-height: none; }
						to { height: min(var(--peek-height, 120px), var(--collapsible-height)); max-height: var(--peek-height, 120px); }
					}`,
					'peek-open': `{
						from { height: min(var(--peek-height, 120px), var(--collapsible-height)); }
						to { height: calc(var(--collapsible-height) + 80px); }
					}`,
					skeleton: `{
						from { background-position: 0% 50%; }
						to { background-position: 100% 50%; }
					}`,
					'spinner-stroke': `{
						0% { stroke-dasharray: 1, 200; stroke-dashoffset: 0; }
						50% { stroke-dasharray: 100, 200; stroke-dashoffset: -15; }
						100% { stroke-dasharray: 100, 200; stroke-dashoffset: -125; }
					}`,
					'fade-and-pop': `{
						0% { opacity: 0.2; transform: scale(0.6); }
						40% { opacity: 0.5; transform: scale(0.7); }
						50% { opacity: 1; transform: scale(1.1) rotate(2deg); }
						55% { opacity: 1; transform: scale(1); }
						70% { opacity: 1; transform: scale(1); }
						100% { opacity: 0.2; transform: scale(0.6); }
					}`,
					'fade-in-down': `{
						0% { opacity: 0; transform: translate3d(0, -100px, 0); }
						100% { opacity: 1; transform: translate3d(0, 0, 0); }
					}`,
					'fade-in-left': `{
						0% { opacity: 0; transform: translate3d(-100px, 0, 0); }
						100% { opacity: 1; transform: translate3d(0, 0, 0); }
					}`,
					'fade-in-bottom': `{
						0% { opacity: 0; transform: translate3d(0, 100px, 0); }
						100% { opacity: 1; transform: translate3d(0, 0, 0); }
					}`,
					'fade-in-right': `{
						0% { opacity: 0; transform: translate3d(100px, 0, 0); }
						100% { opacity: 1; transform: translate3d(0, 0, 0); }
					}`,
					'fade-out-down': `{
						0% { opacity: 1; transform: translate3d(0, 0, 0); }
						100% { opacity: 0; transform: translate3d(0, 100px, 0); }
					}`,
					'fade-out-left': `{
						0% { opacity: 1; transform: translate3d(0, 0, 0); }
						100% { opacity: 0; transform: translate3d(-100px, 0, 0); }
					}`,
					'fade-out-bottom': `{
						0% { opacity: 1; transform: translate3d(0, 0, 0); }
						100% { opacity: 0; transform: translate3d(0, 100px, 0); }
					}`,
					'fade-out-right': `{
						0% { opacity: 1; transform: translate3d(0, 0, 0); }
						100% { opacity: 0; transform: translate3d(100px, 0, 0); }
					}`,
					'popover-in': `{
						0% { opacity: 0; transform: scale(0.95); }
						100% { opacity: 1; transform: scale(1); }
					}`,
					'popover-out': `{
						0% { opacity: 1; transform: scale(1); }
						100% { opacity: 0; transform: scale(0.95); }
					}`,
					'dialog-in': `{
						0% { opacity: 0; transform: translateY(20px) translate(-50%, -50%); }
						100% { opacity: 1; transform: translateY(0) translate(-50%, -50%); }
					}`,
					'dialog-out': `{
						0% { opacity: 1; transform: translateY(0) translate(-50%, -50%); }
						100% { opacity: 0; transform: translateY(20px) translate(-50%, -50%); }
					}`,
				},
				timingFns: {
					linear: 'linear',
					springy: 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'ease-out': 'ease-out',
					'fade-in-up': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'fade-in-down': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'fade-in-left': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'fade-in-right': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'fade-out-up': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'fade-out-down': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'fade-out-left': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'fade-out-right': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'fade-in-up-big': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'fade-in-down-big': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'fade-in-left-big': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'fade-in-right-big': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'fade-in': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'fade-out': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'scan-line': 'linear',
					'radix-collapsible-open-vertical':
						'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'radix-collapsible-close-vertical':
						'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'radix-collapsible-open-horizontal':
						'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'radix-collapsible-close-horizontal':
						'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'radix-collapsible-open-both': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'radix-collapsible-close-both': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'item-disappear': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'dialog-in': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'dialog-out': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
				},
				durations: {
					'fade-in-up': '200ms',
					'fade-in-down': '200ms',
					'fade-in-left': '200ms',
					'fade-in-right': '200ms',
					'fade-out-up': '200ms',
					'fade-out-down': '200ms',
					'fade-out-left': '200ms',
					'fade-out-right': '200ms',
					'fade-in-up-big': '300ms',
					'fade-in-down-big': '300ms',
					'fade-out-down-big': '300ms',
					'fade-in-left-big': '300ms',
					'fade-in-right-big': '300ms',
					'fade-in': '200ms',
					'fade-out': '200ms',
					'scan-line': '1.5s',
					'radix-collapsible-open-vertical': '200ms',
					'radix-collapsible-close-vertical': '200ms',
					'radix-collapsible-open-horizontal': '200ms',
					'radix-collapsible-close-horizontal': '200ms',
					'radix-collapsible-open-both': '200ms',
					'radix-collapsible-close-both': '200ms',
					'item-disappear': '300ms',
					'popover-in': '100ms',
					'popover-out': '100ms',
					'dialog-in': '200ms',
					'dialog-out': '200ms',
				},
			},
		},

		rules: [
			[
				/^gutter-bottom$/,
				(_, { theme }) => ({ 'margin-bottom': (theme as any).spacing[2] }),
			],
			['shadow-1', { 'box-shadow': '0 1px 2px 0 var(--color-shadow-2)' }],
			[
				'shadow-2',
				{
					'box-shadow':
						'0 4px 6px -1px var(--color-shadow-1), 0 2px 4px -1px var(--color-shadow-2)',
				},
			],
			[
				'shadow-3',
				{
					'box-shadow':
						'0 10px 15px -3px var(--color-shadow-1), 0 4px 6px -2px var(--color-shadow-2)',
				},
			],
			[
				'shadow-4',
				{
					'box-shadow':
						'0 20px 25px -5px var(--color-shadow-1), 0 10px 10px -5px var(--color-shadow-2)',
				},
			],

			[
				/^color-(.*)$/,
				(match, { theme }) => ({
					color: 'var(--v-color-altered,var(--v-color))',
					'--v-color': resolveThemeColor(match[1], theme),
				}),
			],
			[
				/^color-lighten-(\d+\.?\d*)$/,
				(match, { theme }) => ({
					'--v-color-altered': lighten('var(--v-color,currentColor)', match[1]),
				}),
			],
			[
				/^color-darken-(\d+\.?\d*)$/,
				(match, { theme }) => ({
					'--v-color-altered': darken('var(--v-color,currentColor)', match[1]),
				}),
			],
			[
				/^bg-(.*)$/,
				(match, ctx) => {
					const { theme } = ctx;
					const resolvedColor = resolveThemeColor(match[1], theme);
					if (resolvedColor === null) {
						return baseBgRule[1](match, ctx);
					}
					return {
						'background-color': 'var(--v-bg-altered,var(--v-bg))',
						['--v-bg']: resolveThemeColor(match[1], theme),
					};
				},
				{
					autocomplete: `bg-$colors`,
				},
			],
			[
				/^bg-lighten-(\d+\.?\d*)$/,
				(match, { theme }) => ({
					'--v-bg-altered': lighten('var(--v-bg,var(--color-white))', match[1]),
				}),
			],
			[
				/^bg-darken-(\d+\.?\d*)$/,
				(match, { theme }) => ({
					'--v-bg-altered': darken('var(--v-bg,var(--color-white))', match[1]),
				}),
			],

			[
				/^border-color-(.*)$/,
				(match, { theme }) => ({
					'border-color': 'var(--v-border-altered,var(--v-border))',
					'--v-border': resolveThemeColor(match[1], theme),
				}),
			],
			[
				/^border-color-lighten-(\d+\.?\d*)$/,
				(match, { theme }) => ({
					'--v-border-altered': lighten(
						'var(--v-border,currentColor)',
						match[1],
					),
				}),
			],
			[
				/^border-color-darken-(\d+\.?\d*)$/,
				(match, { theme }) => ({
					'--v-border-altered': darken(
						'var(--v-border,currentColor)',
						match[1],
					),
				}),
			],
			[
				/^ring-bg$/,
				() => ({
					'--un-ring-color': 'var(--v-bg-altered,var(--v-bg))',
				}),
			],
		],

		variants: [
			/** Selects &+&, good for top borders */
			(matcher) => {
				if (!matcher.startsWith('repeated:')) return matcher;
				return {
					matcher: matcher.slice('repeated:'.length),
					selector: (s) => `${s} + ${s}`,
				};
			},
		],

		shortcuts: {
			'border-default': 'border border-solid border-black',
			'border-light': 'border border-solid border-gray',
			'flex-1-0-0': 'flex-grow-1 flex-shrink-0 flex-basis-0',
			'flex-0-0-auto': 'flex-grow-0 flex-shrink-0 flex-basis-auto',
			row: 'layer-components:flex layer-components:flex-row layer-components:gap-2 layer-components:items-center',
			col: 'layer-components:flex layer-components:flex-col layer-components:gap-2 layer-components:items-center',
			'hidden-input':
				'op-0 absolute z--1 pointer-events-none [&::webkit-file-upload-button]:hidden',
			center: 'left-50% top-50%',
			'z-nav': 'z-[var(--z-nav)]',
			'z-menu': 'z-[var(--z-menu)]',
			'z-dialog': 'z-[var(--z-dialog)]',
			'z-dialog-backdrop': 'z-[var(--z-dialogBackdrop)]',
			'z-tooltip': 'z-[var(--z-tooltip)]',
			'z-overdraw': 'z-[var(--z-overdraw)]',
			'z-now-playing': 'z-[var(--z-nowPlaying)]',
			'outline-off': '[outline:none]',
			'bg-wash': 'bg-[var(--color-wash)]',
			unset: '[all:unset]',
			'bottom-keyboard':
				'bottom-[var(--mock-virtual-keyboard-height,env(keyboard-inset-height,0px))]',
		},

		preflights: [
			{
				layer: 'preflights',
				getCSS: (ctx: PreflightContext<any>) => {
					if (ctx.theme.preflightBase) {
						const css = entriesToCss(Object.entries(ctx.theme.preflightBase));
						const roots = toArray(
							ctx.theme.preflightRoot ?? ['*,::before,::after', '::backdrop'],
						);
						return roots
							.map((root) => `@layer preflightBase{${root}{${css}}}`)
							.join('');
					}
				},
			} as any,
			{
				getCSS: (ctx) => `
				@layer preflightBase, components, responsive, variants, utilities;

				:root {
					--palette-red-90: #fff4f0;
					--palette-red-80: #ffdbcf;
					--palette-red-70: #ffbea6;
					--palette-red-60: #fdad8e;
					--palette-red-50: #ff8e61;
					--palette-red-40: #d56f46;
					--palette-red-30: #ae562d;
					--palette-red-20: #804020;
					--palette-red-10: #702604;
					--palette-red-00:rgb(52, 39, 35);
					--palette-green-90: #e8ffef;
					--palette-green-80: #c2ffe9;
					--palette-green-70: #92f2d1;
					--palette-green-60: #86efc8;
					--palette-green-50: #63cea5;
					--palette-green-40: #499d92;
					--palette-green-30: #1f837c;
					--palette-green-20: #246869;
					--palette-green-10: #274e50;
					--palette-green-00:rgb(32, 48, 44);
					--palette-yellow-90: #fff9ee;
					--palette-yellow-80: #fff1c7;
					--palette-yellow-70: #ffdf7c;
					--palette-yellow-60: #ffdb57;
					--palette-yellow-50: #e1b83c;
					--palette-yellow-40: #ac7c04;
					--palette-yellow-30: #8e5c00;
					--palette-yellow-20: #714d00;
					--palette-yellow-10: #634500;
					--palette-yellow-00:rgb(56, 50, 30);
					--palette-blue-90:rgb(231, 246, 255);
					--palette-blue-80: #c4e7ff;
					--palette-blue-70: #87d3fc;
					--palette-blue-60: #5fcefe;
					--palette-blue-50: #1ebcf5;
					--palette-blue-40: #0ca6df;
					--palette-blue-30: #077da7;
					--palette-blue-20: #005979;
					--palette-blue-10: #004c69;
					--palette-blue-00:rgb(25, 39, 44);
					--palette-purple-90:rgb(239, 236, 255);
					--palette-purple-80: #e0e0ff;
					--palette-purple-70: #c8cdff;
					--palette-purple-60: #aab1ff;
					--palette-purple-50: #8490f4;
					--palette-purple-40: #6d78d7;
					--palette-purple-30: #6068c0;
					--palette-purple-20: #5a62a7;
					--palette-purple-10: #464d8a;
					--palette-purple-00:rgb(28, 30, 41);
					--palette-light-blend: rgba(255, 255, 255, 0.8);
					--palette-light-blend-2: rgba(255, 255, 255, 0.6);
					--palette-dark-blend: rgba(0, 0, 0, 0.65);
					--palette-dark-blend-2: rgba(0, 0, 0, 0.4);
					--palette-gray-blend: rgba(0, 0, 20, 0.025);
					--palette-gray-dark-blend: rgba(0, 0, 20, 0.05);
					--palette-light-gray-blend: rgba(255, 255, 255, 0.05);
					--palette-light-gray-dark-blend: rgba(255, 255, 255, 0.1);
					--palette-shadow-1: rgba(0, 0, 0, 0.07);
					--palette-shadow-2: rgba(0, 0, 0, 0.15);
					--palette-shadow-3: rgba(0, 0, 0, 0.3);
					--palette-shadow-4: rgba(0, 0, 0, 0.5);
					--palette-white-overlay: rgba(255, 255, 255, 0.4);
					--palette-black-overlay: rgba(0, 0, 0, 0.4);
					--palette-true-gray-90: #fcfcfc;
					--palette-true-gray-80: #f4f4f4;
					--palette-true-gray-70: #e7e7e7;
					--palette-true-gray-60: #d6d6d6;
					--palette-true-gray-50: #a6a6a6;
					--palette-true-gray-40: #7d7d7d;
					--palette-true-gray-30: #6a6a6a;
					--palette-true-gray-20: #4f4f4f;
					--palette-true-gray-10: #383838;
					--palette-true-gray-00: #1f1f1f;

					--final-saturation: calc(${saturationPercent} * var(--global-saturation, 1));

					--palette-gray-wash: hsl(from var(--color-primary-wash) calc(h + var(--gray-hue-tweak, 0)) calc(s * var(--wash-saturation-tweak, 1) * var(--final-saturation, 1)) calc(l * pow(1.025, var(--mode-mult,1))));
					--palette-gray: hsl(from var(--color-primary) calc(h + var(--gray-hue-tweak, 0)) calc(s * var(--final-saturation, 1)) calc(l * 1.125));
					--palette-gray-dark: hsl(from var(--color-primary-dark) calc(h + var(--gray-hue-tweak, 0)) calc(s * 0.75 * var(--final-saturation, 1)) calc(l * pow(1.125, var(--mode-mult,1))));
					--palette-gray-light: hsl(from var(--color-primary-light) calc(h + var(--gray-hue-tweak, 0) * pow(2, var(--mode-mult, 1))) calc(s * 0.5 * var(--final-saturation, 1)) calc(l * pow(1.25, var(--mode-mult,1))));
					--color-wash: var(--color-gray-wash);

					--color-gray-wash: var(--palette-gray-wash);
					--color-gray: var(--palette-gray);
					--color-gray-dark: var(--palette-gray-dark);
					--color-gray-light: var(--palette-gray-light);

					--palette-gray-1: var(--color-gray-wash);
					--palette-gray-2: var(--color-gray-light);
					--palette-gray-3: var(--color-gray-light);
					--palette-gray-4: var(--color-gray);
					--palette-gray-5: var(--color-gray);
					--palette-gray-6: var(--color-gray);
					--palette-gray-7: var(--color-gray-dark);
					--palette-gray-8: var(--color-gray-dark);
					--palette-gray-9: var(--color-black);
					--palette-gray-0: var(--color-black);
					--palette-gray-ex-1: var(--color-black);
					--palette-gray-ex-2: var(--color-black);

					--palette-true-white: #ffffff;
					--palette-true-black: #303030;
					--palette-white: hsl(from var(--color-wash) calc(h + 0) calc(s * 0.3 * var(--final-saturation, 1)) calc(min(100, l + 1 / var(--final-saturation, 1))));
					--palette-black: hsl(from var(--color-gray-dark) calc(h + 0) calc(s * 0.1 * var(--final-saturation, 1)) calc(min(100, l / (var(--mode-mult,1) * -5 + pow(1 + var(--final-saturation, 1), 1.5)))));

					--z-nowPlaying: 40;
					--z-nav: 50;
					--z-menu: 100;
					--z-menuTrigger: 101;
					--z-dialog: 1000;
					--z-dialogBackdrop: 900;
					--z-tooltip: 10000;
					--z-overdraw: 100000;
				}

				/* LIGHT THEME */
				html {
					--wash-saturation-tweak: ${lightModeSaturationTweak};

					${lightColors}
					--color-dark-blend: var(--palette-dark-blend);
					--color-light-blend: var(--palette-light-blend);
					--color-dark-blend-2: var(--palette-dark-blend-2);
					--color-light-blend-2: var(--palette-light-blend-2);
					--color-black: var(--palette-true-black);
					--color-white: var(--palette-white);
					--color-gray-1: var(--palette-gray-1);
					--color-gray-2: var(--palette-gray-2);
					--color-gray-3: var(--palette-gray-3);
					--color-gray-4: var(--palette-gray-4);
					--color-gray-5: var(--palette-gray-5);
					--color-gray-6: var(--palette-gray-6);
					--color-gray-7: var(--palette-gray-7);
					--color-gray-8: var(--palette-gray-8);
					--color-gray-9: var(--palette-gray-9);
					--color-gray-0: var(--palette-gray-0);
					--color-gray-blend: var(--palette-gray-blend);
					--color-gray-dark-blend: var(--palette-gray-dark-blend);
					--color-shadow-1: var(--palette-shadow-2);
					--color-shadow-2: var(--palette-shadow-1);
					--color-overlay: var(--palette-white-overlay);


					/* DEFAULT THEME (LEMON) */
					--color-attention-light: var(--color-red-light);
					--color-attention: var(--color-red);
					--color-attention-dark: var(--color-red-dark);
					--color-attention-wash: var(--color-red-wash);
					--color-accent: var(--color-green);
					--color-accent-wash: var(--color-green-wash);
					--color-accent-light: var(--color-green-light);
					--color-accent-dark: var(--color-green-dark);
					--color-primary: var(--color-yellow);
					--color-primary-light: var(--color-yellow-light);
					--color-primary-dark: var(--color-yellow-dark);
					--color-primary-wash: var(--color-yellow-wash);
					--gray-hue-tweak: -30;
				}

				/* INTRINSIC DARK THEME */
				@media(prefers-color-scheme: dark) {
					html {
						--wash-saturation-tweak: ${darkModeSaturationTweak};
						--mode-mult: -1;
						${darkColors}
						--color-dark-blend: var(--palette-light-blend);
						--color-light-blend: var(--palette-dark-blend);
						--color-dark-blend-2: var(--palette-light-blend-2);
						--color-light-blend-2: var(--palette-dark-blend-2);
						--color-black: var(--palette-true-white);
						--color-white: var(--palette-black);
						--color-gray-1: var(--palette-gray-ex-2);
						--color-gray-2: var(--palette-gray-ex-1);
						--color-gray-3: var(--palette-gray-0);
						--color-gray-4: var(--palette-gray-9);
						--color-gray-5: var(--palette-gray-8);
						--color-gray-6: var(--palette-gray-7);
						--color-gray-7: var(--palette-gray-6);
						--color-gray-8: var(--palette-gray-5);
						--color-gray-9: var(--palette-gray-4);
						--color-gray-0: var(--palette-gray-3);
						--color-gray-blend: var(--palette-light-gray-blend);
						--color-gray-dark-blend: var(--palette-light-gray-dark-blend);
						--color-shadow-1: var(--palette-shadow-4);
						--color-shadow-2: var(--palette-shadow-3);
						--color-overlay: var(--palette-black-overlay);
					}
				}

				/** SYSTEM OVERRIDES **/
				@media(prefers-color-scheme: dark) {
					html.override-light {
						--wash-saturation-tweak: ${lightModeSaturationTweak};
						--mode-mult: 1;
						${lightColors}
						--color-dark-blend: var(--palette-dark-blend);
						--color-light-blend: var(--palette-light-blend);
						--color-dark-blend-2: var(--palette-dark-blend-2);
						--color-light-blend-2: var(--palette-light-blend-2);
						--color-black: var(--palette-true-black);
						--color-white: var(--palette-white);
						--color-gray-1: var(--palette-gray-1);
						--color-gray-2: var(--palette-gray-2);
						--color-gray-3: var(--palette-gray-3);
						--color-gray-4: var(--palette-gray-4);
						--color-gray-5: var(--palette-gray-5);
						--color-gray-6: var(--palette-gray-6);
						--color-gray-7: var(--palette-gray-7);
						--color-gray-8: var(--palette-gray-8);
						--color-gray-9: var(--palette-gray-9);
						--color-gray-0: var(--palette-gray-0);
						--color-gray-blend: var(--palette-gray-blend);
						--color-gray-dark-blend: var(--palette-gray-dark-blend);
						--color-shadow-1: var(--palette-shadow-2);
						--color-shadow-2: var(--palette-shadow-1);
						--color-overlay: var(--palette-white-overlay);
					}
				}

				@media(prefers-color-scheme: light) {
					html.override-dark {
						--wash-saturation-tweak: ${darkModeSaturationTweak};
						--mode-mult: -1;
						${darkColors}
						--color-dark-blend: var(--palette-light-blend);
						--color-light-blend: var(--palette-dark-blend);
						--color-dark-blend-2: var(--palette-light-blend-2);
						--color-light-blend-2: var(--palette-dark-blend-2);
						--color-black: var(--palette-true-white);
						--color-white: var(--palette-black);
						--color-gray-1: var(--palette-gray-ex-2);
						--color-gray-2: var(--palette-gray-ex-1);
						--color-gray-3: var(--palette-gray-0);
						--color-gray-4: var(--palette-gray-9);
						--color-gray-5: var(--palette-gray-8);
						--color-gray-6: var(--palette-gray-7);
						--color-gray-7: var(--palette-gray-6);
						--color-gray-8: var(--palette-gray-5);
						--color-gray-9: var(--palette-gray-4);
						--color-gray-0: var(--palette-gray-3);
						--color-gray-blend: var(--palette-light-gray-blend);
						--color-gray-dark-blend: var(--palette-light-gray-dark-blend);
						--color-shadow-1: var(--palette-shadow-4);
						--color-shadow-2: var(--palette-shadow-3);
						--color-overlay: var(--palette-black-overlay);
					}
				}

				.theme-lemon {
					--color-attention-light: var(--color-red-light);
					--color-attention: var(--color-red);
					--color-attention-dark: var(--color-red-dark);
					--color-attention-wash: var(--color-red-wash);
					--color-accent: var(--color-green);
					--color-accent-wash: var(--color-green-wash);
					--color-accent-light: var(--color-green-light);
					--color-accent-dark: var(--color-green-dark);
					--color-primary: var(--color-yellow);
					--color-primary-light: var(--color-yellow-light);
					--color-primary-dark: var(--color-yellow-dark);
					--color-primary-wash: var(--color-yellow-wash);

					--gray-hue-tweak: -20;
				}

				/* fix yellow hue in dark mode */
				@media(prefers-color-scheme: dark) {
					.theme-lemon {
						--gray-hue-tweak: 0;
					}

					html.override-light.theme-lemon, html.override-light .theme-lemon {
						--gray-hue-tweak: -20;
					}
				}

				html.override-dark.theme-lemon, html.override-dark .theme-lemon {
					--gray-hue-tweak: 0;
				}

				.theme-blueberry {
					--color-attention-light: var(--color-red-light);
					--color-attention: var(--color-red);
					--color-attention-dark: var(--color-red-dark);
					--color-attention-wash: var(--color-red-wash);
					--color-accent: var(--color-green);
					--color-accent-wash: var(--color-green-wash);
					--color-accent-light: var(--color-green-light);
					--color-accent-dark: var(--color-green-dark);
					--color-primary: var(--color-blue);
					--color-primary-light: var(--color-blue-light);
					--color-primary-dark: var(--color-blue-dark);
					--color-primary-wash: var(--color-blue-wash);

					--gray-hue-tweak: 20;
				}

				.theme-eggplant {
					--color-attention-light: var(--color-red-light);
					--color-attention: var(--color-red);
					--color-attention-dark: var(--color-red-dark);
					--color-attention-wash: var(--color-red-wash);
					--color-accent: var(--color-green);
					--color-accent-wash: var(--color-green-wash);
					--color-accent-light: var(--color-green-light);
					--color-accent-dark: var(--color-green-dark);
					--color-primary: var(--color-purple);
					--color-primary-light: var(--color-purple-light);
					--color-primary-dark: var(--color-purple-dark);
					--color-primary-wash: var(--color-purple-wash);

					--gray-hue-tweak: -20;
				}

				.theme-leek {
					--color-attention-light: var(--color-red-light);
					--color-attention: var(--color-red);
					--color-attention-dark: var(--color-red-dark);
					--color-attention-wash: var(--color-red-wash);
					--color-accent: var(--color-blue);
					--color-accent-wash: var(--color-blue-wash);
					--color-accent-light: var(--color-blue-light);
					--color-accent-dark: var(--color-blue-dark);
					--color-primary: var(--color-green);
					--color-primary-light: var(--color-green-light);
					--color-primary-dark: var(--color-green-dark);
					--color-primary-wash: var(--color-green-wash);

					--gray-hue-tweak: 20;
				}

				.theme-tomato {
					--color-attention-light: var(--color-red-light);
					--color-attention: var(--color-red);
					--color-attention-dark: var(--color-red-dark);
					--color-attention-wash: var(--color-red-wash);
					--color-accent: var(--color-green);
					--color-accent-wash: var(--color-green-wash);
					--color-accent-light: var(--color-green-light);
					--color-accent-dark: var(--color-green-dark);
					--color-primary: hsl(from var(--color-red) calc(h - 20) s l);
					--color-primary-light: hsl(from var(--color-red-light) calc(h - 20) s l);
					--color-primary-dark: hsl(from var(--color-red-dark) calc(h - 20) s l);
					--color-primary-wash: hsl(from var(--color-red-wash) calc(h - 20) s l);

					--gray-hue-tweak: -20;
				}

				.theme-salt {
					--color-attention-light: var(--color-red-light);
					--color-attention: var(--color-red);
					--color-attention-dark: var(--color-red-dark);
					--color-attention-wash: var(--color-red-wash);
					--color-primary: var(--color-true-gray);
					--color-primary-wash: var(--color-true-gray-wash);
					--color-primary-light: var(--color-true-gray-light);
					--color-primary-dark: var(--color-true-gray-dark);
					--color-accent: var(--color-true-gray-light);
					--color-accent-light: var(--color-true-gray-wash);
					--color-accent-dark: var(--color-true-gray);
					--color-accent-wash: var(--color-white);

					--global-saturation: 0;
				}

        html, body {
          margin: 0;
          padding: 0;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          height: 100%;
          --webkit-font-smoothing: antialiased;
        }

        body {
          height: 100%;
          background-color: var(--color-wash);
          color: var(--color-black);
          overflow: overlay;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        @font-face {
          font-family: "Inter";
          src: url("${interFontLocation}") format("truetype-variations");
          font-weight: 1 999;
          font-style: oblique 0deg 5deg;
          font-display: block;
        }

				@media (display-mode: standalone) {
					html, body {
						overscroll-behavior: none;
					}
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
			`,
			},
		],

		presets: [
			presetWind3({
				preflight: false,
			}),
		],
	};
}

const themeColors = ['red', 'green', 'yellow', 'blue', 'purple', 'true-gray'];
function roundTens(num: number) {
	return Math.round(num / 10) * 10;
}
function asPaletteValue(num: number) {
	return roundTens(num).toString().padStart(2, '0');
}
function generateColors(from: number, to: number) {
	const increment = (to - from) / 3;
	const map = themeColors.reduce(
		(acc, color) => {
			acc[`--color-${color}-wash`] = `var(--palette-${color}-${asPaletteValue(
				from,
			)})`;
			acc[`--color-${color}-light`] = `var(--palette-${color}-${asPaletteValue(
				from + roundTens(increment),
			)})`;
			acc[`--color-${color}`] = `var(--palette-${color}-${asPaletteValue(
				from + roundTens(increment * 2),
			)})`;
			acc[`--color-${color}-dark`] = `var(--palette-${color}-${asPaletteValue(
				from + roundTens(increment * 3),
			)})`;
			return acc;
		},
		{} as Record<string, string>,
	);
	return Object.entries(map).reduce(
		(str, [key, value]) => str + `${key}: ${value};\n`,
		'',
	);
}

function makeSpacing(increment: number) {
	return {
		...new Array(20)
			.fill(0)
			.map((_, i) => `${(i * increment).toFixed(2)}rem`)
			.reduce(
				(acc, cur, i) => {
					acc[i] = cur;
					return acc;
				},
				{} as Record<string, string>,
			),

		xs: 'calc(0.25rem * var(--spacing-scale,1))',
		sm: 'calc(0.5rem * var(--spacing-scale,1))',
		md: 'calc(1rem * var(--spacing-scale,1))',
		lg: 'calc(2rem * var(--spacing-scale,1))',
		xl: 'calc(3rem * var(--spacing-scale,1))',
	};
}

function resolveThemeColor(color: string, theme: any) {
	if (
		typeof color === 'string' &&
		color.startsWith('[') &&
		color.endsWith(']')
	) {
		return color.slice(1, -1);
	}

	const parts = color.split('-');
	let resolveFrom = theme.colors;
	let resolvedColor: any = color;
	while (parts.length) {
		const part = parts.shift();
		if (!part) break;
		resolvedColor = resolveFrom[part];
		resolveFrom = resolvedColor;
		if (!resolveFrom) break;
	}

	if (typeof resolvedColor === 'object' && 'DEFAULT' in resolvedColor) {
		return resolvedColor.DEFAULT;
	}

	if (!resolvedColor) {
		return null;
	}

	return resolvedColor;
}

function lighten(base: string, level: string, saturate?: string) {
	const levelNum = parseFloat(level) * 0.175;
	const saturateNum = saturate ? parseFloat(saturate) : levelNum / 100;
	return `hsl(from ${base} h calc(s * pow(${
		1 + saturateNum
	}, var(--mode-mult, 1))) calc(l * pow(${
		1 + levelNum
	}, var(--mode-mult, 1))))`;
}

function darken(base: string, level: string) {
	const levelNum = parseFloat(level);
	return lighten(base, (levelNum / -15).toString());
}
