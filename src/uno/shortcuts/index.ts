import { PresetOptions } from 'unocss';

export const shortcuts: PresetOptions['shortcuts'] = {
	border: 'border-width-thin border-solid',
	'border-default': 'border border-solid border-black',
	'border-light': 'border border-solid border-gray border-darken-3',
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
	unset: '[all:unset]',
	'bottom-keyboard':
		'bottom-[var(--mock-virtual-keyboard-height,env(keyboard-inset-height,0px))]',
	body: 'min-h-screen bg-wash color-black',
};
