import { Button } from '@base-ui/react/button';
import { UseRenderComponentProps } from '@base-ui/react/use-render';
import classNames, { clsx } from 'clsx';
import { ReactElement, ReactNode, Ref } from 'react';
import { withClassName } from '../../hooks.js';
import { Icon, IconProps } from '../icon/index.js';

export const navBarItemClass = classNames(
	'layer-components:(relative h-full flex flex-col cursor-pointer select-none items-center justify-center gap-6px whitespace-nowrap rounded-sm border-none px-3 py-1 text-sm transition-colors color-black bg-transparent)',
	'layer-components:active:bg-darken-2',
	'layer-components:hover:(bg-main-light)',
	'layer-components:focus-visible:(outline-none ring-2 ring-accent)',
	'layer-components:[&[data-active=true]]:(color-black color-lighten-2 bg-main-light/50)',
	'layer-responsive:md:(h-auto flex-row-reverse justify-start gap-2 overflow-visible active:bg-darken-2)',
);

export interface NavBarItemProps extends UseRenderComponentProps<'button'> {
	className?: string;
	children?: ReactNode;
	active?: boolean;
	color?: 'primary' | 'gray';
	render?: ReactElement | (() => ReactElement);
}

export const NavBarItem = function NavBarItem({
	ref,
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

interface NavBarItemIconProps extends Omit<IconProps, 'name'> {
	name?: IconProps['name'];
	className?: string;
	children?: ReactNode;
	ref?: Ref<any>;
}
export const NavBarItemIcon = function NavBarItemIcon({
	ref,
	className,
	name = 'placeholder',
	...rest
}: NavBarItemIconProps) {
	return (
		<Icon
			name={name}
			className={clsx(
				'layer-components:(relative z-1 flex color-inherit)',
				'layer-variants:[*[data-active=true]_&]:fill-main',
				className,
			)}
			{...rest}
			ref={ref}
		/>
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
