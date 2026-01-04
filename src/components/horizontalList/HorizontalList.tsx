import clsx from 'clsx';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '../button/index.js';
import { CollapsibleSimple } from '../collapsible/Collapsible.js';
import { Icon } from '../icon/index.js';
import { ScrollArea } from '../scrollArea/ScrollArea.js';

export interface HorizontalListProps {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	children: ReactNode;
	className?: string;
	contentClassName?: string;
	onCanOpenChange?: (canOpen: boolean) => void;
	openDirection?: 'up' | 'down';
	disableInternalOpenToggle?: boolean;
}

export function HorizontalList({
	open: externalOpen,
	onOpenChange,
	children,
	className,
	contentClassName,
	onCanOpenChange,
	openDirection = 'down',
	disableInternalOpenToggle,
	...rest
}: HorizontalListProps) {
	const contentRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const rememberedWidth = useRef<number>(0);
	const lastCanOpenChangeEmitted = useRef<boolean | undefined>(undefined);

	const [internalOpen, setInternalOpen] = useState(false);
	const open = externalOpen ?? internalOpen;
	const toggleOpen = useCallback(() => {
		if (externalOpen === undefined) {
			setInternalOpen((prev) => !prev);
		}
		onOpenChange?.(!open);
	}, [externalOpen, onOpenChange, open]);

	const [internalCanOpen, setInternalCanOpen] = useState(false);
	const emitCanOpenChange = useCallback(
		(canOpen: boolean) => {
			if (canOpen !== lastCanOpenChangeEmitted.current) {
				lastCanOpenChangeEmitted.current = canOpen;
				onCanOpenChange?.(canOpen);
				setInternalCanOpen(canOpen);
			}
		},
		[onCanOpenChange],
	);

	useEffect(() => {
		const content = contentRef.current;
		const container = containerRef.current;
		if (!content || !container) {
			return;
		}
		const contentWidth = content.offsetWidth;
		const containerHeight = container.offsetHeight;
		const containerWidth = container.offsetWidth;
		if (open && contentWidth > containerWidth) {
			// measure content width and animate to container width
			rememberedWidth.current = contentWidth;
			content.style.setProperty('width', `${containerWidth}px`);
			content.style.setProperty('flex-wrap', 'wrap');
			// force measure to get the new height
			const contentHeight = content.offsetHeight;
			container
				.animate(
					[
						{ height: `${containerHeight}px` },
						{ height: `${contentHeight}px` },
					],
					{
						easing: 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
						duration: 200,
					},
				)
				.finished.then(() => {
					emitCanOpenChange(true);
				});
		} else {
			content.style.setProperty('width', `auto`);
			content.style.setProperty('flex-wrap', 'nowrap');
			// force measure to get new height
			const contentHeight = content.offsetHeight;
			container
				.animate(
					[
						{
							height: `${containerHeight}px`,
						},
						{
							height: `${contentHeight}px`,
						},
					],
					{
						easing: 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
						duration: 200,
					},
				)
				.finished.then(() => {
					requestAnimationFrame(() => {
						const canOpen = content.offsetWidth > container.offsetWidth;
						emitCanOpenChange(canOpen);
					});
				});
		}
	}, [open, contentRef, containerRef]);

	useEffect(() => {
		if (!containerRef.current || !contentRef.current) {
			return;
		}
		if (open) return;

		const resizeObserver = new ResizeObserver(() => {
			const content = contentRef.current;
			const container = containerRef.current;
			if (!content || !container) {
				return;
			}
			const canOpen = content.offsetWidth > container.offsetWidth;
			emitCanOpenChange(canOpen);
		});
		resizeObserver.observe(containerRef.current);
		resizeObserver.observe(contentRef.current);
		return () => {
			resizeObserver.disconnect();
		};
	}, [contentRef, containerRef, open]);

	const chevronFlip = openDirection === 'down' ? open : !open;

	return (
		<ScrollArea.Root
			className={clsx(
				'flex flex-col',
				'layer-components:max-h-300px',
				className,
			)}
			data-state={open ? 'open' : 'closed'}
			{...rest}
		>
			<ScrollArea.Viewport ref={containerRef}>
				<ScrollArea.Content
					className={clsx(
						'layer-components:(px-3 pt-3 pb-4 gap-2)',
						'flex flex-row items-center gap-2 flex-shrink-0 w-max-content w-auto)',
						contentClassName,
					)}
					ref={contentRef}
				>
					<CollapsibleSimple
						horizontal
						open={internalCanOpen && !disableInternalOpenToggle}
					>
						<Button
							onClick={toggleOpen}
							emphasis="ghost"
							className={clsx(
								'layer-variants:(flex-shrink-0 sticky left-0 top-2 z-1)',
								!open &&
									'layer-variants:(rounded-none h-full border-r border-r-solid border-r-gray)',
							)}
						>
							<Icon
								name="chevron"
								className={clsx(
									'transition-transform',
									chevronFlip && 'rotate-180',
								)}
							/>
						</Button>
					</CollapsibleSimple>
					{children}
				</ScrollArea.Content>
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar />
			<ScrollArea.Scrollbar orientation="horizontal" />
		</ScrollArea.Root>
	);
}
