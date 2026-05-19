import { $systemProps } from '@arbor-css/preset';
import { Rule } from 'unocss';

// TODO: move scroll coloration to arbor?
const foregroundColor = $systemProps.fg.applied.varFallback(
	$systemProps.scheme.trueHeavy.var,
);

export const overflowRules: Rule[] = [
	[
		'overflow-stable',
		{
			'scrollbar-gutter': 'stable',
			'scrollbar-color': `hsl(from ${foregroundColor} h calc(s * 0.2) calc(l * 4)) transparent`,
		},
	],
	[
		'overflow-auto',
		{
			overflow: 'auto',
			'scrollbar-gutter': 'stable',
			'scrollbar-color': `hsl(from ${foregroundColor} h calc(s * 0.2) calc(l * 4)) transparent`,
		},
	],
	[
		'overflow-y-auto',
		{
			'overflow-y': 'auto',
			'scrollbar-gutter': 'stable',
			'scrollbar-color': `hsl(from ${foregroundColor} h calc(s * 0.2) calc(l * 4)) transparent`,
		},
	],
	[
		'overflow-x-auto',
		{
			'overflow-x': 'auto',
			'scrollbar-gutter': 'stable',
			'scrollbar-color': `hsl(from ${foregroundColor} h calc(s * 0.2) calc(l * 4)) transparent`,
		},
	],
	[
		'overflow-unstable',
		{
			'scrollbar-gutter': 'auto',
		},
	],
];
