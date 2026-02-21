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
			'layer-components:(m-0 appearance-none border-none p-0 bg-transparent)',
			'layer-components:(cursor-pointer)',
			'layer-components:focus:outline-off',
		);
	}

	return clsx(
		color && `palette-${color}`,
		'layer-components:(select-none font-bold leading-1 leading-none font-inherit)',
		'layer-components:(border-solid border-color)',
		'layer-components:(cursor-pointer)',
		'layer-components:(flex flex-row items-center gap-sm)',
		'layer-components:(relative overflow-visible whitespace-nowrap)',
		'layer-components:(transition-all duration-200)',
		'layer-components:(shadow-sm ring-bg)',
		'layer-components:color-contrast',

		emphasis === 'ghost' && 'layer-variants:(border-transparent shadow-none)',
		emphasis === 'contrast' &&
			'layer-variants:border-bg layer-variants:hover:bg-gray-ink',

		{
			'layer-components:bg-main': emphasis === 'primary',
			'layer-components:color-main-ink layer-components:bg-main-light':
				emphasis === 'light',
			'layer-components:bg-white layer-variants:focus-visible:bg-white':
				emphasis === 'default',
			'layer-components:(color-main-ink bg-transparent aria-pressed:bg-main-wash)':
				emphasis === 'ghost',
			'layer-components:bg-black layer-variants:focus-visible:ring-gray-dark':
				emphasis === 'contrast',
		},

		{
			'layer-components:(border-thin rounded-lg px-4 py-2 text-md)':
				size === 'default',
			'layer-components:(min-h-touch border-thin rounded-md px-4 py-0.25 text-sm)':
				size === 'small',
			'layer-components:(border-0 rounded-lg p-0)': size === 'wrapper',
			'layer-components:[&[data-has-icon=true][data-has-label=false]]:(rounded-lg p-2.35 text-sm)':
				size === 'default' && !disableIconMode,
			'layer-components:[&[data-has-icon=true][data-has-label=false]]:min-h-touch-small layer-components:[&[data-has-icon=true][data-has-label=false]]:(rounded-lg p-sm text-xs -m-y-2xs)':
				size === 'small' && !disableIconMode,
		},
		!disableIconMode &&
			'layer-components:[&[data-has-icon=true][data-has-label=false]:not([aria-pressed])]:(aspect-1 items-center justify-center)',

		'layer-components:hover:(ring-4 bg-main bg-lighten-2)',

		'layer-components:foc-effect-lg',

		'layer-components:active:(ring-8 bg-darken-1)',

		'layer-components:disabled:(cursor-default opacity-50 ring-none shadow-none)',
		'layer-components:[&[data-disabled=true]]:(cursor-default opacity-50 shadow-none)',

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
