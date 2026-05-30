import { Button } from '@base-ui/react/button';
import { UseRenderComponentProps } from '@base-ui/react/use-render';
import classNames, { clsx } from 'clsx';
import { ReactElement, ReactNode, Ref } from 'react';
import { withClassName } from '../../hooks.js';
import { Icon, IconProps } from '../icon/index.js';
import cls from './NavBar.module.css';

export interface NavBarItemProps extends UseRenderComponentProps<'button'> {
	className?: string;
	children?: ReactNode;
	active?: boolean;
	color?: 'primary' | 'neutral' | 'accent';
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
			className={classNames(cls.item, `@mode-${color}`, className)}
			data-active={active}
			{...rest}
		/>
	);
};

export const NavBarItemIconWrapper = withClassName('div', cls.itemIconWrapper);

export const NavBarItemText = withClassName('span', cls.itemText);

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
			className={clsx(cls.icon, className)}
			{...rest}
			ref={ref}
		/>
	);
};

export const NavBarItemPip = withClassName('div', '@mode-attention', cls.pip);

export const NavBarRoot = withClassName('div', cls.root);

export const NavBar = Object.assign(NavBarRoot, {
	Item: NavBarItem,
	ItemIcon: NavBarItemIcon,
	ItemText: NavBarItemText,
	ItemIconWrapper: NavBarItemIconWrapper,
	ItemPip: NavBarItemPip,
});
