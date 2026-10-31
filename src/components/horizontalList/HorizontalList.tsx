import clsx from 'clsx';
import {
	ReactNode,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import { useJustMounted } from '../../hooks/useJustMounted.js';
import useMergedRef from '../../hooks/useMergedRef.js';
import { Button } from '../button/index.js';
import { Icon } from '../icon/index.js';
import { ScrollArea } from '../scrollArea/ScrollArea.js';
import cls from './HorizontalList.module.css';

export interface HorizontalListProps {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	children: ReactNode;
	className?: string;
	contentClassName?: string;
	onCanOpenChange?: (canOpen: boolean) => void;
	openDirection?: 'up' | 'down';
	disableInternalOpenToggle?: boolean;
	style?: React.CSSProperties;
	ref?: React.Ref<HTMLDivElement>;
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
	ref: userRef,
	...rest
}: HorizontalListProps) {
	const contentRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const rememberedWidth = useRef<number>(0);
	const lastCanOpenChangeEmitted = useRef<boolean | undefined>(undefined);
	const justMounted = useJustMounted();

	const [internalOpen, setInternalOpen] = useState(false);
	const open = externalOpen ?? internalOpen;
	const toggleOpen = useCallback(() => {
		if (externalOpen === undefined) {
			setInternalOpen((prev) => !prev);
		}
		onOpenChange?.(!open);
	}, [externalOpen, onOpenChange, open]);

	const [internalCanOpen, setInternalCanOpen] = useState(false);
	const applyCanOpen = useCallback(
		(canOpen: boolean) => {
			if (canOpen !== lastCanOpenChangeEmitted.current) {
				lastCanOpenChangeEmitted.current = canOpen;
				setInternalCanOpen(canOpen);
				onCanOpenChange?.(canOpen);
				if (containerRef.current) {
					containerRef.current.dataset.canOpen = canOpen ? 'true' : 'false';
				}
			}
		},
		[onCanOpenChange],
	);

	useLayoutEffect(() => {
		const content = contentRef.current;
		const container = containerRef.current;
		if (!content || !container) {
			return;
		}
		const contentWidth = content.scrollWidth;
		const containerHeight = container.offsetHeight;
		const containerWidth = container.offsetWidth;

		const hasOverflow = contentWidth > containerWidth;

		// open case: open state is set and content overflows container width
		if (open && hasOverflow) {
			// measure content width and animate to container width
			rememberedWidth.current = contentWidth;
			content.style.setProperty('width', `${containerWidth}px`);
			content.style.setProperty('flex-wrap', 'wrap');
			// force measure to get the new height
			const contentHeight = content.offsetHeight;
			if (justMounted.current) {
				applyCanOpen(true);
			} else {
				container
					.animate(
						[
							{ height: `${containerHeight}px` },
							{ height: `${contentHeight}px` },
						],
						{
							easing: 'cubic-bezier(0.64, -0.25, 0.1, 1.4)',
							duration: 300,
						},
					)
					.finished.then(() => {
						applyCanOpen(true);
					});
			}
		} else {
			// force measure to get new height
			content.style.setProperty('width', `max-content`);
			content.style.setProperty('flex-wrap', 'nowrap');
			const contentHeight = content.offsetHeight;
			if (justMounted.current) {
				applyCanOpen(hasOverflow);
			} else {
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
							duration: 300,
						},
					)
					.finished.then(() => {
						requestAnimationFrame(() => {
							// remeasure overflow now that container is closed
							const canOpen = container.scrollWidth > container.offsetWidth;
							applyCanOpen(canOpen);
						});
					});
			}
		}
	}, [open, contentRef, containerRef, justMounted]);

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
			const canOpen = container.scrollWidth > container.offsetWidth;
			applyCanOpen(canOpen);
		});
		resizeObserver.observe(containerRef.current);
		resizeObserver.observe(contentRef.current);
		return () => {
			resizeObserver.disconnect();
		};
	}, [contentRef, containerRef, open]);

	const chevronFlip = openDirection === 'down' ? open : !open;

	const rootRef = useRef<HTMLDivElement>(null);
	const mergedRef = useMergedRef(rootRef, userRef);

	// disable animations while the component is first setting up
	useLayoutEffect(() => {
		setTimeout(() => {
			if (rootRef.current) {
				rootRef.current.dataset.disableAnimation = 'false';
			}
		}, 100);
	}, []);

	return (
		<ScrollArea.Root
			className={clsx(cls.root, className)}
			ref={mergedRef}
			data-state={open ? 'open' : 'closed'}
			data-disable-animation="true"
			data-hl-role="root"
			data-can-open={internalCanOpen}
			data-toggle-hidden={!internalCanOpen || disableInternalOpenToggle}
			{...rest}
		>
			<ScrollArea.Viewport ref={containerRef} data-hl-role="container">
				<div
					className={clsx(cls.content, contentClassName)}
					ref={contentRef}
					data-hl-role="content"
				>
					<div className={cls.toggleButtonWrapper}>
						<Button
							onClick={toggleOpen}
							emphasis="ghost"
							className={clsx(cls.toggleButton)}
							aria-label={open ? 'Collapse list' : 'Expand list'}
							data-disable-animation="true"
							ref={(el) => {
								if (el) {
									el.dataset.disableAnimation = 'false';
								}
							}}
						>
							<Icon
								name="chevron"
								className={clsx(cls.chevronIcon)}
								data-flip={chevronFlip}
							/>
						</Button>
					</div>
					{children}
				</div>
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar />
			<ScrollArea.Scrollbar orientation="horizontal" />
		</ScrollArea.Root>
	);
}
