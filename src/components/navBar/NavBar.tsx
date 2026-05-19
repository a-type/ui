import { Button } from '@base-ui/react/button';
import { UseRenderComponentProps } from '@base-ui/react/use-render';
import classNames, { clsx } from 'clsx';
import { ReactElement, ReactNode, Ref } from 'react';
import { withClassName } from '../../hooks.js';
import { Icon, IconProps } from '../icon/index.js';

export const navBarItemClass = classNames(
	'layer-components:(relative h-full flex flex-col cursor-pointer select-none items-center justify-center gap-6px whitespace-nowrap px-3 py-1 transition-colors color-neutral-ink bg-transparent rd-sm border-none text-ambient)',
	'layer-components:active:bg-darken-2',
	'layer-components:hover:(bg-main-light)',
	'layer-components:foc-effect',
	'layer-components:[&[data-active=true]]:(color-neutral-ink color-lighten-2 bg-main-light/50)',
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
	'layer-components:md:bg-neutral-blend layer-components:md:(p-6px rd-lg)',
	'layer-variants:md:[*[data-active=true]_&]:bg-[var(--bg)]',
);

export const NavBarItemText = withClassName(
	'span',
	'layer-components:text-xxs layer-components:(inline-block overflow-hidden text-ellipsis whitespace-nowrap) layer-components:md:(text-secondary leading-normal)',
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
	'layer-components:(absolute right-6px top-6px h-6px w-6px shadow-sm bg-main rd-lg)',
);

export const NavBarRoot = withClassName(
	'div',
	'layer-components:([grid-auto-columns:1fr] [grid-auto-flow:column] z-50 grid h-auto w-full justify-items-center overflow-hidden rd-0 p-1)',
	'pb-[calc(0.25rem+env(safe-area-inset-bottom,0px))]',
	'layer-components:md:(h-min-content flex flex-col items-stretch justify-start gap-2 overflow-x-hidden rd-0 pb-10 shadow-none bg-transparent border-transparent border-none overflow-y-auto)',
);

export const NavBar = Object.assign(NavBarRoot, {
	Item: NavBarItem,
	ItemIcon: NavBarItemIcon,
	ItemText: NavBarItemText,
	ItemIconWrapper: NavBarItemIconWrapper,
	ItemPip: NavBarItemPip,
});
