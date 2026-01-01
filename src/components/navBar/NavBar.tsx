import { Button } from '@base-ui/react/button';
import { UseRenderComponentProps } from '@base-ui/react/use-render';
import { Slot } from '@radix-ui/react-slot';
import classNames, { clsx } from 'clsx';
import { ReactElement, ReactNode, Ref } from 'react';
import { withClassName } from '../../hooks.js';
import { Icon, IconProps } from '../icon/index.js';

export const navBarItemClass = classNames(
	'layer-components:(flex flex-col items-center justify-center whitespace-nowrap py-1 px-3 bg-transparent rounded-sm border-none cursor-pointer text-sm transition-colors h-full gap-6px relative color-black select-none)',
	'layer-components:active:bg-darken-2',
	'layer-components:hover:(bg-main-light)',
	'layer-components:focus-visible:(outline-none ring-2 ring-accent)',
	'layer-components:[&[data-active=true]]:(bg-main-light/50 color-lighten-2 color-black)',
	'layer-responsive:md:(flex-row-reverse h-auto justify-start gap-2 overflow-visible active:bg-darken-2)',
);

export interface NavBarItemProps extends UseRenderComponentProps<'button'> {
	/** @deprecated use render */
	asChild?: boolean;
	className?: string;
	children?: ReactNode;
	active?: boolean;
	color?: 'primary' | 'gray';
	render?: ReactElement | (() => ReactElement);
}

export const NavBarItem = function NavBarItem({
	ref,
	asChild,
	className,
	active,
	color = 'primary',
	...rest
}: NavBarItemProps & {
	ref?: React.Ref<HTMLButtonElement>;
}) {
	return (
		<Button
			ref={ref}
			className={classNames(navBarItemClass, `palette-${color}`, className)}
			data-active={active}
			render={asChild ? (rest.children as ReactElement) : undefined}
			{...rest}
		/>
	);
};

export const NavBarItemIconWrapper = withClassName(
	'div',
	'layer-components:(relative flex)',
	'layer-components:md:(p-6px rounded-lg bg-gray-blend)',
	'layer-variants:md:[*[data-active=true]_&]:bg-[var(--bg)]',
);

export const NavBarItemText = withClassName(
	'span',
	'layer-components:(overflow-hidden inline-block text-xxs whitespace-nowrap text-ellipsis) layer-components:md:(text-md leading-normal)',
);

interface NavBarItemIconProps {
	/** @deprecated use render */
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
				'layer-components:(relative z-1 flex color-inherit)',
				'layer-variants:[*[data-active=true]_&]:fill-main',
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
	'palette-attention',
	'layer-components:(absolute top-6px right-6px w-6px h-6px rounded-lg bg-main shadow-sm)',
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
