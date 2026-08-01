import { Drawer as BaseDrawer } from '@base-ui/react/drawer';
import {
	DrawerCloseProps,
	DrawerPopupProps,
	DrawerRootProps,
	DrawerTriggerProps,
} from '@base-ui/react/drawer';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, Ref } from 'react';
import { withClassName } from '../../hooks/withClassName.js';
import { Box } from '../box/Box.js';
import { Button } from '../button/index.js';
import { Icon } from '../icon/Icon.js';
import { ScrollArea } from '../scrollArea/ScrollArea.js';
import cls from './Drawer.module.css';

export const DrawerOverlay = withClassName(BaseDrawer.Backdrop, cls.overlay);

const StyledPopup = withClassName(BaseDrawer.Popup, cls.popup);

export interface DrawerContentProps extends DrawerPopupProps {
	disableDefaultClose?: boolean;
	ref?: Ref<HTMLDivElement>;
	innerClassName?: string;
}

export const DrawerContent = function DrawerContent({
	ref,
	children,
	className,
	disableDefaultClose,
	innerClassName,
	...props
}: DrawerContentProps) {
	return (
		<BaseDrawer.Portal>
			<DrawerOverlay />
			<StyledPopup ref={ref} {...props} className={className}>
				{!disableDefaultClose && <DrawerDefaultClose />}
				<DrawerSwipeHandle />
				<ScrollArea direction="vertical" className={cls.contentScrollArea}>
					<ScrollArea.Content
						className={clsx(cls.contentScrollAreaContent, innerClassName)}
						style={{ minWidth: undefined }}
					>
						{children}
					</ScrollArea.Content>
				</ScrollArea>
			</StyledPopup>
		</BaseDrawer.Portal>
	);
};

export function DrawerSwipeHandle({
	ref,
	className,
	...props
}: ComponentPropsWithoutRef<'div'> & {
	ref?: React.Ref<HTMLDivElement>;
}) {
	return (
		<div ref={ref} {...props} className={clsx(cls.swipeHandle, className)}>
			<div className={cls.swipeHandleBar} />
		</div>
	);
}

export const DrawerDefaultClose = function DrawerDefaultClose({
	ref,
	className,
	...props
}: DrawerCloseProps & {
	ref?: React.Ref<HTMLButtonElement>;
}) {
	return (
		<DrawerClose
			className={clsx(cls.close, className)}
			aria-label="Close drawer"
			ref={ref}
			{...props}
			render={<Button emphasis="ghost" size="small" />}
		>
			<Icon name="x" />
		</DrawerClose>
	);
};

export const DrawerTitle = withClassName(BaseDrawer.Title, cls.title);
export const DrawerDescription = withClassName(
	BaseDrawer.Description,
	cls.description,
);

const DrawerRoot = (props: DrawerRootProps) => {
	return <BaseDrawer.Root swipeDirection="down" {...props} />;
};

export const DrawerTrigger = ({ render, ...props }: DrawerTriggerProps) => (
	<BaseDrawer.Trigger render={render || <Button />} {...props} />
);

export const DrawerClose = function DrawerClose({
	children,
	render,
	...props
}: DrawerCloseProps & {
	ref?: React.Ref<HTMLButtonElement>;
}) {
	return (
		<BaseDrawer.Close
			render={render ?? <Button emphasis="default" />}
			{...props}
		>
			{children ?? 'Close'}
		</BaseDrawer.Close>
	);
};

export const DrawerActions = withClassName(Box, cls.actions);

export type { DrawerRootProps as DrawerProps } from '@base-ui/react/drawer';

export const Drawer = Object.assign(DrawerRoot, {
	Trigger: DrawerTrigger,
	Content: DrawerContent,
	Title: DrawerTitle,
	Description: DrawerDescription,
	Close: DrawerClose,
	Actions: DrawerActions,
	Unstyled: BaseDrawer as DrawerParts,
	createHandle: BaseDrawer.createHandle,
});

export type DrawerParts = typeof BaseDrawer;
