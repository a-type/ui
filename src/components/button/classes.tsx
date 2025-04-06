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
		'layer-components:(px-4 py-2 bg-[var(--bg-neutral,var(--bg))] [--webkit-tap-highlight-color:transparent] [line-height:1] text-size-md font-inherit border border-solid border-transparent rounded-lg cursor-pointer font-bold flex flex-row gap-1 items-center relative overflow-visible select-none all:transition duration-200 whitespace-nowrap ring-bg)',
		'layer-components:()',
		'layer-components:hover:(bg-[var(--bg)] bg-darken-1 ring-4)',
		'layer-components:focus:outline-off',
		'layer-components:focus-visible:(bg-[var(--bg)] outline-off bg-darken-1 ring-6)',
		'layer-components:[&[data-focus=true]]:(bg-[var(--bg)] ring-6 bg-darken-1)',
		'layer-components:active:(bg-[var(--bg)] bg-darken-1 ring-8)',
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
			'layer-variants:[aria-pressed="true"]:[--bg:var(--color-primary-wash)]',
	);
}

const colors = {
	primary: `layer-variants:[&.btn-color-primary]:([--bg:var(--color-primary)] shadow-sm color-black border-primary-dark)`,
	accent: `layer-variants:[&.btn-color-accent]:([--bg-neutral:var(--color-accent-wash)] [--bg:var(--color-accent-light)] shadow-sm color-black border-accent-dark)`,
	default: `layer-variants:[&.btn-color-default]:([--bg-neutral:var(--color-white)] [--bg:var(--color-gray-light)] shadow-sm color-black border-gray-dark)`,
	ghost: `layer-variants:[&.btn-color-ghost]:([--bg-neutral:transparent] [--bg:oklch(from_var(--color-gray)_l_c_h/50%)] color-dark-blend)`,
	destructive: `layer-variants:[&.btn-color-destructive]:([--bg:var(--color-attention)] shadow-sm border-attention-dark color-black ))`,
	ghostDestructive: `layer-variants:[&.btn-color-ghostDestructive]:([--bg-neutral:transparent] [--bg:var(--color-attention-light)] color-attention-dark hover:(color-black) focus-visible:(color-black))`,
	ghostAccent: `layer-variants:[&.btn-color-ghostAccent]:([--bg-neutral:transparent] [--bg:var(--color-accent-wash)] color-accent-dark hover:bg-darken-4)`,
	contrast: `layer-variants:[&.btn-color-contrast]:([--bg:var(--color-black)] color-white border-black hover:bg-lighten-1 focus-visible:bg-lighten-1 active:bg-lighten-1)`,
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
