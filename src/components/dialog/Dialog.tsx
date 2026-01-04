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
import { withProps } from '../../hooks.js';
import { useMediaQuery } from '../../hooks/useMediaQuery.js';
import useMergedRef from '../../hooks/useMergedRef.js';
import { withClassName } from '../../hooks/withClassName.js';
import { GroupScaleReset } from '../../systems/GroupScale.js';
import { Button } from '../button/index.js';
import { Icon } from '../icon/Icon.js';
import { useParticles } from '../particles/index.js';
import { useConfig } from '../provider/Provider.js';
import { ScrollArea } from '../scrollArea/ScrollArea.js';
import { selectTriggerClassName } from '../select/index.js';

const StyledOverlay = withClassName(
	BaseDialog.Backdrop,
	'layer-components:(fixed inset-0 bg-black/15 shadow-inset shadow-[0_30px_60px_0px] shadow-black/20 border-top-1 border-top-solid border-top-gray transition)',
	'layer-components:backdrop-blur-sm',
	'data-[starting-style]:(opacity-0)',
	'data-[ending-style]:(opacity-0)',
);

const StyledContent = withClassName(
	BaseDialog.Popup,
	'layer-components:(fixed shadow-xl bg-white border border-gray border border-gray-dark transition pointer-events-auto overflow-hidden flex flex-col items-stretch)',
	'layer-components:sm:shadow-down',
	'transform-gpu',
	'layer-components:(left-50% top-50% translate-[-50%] w-90vw max-w-450px max-h-85vh rounded-lg border-b-1)',

	'data-[starting-style]:layer-components:(opacity-0 scale-95)',
	'data-[ending-style]:layer-components:(opacity-0 scale-95)',
);
const sheetClassNames = clsx(
	'layer-variants:lt-sm:(translate-0 left-0 right-0 top-auto h-min-content rounded-tl-xl rounded-tr-xl rounded-b-0 border-b-0 pt-lg w-screen max-w-none shadow-up)',
	'layer-variants:lt-sm:pb-[calc(env(safe-area-inset-bottom,0px))]',

	'data-[starting-style]:layer-variants:lt-sm:(opacity-0 translate-y-full)',
	'data-[ending-style]:layer-variants:lt-sm:(opacity-0 translate-y-full)',
);
const sheetClassNameWithOverlayKeyboard = clsx(
	'layer-variants:lt-sm:(bottom-[calc(var(--mock-virtual-keyboard-height,env(keyboard-inset-height,0px))+var(--gesture-y,0px))] max-h-[calc(95vh-var(--mock-virtual-keyboard-height,env(keyboard-inset-height,0px)))])',
);
const sheetClassNameWithDisplaceKeyboard = clsx(
	'layer-variants:lt-sm:(bottom-[calc(var(--viewport-bottom-offset,0px)+var(--gesture-y,0px))] max-h-[calc(0.85*var(--viewport-height,100vh))])',
);

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
			<GroupScaleReset>
				<StyledContent
					data-dialog-content
					ref={finalRef}
					{...props}
					onTouchStart={onTouchStart}
					onTouchMove={onTouchMove}
					onTouchEnd={onTouchEnd}
					onTouchCancel={onTouchEnd}
					className={clsx(
						{
							'layer-variants:md:max-w-800px': width === 'lg',
							'layer-variants:max-w-600px': width === 'md',
							'layer-variants:max-w-300px': width === 'sm',
						},
						!disableSheet && sheetClassNames,
						!disableSheet &&
							virtualKeyboardBehavior === 'overlay' &&
							sheetClassNameWithOverlayKeyboard,
						!disableSheet &&
							virtualKeyboardBehavior === 'displace' &&
							sheetClassNameWithDisplaceKeyboard,
						outerClassName || className,
					)}
				>
					{!disableDefaultClose && <DialogDefaultClose />}
					{!disableSheet && <DialogSwipeHandle />}
					<ScrollArea className="w-full h-full">
						<ScrollArea.Content className="p-md">{children}</ScrollArea.Content>
					</ScrollArea>
				</StyledContent>
			</GroupScaleReset>
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

export const DialogSwipeHandle = function DialogSwipeHandle({
	ref,
	className,
	...props
}: ComponentPropsWithoutRef<'div'> & {
	ref?: React.Ref<HTMLDivElement>;
}) {
	const close = useContext(DialogCloseContext);
	const innerRef = useRef<HTMLDivElement>(null);
	useDrag(
		({ swipe: [, swipeY], movement: [, dy], velocity: [, vy], last }) => {
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
		<div
			ref={finalRef}
			{...props}
			className={clsx(
				'layer-components:(absolute top-0 left-50% transform-gpu -translate-x-1/2 w-20% py-2 rounded-lg cursor-grab sm:hidden touch-none)',
				className,
			)}
		>
			<div className="layer-components:(w-full h-[4px] bg-gray rounded-lg)" />
		</div>
	);
};

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
	...props
}: DialogCloseProps & {
	ref?: React.Ref<HTMLButtonElement>;
}) {
	return (
		<DialogClose
			className={clsx(
				'absolute top-sm right-sm hidden sm:flex z-101',
				className,
			)}
			aria-label="Close dialog"
			ref={ref}
			{...props}
			render={<Button emphasis="ghost" size="small" />}
		>
			<Icon name="x" />
		</DialogClose>
	);
};

const StyledTitle = withClassName(
	BaseDialog.Title,
	'layer-components:(font-title color-black text-3xl mb-4 mt-0)',
);

const StyledDescription = withClassName(
	BaseDialog.Description,
	'layer-components:(mt-3 mb-6 color-gray-dark text-md leading-6)',
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

export const DialogTrigger = withProps(BaseDialog.Trigger, {
	render: <Button />,
});
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

export const DialogActions = withClassName(
	'div',
	'layer-components:(flex justify-end self-end sticky gap-sm items-center flex-wrap z-100 pb-1px mt-md bottom-md rounded-lg bg-white [--global-shadow-spread:1] shadow-md shadow-white shadow-up)',
);

export const DialogSelectTrigger = function DialogSelectTrigger({
	ref,
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

export const DialogSelectList = withClassName(
	BaseRadioGroup,
	'layer-components:(flex flex-col gap-2 overflow-y-auto p-2)',
);

export const DialogSelectItemRoot = withClassName(
	BaseRadio.Root,
	'layer-components:(color-black flex items-center border-1 border-solid border-bg gap-3 w-full py-3 px-4 text-left border-none rounded-lg font-normal bg-gray-light cursor-pointer transition-all)',
	'layer-components:[&[data-state=checked]]:(bg-main-wash color-main-ink border-color)',
);

export const DialogSelectItem = function DialogSelectItem({
	ref,
	children,
	...props
}: ComponentPropsWithoutRef<typeof DialogSelectItemRoot> & {
	ref?: React.Ref<HTMLButtonElement>;
}) {
	return (
		<DialogSelectItemRoot {...props}>
			<span className="flex-1 flex-row items-center gap-md min-h-18px">
				{children}
			</span>
			<BaseRadio.Indicator className="flex-0-0-auto">
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
});
