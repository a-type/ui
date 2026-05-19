import { Theme } from '@arbor-css/classes';

export const easing: Theme['easing'] = {
	springy: 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
	default: 'ease',
	linear: 'linear',
};

export const animation: Theme['animation'] = {
	keyframes: {
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
		'checkbox-fade': `{
						from { background-color: var(--v-bg-altered,var(--v-bg)); opacity: 1; }
						to { background-color: transparent; opacity: 0.9; border-color: transparent; box-shadow: none; }
					}`,
	},
	timingFns: {
		linear: 'linear',
		springy: 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
		'ease-out': 'ease-out',
		'checkbox-fade': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
	},
	durations: {
		'checkbox-fade': '5000ms',
	},
};
