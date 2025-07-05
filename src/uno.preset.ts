import { DynamicRule, entriesToCss, toArray } from '@unocss/core';
import { bgColors as bgColorsRules } from '@unocss/preset-mini/rules';
import presetWind3 from '@unocss/preset-wind3';
import { PreflightContext, Preset } from 'unocss';
import {
	dynamicComputedVars,
	dynamicTheme,
	DynamicThemeColor,
	dynamicThemeComputedColors,
	themeColors,
} from './uno/colors.js';

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

export default function presetAtype({
	scale = 'md',
	interFontLocation = 'https://resources.biscuits.club/fonts/Inter-VariableFont_slnt,wght.ttf',
	domineFontLocation = 'https://resources.biscuits.club/fonts/Domine-VariableFont_wght.ttf',
	customTheme,
	borderScale = 1,
	roundedness = 1,
	cornerScale = roundedness,
	spacingScale = 1,
	saturation = 40,
	noPreflight,
	noZIndexes = false,
}: {
	scale?: 'sm' | 'md' | 'lg';
	interFontLocation?: string;
	domineFontLocation?: string;
	customTheme?: { primary: DynamicThemeColor; accent: DynamicThemeColor };
	borderScale?: number;
	/** @deprecated use cornerScale */
	roundedness?: number;
	spacingScale?: number;
	cornerScale?: number;
	saturation?: number;
	noPreflight?: boolean;
	noZIndexes?: boolean;
} = {}): Preset {
	const saturationScale = saturation / 100;
	const spacingIncrement = spacing[scale];
	cornerScale *= roundedScaling[scale];

	const darkModeSaturationTweak = 1;
	const lightModeSaturationTweak = 3;

	return {
		name: 'atype',
		enforce: 'post',
		theme: {
			colors: themeColors,
			fontFamily: {
				default: 'var(--font-default, sans-serif)',
				sans: 'var(--font-sans, sans-serif)',
				serif: 'var(--font-serif, serif)',
				title: 'var(--font-title, var(--font-default))',
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
				xs: `calc(0.25rem * var(--local-corner-scale,1) * var(--global-corner-scale,1))`,
				sm: `calc(0.5rem * var(--local-corner-scale,1) * var(--global-corner-scale,1))`,
				md: `calc(1rem * var(--local-corner-scale,1) * var(--global-corner-scale,1))`,
				lg: `calc(1.25rem * var(--local-corner-scale,1) * var(--global-corner-scale,1))`,
				xl: `calc(1.5rem * var(--local-corner-scale,1) * var(--global-corner-scale,1))`,
				full: cornerScale === 0 ? '0px' : '9999px',
			},
			lineWidth: {
				DEFAULT: `calc(1px * var(--global-border-scale,1))`,
				thin: `calc(1px * var(--global-border-scale,1))`,
				none: '0',
				thick: `calc(2px * var(--global-border-scale,1))`,
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
				lg: '0 8px 14px -3px var(--color-shadow-1), 0 2px 10px 0px var(--color-shadow-2)',
				'lg-inset':
					'inset 0 8px 15px -3px var(--color-shadow-1), inset 0 2px 6px -2px var(--color-shadow-2)',
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
				'lg-dim':
					'0 0 0 3000px var(--color-overlay-dark), 0 10px 15px 3px var(--color-shadow-1), 0 4px 6px -2px var(--color-shadow-2)',

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
					'checkbox-fade': `{
						from { background-color: var(--v-bg-altered,var(--v-bg)); opacity: 1; }
						to { background-color: transparent; opacity: 0.5; border-color: transparent; }
					}`,
				},
				timingFns: {
					linear: 'linear',
					springy: 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
					'pop-up': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
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
					'checkbox-fade': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
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
					'checkbox-fade': '5000ms',
					'pop-up': '200ms',
				},
			},
		},
		extendTheme: (theme: any) => {
			// delete all colors that are not defined in the custom theme
			const { colors: _, ...rest } = theme;
			return {
				colors: themeColors,
				...rest,
			};
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
				(match, { theme }) => {
					if (match[1] === 'inherit') {
						return { color: 'var(--v-color-altered,var(--v-color))' };
					}
					return {
						color: 'var(--v-color-altered,var(--v-color))',
						'--v-color': resolveThemeColor(match[1], theme),
					};
				},
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
					if (match[1] === 'inherit') {
						return { 'background-color': 'var(--v-bg-altered,var(--v-bg))' };
					}
					const resolvedColor = resolveThemeColor(match[1], theme);
					if (resolvedColor === null) {
						return baseBgRule[1](match, ctx);
					}
					return {
						'background-color': 'var(--v-bg-altered,var(--v-bg))',
						['--v-bg']: resolvedColor,
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
				/^ring-color-(.*)$/,
				(match, { theme }) => ({
					'--un-ring-color': 'var(--v-ring-altered,var(--v-ring))',
					'--v-ring': resolveThemeColor(match[1], theme),
				}),
			],
			[
				/^ring-color-lighten-(\d+\.?\d*)$/,
				(match, { theme }) => ({
					'--v-ring-altered': lighten('var(--v-ring,currentColor)', match[1]),
				}),
			],
			[
				/^ring-color-darken-(\d+\.?\d*)$/,
				(match, { theme }) => ({
					'--v-ring-altered': darken('var(--v-ring,currentColor)', match[1]),
				}),
			],
			[
				/^anchor-(\w+)$/,
				(match) => ({
					'anchor-name': `--${match[1]}`,
				}),
				{
					autocomplete: 'anchor-<name>',
				},
			],
			[
				/^anchor-to-(\w+)$/,
				(match) => ({
					'position-anchor': `--${match[1]}`,
				}),
				{
					autocomplete: 'anchor-to-<name>',
				},
			],
			[
				'overflow-stable',
				{
					'scrollbar-gutter': 'stable',
				},
			],
			[
				'overflow-auto',
				{
					overflow: 'auto',
					'scrollbar-gutter': 'stable',
				},
			],
			[
				'overflow-y-auto',
				{
					'overflow-y': 'auto',
					'scrollbar-gutter': 'stable',
				},
			],
			[
				'overflow-x-auto',
				{
					'overflow-x': 'auto',
					'scrollbar-gutter': 'stable',
				},
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
			border: 'border-width-thin border-solid',
			'border-default': 'border border-solid border-color-black',
			'border-light':
				'border border-solid border-color-gray border-color-darken-3',
			'flex-1-0-0': 'flex-grow-1 flex-shrink-0 flex-basis-0',
			'flex-0-0-auto': 'flex-grow-0 flex-shrink-0 flex-basis-auto',
			row: 'layer-components:flex layer-components:flex-row layer-components:gap-sm layer-components:items-center',
			col: 'layer-components:flex layer-components:flex-col layer-components:gap-sm layer-components:items-center',
			'hidden-input':
				'op-0 absolute z--1 pointer-events-none [&::webkit-file-upload-button]:hidden',
			center: 'left-1/2 top-1/2 translate-x--1/2 translate-y--1/2',
			'center-x': 'left-1/2 translate-x--1/2',
			'center-y': 'top-1/2 translate-y--1/2',
			'outline-off': '[outline:none]',
			'bg-wash': 'bg-[var(--color-wash)]',
			unset: '[all:unset]',
			'bottom-keyboard':
				'bottom-[var(--mock-virtual-keyboard-height,env(keyboard-inset-height,0px))]',
			...(noZIndexes
				? {}
				: {
						'z-nav': 'z-[var(--z-nav)]',
						'z-menu': 'z-[var(--z-menu)]',
						'z-dialog': 'z-[var(--z-dialog)]',
						'z-dialog-backdrop': 'z-[var(--z-dialogBackdrop)]',
						'z-tooltip': 'z-[var(--z-tooltip)]',
						'z-overdraw': 'z-[var(--z-overdraw)]',
						'z-now-playing': 'z-[var(--z-nowPlaying)]',
				  }),
		},

		preflights: [
			{
				layer: 'preflights',
				getCSS: (ctx: PreflightContext<any>) => {
					if (noPreflight) return '/* Preflight disabled */';

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
				getCSS: (ctx) => {
					if (noPreflight) return '';

					const attentionColors = `
					--dyn-attention-source: 30;
						--dyn-attention-hue-rotate: 0;
						--dyn-attention-sat-mult: 1;
						--dyn-attention-hue-rotate-mult: 1;
						${dynamicThemeComputedColors('attention')}`;
					const lightMode = `
					--wash-saturation-tweak: ${lightModeSaturationTweak};
					--mode-mult: 1;
					--dyn-mode-mult: 1;
					--dyn-mode-sign: 1;
					--dyn-source-mode-adjust: 0;
					--dyn-mode-lighten-mult: 1;
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
					--color-overlay-dark: var(--palette-black-overlay);
					${attentionColors}
				`;
					const darkMode = `
						--wash-saturation-tweak: ${darkModeSaturationTweak};
						--mode-mult: -1;
						--dyn-mode-mult: -1.6;
						--dyn-mode-lighten-mult: -0.5;
						--dyn-mode-sign: -1;
						--dyn-source-mode-adjust: 1;
						--color-dark-blend: var(--palette-light-blend);
						--color-light-blend: var(--palette-dark-blend);
						--color-dark-blend-2: var(--palette-light-blend-2);
						--color-light-blend-2: var(--palette-dark-blend-2);
						--color-black: var(--palette-true-white);
						--color-white: var(--palette-white);
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
						--color-overlay-dark: var(--palette-white-overlay);
						${attentionColors}
					`;

					const dynThemes: Record<string, DynamicThemeColor> = {
						lemon: { hue: 91.8, hueRotate: 3 },
						leek: { hue: 160.88, hueRotate: -1 },
						tomato: { hue: 10.51, hueRotate: -2 },
						blueberry: { hue: 248.14, hueRotate: 4 },
						eggplant: { hue: 280.21, hueRotate: -5 },
						salt: {
							hue: 0,
							hueRotate: -50,
							hueRotateMult: 0,
							saturationMult: 0,
							dim: '4%',
						},
						saltLight: {
							hue: 0,
							hueRotate: -50,
							hueRotateMult: 0,
							saturationMult: 0,
							dim: '15%',
						},
					};

					const dynLemon = dynamicTheme({
						primary: dynThemes.lemon,
						accent: dynThemes.leek,
					});
					const dynLeek = dynamicTheme({
						primary: dynThemes.leek,
						accent: dynThemes.lemon,
					});
					const dynTomato = dynamicTheme({
						primary: dynThemes.tomato,
						accent: dynThemes.leek,
					});
					const dynBlueberry = dynamicTheme({
						primary: dynThemes.blueberry,
						accent: dynThemes.leek,
					});
					const dynEggplant = dynamicTheme({
						primary: dynThemes.eggplant,
						accent: dynThemes.leek,
					});
					const dynSalt = dynamicTheme({
						primary: dynThemes.salt,
						accent: dynThemes.saltLight,
					});

					return `
				@layer preflightBase, preflightVariant, components, responsive, variants, utilities;

				:root {
					--palette-light-blend: rgba(255, 255, 255, 0.8);
					--palette-light-blend-2: rgba(255, 255, 255, 0.6);
					--palette-dark-blend: rgba(0, 0, 0, 0.65);
					--palette-dark-blend-2: rgba(0, 0, 0, 0.4);
					--palette-gray-blend: rgba(0, 0, 20, 0.025);
					--palette-gray-dark-blend: rgba(0, 0, 20, 0.05);
					--palette-light-gray-blend: rgba(255, 255, 255, 0.05);
					--palette-light-gray-dark-blend: rgba(255, 255, 255, 0.1);
					--palette-shadow-1: rgba(0, 0, 0, 0.1);
					--palette-shadow-2: rgba(0, 0, 0, 0.2);
					--palette-shadow-3: rgba(0, 0, 0, 0.4);
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
					--palette-true-white: #ffffff;
					--palette-true-black: #303030;

					--global-saturation: ${saturationScale};
					--global-corner-scale: ${cornerScale};
					--global-border-scale: ${borderScale};
					--global-spacing-scale: ${spacingScale};

					--font-sans: "Inter", sans-serif;
					--font-serif: "Domine", serif;
					--font-title: "Inter", sans-serif;
					--font-default: var(--font-sans, sans-serif);

					${
						/* refactor note: do not remove these after deprecating hardcoded z indexes */ ''
					}
					--z-nowPlaying: 40;
					--z-nav: 50;

					--z-menu: 100;
					--z-menuTrigger: 101;
					--z-dialog: 1000;
					--z-dialogBackdrop: 900;
					--z-tooltip: 10000;
					--z-overdraw: 100000;
				}

				@layer preflightBase {
					/* LIGHT THEME */
					html {
						${lightMode}

						/* DEFAULT THEME */
						${customTheme ? dynamicTheme(customTheme) : dynLemon}
					}

					/* INTRINSIC DARK THEME */
					@media(prefers-color-scheme: dark) {
						html {
							${darkMode}
						}
					}

					.theme-lemon {
						${dynLemon}
					}

					.theme-blueberry {
						${dynBlueberry}
					}

					.theme-eggplant {
						${dynEggplant}
					}

					.theme-leek {
						${dynLeek}
					}

					.theme-tomato {
						${dynTomato}
					}

					.theme-salt {
						${dynSalt}
					}

					.theme {
						${dynamicComputedVars}
					}

					html, body {
						margin: 0;
						padding: 0;
						font-family: var(--font-default);
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
						scrollbar-color: var(--v-bg-altered,var(--v-bg,var(--color-gray))) transparent;
					}
				}

				@layer preflightVariants {
					/** SYSTEM OVERRIDES **/
					.override-light {
						${lightMode}
						color: var(--color-black);
					}

					.override-dark {
						${darkMode}
						color: var(--color-black);
					}

					.theme-override-lemon {
						${dynLemon}
					}
					.theme-override-blueberry {
						${dynBlueberry}
					}
					.theme-override-eggplant {
						${dynEggplant}
					}
					.theme-override-leek {
						${dynLeek}
					}
					.theme-override-tomato {
						${dynTomato}
					}
					.theme-override-salt {
						${dynSalt}
					}
				}

        @font-face {
          font-family: "Inter";
          src: url("${interFontLocation}") format("truetype-variations");
          font-weight: 1 999;
          font-style: oblique 0deg 5deg;
          font-display: block;
        }

				@font-face {
					font-family: "Domine";
					src: url("${domineFontLocation}") format("truetype-variations");
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

				@property --local-corner-scale {
					syntax: "*";
					inherits: false;
				}
			`;
				},
			},
		],

		presets: [
			presetWind3({
				preflight: false,
			}),
		],
	};
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

		xs: 'calc(0.25rem * var(--spacing-scale,1) * var(--global-spacing-scale,1))',
		sm: 'calc(0.5rem * var(--spacing-scale,1) * var(--global-spacing-scale,1))',
		md: 'calc(1rem * var(--spacing-scale,1) * var(--global-spacing-scale,1))',
		lg: 'calc(2rem * var(--spacing-scale,1) * var(--global-spacing-scale,1))',
		xl: 'calc(3rem * var(--spacing-scale,1) * var(--global-spacing-scale,1))',
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

	if (color === 'bg') {
		return 'var(--v-bg-altered, var(--v-bg))';
	} else if (color === 'fg' || color === 'color') {
		return 'var(--v-color-altered, var(--v-color))';
	} else if (color === 'border') {
		return 'var(--v-border-altered, var(--v-border))';
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
	const levelNum = parseFloat(level) * 0.1;
	const saturateNum = saturate ? parseFloat(saturate) : levelNum / 100;
	return `oklch(from ${base} calc(l + (${
		1 * levelNum
	} * var(--dyn-mode-lighten-mult, 1))) calc(c + (${
		1 * saturateNum
	} * var(--dyn-mode-lighten-mult, 1))) h)`;
}

function darken(base: string, level: string) {
	const levelNum = parseFloat(level);
	return lighten(base, (-levelNum / 8).toString());
}
