import classNames from 'clsx';
import { withClassName } from '../../hooks.js';
import { ReactNode, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

export const navBarItemClass = classNames(
	'layer-components:(flex flex-col items-center justify-center whitespace-nowrap py-1 px-3 bg-transparent rounded-md border-none cursor-pointer text-sm transition-colors h-full gap-6px relative text-inherit)',
	'layer-components:sm:(flex-row-reverse h-auto justify-start gap-2 overflow-visible)',
	'layer-components:hover:bg-primaryWash',
	'layer-components:focus-visible:(outline-none bg-primaryWash)',
	'layer-components:active:bg-primaryWash',
);

export interface NavBarItemProps {
	asChild?: boolean;
	className?: string;
	children?: ReactNode;
}

export const NavBarItem = forwardRef<HTMLDivElement, NavBarItemProps>(
	function NavBarItem({ asChild, className, ...rest }, ref) {
		const Comp = asChild ? Slot : 'div';

		return (
			<Comp
				ref={ref}
				className={classNames(navBarItemClass, className)}
				{...rest}
			/>
		);
	},
);

export const NavBarItemIconWrapper = withClassName(
	'div',
	'layer-components:(relative flex) layer-components:sm:(p-6px rounded-full bg-lightBlend)',
);

export const NavBarItemText = withClassName(
	'span',
	'layer-components:(overflow-hidden pl-1 inline-block text-xxs whitespace-nowrap text-ellipsis) layer-components:sm:(text-md leading-normal)',
);

export const NavBarItemIcon = withClassName(
	'div',
	'layer-components:(relative z-1 fill-none [a[data-active=true]_&]:fill-primary-light)',
);

export const NavBarItemPip = withClassName(
	'div',
	'layer-components:(absolute top-6px right-6px w-6px h-6px rounded-full bg-attention shadow-sm)',
);

export const NavBarRoot = withClassName(
	'div',
	'layer-components:(flex flex-row items-stretch justify-around w-full rounded-0 overflow-hidden z-50 p-1 h-auto)',
	'pb-[calc(0.25rem+env(safe-area-inset-bottom,0px))]',
	'layer-components:sm:(bg-transparent flex flex-col rounded-0 border-none border-transparent shadow-none h-min-content overflow-y-auto overflow-x-hidden justify-start items-stretch gap-2 pb-10)',
);
