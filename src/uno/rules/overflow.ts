import { Rule } from 'unocss';
import { PROPS } from '../logic/properties.js';

export const overflowRules: Rule[] = [
	[
		'overflow-stable',
		{
			'scrollbar-gutter': 'stable',
			'scrollbar-color': `hsl(from var(${PROPS.COLOR.FINAL},var(${PROPS.COLOR.INHERITED},var(${PROPS.MODE.BLACK}))) h calc(s * 0.2) calc(l * 4)) transparent`,
		},
	],
	[
		'overflow-auto',
		{
			overflow: 'auto',
			'scrollbar-gutter': 'stable',
			'scrollbar-color': `hsl(from var(${PROPS.COLOR.FINAL},var(${PROPS.COLOR.INHERITED},var(${PROPS.MODE.BLACK}))) h calc(s * 0.2) calc(l * 4)) transparent`,
		},
	],
	[
		'overflow-y-auto',
		{
			'overflow-y': 'auto',
			'scrollbar-gutter': 'stable',
			'scrollbar-color': `hsl(from var(${PROPS.COLOR.FINAL},var(${PROPS.COLOR.INHERITED},var(${PROPS.MODE.BLACK}))) h calc(s * 0.2) calc(l * 4)) transparent`,
		},
	],
	[
		'overflow-x-auto',
		{
			'overflow-x': 'auto',
			'scrollbar-gutter': 'stable',
			'scrollbar-color': `hsl(from var(${PROPS.COLOR.FINAL},var(${PROPS.COLOR.INHERITED},var(${PROPS.MODE.BLACK}))) h calc(s * 0.2) calc(l * 4)) transparent`,
		},
	],
	[
		'overflow-unstable',
		{
			'scrollbar-gutter': 'auto',
		},
	],
];
