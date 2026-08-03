import {
	Drawer as BaseDrawer,
	DrawerCloseProps,
	DrawerPopupProps,
	DrawerRootProps,
	DrawerTriggerProps,
} from '@base-ui/react/drawer';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, Ref, useCallback, useRef } from 'react';
import useMergedRef from '../../hooks/useMergedRef.js';
import { withClassName } from '../../hooks/withClassName.js';
import { Box } from '../box/Box.js';
import { Button } from '../button/index.js';
import { Icon } from '../icon/Icon.js';
import { useParticles } from '../particles/ParticleContext.js';
import cls from './Drawer.module.css';

const DrawerBackdrop = withClassName(BaseDrawer.Backdrop, cls.overlay);

const StyledPopup = withClassName(BaseDrawer.Popup, cls.popup);

export interface DrawerContentProps extends DrawerPopupProps {
	disableDefaultClose?: boolean;
	ref?: Ref<HTMLDivElement>;
	innerClassName?: string;
}

const DrawerContent = function DrawerContent({
	ref,
	children,
	className,
	disableDefaultClose,
	innerClassName,
	...props
}: DrawerContentProps) {
	const particles = useParticles();
	const wasOpenRef = useRef(false);

	const openRef = useCallback(
		(element: HTMLDivElement | null) => {
			if (!wasOpenRef.current && element?.hasAttribute('data-open')) {
				wasOpenRef.current = true;

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
		[particles],
	);

	const finalRef = useMergedRef(ref, openRef);

	return (
		<BaseDrawer.VirtualKeyboardProvider>
			<BaseDrawer.Portal>
				<DrawerBackdrop data-role="backdrop" />
				<BaseDrawer.Viewport className={cls.viewport}>
					<StyledPopup ref={finalRef} {...props} className={className}>
						{!disableDefaultClose && <DrawerDefaultClose />}
						<DrawerSwipeHandle />
						<div className={cls.contentScrollArea}>
							<div
								className={clsx(cls.contentScrollAreaContent, innerClassName)}
							>
								{children}
							</div>
						</div>
					</StyledPopup>
				</BaseDrawer.Viewport>
			</BaseDrawer.Portal>
		</BaseDrawer.VirtualKeyboardProvider>
	);
};

function DrawerSwipeHandle({
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

function DrawerDefaultClose({
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
}

const DrawerTitle = withClassName(BaseDrawer.Title, cls.title);
const DrawerDescription = withClassName(
	BaseDrawer.Description,
	cls.description,
);

// TODO: support swipeDirection
export interface DrawerProps extends Omit<DrawerRootProps, 'swipeDirection'> {}
const defaultSnapPoints = [0.75, 1];
const DrawerRoot = ({
	children,
	snapPoints = defaultSnapPoints,
	...props
}: DrawerProps) => {
	return (
		<BaseDrawer.Root swipeDirection="down" snapPoints={snapPoints} {...props}>
			{children}
		</BaseDrawer.Root>
	);
};

const DrawerTrigger = ({ render, ...props }: DrawerTriggerProps) => (
	<BaseDrawer.Trigger render={render || <Button />} {...props} />
);

function DrawerClose({
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
}

const DrawerActions = withClassName(Box, cls.actions);

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
