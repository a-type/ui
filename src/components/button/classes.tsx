import classNames from 'clsx';
import type { ButtonProps } from './Button.jsx';

export function getButtonClassName({
	color,
	size,
	toggleable,
	align,
}: {
	color?: ButtonProps['color'];
	size?: ButtonProps['size'];
	toggleable?: boolean;
	align?: ButtonProps['align'];
}) {
	return classNames(
		'layer-components:(px-4 py-2 bg-[var(--bg)] [--webkit-tap-highlight-color:transparent] [line-height:1] text-size-md font-sans border border-solid border-transparent rounded-lg cursor-pointer font-bold flex flex-row gap-1 items-center relative overflow-visible select-none all:transition duration-200 whitespace-nowrap)',
		'layer-components:hover:(bg-[var(--hover)] ring-4 ring-[var(--hover)])',
		'layer-components:focus:outline-off',
		'layer-components:focus-visible:(outline-off ring-6 ring-[var(--focus,var(--hover))])',
		'layer-components:[&[data-focus=true]]:(ring-6 ring-[var(--focus,var(--hover))])',
		'layer-components:active:(bg-[var(--active)] ring-8 ring-[var(--active)])',
		'important:disabled:(opacity-50 cursor-default bg-[var(--bg)] shadow-none ring-none)',
		'important:[&[data-disabled=true]]:(opacity-50 cursor-default bg-[var(--bg)] shadow-none)',
		colors[color ?? 'default'],
		`btn-color-${color ?? 'default'}`,
		sizes[size ?? 'default'],
		`size-${size ?? 'default'}`,
		toggleable && toggledClass,
		align && aligns[align],
		// compound variants
		color === 'ghost' &&
			toggleable &&
			'layer-variants:[aria-pressed="true"]:bg-primary-wash',
	);
}

const colors = {
	primary: `layer-variants:[&.btn-color-primary]:([--bg:var(--color-primary-light)] [--hover:var(--color-primary)] [--focus:var(--color-primary)] [--active:var(--color-primary)] shadow-sm color-black border-primary-dark focus-visible:([--bg:var(--color-primary)]))`,
	accent: `layer-variants:[&.btn-color-accent]:([--bg:var(--color-accent-wash)] [--hover:var(--color-accent-light)] [--focus:var(--color-accent-light)] [--active:var(--color-accent-light)] shadow-sm color-black border-accent-dark focus-visible:([--bg:var(--color-accent-light)]))`,
	default: `layer-variants:[&.btn-color-default]:([--bg:var(--color-white)] [--hover:var(--color-gray-3)] [--focus:var(--color-gray-5)] [--active:var(--color-gray-4)] shadow-sm color-black border-gray-7)`,
	ghost: `layer-variants:[&.btn-color-ghost]:([--bg:transparent] [--hover:var(--color-gray-blend)] [--focus:var(--color-gray-5)] [--active:var(--color-gray-dark-blend)] color-dark-blend)`,
	destructive: `layer-variants:[&.btn-color-destructive]:([--bg:var(--color-attention-light)] [--hover:var(--color-attention-light)] [--focus:var(--color-attention-light)] [--active:var(--color-attention-light)] shadow-sm border-attention-dark color-black hover:([--bg:var(--colors-attention)]))`,
	ghostDestructive: `layer-variants:[&.btn-color-ghostDestructive]:([--bg:transparent] [--hover:rgb(from_var(--color-attention-light)_r_g_b/0.25)] [--focus:var(--color-attention-light)] [--active:var(--color-attention-light)] color-attention-dark)`,
	ghostAccent: `layer-variants:[&.btn-color-ghostAccent]:([--bg:transparent] [--hover:rgb(from_var(--color-accent-light)_r_g_b/0.25)] [--focus:var(--color-accent-light)] [--active:var(--color-accent-light)] color-accent-dark)`,
	contrast: `layer-variants:[&.btn-color-contrast]:([--bg:var(--color-black)] [--hover:var(--color-gray-7)] [--focus:var(--color-gray-7)] [--active:var(--color-gray-6)] color-white border-black)`,
	unstyled: `layer-variants:(bg-transparent hover:(bg-transparent) focus:(bg-transparent) active:(bg-transparent) color-inherit border-none shadow-none hover:(shadow-none) focus:(shadow-none) active:(shadow-none) p-0 items-start font-inherit font-normal rounded-none text-size-inherit transition-none)`,
};
export const buttonColorClasses = colors;

const sizes = {
	default: '',
	small: 'layer-variants:[&.size-small]:(px-4 py-1 text-sm rounded-md)',
	icon: 'layer-variants:[&.size-icon]:(p-2.35 text-sm rounded-lg)',
	'icon-small':
		'layer-variants:[&.size-icon-small]:(p-2 text-xs rounded-lg -m-y-0.5)',
};

const toggledClass =
	'layer-variants:(bg-transparent aria-pressed:bg-[var(--bg)] hover:(filter-brightness-[1.1]))';

const aligns = {
	start: 'self-start',
	stretch: 'self-stretch',
	end: 'self-end',
};
