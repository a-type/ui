import clsx from 'clsx';
import { PaletteName } from '../../uno/index.js';
import { type ButtonProps } from './Button.jsx';

export function getButtonClassName({
	color,
	emphasis = 'default',
	size = 'default',
	toggleable,
	align,
	disableIconMode,
}: {
	color?: PaletteName;
	emphasis?: ButtonProps['emphasis'];
	size?: ButtonProps['size'];
	toggleable?: boolean;
	align?: ButtonProps['align'];
	disableIconMode?: boolean;
}) {
	if (emphasis === 'unstyled') {
		return clsx(
			'layer-components:(p-0 m-0 border-none bg-transparent appearance-none)',
			'layer-components:(cursor-pointer)',
			'layer-components:focus:outline-off',
		);
	}

	return clsx(
		color && `palette-${color}`,
		'layer-components:(leading-none font-inherit font-bold select-none)',
		'layer-components:(border-solid border-thin border-color)',
		'layer-components:(cursor-pointer)',
		'layer-components:(flex flex-row gap-sm items-center)',
		'layer-components:(relative overflow-visible whitespace-nowrap)',
		'layer-components:(transition-all duration-200)',
		'layer-components:(shadow-sm ring-bg)',
		'layer-components:(color-contrast)',

		emphasis === 'ghost' && 'layer-variants:(shadow-none border-none)',
		emphasis === 'contrast' && 'layer-variants:(border-bg hover:bg-gray-ink)',

		{
			'layer-components:bg-main': emphasis === 'primary',
			'layer-components:(bg-main-light color-main-ink)': emphasis === 'light',
			'layer-components:bg-white layer-variants:focus-visible:bg-white':
				emphasis === 'default',
			'layer-components:(bg-transparent aria-pressed:bg-main-wash color-main-ink)':
				emphasis === 'ghost',
			'layer-components:(bg-black)': emphasis === 'contrast',
		},
		color === 'gray' && '[--l-saturation:0] hov',

		{
			'layer-components:(px-4 py-2 text-md rounded-lg)': size === 'default',
			'layer-components:(px-4 py-1 text-sm rounded-md)': size === 'small',
			'layer-components:[&[data-has-icon=true][data-has-label=false]]:(p-2.35 text-sm rounded-lg)':
				size === 'default' && !disableIconMode,
			'layer-components:[&[data-has-icon=true][data-has-label=false]]:(p-2 text-xs rounded-lg -m-y-0.5)':
				size === 'small' && !disableIconMode,
		},

		'layer-components:hover:(bg-main bg-lighten-2 ring-4)',

		'layer-components:focus:outline-off',
		'layer-components:focus-visible:(outline-off ring-accent ring-6)',
		'layer-components:[&[data-focus=true]]:(ring-6 ring-accent outline-off)',

		'layer-components:active:(bg-darken-1 ring-8)',

		'layer-components:disabled:(opacity-50 cursor-default shadow-none ring-none)',
		'layer-components:[&[data-disabled=true]]:(opacity-50 cursor-default shadow-none)',

		{
			'layer-variants:[&[aria-pressed=false]]:[&:not(:hover)]:bg-transparent':
				toggleable,
		},

		{
			'layer-components:self-start': align === 'start',
			'layer-components:self-stretch': align === 'stretch',
			'layer-components:self-end': align === 'end',
		},

		`size-${size ?? 'default'}`,
	);
}
