import { Rule } from 'unocss';

export const clipPathRules: Rule[] = [
	[
		/^clip-(.+)$/,
		([, path]) => ({
			'clip-path': `url(#${path})`,
		}),
	],
	[
		/^clip-none$/,
		() => ({
			'clip-path': 'none',
		}),
	],
	[
		/^clip-inset-(.+)$/,
		([, value]) => {
			const parts = value.split(']-[');
			const unbracketed = parts
				.map((part) => part.trim())
				.map((part) => {
					if (part.startsWith('[') && part.endsWith(']')) {
						return part.slice(1, -1);
					} else if (part.startsWith('[')) {
						return part.slice(1);
					} else if (part.endsWith(']')) {
						return part.slice(0, -1);
					}
					return part;
				})
				.map((part) => part.replace(/_/g, ' '));
			return {
				'clip-path': `inset(${unbracketed.join(' ')})`,
			};
		},
	],
	[
		/^clip-circle-(.+)$/,
		([, value]) => ({
			'clip-path': `circle(${value})`,
		}),
	],
];
