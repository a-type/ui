import clsx from 'clsx';
import { type ButtonProps } from './Button.jsx';

export function getButtonClassName({
	emphasis = 'default',
	size = 'default',
	toggleable,
	disableIconMode,
}: {
	emphasis?: ButtonProps['emphasis'];
	size?: ButtonProps['size'];
	toggleable?: boolean;
	disableIconMode?: boolean;
}) {
	if (emphasis === 'unstyled') {
		return clsx(
			'layer-components:(m-0 appearance-none p-0 bg-transparent border-none)',
			'layer-components:(cursor-pointer)',
			'layer-components:focus:outline-none',
		);
	}

	return clsx(
		'layer-components:(select-none fw-[bold] leading-[1] font-inherit)',
		'layer-components:(b-fg b border-solid)',
		'layer-components:(cursor-pointer)',
		'layer-components:(flex flex-row items-center gap-sm)',
		'layer-components:(relative overflow-visible whitespace-nowrap)',
		'layer-components:(transition-all duration-200)',
		'layer-components:(shadow-sm ring-bg)',
		'layer-components:color-contrast',
		'layer-components:text-secondary',
		'layer-components:(px-action py-action rd-[9999px])',

		{
			'@mode-dense': size === 'small',
			'@mode-density-reset': size === 'default',
			'layer-variants:(border-0 p-0 shadow-none)': size === 'wrapper',
		},

		emphasis === 'ghost' && 'layer-variants:(shadow-none border-transparent)',

		{
			'layer-components:bg-main': emphasis === 'primary',
			'layer-components:(color-main-ink bg-main-light bg-desaturate-2)':
				emphasis === 'light',
			'layer-components:bg-neutral-paper layer-variants:focus-visible:bg-neutral-paper':
				emphasis === 'default',
			'layer-components:(color-main-ink bg-transparent aria-[pressed]:bg-main-wash)':
				emphasis === 'ghost',
		},

		{
			'layer-components:(min-h-[30px])': size === 'small',
			'layer-components:[&[data-has-icon=true][data-has-label=false]]:(p-2.35 rd-lg text-ambient)':
				size === 'default' && !disableIconMode,
			'layer-components:[&[data-has-icon=true][data-has-label=false]]:min-h-touch-small layer-components:[&[data-has-icon=true][data-has-label=false]]:-m-y-2xs layer-components:[&[data-has-icon=true][data-has-label=false]]:(p-sm rd-lg text-ambient)':
				size === 'small' && !disableIconMode,
		},
		!disableIconMode &&
			'layer-components:[&[data-has-icon=true][data-has-label=false]:not([aria-pressed])]:(aspect-1 items-center justify-center)',

		'layer-components:hover:(bg-main bg-lighten-2 ring-bg ring-[4px])',
		'layer-components:active:(bg-darken-1 ring-bg ring-[8px])',
		'focus-visible:(ring-neutral-ink ring-[4px] ring-offset)',

		'layer-components:disabled:(cursor-default opacity-50 shadow-none ring-none)',
		'layer-components:[&[data-disabled=true]]:(cursor-default opacity-50 shadow-none)',

		{
			'layer-variants:[&[aria-pressed=false]]:[&:not(:hover)]:bg-transparent':
				toggleable,
		},

		'self-center',

		`size-${size ?? 'default'}`,
	);
}
