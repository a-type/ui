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
		'layer-components:(px-4 py-2 bg-[var(--bg)] [--webkit-tap-highlight-color:transparent] [line-height:1] text-size-md font-sans border border-solid border-transparent rounded-full cursor-pointer font-bold flex flex-row gap-1 items-center relative overflow-visible select-none all:transition duration-200 shadow-none whitespace-nowrap)',
		'layer-components:hover:(bg-[var(--hover)] shadow-[0_0_0_6px_var(--hover)])',
		'layer-components:focus:outline-off',
		'layer-components:focus-visible:(outline-off [box-shadow:0_0_0_6px_var(--focus,var(--hover))])',
		'layer-components:active:(shadow-[0_0_0_6px_var(--active)] bg-[var(--active)])',
		'important:disabled:(opacity-50 cursor-default bg-[var(--bg)] shadow-none)',
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
	primary: `layer-variants:[&.btn-color-primary]:([--bg:var(--color-primary-light)] [--hover:var(--color-primary)] [--focus:var(--color-primary)] [--active:var(--color-primary)] color-black border-black focus-visible:([--bg:var(--color-primary)]))`,
	accent: `layer-variants:[&.btn-color-accent]:([--bg:var(--color-accent-wash)] [--hover:var(--color-accent-light)] [--focus:var(--color-accent-light)] [--active:var(--color-accent-light)] color-black border-black focus-visible:([--bg:var(--color-accent-light)]))`,
	default: `layer-variants:[&.btn-color-default]:([--bg:var(--color-white)] [--hover:var(--color-gray-2)] [--focus:var(--color-gray-dark-blend)] [--active:var(--color-gray-3)] color-black border-black)`,
	ghost: `layer-variants:[&.btn-color-ghost]:([--bg:transparent] [--hover:var(--color-gray-blend)] [--focus:var(--color-gray-dark-blend)] [--active:var(--color-gray-dark-blend)] color-dark-blend)`,
	destructive: `layer-variants:[&.btn-color-destructive]:([--bg:var(--color-attention-light)] [--hover:var(--color-attention-light)] [--focus:var(--color-attention-light)] [--active:var(--color-attention-light)] border-black color-black hover:([--bg:var(--colors-attention)]))`,
	ghostDestructive: `layer-variants:[&.btn-color-ghostDestructive]:([--bg:transparent] [--hover:rgb(from_var(--color-attention-light)_r_g_b/0.25)] [--focus:var(--color-attention-light)] [--active:var(--color-attention-light)] color-attention-dark)`,
	ghostAccent: `layer-variants:[&.btn-color-ghostAccent]:([--bg:transparent] [--hover:rgb(from_var(--color-accent-light)_r_g_b/0.25)] [--focus:var(--color-accent-light)] [--active:var(--color-accent-light)] color-accent-dark)`,
	contrast: `layer-variants:[&.btn-color-contrast]:([--bg:var(--color-black)] [--hover:var(--color-gray-7)] [--focus:var(--color-gray-7)] [--active:var(--color-gray-6)] color-white border-black)`,
	unstyled: `layer-variants:(bg-transparent hover:(bg-transparent) focus:(bg-transparent) active:(bg-transparent) color-inherit border-none shadow-none hover:(shadow-none) focus:(shadow-none) active:(shadow-none) p-0 items-start font-inherit font-normal rounded-0 text-size-inherit transition-none)`,
};

const sizes = {
	default: '',
	small: 'layer-variants:[&.size-small]:(px-4 py-1 text-sm rounded-full)',
	icon: 'layer-variants:[&.size-icon]:(p-2 text-sm rounded-full) layer-variants:focus-visible:shadow-[0_0_0_2px_var(--focus,var(--hover))]',
};

const toggledClass =
	'layer-variants:(bg-transparent aria-pressed:bg-[var(--bg)] hover:(filter-brightness-[1.1]))';

const aligns = {
	start: 'self-start',
	stretch: 'self-stretch',
	end: 'self-end',
};
