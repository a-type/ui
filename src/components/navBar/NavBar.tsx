import { Slot } from '@radix-ui/react-slot';
import classNames, { clsx } from 'clsx';
import { ReactNode, Ref } from 'react';
import { withClassName } from '../../hooks.js';
import { Icon, IconProps } from '../icon/index.js';

export const navBarItemClass = classNames(
	'layer-components:(flex flex-col items-center justify-center whitespace-nowrap py-1 px-3 bg-transparent rounded-sm border-none cursor-pointer text-sm transition-colors h-full gap-6px relative color-black select-none)',
	'layer-components:active:bg-darken-2',
	'layer-components:hover:bg-darken-1',
	'layer-components:focus-visible:(outline-none bg-darken-3)',
	'layer-components:[&[data-active=true]]:(bg-[var(--bg)] bg-darken-2 text-black)',
	'layer-components:([--bg:var(--color-primary-wash)] [--fill:var(--color-primary)])',
	'layer-responsive:md:(flex-row-reverse h-auto justify-start gap-2 overflow-visible active:bg-darken-2)',
);

export interface NavBarItemProps {
	asChild?: boolean;
	className?: string;
	children?: ReactNode;
	active?: boolean;
	color?: 'primary' | 'neutral';
}

export const NavBarItem = function NavBarItem({
	ref,
	asChild,
	className,
	active,
	color,
	...rest
}: NavBarItemProps & {
	ref?: React.Ref<HTMLDivElement>;
}) {
	const Comp = asChild ? Slot : 'div';

	return (
		<Comp
			ref={ref}
			className={classNames(
				navBarItemClass,
				color === 'neutral' && [
					'layer-variants:active:bg-gray-darkBlend layer-variants:md:active:bg-gray-darkBlend',
					'layer-variants:hover:bg-gray-darkBlend',
					'layer-variants:focus-visible:(bg-gray-darkBlend)',
					'layer-variants:[&[data-active=true]]:(bg-gray-darkBlend text-black)',
					'layer-variants:([--bg:var(--color-gray-blend)] [--fill:var(--color-gray)])',
				],
				className,
			)}
			data-active={active}
			{...rest}
		/>
	);
};

export const NavBarItemIconWrapper = withClassName(
	'div',
	'layer-components:(relative flex) layer-components:md:(p-6px rounded-lg bg-gray-blend)',
	'layer-variants:md:[*[data-active=true]_&]:bg-[var(--bg)]',
);

export const NavBarItemText = withClassName(
	'span',
	'layer-components:(overflow-hidden pl-1 inline-block text-xxs whitespace-nowrap text-ellipsis) layer-components:md:(text-md leading-normal)',
);

interface NavBarItemIconProps {
	asChild?: boolean;
	name?: IconProps['name'];
	className?: string;
	children?: ReactNode;
	ref?: Ref<any>;
}
export const NavBarItemIcon = function NavBarItemIcon({
	ref,
	children,
	asChild,
	className,
	name = 'placeholder',
	...rest
}: NavBarItemIconProps) {
	const Comp = asChild ? Slot : Icon;
	return (
		<Comp
			name={name}
			className={clsx(
				'layer-components:(relative z-1 flex fill-none text-inherit)',
				'layer-variants:[*[data-active=true]_&]:fill-[var(--fill)]',
				className,
			)}
			{...rest}
			ref={ref}
		>
			{children}
		</Comp>
	);
};

export const NavBarItemPip = withClassName(
	'div',
	'layer-components:(absolute top-6px right-6px w-6px h-6px rounded-lg bg-attention shadow-sm)',
);

export const NavBarRoot = withClassName(
	'div',
	'layer-components:(grid [grid-auto-columns:1fr] [grid-auto-flow:column] justify-items-center w-full rounded-none overflow-hidden z-50 p-1 h-auto)',
	'pb-[calc(0.25rem+env(safe-area-inset-bottom,0px))]',
	'layer-components:md:(bg-transparent flex flex-col rounded-none border-none border-transparent shadow-none h-min-content overflow-y-auto overflow-x-hidden justify-start items-stretch gap-2 pb-10)',
);

export const NavBar = Object.assign(NavBarRoot, {
	Item: NavBarItem,
	ItemIcon: NavBarItemIcon,
	ItemText: NavBarItemText,
	ItemIconWrapper: NavBarItemIconWrapper,
	ItemPip: NavBarItemPip,
});
