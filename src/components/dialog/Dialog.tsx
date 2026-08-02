import { UseRenderRenderProp } from '@base-ui/react';
import {
	Dialog as BaseDialog,
	DialogCloseProps,
	DialogPopupProps,
	DialogRootProps,
	DialogTriggerProps,
} from '@base-ui/react/dialog';
import { DrawerRootProps } from '@base-ui/react/drawer';
import { Radio as BaseRadio } from '@base-ui/react/radio';
import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, Ref, useCallback, useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery.js';
import { withClassName } from '../../hooks/withClassName.js';
import { createWithContextVariant } from '../../hooks/withContextVariant.js';
import { Box } from '../box/Box.js';
import { Button } from '../button/index.js';
import { Drawer } from '../drawer/Drawer.js';
import drawerCls from '../drawer/Drawer.module.css';
import { Icon } from '../icon/Icon.js';
import menuCls from '../primitives/menus.module.css';
import { ScrollArea } from '../scrollArea/ScrollArea.js';
import { selectTriggerClassName } from '../select/index.js';
import cls from './Dialog.module.css';

const { Context: MobileDrawerContext, withContextVariant } =
	createWithContextVariant();

// baseline Dialog-specific component implementations
const StyledOverlay = withClassName(BaseDialog.Backdrop, cls.overlay);
const StyledContent = withClassName(BaseDialog.Popup, cls.content);
export interface DialogContentProps
	extends Omit<DialogPopupProps, 'className' | 'style' | 'render'> {
	width?: 'sm' | 'md' | 'lg';
	disableDefaultClose?: boolean;
	/** @deprecated */
	outerClassName?: string;
	ref?: Ref<HTMLDivElement>;
	innerClassName?: string;
	className?: string;
	style?: React.CSSProperties;
	// minimal state overlap between drawer and dialog primitives
	render?: UseRenderRenderProp<{ open: boolean }>;
}
const FunctionalContent = function Content({
	ref,
	children,
	width,
	outerClassName,
	className,
	disableDefaultClose,
	innerClassName,
	...props
}: DialogContentProps) {
	return (
		<BaseDialog.Portal>
			<StyledOverlay />
			<StyledContent
				ref={ref}
				{...props}
				data-width={width}
				className={clsx(outerClassName || className)}
			>
				{!disableDefaultClose && <DialogDefaultClose />}
				<ScrollArea
					direction="vertical"
					className={drawerCls.contentScrollArea}
				>
					<ScrollArea.Content
						className={clsx(drawerCls.contentScrollAreaContent, innerClassName)}
						style={{ minWidth: undefined }}
					>
						{children}
					</ScrollArea.Content>
				</ScrollArea>
			</StyledContent>
		</BaseDialog.Portal>
	);
};
const DialogDefaultClose = function DialogDefaultClose({
	ref,
	className,
	showOnMobile,
	...props
}: DialogCloseProps & {
	ref?: React.Ref<HTMLButtonElement>;
	showOnMobile?: boolean;
}) {
	return (
		<DialogClose
			className={clsx(cls.close, className)}
			data-show-on-mobile={showOnMobile}
			aria-label="Close dialog"
			ref={ref}
			{...props}
			render={<Button emphasis="ghost" size="small" />}
		>
			<Icon name="x" />
		</DialogClose>
	);
};
const StyledDialogTitle = withClassName(BaseDialog.Title, cls.title);
const StyledDescription = withClassName(
	BaseDialog.Description,
	cls.description,
);
const StyledTrigger = ({ render, ...props }: DialogTriggerProps) => (
	<BaseDialog.Trigger render={render || <Button />} {...props} />
);
const StyledClose = function DialogClose({
	children,
	render,
	...props
}: DialogCloseProps & {
	ref?: React.Ref<HTMLButtonElement>;
}) {
	return (
		<BaseDialog.Close
			render={render ?? <Button emphasis="default" />}
			{...props}
		>
			{children ?? 'Close'}
		</BaseDialog.Close>
	);
};
const StyledActions = withClassName(Box, cls.actions);

// Variant Dialog/Drawer component wrappers
const DialogContent = withContextVariant<DialogContentProps>(
	Drawer.Content,
	FunctionalContent,
);
const DialogTitle = withContextVariant(Drawer.Title, StyledDialogTitle);
const DialogDescription = withContextVariant(
	Drawer.Description,
	StyledDescription,
);

export interface DialogProps extends Omit<DialogRootProps, 'children'> {
	children: React.ReactNode;
	disableSheet?: boolean;
}
const DialogRoot = ({
	children,
	defaultOpen,
	disableSheet,
	...rootProps
}: DialogProps) => {
	const [innerOpen, innerOnOpenChange] = useState(defaultOpen || false);
	const open = rootProps.open ?? innerOpen;
	const onOpenChange = useCallback<
		Exclude<DialogRootProps['onOpenChange'], undefined>
	>(
		(open, eventDetails) => {
			innerOnOpenChange(open);
			rootProps.onOpenChange?.(open, eventDetails);
		},
		[rootProps.onOpenChange],
	);

	const isSmall = useMediaQuery('(max-width: 600px)');
	const useDrawer = isSmall && !disableSheet;

	if (useDrawer) {
		return (
			<MobileDrawerContext.Provider value={true}>
				<Drawer
					{...rootProps}
					open={open}
					onOpenChange={onOpenChange as DrawerRootProps['onOpenChange']}
				>
					{children}
				</Drawer>
			</MobileDrawerContext.Provider>
		);
	}

	return (
		<BaseDialog.Root {...rootProps} open={open} onOpenChange={onOpenChange}>
			{children}
		</BaseDialog.Root>
	);
};
const DialogTrigger = withContextVariant(Drawer.Trigger, StyledTrigger);
const DialogClose = withContextVariant(Drawer.Close, StyledClose);
const DialogActions = withContextVariant(Drawer.Actions, StyledActions);

// "Select" stuff - deprecate soon?
const DialogSelectTrigger = function DialogSelectTrigger({
	children,
	className,
	...props
}: DialogTriggerProps & {
	ref?: React.Ref<HTMLButtonElement>;
}) {
	return (
		<DialogTrigger
			className={clsx(selectTriggerClassName, className)}
			{...props}
		>
			<span>{children}</span>
			<Icon name="chevron" />
		</DialogTrigger>
	);
};
const DialogSelectList = withClassName(BaseRadioGroup, menuCls.itemList);
const DialogSelectItemRoot = withClassName(BaseRadio.Root, menuCls.item);
const DialogSelectItem = function DialogSelectItem({
	children,
	...props
}: ComponentPropsWithoutRef<typeof DialogSelectItemRoot> & {
	ref?: React.Ref<HTMLButtonElement>;
}) {
	return (
		<DialogSelectItemRoot {...props}>
			<span className={menuCls.itemText}>{children}</span>
			<BaseRadio.Indicator className={menuCls.itemIndicator}>
				<Icon name="check" />
			</BaseRadio.Indicator>
		</DialogSelectItemRoot>
	);
};

export const Dialog = Object.assign(DialogRoot, {
	Trigger: DialogTrigger,
	Content: DialogContent,
	Title: DialogTitle,
	Description: DialogDescription,
	Close: DialogClose,
	Actions: DialogActions,
	SelectTrigger: DialogSelectTrigger,
	SelectList: DialogSelectList,
	SelectItem: DialogSelectItem,
	Unstyled: BaseDialog as DialogParts,
	createHandle: BaseDialog.createHandle,
});

export type DialogParts = typeof BaseDialog;
