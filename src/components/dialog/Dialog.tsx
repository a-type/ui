import {
	Dialog as BaseDialog,
	DialogCloseProps,
	DialogPopupProps,
	DialogRootProps,
	DialogTriggerProps,
} from '@base-ui/react/dialog';
import { Drawer as BaseDrawer, DrawerRootProps } from '@base-ui/react/drawer';
import { Radio as BaseRadio } from '@base-ui/react/radio';
import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group';
import clsx from 'clsx';
import {
	ComponentPropsWithoutRef,
	Ref,
	useCallback,
	useRef,
	useState,
} from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery.js';
import useMergedRef from '../../hooks/useMergedRef.js';
import { withClassName } from '../../hooks/withClassName.js';
import { Box } from '../box/Box.js';
import { Button } from '../button/index.js';
import { Icon } from '../icon/Icon.js';
import { useParticles } from '../particles/index.js';
import menuCls from '../primitives/menus.module.css';
import { useConfig } from '../provider/Provider.js';
import { ScrollArea } from '../scrollArea/ScrollArea.js';
import { selectTriggerClassName } from '../select/index.js';
import drawerCls from '../drawer/Drawer.module.css';
import cls from './Dialog.module.css';

const StyledOverlay = withClassName(BaseDialog.Backdrop, cls.overlay);

const StyledContent = withClassName(BaseDialog.Popup, cls.content);

const StyledDrawerOverlay = withClassName(
	BaseDrawer.Backdrop,
	drawerCls.overlay,
);

const StyledDrawerPopup = withClassName(BaseDrawer.Popup, drawerCls.popup);

export interface DialogContentProps extends DialogPopupProps {
	width?: 'sm' | 'md' | 'lg';
	disableSheet?: boolean;
	disableDefaultClose?: boolean;
	/** @deprecated */
	outerClassName?: string;
	ref?: Ref<HTMLDivElement>;
	innerClassName?: string;
}

export const Content = function Content({
	ref,
	children,
	width,
	outerClassName,
	className,
	disableSheet,
	disableDefaultClose,
	innerClassName,
	...props
}: DialogContentProps) {
	const particles = useParticles();
	const wasOpenRef = useRef(false);
	const isSmall = useMediaQuery('(max-width: 600px)');
	const useDrawer = isSmall && !disableSheet;

	const openRef = useCallback(
		(element: HTMLDivElement | null) => {
			if (!wasOpenRef.current && element?.hasAttribute('data-open')) {
				wasOpenRef.current = true;

				if (!useDrawer) return;

				setTimeout(() => {
					particles?.addParticles(
						particles.elementExplosion({
							count: 20,
							margin: 40,
							borders: ['top'],
							color: [
								{
									space: 'rgb',
									values: [0, 0, 0],
									opacity: 0.02,
								},
								{
									space: 'rgb',
									values: [0, 0, 0],
									opacity: 0,
								},
							],
							element,
							startRadius: 15,
							endRadius: 0,
							lifespan: 1000,
							force: 0.5,
							drag: 0.01,
							forceFuzz: 0.5,
							angleFuzz: 0.1,
						}),
					);
				}, 180);
			} else if (!element?.hasAttribute('data-open')) {
				wasOpenRef.current = false;
			}
		},
		[particles, useDrawer],
	);

	const finalRef = useMergedRef(ref, openRef);

	const { virtualKeyboardBehavior } = useConfig();

	if (useDrawer) {
		return (
			<BaseDrawer.Portal>
				<StyledDrawerOverlay />
				<StyledDrawerPopup
					ref={finalRef}
					{...(props as ComponentPropsWithoutRef<typeof StyledDrawerPopup>)}
					className={clsx(outerClassName || className)}
				>
					{!disableDefaultClose && <DialogDefaultClose showOnMobile />}
					<DialogSwipeHandle />
					<ScrollArea
						direction="vertical"
						className={drawerCls.contentScrollArea}
					>
						<ScrollArea.Content
							className={clsx(
								drawerCls.contentScrollAreaContent,
								innerClassName,
							)}
							style={{ minWidth: undefined }}
						>
							{children}
						</ScrollArea.Content>
					</ScrollArea>
				</StyledDrawerPopup>
			</BaseDrawer.Portal>
		);
	}

	return (
		<BaseDialog.Portal>
			<StyledOverlay />
			<StyledContent
				ref={finalRef}
				{...props}
				data-keyboard-behavior={virtualKeyboardBehavior}
				data-width={width}
				className={clsx(outerClassName || className)}
			>
				{!disableDefaultClose && (
					<DialogDefaultClose showOnMobile={disableSheet} />
				)}
				<ScrollArea direction="vertical" className={cls.contentScrollArea}>
					<ScrollArea.Content
						className={clsx(cls.contentScrollAreaContent, innerClassName)}
						style={{
							minWidth: undefined,
						}}
					>
						{children}
					</ScrollArea.Content>
				</ScrollArea>
			</StyledContent>
		</BaseDialog.Portal>
	);
};

export function DialogSwipeHandle({
	ref,
	className,
	...props
}: ComponentPropsWithoutRef<'div'> & {
	ref?: React.Ref<HTMLDivElement>;
}) {
	return (
		<div
			ref={ref}
			{...props}
			className={clsx(drawerCls.swipeHandle, className)}
		>
			<div className={drawerCls.swipeHandleBar} />
		</div>
	);
}

export const DialogDefaultClose = function DialogDefaultClose({
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

const StyledTitle = withClassName(BaseDialog.Title, cls.title);

const StyledDescription = withClassName(
	BaseDialog.Description,
	cls.description,
);

// Exports
const DialogRoot = (props: DialogRootProps & { disableSheet?: boolean }) => {
	const [innerOpen, innerOnOpenChange] = useState(props.defaultOpen || false);
	const open = props.open ?? innerOpen;
	const onOpenChange = useCallback<
		Exclude<DialogRootProps['onOpenChange'], undefined>
	>(
		(open, eventDetails) => {
			innerOnOpenChange(open);
			props.onOpenChange?.(open, eventDetails);
		},
		[props.onOpenChange],
	);

	const isSmall = useMediaQuery('(max-width: 600px)');
	const { disableSheet, ...rootProps } = props;
	const useDrawer = isSmall && !disableSheet;

	if (useDrawer) {
		return (
			<BaseDrawer.Root
				{...(rootProps as DrawerRootProps)}
				open={open}
				onOpenChange={onOpenChange as DrawerRootProps['onOpenChange']}
				swipeDirection="down"
			/>
		);
	}

	return (
		<BaseDialog.Root {...rootProps} open={open} onOpenChange={onOpenChange} />
	);
};

export const DialogTrigger = ({ render, ...props }: DialogTriggerProps) => (
	<BaseDialog.Trigger render={render || <Button />} {...props} />
);
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
export const DialogDescription = StyledDescription;
export const DialogClose = function DialogClose({
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

export type { DialogRootProps as DialogProps } from '@base-ui/react/dialog';

export const DialogActions = withClassName(Box, cls.actions);

export const DialogSelectTrigger = function DialogSelectTrigger({
	children,
	className,
	...props
}: DialogTriggerProps & {
	ref?: React.Ref<HTMLButtonElement>;
}) {
	return (
		<BaseDialog.Trigger
			className={clsx(selectTriggerClassName, className)}
			{...props}
		>
			<span>{children}</span>
			<Icon name="chevron" />
		</BaseDialog.Trigger>
	);
};

export const DialogSelectList = withClassName(BaseRadioGroup, menuCls.itemList);

export const DialogSelectItemRoot = withClassName(BaseRadio.Root, menuCls.item);

export const DialogSelectItem = function DialogSelectItem({
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
	Content,
	Title: StyledTitle,
	Description: StyledDescription,
	Close: DialogClose,
	Actions: DialogActions,
	SelectTrigger: DialogSelectTrigger,
	SelectList: DialogSelectList,
	SelectItem: DialogSelectItem,
	Unstyled: BaseDialog as DialogParts,
	createHandle: BaseDialog.createHandle,
});

export type DialogParts = typeof BaseDialog;
