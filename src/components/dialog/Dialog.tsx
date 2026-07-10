import {
	Dialog as BaseDialog,
	DialogCloseProps,
	DialogPopupProps,
	DialogRootProps,
	DialogTriggerProps,
} from '@base-ui/react/dialog';
import { Radio as BaseRadio } from '@base-ui/react/radio';
import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group';
import { useDrag } from '@use-gesture/react';
import clsx from 'clsx';
import {
	ComponentPropsWithoutRef,
	createContext,
	Ref,
	TouchEvent,
	useCallback,
	useContext,
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
import cls from './Dialog.module.css';

const StyledOverlay = withClassName(BaseDialog.Backdrop, cls.overlay);

const StyledContent = withClassName(BaseDialog.Popup, cls.content);

function sheetCloseGestureLogic(
	swipeY: number,
	dy: number,
	last: boolean,
	close: () => void,
	content: HTMLElement,
) {
	const contentHeight = content.clientHeight;

	const shouldClose = last && (swipeY === 1 || dy > contentHeight / 2);
	if (shouldClose) {
		close();
	}
	const gestureY = last ? (shouldClose ? -1000 : 0) : -Math.max(0, dy);
	content.style.setProperty('--gesture-y', `${gestureY}px`);
	content.style.setProperty('transition', last ? 'bottom 0.2s' : '');
}

// filter out gestures that are within scrollable descendants
// if those elements are not scrolled to the top already
function filterScrollables(
	target: HTMLElement,
	root: HTMLElement,
	dy: number,
	vy: number,
) {
	// always allow upward swipes
	if (vy < 0) {
		return false;
	}

	let cur: HTMLElement | null = target;
	while (cur) {
		if (cur === root) return false;
		cur = cur.parentElement;
		if (
			cur &&
			cur.scrollHeight > cur.clientHeight &&
			cur.scrollTop !== 0 &&
			vy >= 0
		)
			return true;
	}
	return false;
}

export interface DialogContentProps extends DialogPopupProps {
	width?: 'sm' | 'md' | 'lg';
	disableSheet?: boolean;
	disableDefaultClose?: boolean;
	/** @deprecated */
	outerClassName?: string;
	ref?: Ref<HTMLDivElement>;
	innerClassName?: string;
}

const SWIPE_VELOCITY_THRESHOLD = 1.5;

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
	const openRef = useCallback(
		(element: HTMLDivElement | null) => {
			if (!wasOpenRef.current && element?.hasAttribute('data-open')) {
				wasOpenRef.current = true;

				const matchesSmall =
					!disableSheet &&
					typeof window !== 'undefined' &&
					!window.matchMedia('(min-width:600px)').matches;
				if (!matchesSmall) return;

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
		[particles, disableSheet],
	);

	const { gestureRef, onTouchStart, onTouchMove, onTouchEnd } =
		useDialogInherentSwipe({ disableSheet });
	const finalRef = useMergedRef(ref, openRef, gestureRef);

	const { virtualKeyboardBehavior } = useConfig();

	return (
		<BaseDialog.Portal>
			<StyledOverlay />
			<StyledContent
				data-dialog-content
				ref={finalRef}
				{...props}
				onTouchStart={onTouchStart}
				onTouchMove={onTouchMove}
				onTouchEnd={onTouchEnd}
				onTouchCancel={onTouchEnd}
				data-disable-sheet={disableSheet ? 'true' : undefined}
				data-keyboard-behavior={virtualKeyboardBehavior}
				data-width={width}
				className={clsx(outerClassName || className)}
			>
				{!disableDefaultClose && (
					<DialogDefaultClose showOnMobile={disableSheet} />
				)}
				{!disableSheet && <DialogSwipeHandle />}
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

function useDialogInherentSwipe({ disableSheet }: { disableSheet?: boolean }) {
	const gestureRef = useRef<HTMLDivElement>(null);

	const close = useContext(DialogCloseContext);
	const isSmall = useMediaQuery('(max-width: 640px)');

	const gestureState = useRef({
		sy: 0,
		dy: 0,
		vy: 0,
		active: false,
		timeStamp: 0,
		filtered: false,
	});

	const onTouchStart = useCallback(
		(event: TouchEvent) => {
			if (!isSmall || disableSheet) return;
			const touch = event.touches[0];
			gestureState.current.sy = touch.clientY;
			gestureState.current.timeStamp = event.timeStamp;
		},
		[isSmall, disableSheet],
	);
	const onTouchMove = useCallback(
		(event: TouchEvent) => {
			if (!isSmall || disableSheet) return;

			const touch = event.touches[0];
			const dy = touch.clientY - gestureState.current.sy;
			const vy =
				(dy - gestureState.current.dy) /
				(event.timeStamp -
					(gestureState.current.timeStamp ?? event.timeStamp - 1));

			gestureState.current.dy = dy;
			gestureState.current.vy = vy;

			if (
				gestureState.current.filtered ||
				filterScrollables(
					event.target as HTMLElement,
					gestureRef.current!,
					dy,
					vy,
				)
			) {
				gestureState.current.filtered = true;
				return;
			}
			if (!gestureState.current.active) {
				gestureState.current.active = true;
				gestureState.current.sy = touch.clientY;
			}

			if (gestureRef.current && gestureRef.current.scrollTop < 3) {
				sheetCloseGestureLogic(
					Math.abs(vy) > SWIPE_VELOCITY_THRESHOLD ? Math.sign(vy) : 0,
					dy,
					false,
					close,
					gestureRef.current,
				);
			}

			gestureState.current.timeStamp = event.timeStamp;
		},
		[isSmall, disableSheet, close],
	);
	const onTouchEnd = useCallback(
		(event: TouchEvent) => {
			if (gestureState.current.active && gestureRef.current) {
				const { vy, dy } = gestureState.current;
				sheetCloseGestureLogic(
					Math.abs(vy) > SWIPE_VELOCITY_THRESHOLD ? Math.sign(vy) : 0,
					dy,
					true,
					close,
					gestureRef.current,
				);
			}
			gestureState.current.active = false;
			gestureState.current.filtered = false;
			gestureState.current.timeStamp = event.timeStamp;
			gestureState.current.vy = 0;
			gestureState.current.dy = 0;
			gestureState.current.sy = 0;
		},
		[close],
	);

	return { gestureRef, onTouchStart, onTouchMove, onTouchEnd };
}

export function DialogSwipeHandle({
	ref,
	className,
	...props
}: ComponentPropsWithoutRef<'div'> & {
	ref?: React.Ref<HTMLDivElement>;
}) {
	const close = useContext(DialogCloseContext);
	const innerRef = useRef<HTMLDivElement>(null);
	useDrag(
		({ swipe: [, swipeY], movement: [, dy], last }) => {
			const content = findParentDialogContent(innerRef.current);
			if (!content) return;
			sheetCloseGestureLogic(swipeY, dy, last, close, content);
		},
		{
			target: innerRef,
			axis: 'y',
		},
	);
	const finalRef = useMergedRef(ref, innerRef);
	return (
		<div ref={finalRef} {...props} className={clsx(cls.swipeHandle, className)}>
			<div className={cls.swipeHandleBar} />
		</div>
	);
}

function findParentDialogContent(
	element: HTMLElement | null,
): HTMLElement | null {
	if (!element) return null;
	if (element.getAttribute('data-dialog-content')) return element;
	return findParentDialogContent(element.parentElement);
}

const DialogCloseContext = createContext<() => void>(() => {});

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
const DialogRoot = (props: DialogRootProps) => {
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

	const close = useCallback(() => {
		onOpenChange(false, {
			allowPropagation() {},
			cancel() {},
			isCanceled: false,
			event: null as any,
			isPropagationAllowed: true,
			preventUnmountOnClose() {},
			reason: 'imperative-action',
			trigger: undefined,
		});
	}, [onOpenChange]);

	return (
		<DialogCloseContext.Provider value={close}>
			<BaseDialog.Root {...props} open={open} onOpenChange={onOpenChange} />
		</DialogCloseContext.Provider>
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
