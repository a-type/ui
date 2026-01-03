import { Theme } from '@unocss/preset-mini';

export const easing: Theme['easing'] = {
	springy: 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
	default: 'ease',
	linear: 'linear',
};

export const animation: Theme['animation'] = {
	keyframes: {
		'progress-bar': `{0% { width: 0% } 100% { width: 100% }}`,
		'pop-up': `{from { opacity: 0; transform: translateY(30px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); }}`,
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
		'pop-in-from-half': `{
					0% { opacity: 0; transform: scale(0.5) }
					100% { opacity: 1; transform: scale(1) }
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
		'checkbox-fade': `{
						from { background-color: var(--v-bg-altered,var(--v-bg)); opacity: 1; }
						to { background-color: transparent; opacity: 0.9; border-color: transparent; box-shadow: none; }
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
		'item-disappear': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
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
		'item-disappear': '300ms',
		'checkbox-fade': '5000ms',
		'pop-up': '200ms',
	},
};
