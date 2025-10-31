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
		'scan-line': 'linear',
		'radix-collapsible-open-vertical': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
		'radix-collapsible-close-vertical': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
		'radix-collapsible-open-horizontal': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
		'radix-collapsible-close-horizontal': 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
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
};
